/** @type {import('./$types').PageLoad} */

export function load({ cookies }) {
  return {
    login: cookies.get("sessionId"),
  };
}
