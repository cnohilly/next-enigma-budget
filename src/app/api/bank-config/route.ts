import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongo';
import { BankConfigSchema } from '@/types/BankConfig';

export async function GET() {
    const client = await clientPromise;
    const db = client.db('enigma-budget');
    const data = await db.collection('bank-configs').find({}).toArray();
    return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
    const parseResult = BankConfigSchema.safeParse(await req.json());
    if (!parseResult.success) {
        return NextResponse.json({ error: 'Invalid data', parseError: parseResult?.error?.format() }, { status: 400 });
    }

    const config = parseResult.data;
    const client = await clientPromise;
    const db = client.db('enigma-budget');
    const result = await db.collection('bank-configs').insertOne(config);

    return NextResponse.json({ success: true, ...result })
}