// import  { useEffect, useState } from 'react';
// import axios from 'axios';

// import Navbar from '../Navbar/navbar';

// const JobList = () => {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/jobs')
//       .then(res => setJobs(res.data))
//       .catch(err => console.error('Error fetching jobs:', err));
//   }, []);

//   return (
//     <>
//     <Navbar/>
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Job Listings</h2>
//       {jobs.length === 0 ? (
//         <p>Loading jobs...</p>
//       ) : (
//         <div className="grid gap-4">
//           {jobs.map((job, index) => (
//             <div key={index} className="p-4 border rounded shadow">
//               <h3 className="text-xl font-semibold">{job.title}</h3>
//               <p className="text-gray-600">{job.company}</p>
//               <div className="flex flex-wrap gap-2 mt-2">
//                 {job.skills.map((skill, i) => (
//                   <span key={i} className="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded">
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//     </>
//   );
// };

// export default JobList;







import axios from 'axios';
import { useState, useEffect } from 'react';

function JobList() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const options = {
      method: 'GET',
      url: 'https://jsearch.p.rapidapi.com/search',
      params: {
        query: 'Frontend Developer',
        num_pages: '1'
      },
      headers: {
        'X-RapidAPI-Key': 'b2714f85f9msh0de11c6a80566ddp15f7e3jsn2c130d72685e',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setJobs(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <h2>Job Listings</h2>
      {jobs.map((job, index) => (
        <div key={index}>
          <h3>{job.job_title}</h3>
          <p>{job.employer_name}</p>
          <p>{job.job_city}, {job.job_country}</p>
          <a href={job.job_apply_link} target="_blank" rel="noreferrer">Apply</a>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default JobList;

