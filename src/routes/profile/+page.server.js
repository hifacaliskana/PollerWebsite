/** @type {import('./$types').PageLoad} */

import { UserIdFromSessions } from "$lib/server/database";
import { UsernameFromUserInfo } from "$lib/server/database";

export async function load({ cookies }) {
  let user_id = await UserIdFromSessions(cookies.get("sessionId"))
  let user_name = await UsernameFromUserInfo(user_id[0].user_id)
  return {
    login: cookies.get("sessionId"),
    user: user_name[0].username
  };
}
