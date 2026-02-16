export async function POST(req) {
  try {
    const body = await req.json();

    const data = {
      ...body,
      verifypass: process.env.VERIFYPASS,
      type: "service",
    };

    const backendRes = await fetch(
      `https://devzaidbackend.onrender.com/api/connectus/contactform/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!backendRes.ok) {
      return new Response(
        JSON.stringify({ success: false, message: "Backend error" }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: "Server error" }),
      { status: 500 }
    );
  }
}
