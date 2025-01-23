import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const POST = async (req: Request) => {
  try {
    // Parse the multipart form data
    const formData = await req.formData();

    // Extract fields from the form
    const name = formData.get('name') as string;
    const myDescription = formData.get('myDescription') as string;
    const file = formData.get('file') as File;
    console.log(name,myDescription,file,"kkkk")

    if (!name || !myDescription || !file) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields.' },
        { status: 400 }
      );
    }

    // Define the upload directory
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Save the file
    const filePath = path.join(uploadDir, file.name);
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, fileBuffer);

    // Respond to the client
    return NextResponse.json(
      { success: true, message: 'File uploaded successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred during upload.' },
      { status: 500 }
    );
  }
};
