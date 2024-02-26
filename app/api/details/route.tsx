// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "@/lib/mongodb";

async function create(request: Request) {
  const body = await request.json();

  try {
    const client = await clientPromise;
    const db = client.db("Details");

    const existingWallet = await db
      .collection("info")
      .findOne({ wallet: body?.wallet });
    if (existingWallet) {
      return Response.json(
        { message: "Wallet address has already applied📜" },
        { status: 500 }
      );
    }

    await db.collection("info").insertOne(body);
    console.log("Contact details:", body);

    return Response.json(
      { message: "Contact submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error Submitting Contact:", error);

    return Response.json(
      { message: "An error while sumbitting contact📜" },
      { status: 500 }
    );
  }
}

export { create as POST };
