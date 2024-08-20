import { NextRequest, NextResponse } from "next/server";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3"
import uniqid from "uniqid";

export async function POST(req: NextRequest) {
    try {
        const data = await req.formData();
        const file = data.get('file') as File;

        if (!file) {
            return NextResponse.json({ error: 'File not provided' }, { status: 400 });
        }

        const s3Client = new S3Client({
            region: "eu-north-1",
            credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY!,
                secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
            }
        });

        const newFilename = `${uniqid()}-${file.name}`;

        const chunks: Uint8Array[] = [];
        // @ts-ignore
        for await (const chunk of file.stream()) {
            chunks.push(chunk);
        }

        const buffer = Buffer.concat(chunks);

        const bucketName = "prath-job-board";
        await s3Client.send(new PutObjectCommand({
            Bucket: bucketName,
            Key: newFilename,
            ACL: "public-read",
            Body: buffer,
            ContentType: file.type,
        }));

        return NextResponse.json({
            newFilename,
            url: `https://${bucketName}.s3.amazonaws.com/${newFilename}`
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}