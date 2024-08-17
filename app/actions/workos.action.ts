'use server'

import { WorkOS } from "@workos-inc/node";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


const workos = new WorkOS(process.env.WORKOS_API_KEY);

export async function createCompany(companyName: string, userId: string) {
    const org = await workos.organizations.createOrganization({
        name: companyName
    })
    const om = await workos.userManagement.createOrganizationMembership({
        organizationId: org.id,
        userId,
        roleSlug: "admin"
    })
    revalidatePath("/new-listing")
    redirect("/new-listing");
}