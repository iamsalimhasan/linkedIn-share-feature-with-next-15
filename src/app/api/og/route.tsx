import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const imageUrl =
    "https://api.xperthrivr.com/uploads/profile_image_41_1756836591.png";

    console.log(await request.json())
  try {
    const response = await fetch(imageUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch image");
    }

    const imageBuffer = await response.arrayBuffer();
    const contentType = response.headers.get("content-type") || "image/png";

    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    console.error("Error serving image:", error);
    return new NextResponse("Image not found", { status: 404 });
  }
}
