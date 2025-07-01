
import data from '../csharp.json'; // make sure path is correct

const appdev = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Csharp</h1>

      {data.length === 0 ? (
        <p>No courses found.</p>
      ) : (
        data.map((course, index) => (
          <div key={index} className="mb-6 p-4 border rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-1 text-blue-700">{course.course_name}</h2>
            <p className="mb-1"><strong>Description:</strong> {course.description}</p>
            <p className="mb-1"><strong>Instructor:</strong> {course.instructor}</p>
            <p className="mb-1"><strong>Platform:</strong> {course.platform}</p>
            <p className="mb-1"><strong>Duration:</strong> {course.duration}</p>
            <p className="mb-1">
              <strong>Link:</strong>{' '}
              <a
                href={course.links}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline break-all"
              >
                {course.links}
              </a>
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default appdev;
