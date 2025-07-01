// import { useEffect, useState } from "react";

// function JobList() {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/jobs/", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         setJobs(data);
//         setError(null);
//       } catch (err) {
//         console.error("Fetch error:", err);
//         setError(err.message);
//         setJobs([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobs();
//   }, []);

//   if (loading) return <div className="text-center py-10">Loading jobs...</div>;
//   if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-center mb-8">Current Job Openings</h1>
      
//       {jobs.length === 0 ? (
//         <p className="text-center text-gray-500">No jobs available at the moment.</p>
//       ) : (
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {jobs.map((job) => (
//             <div key={job._id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
//               <h2 className="text-xl font-bold text-blue-600">{job.jobTitle}</h2>
//               <h3 className="text-lg font-semibold mt-2">{job.companyName}</h3>
//               <p className="text-gray-600 mt-1">{job.location}</p>
              
//               <div className="mt-4">
//                 <h4 className="font-medium">Requirements:</h4>
//                 <p className="text-sm text-gray-700 mt-1">{job.skills}</p>
//               </div>
              
//               <p className="mt-4 text-gray-700 line-clamp-3">{job.description}</p>
              
//               <div className="mt-4 flex justify-between items-center">
//                 <span className="text-sm font-medium">
//                   {job.salaryCurrency}
//                 </span>
//                 <span className="text-xs text-gray-500">
//                   Posted by: {job.recruiterName}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default JobList;




import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/jobs/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setJobs(data);
        setError(null);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleApply = (jobId) => {
    navigate(`/apply/${jobId}`);
  };

  if (loading) return <div className="text-center py-10">Loading jobs...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
  <h1 className="text-3xl font-bold text-center mb-8">Current Job Openings</h1>
  
  {jobs.length === 0 ? (
    <p className="text-center text-gray-500">No jobs available at the moment.</p>
  ) : (
    <div className="space-y-6"> {/* Changed from grid to vertical space */}
      {jobs.map((job) => (
        <div key={job._id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="space-y-3"> {/* Added vertical spacing container */}
            <h2 className="text-xl font-bold text-blue-600">{job.jobTitle}</h2>
            
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h3 className="text-lg">{job.companyName}</h3>
            </div>
            
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-gray-600">{job.location}</p>
            </div>
            
            <div className="pt-2 border-t border-gray-100">
              <h4 className="font-medium">Requirements:</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-1 pl-2">
                {job.skills.split(',').map((skill, i) => (
                  <li key={i}>{skill.trim()}</li>
                ))}
              </ul>
            </div>
            
            <div className="pt-2 border-t border-gray-100">
              <h4 className="font-medium">Description:</h4>
              <p className="text-gray-700 whitespace-pre-line">{job.description}</p>
            </div>
            
            <div className="pt-2 border-t border-gray-100 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium">{job.salaryCurrency}</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-xs text-gray-500">Posted by: {job.recruiterName}</span>
              </div>
            </div>
            
            <button
              onClick={() => handleApply(job._id)}
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Apply Now</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  )}
</div>
  );
}

export default JobList;