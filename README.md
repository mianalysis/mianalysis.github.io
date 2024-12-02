# MIA Documentation

This is the documentation for [MIA](https://github.com/mianalysis/mia/). It is built using [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) with your browser.

## Update module documentation

The module documentation is generated from a static export of MIA located at `/src/assets/modules.json`.

To regenerate the export for the latest version of MIA ensure that both **Java** and **Maven** are installed and run the following command:

```bash
npm run mia-export
```

## Formatting

This project uses [Prettier](https://prettier.io/) for code formatting. To format the code run:

```bash
npm run format
```
