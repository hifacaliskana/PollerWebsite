import { redirect } from "@sveltejs/kit";

import { UserIdFromSessions } from "$lib/server/database";
import { UsernameFromUserInfo } from "$lib/server/database";
import { PollOfUsers } from "$lib/server/database";

export async function load({ cookies }) {
  const sessionId = cookies.get("sessionId");
  const userIds = await UserIdFromSessions(sessionId);
  const totalPolls = await PollOfUsers(userIds[0].user_id);
  console.log(totalPolls);
  var userName;
  if (userIds.length != 0) {
    const userNames = await UsernameFromUserInfo(userIds[0].user_id);
    userName = userNames[0].username;
  }

  console.log(`\n❤️  sessionId: ${sessionId}\n`);

  if (sessionId === undefined) {
    throw redirect(302, "/");
  }

  return { sessionId, userName, totalPolls };
}
