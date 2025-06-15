'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <Box borderLeft="4px solid #0d47a1" padding="1rem">
            <Typography variant="h5">Dashboard Area</Typography>
            <nav style={{ marginBottom: '1rem' }}>
                <Link href="/dashboard" color="primary" sx={{ mr: 2 }}>Overview</Link>
                <Link href="/dashboard/settings" color="primary">Settings</Link>
            </nav>
            {children}
        </Box>
    );
}