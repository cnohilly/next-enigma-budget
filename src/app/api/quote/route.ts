export async function GET() {
    const quotes = [
        'Code is like humor. When you have to explain it, it’s bad.',
        'First, solve the problem. Then, write the code.',
        'Experience is the name everyone gives to their mistakes.',
    ];

    const random = quotes[Math.floor(Math.random() * quotes.length)];
    return Response.json({ quote: random });
}