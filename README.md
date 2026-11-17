# Headlines Barber

A single-page Vite + React site for Headlines Barber.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`.

## Replace the editorial photos

The current JPGs in `public/images/` are temporary Unsplash editorial images, not photos of Headlines Barber or its customers. Replace them with business-owned or otherwise rights-cleared photos, keeping the filenames used by `src/data/media.js`, or change those paths there. The image descriptions in that file should also be updated to accurately describe the new images.

## Add local video

Place `.mp4` files in `public/videos/`. To use a video in the hero, update `heroMedia` in `src/data/media.js` to `{ type: 'video', src: '/videos/your-file.mp4', poster: '/images/your-poster.jpg' }`. The hero video is muted, loops, and plays inline. For a gallery video, add an item with `type: 'video'`, an MP4 `src`, a poster, and a descriptive `alt`; gallery videos use native controls and do not autoplay.

## Contact and launch details

- Phone links and the WhatsApp number are centralized in `src/data/business.js`.
- The enquiry form opens a WhatsApp draft; the site does not store or submit form data to a backend.
- Replace the sitemap and Open Graph example domain with the production domain before launch.
- Confirm whether the shopping-centre locations in the announcement are branches or visit locations related to the Royces PNP LHP Centre address.
- Replace sample reviews with approved real customer reviews before publishing. Social names are placeholders only; no accounts or usernames are linked.

## Custom cursor

The scissors cursor is enabled only for fine pointers when reduced motion is not requested. It is decorative (`aria-hidden` and `pointer-events: none`); normal keyboard focus remains visible.
