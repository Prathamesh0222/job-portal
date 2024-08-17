import { Checkbox } from "@/components/Checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
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
      <div className="flex gap-4">
      <div>
        Remote?
      <Checkbox labels={["On-site", "Hybrid-remote", "Fully remote"]} />
      </div>
      <div>
        Full time?
        <Checkbox labels={["Project", "Part-time", "Full time"]} />
      </div>
      </div>
      <Textarea placeholder="Job Description" />
    </form>
  );
}
