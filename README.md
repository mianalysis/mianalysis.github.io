# MIA Documentation

This is the documentation for [MIA](https://github.com/mianalysis/mia/). It is built using [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/).

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Update module documentation

The module documentation is generated from a static export of MIA located at `/src/assets/modules.json`.

To regenerate the export for the latest version of MIA ensure that both **Java** and **Gradle** are installed and run the following command:

```bash
npm run mia-export
```
