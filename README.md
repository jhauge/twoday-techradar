# Sanity Tech Radar

A proof-of-concept project that generates data files compatible with [ThoughtWorks Technology Radar](https://radar.thoughtworks.com/). This project uses Sanity CMS to manage technology entries and exports them to CSV format suitable for the radar visualization tool.

## Overview

This project enables teams to:
- Manage technology entries through a Sanity Studio interface
- Track technology status across different quadrants and rings
- Export data in CSV format for ThoughtWorks Radar visualization
- Maintain historical technology adoption data

## Getting Started

```ps
# Install dependencies
npm install

# Start the Sanity Studio development server
npm run dev

# Generate the CSV file
cd .scripts
./create-csv.ps1
```

The generated CSV file will be available at [tech-radar.csv](data/tech-radar.csv).

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