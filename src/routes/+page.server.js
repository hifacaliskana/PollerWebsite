import { CheckUser } from "$lib/server/database";
import { redirect } from "@sveltejs/kit";


export const actions = {
  default: async (event) => {
    // TODO log the user in
    const data = await event.request.formData();
    const user = await CheckUser(data.get("username"), data.get("pswrd"));
    if (user != "") {
      console.log(user);
      throw redirect(303, "/profile");
    }
  },
};
