import prisma from "@/lib/client";
import { verifyWebhook } from "@clerk/nextjs/webhooks";

export async function POST(req: Request) {
  try {
    const evt = await verifyWebhook(req as any);

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt.data;
    const eventType = evt.type;

    if (eventType === "user.created") {
      try {
        await prisma.user.create({
          data: {
            id: evt.data.id,
            username: evt.data.username!,
            avatar: evt.data.image_url || "/noAvatar.png",
            cover: "/noCover.png",
          },
        });
        return new Response("User has been created!", { status: 200 });
      } catch (error) {
        console.log("error", error);
        return new Response("Failed to create the user!", { status: 500 });
      }
    }
    if (eventType === "user.updated") {
      try {
        await prisma.user.update({
          where: {
            id: evt.data.id,
          },
          data: {
            username: evt.data.username!,
            avatar: evt.data.image_url || "/noAvatar.png",
          },
        });
        return new Response("User has been updated!", { status: 200 });
      } catch (error) {
        console.log("error", error);
        return new Response("Failed to updated the user!", { status: 500 });
      }
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
