import { redirect } from "@sveltejs/kit";

export const actions = {
  default: async ({ cookies, request }) => {
    // TODO log the user in
    const formData = await request.formData();
    let poll_id = formData.get("pollId");
    cookies.set("poll_id", poll_id);
    throw redirect(302, `/anonymous/${poll_id}/poll`);
  },
};
