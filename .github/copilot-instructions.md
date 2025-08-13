# Copilot Instructions for Sanity Tech Radar

## Project Overview
- This is a proof-of-concept for generating CSV/JSON data files compatible with [ThoughtWorks Technology Radar](https://radar.thoughtworks.com/).
- Technologies: Sanity CMS (content management), Node.js/TypeScript (data extraction/build), PowerShell (optional CSV generation), and CSV/JSON output for radar visualization.

## Architecture & Data Flow
- **Sanity Studio** (`sanity.config.ts`, `schemaTypes/`): Defines the schema for technology entries (`TechType`) and provides a UI for managing them.
- **Data Extraction** (`databuilder/build.ts`): Fetches data from Sanity using GROQ queries, then outputs to CSV and JSON in `/data`.
- **CSV/JSON Output**: Data is exported in a specific column order for compatibility with ThoughtWorks Radar.
- **Environment Variables**: Project ID is loaded from `.env.local` (see README for setup).

## Key Files & Directories
- `sanity.config.ts`: Sanity Studio configuration, loads projectId from environment.
- `schemaTypes/techType.ts`: Main schema for technology entries; fields include name, ring, quadrant, isNew, status, description, url.
- `databuilder/build.ts`: Main build script. Fetches, transforms, and writes data to `/data/techradar.csv` and `/data/tech-radar.json`.
- `/data`: Output directory for generated files.
- `.env.local`: Must contain `SANITY_STUDIO_PROJECT_ID`.

## Developer Workflow
- **Setup**: Install dependencies (`npm install`). Create `.env.local` with your Sanity project ID.
- **Run Sanity Studio**: `npm run dev` to launch the content management UI.
- **Build Data Files**: `npx tsx databuilder/build.ts` to generate CSV/JSON from Sanity data.
- **PowerShell Alternative**: Optionally, use provided PowerShell scripts for CSV generation if present.
- **CSV for Radar**: Commit and push the generated CSV to GitHub, then use the raw file URL with ThoughtWorks Radar.

## Patterns & Conventions
- **Column Order**: CSV columns are explicitly ordered in the build script (`name, ring, quadrant, isNew, status, description`).
- **GROQ Queries**: Used for flexible data extraction from Sanity.
- **Validation**: All schema fields are validated in `techType.ts`.
- **Error Handling**: Scripts throw if required environment variables are missing.
- **No Tests**: This POC does not include automated tests.

## Integration Points
- **Sanity CMS**: All data is managed via Sanity Studio and fetched using the Sanity client.
- **External Output**: Data files are designed for direct use with [radar.thoughtworks.com](https://radar.thoughtworks.com/).

## Example: Adding a New Field
- Update `schemaTypes/techType.ts` to add the field.
- Update the GROQ query and headers in `databuilder/build.ts` to include the new field in output.

## Troubleshooting
- If data files are empty, check `.env.local` and Sanity project setup.
- If columns are out of order, verify the `headers` array in `build.ts`.

---
For more details, see the README and comments in key files. If anything is unclear or missing, please provide feedback to improve these instructions.
