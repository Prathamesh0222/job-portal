
import { getUser } from "@workos-inc/authkit-nextjs";
import { createCompany } from "../../actions/workos.action";

export default async function NewCompanyPage() {
    async function handleNewCompanyFormSubmit(data: FormData) {
        "use server"
        const { user } = await getUser();
        if (user) {
          await createCompany(data.get("newCompanyName") as string, user.id);
        }
        if(!user){
            "Login to use this page"
          }
      }
    
  return (
    <div className="container">
      <h2 className="text-lg mt-4">Create a new company</h2>
      <p className="text-gray-400 text-sm mb-2">
        To create a job listing you first need to register a company
      </p>
      <form action={handleNewCompanyFormSubmit} className="flex gap-2">
        <input
          name="newCompanyName"
          className="p-2 border border-gray-400 rounded-md"
          type="text"
          placeholder="company name"
        />
        <button
          type="submit"
          className="flex gap-2 items-center bg-white text-black rounded-lg px-4 py-2"
        >
          Create a company
        </button>
      </form>
    </div>
  );
}
