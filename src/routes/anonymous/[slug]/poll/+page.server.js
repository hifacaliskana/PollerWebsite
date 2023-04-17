import { PollName } from "$lib/server/database";
import { QuestionNumber } from "$lib/server/database";
import { Questions } from "$lib/server/database";
import { Options } from "$lib/server/database";

export async function load({ cookies }) {
  const poll_id = cookies.get("poll_id");
  const totalPoll = await PollName(poll_id);
  const pollDetails = totalPoll[0];
  const number_question = await QuestionNumber(poll_id);
  const questions = await Questions(poll_id);
  const options = await Options();

  return { poll_id, pollDetails, number_question, questions, options };
}
