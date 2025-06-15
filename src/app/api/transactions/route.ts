import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongo';

export async function GET() {
    const client = await clientPromise;
    const db = client.db('enigma-budget');
    const data = await db.collection('transactions').find({}).toArray();
    return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    if (!body || !Array.isArray(body)) {
        return NextResponse.json({ error: "Request should contain array of transactions" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("enigma-budget");
    const result = await db.collection("transactions").insertMany(body);

    return NextResponse.json({ success: true, ...result });
}