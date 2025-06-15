'use client';

import { Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useCallback, useState } from "react";
import { useDropzone } from 'react-dropzone';

export default function DashboardPage() {
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);
    const onDrop = useCallback((files: File[]) => {
        console.log(files);
        for (const file of files) {
            if (file.type == 'text/csv') {
                const reader = new FileReader();
                reader.onload = () => {
                    const text = reader.result as string;
                    const rows = text.split('\n').filter(Boolean);
                    const headers = rows[0].split(',').map(h => h.trim());
                    const json = rows.slice(1).map(row => {
                        const values = row.split(',').map(v => v.trim());
                        return Object.fromEntries(headers.map((h, i) => [h, values[i]]));
                    })

                    console.log('Parsed CSV as JSON:', json);
                    setData(json);
                    setColumns(headers);
                    fetch('/api/transactions', {
                        method: "POST",
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(json)
                    });
                }
                reader.readAsText(file);
            }
        }

    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop
    })

    return (
        <Container>
            <Box border="double" {...getRootProps()} >
                <input {...getInputProps()} />
                <p>test</p>
            </Box>
            {columns?.length > 0 && (
                <TableContainer component={Paper} sx={{ margin: '0 auto', mt: 4 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {columns.map((h, i) => (
                                    <TableCell sx={{ fontWeight: 'bold' }} key={i}>{h}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((datum, i) => (
                                <TableRow key={i}>
                                    {columns.map((h, j) => (
                                        <TableCell key={j}>{datum[h]}</TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </Container>
    );
}