import CourseCard from '../../components/CourseCard';

const mockCourses = [
  {
    id: '1',
    title: 'Intro to Python',
    description: 'Learn the basics of Python programming from scratch.',
  },
  {
    id: '2',
    title: 'Frontend Web Development',
    description: 'HTML, CSS, JavaScript, and React – all in one course.',
  },
  {
    id: '3',
    title: 'AI for Beginners',
    description: 'Discover how AI works and build your first ML model.',
  },
];

export default function CoursesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center">Available Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
