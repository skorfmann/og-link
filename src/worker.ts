import template from "./template";
import { ImageResponse } from "@skorfmann/workers-og";

export interface Env {
}

// see https://en.wikipedia.org/wiki/Base64#URL_applications
function decodeBase64Url(base64Url: string) {
  // Replace URL specific chars
  base64Url = base64Url.replace(/-/g, '+').replace(/_/g, '/');

  // Add padding
  while (base64Url.length % 4) {
    base64Url += '=';
  }

  const binStr = atob(base64Url);
  const binStrLen = binStr.length;
  const bytes = new Uint8Array(binStrLen);

  for (let i = 0; i < binStrLen; i++) {
    bytes[i] = binStr.charCodeAt(i);
  }

  return new TextDecoder().decode(bytes.buffer);
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    // the path looks like /image/<payload>/og.png
    const payload = request.url.split("/")[4];

    if (!payload) {
      return new Response("Missing payload", { status: 400 });
    }

    const decodedBase64 = decodeBase64Url(payload);
    const decoded = JSON.parse(decodedBase64);
    const { title, domain = "www.skorfmann.com" } = decoded;
    return new ImageResponse(template(title, domain), {
      format: "png",
      width: 1200,
      height: 627,
    });
  }
};