export async function generateStaticParams() {
    // Example static params for prerendering; dynamic API calls can replace this
    return [{ id: '1' }, { id: '2' }, { id: '3' }];
  }
  
  const mockCourseDetails = {
    '1': {
      title: 'Intro to Python',
      content: 'This course covers variables, loops, functions, and more.',
    },
    '2': {
      title: 'Frontend Web Development',
      content: 'You’ll build modern UIs with HTML, CSS, and React.',
    },
    '3': {
      title: 'AI for Beginners',
      content: 'Get introduced to machine learning, data, and models.',
    },
  };
  
  export default function CourseDetail({ params }) {
    const course = mockCourseDetails[params.id];
  
    if (!course) {
      return <div className="text-center text-red-500">Course not found.</div>;
    }
  
    return (
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
        <p className="text-gray-700 leading-relaxed">{course.content}</p>
      </div>
    );
  }
  