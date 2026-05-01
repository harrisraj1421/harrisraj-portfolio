import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "data", "artworks.json");
const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads", "art");

export async function GET() {
  try {
    const data = await fs.readFile(DATA_PATH, "utf-8");
    const artworks = JSON.parse(data);
    artworks.sort((a: any, b: any) => b.id - a.id);
    return NextResponse.json(artworks);
  } catch (error) {
    return NextResponse.json([], { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const title = formData.get("title") as string;
    const category = formData.get("category") as string;
    const year = formData.get("year") as string;
    const medium = formData.get("medium") as string;
    const description = formData.get("description") as string;
    const tags = JSON.parse(formData.get("tags") as string || "[]");

    let imageUrl = "";

    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const fileName = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
      const filePath = path.join(UPLOAD_DIR, fileName);
      
      await fs.mkdir(UPLOAD_DIR, { recursive: true });
      await fs.writeFile(filePath, buffer);
      imageUrl = `/uploads/art/${fileName}`;
    } else {
      imageUrl = formData.get("imageUrl") as string; // Allow external URLs too
    }

    // Read existing data
    const fileData = await fs.readFile(DATA_PATH, "utf-8");
    const artworks = JSON.parse(fileData);

    const newArtwork = {
      id: Date.now(),
      title,
      category,
      year,
      medium,
      description,
      image: imageUrl,
      width: 1200, // Default width
      height: 1600, // Default height
      tags
    };

    artworks.push(newArtwork);
    await fs.writeFile(DATA_PATH, JSON.stringify(artworks, null, 2));

    return NextResponse.json(newArtwork);
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Failed to upload artwork" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    const fileData = await fs.readFile(DATA_PATH, "utf-8");
    let artworks = JSON.parse(fileData);
    
    // Find artwork to delete its image if it's local
    const artworkToDelete = artworks.find((a: any) => a.id === id);
    if (artworkToDelete && artworkToDelete.image.startsWith("/uploads/art/")) {
      const filePath = path.join(process.cwd(), "public", artworkToDelete.image);
      try {
        await fs.unlink(filePath);
      } catch (e) {
        console.error("Failed to delete image file:", e);
      }
    }

    artworks = artworks.filter((a: any) => a.id !== id);
    await fs.writeFile(DATA_PATH, JSON.stringify(artworks, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete artwork" }, { status: 500 });
  }
}
