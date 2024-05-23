// src/routes/api/visits/+server.js
import { json } from '@sveltejs/kit';
import { kv } from '@vercel/kv';
const VISIT_COUNT_KEY = 'visit_count';

export async function GET() {
    try {
        let visitCount = await kv.get(VISIT_COUNT_KEY);
        if (visitCount === null) {
            visitCount = 400;
            await kv.set(VISIT_COUNT_KEY, visitCount);
        }
        return json({ visit_count: visitCount });
    } catch (error) {
        console.error('Error reading the visit count from KV storage:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}

export async function POST() {
    try { let visitCount = await kv.get(VISIT_COUNT_KEY);
        if (visitCount === null) {
            visitCount = 0;
        }
        visitCount += 1;
        await kv.set(VISIT_COUNT_KEY, visitCount);
        return json({visit_count:visitCount})
       // return json(jsonData);
    } catch (error) {
        console.error('Error updating the JSON file:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}
