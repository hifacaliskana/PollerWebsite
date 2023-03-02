import { AddUser } from "$lib/server/database";
import { redirect } from "@sveltejs/kit";

export const actions = {
  default: async (event) => {
    // TODO log the user in
    const data = await event.request.formData();
    const user = await AddUser(
      data.get("username"),
      data.get("email"),
      data.get("pswrd")
    );
    throw redirect(303, "/");
  },
};
