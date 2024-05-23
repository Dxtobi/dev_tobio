// src/routes/api/visits/+server.js
import { json } from '@sveltejs/kit';
import fs from 'fs/promises';
import path from 'path';

const filePath = path.join(process.cwd(), 'visits.json');

export async function GET() {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        const jsonData = JSON.parse(data);
        return json(jsonData);
    } catch (error) {
        console.error('Error reading the JSON file:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}

export async function POST() {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        const jsonData = JSON.parse(data);
        jsonData.visit_count += 1;
        await fs.writeFile(filePath, JSON.stringify(jsonData, null, 4));
        return json(jsonData);
    } catch (error) {
        console.error('Error updating the JSON file:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}
