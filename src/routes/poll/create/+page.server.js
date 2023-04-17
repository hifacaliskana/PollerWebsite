import { redirect } from "@sveltejs/kit";
import { AddPoll } from "$lib/server/database";
import { UserIdFromSessions } from "$lib/server/database";

/** @type {import('./$types').PageLoad} */

export function load({ cookies }) {
  const sessionId = cookies.get("sessionId");

  console.log(`\n❤️  sessionId: ${sessionId}\n`);

  if (sessionId === undefined) {
    throw redirect(302, "/");
  }

  return { sessionId };
}

export const actions = {
  default: async ({ cookies, request }) => {
    const formData = await request.formData();
    let title = formData.get("title");
    let session = formData.get("session");
    const user_id = await UserIdFromSessions(session);

    // Add poll name
    await AddPoll(user_id[0].user_id, title);
    cookies.set("pollName", title);

    throw redirect(303, `/poll/create/form`);
  },
};
