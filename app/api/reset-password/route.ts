// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "@/lib/mongodb";

async function updatePassword(request: Request) {
  const body = await request.json();
  console.log("body", body);

  try {
    const client = await clientPromise;
    const db = client.db("Stake");

    // Check if the email exists in the database
    const existingUser = await db.collection("Users").findOne({ email: body.email });
    if (!existingUser) {
      return Response.json({ message: "User not found" }, { status: 404 });
    }

   

    // Update the user's password in the database
    await db.collection("Users").updateOne(
      { email: body.email },
      { $set: { password: body.password } }
    );

    return Response.json({ message: "Password updated successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error updating password:", error);
    return Response.json({ message: "An error occurred while updating password" }, { status: 500 });
  }
}

export { updatePassword as POST };
