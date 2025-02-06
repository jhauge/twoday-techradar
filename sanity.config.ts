import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import 'dotenv/config'

export default defineConfig({
  name: 'default',
  title: 'TechRadar',

  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
