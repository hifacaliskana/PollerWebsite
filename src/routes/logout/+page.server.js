import { redirect } from "@sveltejs/kit";

export async function load({ cookies }) {
  await cookies.delete("sessionId");
  throw redirect(302, "/");
}
