"use client";
import {
  faEnvelope,
  faFileImport,
  faPhone,
  faUser,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CustomInput } from "./CustomInput";
import { useRef } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const ProfileImage = () => {
  const fileRef1 = useRef<HTMLInputElement>(null);
  const fileRef2 = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target;
    if (file && file.files?.length && file.files.length > 0) {
      const input = file.files[0];
      const data = new FormData();
      data.set("file", input);
      const response = await axios.post("/api/upload", data);
      console.log(response.data);
    }
  };

  return (
    <>
      <div className="flex">
        <div className="w-1/3">
          <h3 className="mb-2">Job Icon</h3>
          <div className="inline-flex h-[120px] w-[108px] bg-[#9bb9e131] rounded-lg justify-center items-center">
            <FontAwesomeIcon icon={faFileImport} className="size-12 mr-2" />
          </div>
          <div>
            <Button
              onClick={() =>fileRef1.current?.click()}
              variant={"outline"}
              className="mt-2 px-[39px] sr-only"
            >
              Icon
            </Button>
            <Input
              onChange={handleFileUpload}
              ref={fileRef1}
              type="file"
              className="mt-2 w-[109px] cursor-pointer"
            />
          </div>
        </div>
        <div className="grow">
          <h3 className="mb-2">Contact Info</h3>
          <div className="flex">
            <div>
              <div className="inline-flex size-28 h-[120px] w-[170%] bg-[#9bb9e131] rounded-lg justify-center items-center">
                <FontAwesomeIcon icon={faUser} className="size-12" />
              </div>
              <div>
                <Input ref={fileRef2} type="file" style={{ display: "none" }} />
                <Button
                  onClick={() => fileRef2.current?.click()}
                  variant={"outline"}
                  className="mt-2 w-[170%]"
                >
                  Icon
                </Button>
              </div>
            </div>
            <div className="grow">
              <div className="ml-16 flex flex-col gap-1">
                <CustomInput icon={faUser} label="Name" />
                <CustomInput icon={faPhone} label="Phone" />
                <CustomInput icon={faEnvelope} label="Email" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
