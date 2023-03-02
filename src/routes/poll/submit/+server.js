import { json } from "@sveltejs/kit";

export async function POST({ request }) {
  const data = await request.json();
  const question = data.question;
  const description = data.description;
  const optionList = data.optionList;
  return json(question);
}
