import connectDb from "@/database/db";

export const POST = async (req) => {
  const db = await connectDb();

  try {
    const data = await req.json();
    const title = data.title;
    const desc = data.desc;
    const email = data.email;
    const img = data.img;

    // Attempt to insert data into the database
    const response = await db.query(
      `INSERT INTO blogdet (title, details, img, email) VALUES ('${title}', '${desc}', '${img}', '${email}');`
    );

    console.log("Database response:", response);

    // Return success response
    return new Response(
      JSON.stringify({ message: "Blog created successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Database error:", error);

    // Check if the error is related to foreign key constraint
    if (error.code === "ER_NO_REFERENCED_ROW_2") {
      return Response.json(
        {
          error:
            "Cannot add or update a child row: a foreign key constraint fails",
          details: error.sqlMessage,
        },
        { status: 400 }
      );
    }

    // Return generic error message for other errors
    return new Response(
      JSON.stringify({
        error: "An error occurred while creating the blog",
        details: error.message,
      }),
      { status: 500 }
    );
  }
};
