export async function POST(request: Request) {
  const body = await request.json();

  const { type, data } = body;

  if (type === "video.asset.ready") {
    console.log(data);
  } else {
    console.log("some other data");
    console.log(data);
  }

  return Response.json({ message: "ok" });
}
