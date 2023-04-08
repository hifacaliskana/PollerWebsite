import { CheckUser } from "$lib/server/database";
import { UserId } from "$lib/server/database";
import { CreateSession } from "$lib/server/database";
import { redirect } from "@sveltejs/kit";
import {v4 as uuidv4} from 'uuid';

export const actions = {
  default: async ({cookies, request}) => {
    // TODO log the user in
    const formData = await request.formData();
    let username = formData.get("username");
    let password = formData.get("pswrd");

    const user = await CheckUser(username, password);

    if (user != "") {
      
      const user_id = await UserId(username, password)
      // sessionId oluşturur.
      let myuuid = uuidv4();
      cookies.set("sessionId", myuuid)

      CreateSession(myuuid, user_id[0].id)
      throw redirect(302, "/profile");
    }

    else {
      throw redirect(302, "/poll/create");
    }
  },
};
