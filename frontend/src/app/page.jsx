// app/page.jsx
import Link from 'next/link';
import Header from '../components/Header';

export default function HomePage() {
  return (
    <div>
      <Header title="Welcome to LearnSpark 🚀" />
      <p className="mt-6 text-lg text-center">Start your learning journey with interactive courses and AI-powered quizzes.</p>

      <div className="flex justify-center mt-8">
        <Link href="/courses">
          <span className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
            Browse Courses
          </span>
        </Link>
      </div>
    </div>
  );
}
