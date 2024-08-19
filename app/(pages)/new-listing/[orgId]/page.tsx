import { Checkbox } from "@/components/Checkbox";
import { CustomInput } from "@/components/CustomInput";
import { Location } from "@/components/Location";
import { ProfileImage } from "@/components/ProfileImage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { faEnvelope, faFileImport, faPhone, faUser, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getUser } from "@workos-inc/authkit-nextjs";
import { WorkOS } from "@workos-inc/node";

type PageProps = {
  params: {
    orgId: string;
  };
};

export default async function NewListingForOrgPage(props: PageProps) {
  const { user } = await getUser();
  const workos = new WorkOS(process.env.WORKOS_API_KEY);
  if (!user) return "Login to use this page";

  const orgId = props.params.orgId;
  const oms = await workos.userManagement.listOrganizationMemberships({
    userId: user.id,
    organizationId: orgId,
  });
  const hasAccess = oms.data.length > 0;
  if (!hasAccess) {
    return "no access";
  }

  return (
    <form action="" className="container mt-6 flex flex-col gap-4">
      <Input placeholder="Job Title" />      
      <div className="grid grid-cols-3 gap-6 *:grow">
        <div>
          <span className="flex flex-col pb-2">Remote?</span>
          <Checkbox labels={["On-site", "Hybrid-remote", "Fully remote"]} />
        </div>
        <div>
          <span className="flex flex-col pb-2">Full time?</span>
          <Checkbox labels={["Project", "Part-time", "Full time"]} />
        </div>
        <div className="flex flex-col">
          <span className="pb-2">Salary range</span>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
              $
            </span>
            <Input className="pl-8" placeholder="Salary" />
          </div>
        </div>
      </div>
      <div>
        <span className="flex flex-col mb-2">Location</span>
        <div className="w-full">
        <Location />
        </div>
        <div className="mt-4">
        <ProfileImage/>
        </div>
      </div>
      <Textarea placeholder="Job Description" />
    </form>
  );
}
