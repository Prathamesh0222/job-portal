import { getUser } from "@workos-inc/authkit-nextjs";
import { WorkOS } from "@workos-inc/node";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default async function NewListingPage() {
  const { user } = await getUser();
  const workos = new WorkOS(process.env.WORKOS_API_KEY);

  let organizationMemberships = null;

  if (user && user.id) {
    organizationMemberships =
      await workos.userManagement.listOrganizationMemberships({
        userId: user.id,
      });
  }

  const activeOrganizationMemberships = organizationMemberships?.data.filter(
    (om) => om.status === "active"
  );
  const organizationNames: { [key: string]: string } = {};
  for (const activeMembership of activeOrganizationMemberships || []) {
    const organization = await workos.organizations.getOrganization(
      activeMembership.organizationId
    );
    organizationNames[organization.id] = organization.name;
  }

  return (
    <div className="container">
      {!user ? (
        <div>
          You need to be logged in to post a job
        </div>
      ) : (
        <div>
          <h2 className="text-lg mt-6">Your companies</h2>
          <p className="text-gray-400 text-sm mb-2">
            Select a company to create a job add for
          </p>
          <div className="border inline-block rounded-md">
          {Object.keys(organizationNames).map((orgId) => (
            <Link href={"/new-listing/" + orgId}
            className={"py-2 px-4 flex items-center gap-2 border-b"
              + (Object.keys(organizationNames)[0] === orgId ? '': 'border-t')
            }
            >
              {organizationNames[orgId]}
              <FontAwesomeIcon className="h-4 pl-2" icon={faArrowRight} />
            </Link>
          ))}
          </div>
          {organizationMemberships?.data.length === 0 && (
            <div className="border border-slate-600 bg-neutral-900 p-4 rounded-md">
              No companies found assigned to your user
            </div>
          )}
          <div>
            <Link
              href={"/new-company"}
              className="bg-slate-800 hover:bg-slate-900 items-center text-white py-2 px-4 rounded-lg inline-flex mt-5"
            >
              Create a new company
              <FontAwesomeIcon className="h-4 pl-2" icon={faArrowRight} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
