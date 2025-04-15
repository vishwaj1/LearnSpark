import Link from 'next/link';

export default function CourseCard({ course }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{course.title}</h2>
      <p className="text-gray-600 text-sm mt-2 line-clamp-2">{course.description}</p>
      <Link href={`/courses/${course.id}`}>
        <span className="text-blue-600 mt-4 inline-block hover:underline">View Course →</span>
      </Link>
    </div>
  );
}
