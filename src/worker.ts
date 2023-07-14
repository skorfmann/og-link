import template from "./template";
import { ImageResponse } from "@skorfmann/workers-og";
export interface Env {
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    // the path looks like /image/<payload>/og.png
    const payload = request.url.split("/")[4];

    if (!payload) {
      return new Response("Missing payload", { status: 400 });
    }

    const decodedBase64 = decodeURIComponent(payload);

    // base64 decode payload
    const decoded = JSON.parse(atob(decodedBase64));
    const { title } = decoded;
    return new ImageResponse(template(title), {
      format: "png",
      width: 1200,
      height: 627,
    });
  }
};