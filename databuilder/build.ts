import {config} from 'dotenv'
import {resolve} from 'path'
import {createClient, type ClientConfig} from '@sanity/client'
import groq from 'groq'
import { writeFileSync } from 'fs'

config({path: resolve(__dirname, '../.env.local')})
const projectId = process.env.SANITY_STUDIO_PROJECT_ID
if (!projectId) { throw new Error('The project ID is required') }

const clientConfig: ClientConfig = {
    projectId,
    dataset: 'production',
    useCdn: false,
    apiVersion: '2025-02-01'
}

async function main() {
    const query = groq`*[_type == 'TechType'] | order(quadrant) { name, quadrant, ring, isNew, status, "description": array::join(['<p><strong><a href="',coalesce(url, '#'),'">',name,'</a></strong> ',description,'</p>'], '')}`
    const client = createClient(clientConfig)
    const data = await client.fetch(query)
    console.log(data)

    writeFileSync(
        resolve(__dirname, '../data/techradar.json'),
        JSON.stringify(data, null, 2)
    )
    console.log('Data written to data/techradar.json')
}

main().catch(console.error) 
