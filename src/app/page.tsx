'use client';

import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function HomePage() {
  const [quote, setQuote] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/quote')
      .then(res => res.json())
      .then(data => setQuote(data.quote))
      .catch(() => setQuote('Failed to load quote.'));
  }, []);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome to the App Router Quote Page
      </Typography>
      <Typography>
        <strong>Quote:</strong> {quote ? `"${quote}"` : 'Loading quote...'}
      </Typography>
    </Box>
  );
}