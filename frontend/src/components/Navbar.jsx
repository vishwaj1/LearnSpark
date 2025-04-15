'use client';

import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow">
      <Link href="/" className="text-xl font-bold text-blue-400">
        LearnSpark
      </Link>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        {user ? (
          <>
            <Link href="/profile">Profile</Link>
            <button
              onClick={logout}
              className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <Link href="/login" className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
