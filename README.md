# Sanity Tech Radar

A proof-of-concept project that generates data files compatible with [ThoughtWorks Technology Radar](https://radar.thoughtworks.com/). This project uses Sanity CMS to manage technology entries and exports them to CSV format suitable for the radar visualization tool.

## Overview

This project enables teams to:
- Manage technology entries through a Sanity Studio interface
- Track technology status across different quadrants and rings
- Export data in CSV format for ThoughtWorks Radar visualization
- Maintain historical technology adoption data

## Prerequisites

1. Create a [Sanity account](https://www.sanity.io/login/sign-up)
2. Create a new Sanity project:
   - Go to [sanity.io/manage](https://www.sanity.io/manage)
   - Click the "New" button in the top and select "Project"
   - Finish project setup wizard
   - Note down your project ID

3. Create `.env.local` in the project root with the following content
```bash
SANITY_STUDIO_PROJECT_ID=your-project-id-here
```

## Run the setup locally

```bash
# Install dependencies
npm install

# Start the Sanity Studio development server
npm run dev
```

Now open Sanity Studio on your local server, and add your first Tech Type for the radar by clicking "Create -> Tech Type" in the top of the interface. Fill in the form with tech-type data, and repeat as needed.

To present the data you need to create the csv-data file for the ThoughtWorks radar:

```bash
# Powershell command at the root of the project
npm run csvgeneration
```

This will create or overwrite the csv file in the data directory - you can display your radar by commiting the file to your github repo push the project to a public repo, and then append the url for the raw csv to this url:

`https://radar.thoughtworks.com/?documentId=<your-datafile-url-here>`

## Creating 

## Project Structure

- /.scripts - Contains PowerShell scripts for CSV generation
- /schemaTypes - Sanity schema definitions
- /data - Output directory for the generated CSV file

## Documentation

- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity Studio Guide](https://www.sanity.io/docs/sanity-studio)
- [ThoughtWorks Tech Radar](https://radar.thoughtworks.com)

## About

This is a proof-of-concept project that demonstrates how to create and manage technology radar data through a content management system. The project generates a CSV file that can be directly used with ThoughtWorks' Technology Radar visualization tool found at radar.thoughtworks.com.