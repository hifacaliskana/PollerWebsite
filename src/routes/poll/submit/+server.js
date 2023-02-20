
  export async function POST(req) {
    const data = await req.request.json();
    return new Response(JSON.stringify(data));
  }

