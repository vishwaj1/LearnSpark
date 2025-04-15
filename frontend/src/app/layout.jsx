import '../styles/globals.css';
import { AuthProvider } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'LearnSpark',
  description: 'Realtime learning with AI quizzes',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <AuthProvider>
          <Navbar />
          <main className="flex-grow p-4">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
