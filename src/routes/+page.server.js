import { CheckUser } from "$lib/server/database";
import { UserId } from "$lib/server/database";
import { CreateSession } from "$lib/server/database";
import { redirect } from "@sveltejs/kit";
import {v4 as uuidv4} from 'uuid';

export let _username = "";
export let _password = "";

export const actions = {
  default: async ({cookies, request}) => {
    // TODO log the user in
    const formData = await request.formData();
    _username = formData.get("username");
    _password = formData.get("pswrd");

    const user = await CheckUser(_username, _password);

    if (user != "") {
      const user_id = await UserId(_username, _password)
      
      // sessionId oluşturur.
      let myuuid = uuidv4();
      cookies.set("access", myuuid)

      CreateSession(myuuid, user_id[0].id)
      throw redirect(302, "/profile");
    }

    else {
      throw redirect(302, "/poll/create");
    }
  },
};
