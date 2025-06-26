// app/components/Navbar.tsx
'use client';

import { Typography, AppBar, Toolbar } from '@mui/material';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function Navbar() {

    return (
        <AppBar position="static" color="primary" sx={{mt: 1, borderRadius: '10px'}}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    MyApp
                </Typography>
                <Button color="inherit" LinkComponent={Link} href="/">
                    Home
                </Button>
                <Button
                    color="inherit"
                    LinkComponent={Link}
                    href="/dashboard"
                >
                    Dashboard
                </Button>
            </Toolbar>
        </AppBar>
    );
}