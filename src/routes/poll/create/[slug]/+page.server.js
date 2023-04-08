import { redirect } from "@sveltejs/kit";
import { AddQuestion } from "$lib/server/database";
import { UserIdFromSessions } from "$lib/server/database";
import { PollIdFromPolls } from "$lib/server/database";

/** @type {import('./$types').PageLoad} */
export function load({ params, cookies }) {
  return {
    title: params.slug,
    login: cookies.get("sessionId"),
    pollName: cookies.get("pollName"),
  };
}

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    let question = formData.get("question");
    let session = formData.get("session");
    let pollName = formData.get("pollName");
    let options = JSON.parse(formData.get("options"));
    console.log("---------------");

    for (let i = 0; i < options.length; i++) {
      console.log(options[i].text);
    }

    console.log("---------------");

    const user_id = await UserIdFromSessions(session);
    const poll_id = await PollIdFromPolls(user_id[0].user_id, pollName);
    AddQuestion(question, poll_id[0].id);
  },
};
