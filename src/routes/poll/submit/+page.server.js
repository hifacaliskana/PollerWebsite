/** @type {import('./$types').PageLoad} */
import { UserIdFromSessions } from "$lib/server/database";
import { PollNameFromPolls } from "$lib/server/database";
import { PollIdFromPolls } from "$lib/server/database";
import { QuestionNumber } from "$lib/server/database";
import { Questions } from "$lib/server/database";
import { Options } from "$lib/server/database";

export async function load({ cookies }) {
  let user_id = await UserIdFromSessions(cookies.get("sessionId"))
  let name_poll= await PollNameFromPolls(user_id[0].user_id)
  let poll_id = await PollIdFromPolls(user_id[0].user_id, name_poll[name_poll.length-1].name)
  let number_question = await QuestionNumber(poll_id[0].id)
  
  return {
    login: cookies.get("sessionId"),
    poll_name: cookies.get("pollName"),
    question_number: number_question[0].count,
    questions: await Questions(poll_id[0].id),
    options: await Options()
  };
}
