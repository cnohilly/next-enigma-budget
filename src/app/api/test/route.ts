import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongo';

export async function GET() {
    const client = await clientPromise;
    const db = client.db('enigma-budget');
    const data = await db.collection('test').find({}).toArray();
    return NextResponse.json(data);
}