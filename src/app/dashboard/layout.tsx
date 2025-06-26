'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Button, Container, Grid, Stack } from '@mui/material';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <Grid container>
            <Grid size={2}>
                <Typography variant="h5">Dashboard</Typography>
                <Stack component="nav" spacing={1}>
                    <Button color="inherit" variant="contained" LinkComponent={Link} href="/dashboard">
                        Overview
                    </Button>
                    <Button color="inherit" variant="contained" LinkComponent={Link} href="/dashboard/config">
                        Bank Configuration
                    </Button>
                    <Button color="inherit" variant="contained" LinkComponent={Link} href="/dashboard/settings">
                        Settings
                    </Button>
                </Stack>
            </Grid>
            <Grid size={10} component={Container}>
                {children}
            </Grid>
        </Grid>
    );
}