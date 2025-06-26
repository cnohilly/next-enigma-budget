import { Container } from '@mui/material';
import ThemeRegistry from '../theme/ThemeRegistry';
import Navbar from './components/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Container maxWidth="xl">
          <ThemeRegistry>
            <Navbar />
            <main style={{ padding: '1rem' }}>{children}</main>
          </ThemeRegistry>
        </Container>
      </body>
    </html>
  );
}