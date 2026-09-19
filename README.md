# ProcureVanta — Production Angular Website

Angular 22 standalone corporate procurement website for ProcureVanta.

## UI/UX refresh included
- Reworked visual system with a consistent dark-green / lime corporate palette.
- New ProcureVanta SVG logo and favicon.
- Premium sticky navigation with top service strip, active routes and responsive mobile menu.
- Added dedicated About page with company positioning, approach, operating area and CTA.
- Expanded Contact page with enquiry form, email CTA, Hyderabad location, working hours, procurement guidance and address-status note.
- Improved footer with company navigation, contact information and conversion CTA.
- Preserved the current procurement-only service scope: 10 procurement categories.
- Improved page metadata and theme color for a more production-ready launch.

## Important before public launch
The exact registered company/office address and phone number were not supplied, so the website deliberately does **not** invent them. It currently displays:
- Location: Hyderabad, Telangana, India
- Email: hello@procurevanta.in
- Hours: Monday–Saturday, 9:00 AM–6:00 PM IST

Replace the email/location/hours with the final registered business details before launch. The contact form currently opens the visitor's email client; connect it to a backend/RFQ API before relying on it for lead capture.

## Run
```bash
npm install
npm start
```

## Production build
```bash
npm run build:prod
```
