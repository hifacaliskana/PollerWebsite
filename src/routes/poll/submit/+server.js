import { json } from "@sveltejs/kit";
import { AddPoll } from "$lib/server/database";
import { _username } from "../../+page.server";
import { _password } from "../../+page.server";
import { UserId } from "$lib/server/database";


export async function POST({ request }) {
  const data = await request.json();
  const pollName = data.pollName;
  const question = data.question;
  const description = data.description;
  const optionList = data.optionList;

  console.log(_username);
  console.log(_password);

  const user_id = await UserId(_username, _password);
  console.log(user_id[0].id);

  AddPoll(user_id[0].id, pollName);
  return json(pollName);
}
