import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

interface CloudinaryResponse {
  public_id: string;
  bytes: number;
  duration?: number;
  [key: string]: any;
}
export default async function POST(request: NextRequest) {
  const session = await auth();

  if (!session) {
    return NextResponse.json(
      { message: "User is not logged In" },
      { status: 500 }
    );
  }

  try {
    const formData: FormData = await request.formData();
    const file = formData.get("file") as File | null;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    if (!file) {
      return NextResponse.json({ message: "File not found" }, { status: 400 });
    }
    const byte = await file?.arrayBuffer();
    const buffer = Buffer.from(byte);

    const result = new Promise<CloudinaryResponse>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          upload_preset: "ecoursie",
          folder: "courses",
        },
        (err, res) => {
          if (err) {
            reject(err);
          } else {
          }
        }
      );
    });
  } catch {}
}
