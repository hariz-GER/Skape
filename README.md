# Skape Architecture (Next.js)

Next.js app router build of the Skape Architecture portfolio. Commands:

- `npm install`
- `npm run dev` to develop at http://localhost:3000
- `npm run build && npm start` for production run
- `npm run lint` for linting

## Inquiry CSV Storage

Contact form submissions are saved server-side to an Excel-compatible CSV file.

Generated file:

- `submissions/contact-inquiries.csv`

Columns:

- `timestamp`
- `full_name`
- `email`
- `project_brief`
