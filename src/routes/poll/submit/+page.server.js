/** @type {import('./$types').PageLoad} */
import { UserIdFromSessions } from "$lib/server/database";
import { PollNameFromPolls } from "$lib/server/database";

export async function load({ cookies }) {
  console.log("-------------");
  let user_id = await UserIdFromSessions(cookies.get("sessionId"))
  let poll_name= await PollNameFromPolls(user_id[0].user_id)
  return {
    login: cookies.get("sessionId"),
    poll: poll_name[0].name
  };
}
