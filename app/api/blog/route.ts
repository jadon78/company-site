import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { Blog } from "@/lib/models/auth.model";
import connectDB from "@/lib/db";

export const POST = async (req: Request) => {
  try {
    // Parse the multipart form data
    const formData = await req.formData();

    // Extract fields from the form
    const title = formData.get("title") as string;
    const blogDescription = formData.get("blogDescription") as string;
    const file = formData.get("file") as File;
    console.log(title, blogDescription, file, "kkkk");

    if (!title || !blogDescription || !file) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    // Define the upload directory
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Save the file
    const filePath = path.join(uploadDir, file.name);
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, fileBuffer);

    const newBlogPost = new Blog({
      title,
      blogDescription,
      file: `/uploads/${file.name}`, // Save the relative file path
    });
    await newBlogPost.save();

    // Respond to the client
    return NextResponse.json(
      { success: true, message: "File uploaded successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred during upload." },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    await connectDB()
    const blogs = await Blog.find();

    if (!blogs || blogs.length === 0) {
      return NextResponse.json(
        { success: false, message: "No blogs found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, blogs }, { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred while fetching blogs." },
      { status: 500 }
    );
  }
};
