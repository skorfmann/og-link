# Open Graph Link

Generate Open Graph images with [satori](https://github.com/vercel/satori) and a custom fork of [workers-og](https://github.com/kvnang/workers-og/tree/main/packages/workers-og) (mainly to update dependencies).

`workers-og` is using [resvg](https://github.com/yisibl/resvg-js) to turn the `svg` generated by satori into a `png`.

## Usage

The worker expects a [base64url](https://en.wikipedia.org/wiki/Base64#URL_applications) JSON payload:

```
{
  "title": "Hello World"
}
```

which then can be assembled in the following url path

`https://<your-worker-host>/image/<payload>/og.png`

Please note, that LinkedIn doesn't accept subdomains on the `workers.dev` domain from Clouflare when scraping for open graph images. Took me a while to figure this out.

## Deploy

```
npm install
wrangler deploy
```

## Template

The [src/template.tsx](./src/template.tsx) file was entirely generated with OpenAI's GPT-4.

### Example

```
{
  "title": "Kickoff Meetup @ Machine Minds Lisbon"
}
```

turns into this url

```
https://<your-domain>/image/eyJ0aXRsZSI6IktpY2tvZmYgTWVldHVwIEAgTWFjaGluZSBNaW5kcyBMaXNib24gIn0%3D/og.png
```

and results in this image (takes ~2 seconds to render)

![open-graph](./og.png)

## Todo

- [ ] Caching of generated images would be nice
- [ ] Some authenticity check for the payload
- [ ] Dynamic templates or template elements