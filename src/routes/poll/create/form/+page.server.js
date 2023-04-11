import { AddQuestion } from "$lib/server/database";
import { UserIdFromSessions } from "$lib/server/database";
import { PollIdFromPolls } from "$lib/server/database";
import { QuestionIdFromQuestions } from "$lib/server/database";
import { AddOptions } from "$lib/server/database";
import { AddDescription } from "$lib/server/database";

/** @type {import('./$types').PageLoad} */
export async function load({ params, cookies }) {
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
    let description = formData.get("description");

    console.log(options)

    const user_id = await UserIdFromSessions(session);
    const poll_id = await PollIdFromPolls(user_id[0].user_id, pollName);
    await AddQuestion(question, poll_id[0].id);

    let question_id = await QuestionIdFromQuestions(question, poll_id[0].id);
    await AddDescription(description, question_id[0].id);
    
    for (let i = 0; i < options.length; i++) {
      console.log(options[i].text);
      console.log(question_id[0].id)
      await AddOptions(options[i].text, question_id[0].id)
    }
  },
};



