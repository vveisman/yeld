// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "@/lib/mongodb";

async function create(request: Request) {
  const body = await request.json();
  console.log("body", body);

  try {
    const client = await clientPromise;
    const db = client.db("Stake");

    const existingUser = await db
      .collection("Users")
      .findOne({ name: body?.name, password: body?.password });
    if (existingUser) {
      return Response.json(
        { message: "Login Successfull!!📜" },
        { status: 200 }
      );
    } else {
      return Response.json({ message: "User does not exist" }, { status: 400 });
    }
  } catch (error) {
    console.error("Error Logging in:", error);

    return Response.json(
      { message: "An error while Logging in📜" },
      { status: 500 }
    );
  }
}

export { create as POST };
