import {
  faEnvelope,
  faFileImport,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./ui/button";
import { CustomInput } from "./CustomInput";

export const ProfileImage = () => {
  return (
    <div className="flex">
      <div className="w-1/3">
        <h3 className="mb-2">Job Icon</h3>
        <div className="inline-flex h-[120px] w-[103px] bg-[#9bb9e131] rounded-lg justify-center items-center">
          <FontAwesomeIcon icon={faFileImport} className="size-12 mr-2" />
        </div>
        <div>
          <Button
            variant={"secondary"}
            className="bg-slate-800 hover:bg-slate-900 mt-2"
          >
            Icon
          </Button>
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
              <Button
                variant={"secondary"}
                className="bg-slate-800 hover:bg-slate-900 mt-2"
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
  );
};
