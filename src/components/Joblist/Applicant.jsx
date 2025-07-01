import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Download, Mail, Phone, FileText, ChevronLeft } from "lucide-react";
import axios from "axios";

function ApplicantsList() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [applicants, setApplicants] = useState([]);
  const [jobDetails, setJobDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        console.log("Fetching data for jobId:", jobId);
        // Fetch job details and applicants in parallel
        const [jobRes, applicantsRes] = await Promise.all([
          
          axios.get(`http://localhost:5000/api/jobs/${jobId}`),
          axios.get(`http://localhost:5000/api/applications/job/${jobId}`)
        ]);

        setJobDetails(jobRes.data);
        setApplicants(applicantsRes.data);
      } catch (err) {
        setError(err.response?.data?.error || "Failed to fetch data");
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [jobId]);

  const downloadResume = async (applicantId, applicantName) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/applications/resume/${jobId}`,
        { responseType: "blob" }
      );
      
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${applicantName}_resume.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error("Download error:", err);
      setError("Failed to download resume");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-600 hover:text-blue-800 mr-4"
        >
          <ChevronLeft className="w-5 h-5" />
          Back
        </button>
        <h1 className="text-2xl font-bold">
          Applicants for: {jobDetails?.jobTitle || "Job"}
        </h1>
      </div>

      {applicants.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <p className="text-gray-500 text-lg">No applicants yet</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="grid grid-cols-12 bg-gray-100 p-4 font-medium">
            <div className="col-span-4 md:col-span-3">Applicant</div>
            <div className="col-span-4 md:col-span-3">Contact</div>
            <div className="col-span-2 hidden md:block">Applied</div>
            <div className="col-span-4 md:col-span-3">Status</div>
            <div className="col-span-2 md:col-span-1">Actions</div>
          </div>

          {applicants.map((applicant) => (
            <div 
              key={applicant._id} 
              className="grid grid-cols-12 p-4 border-b border-gray-200 hover:bg-gray-50 items-center"
            >
              <div className="col-span-4 md:col-span-3 flex items-center">
                <FileText className="mr-2 text-blue-500" size={16} />
                <span className="truncate">{applicant.name}</span>
              </div>
              
              <div className="col-span-4 md:col-span-3">
                <div className="flex items-center mb-1">
                  <Mail className="mr-2 text-blue-500" size={16} />
                  <a 
                    href={`mailto:${applicant.email}`} 
                    className="text-blue-600 hover:underline truncate"
                  >
                    {applicant.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 text-blue-500" size={16} />
                  <a 
                    href={`tel:${applicant.phone}`} 
                    className="hover:underline"
                  >
                    {applicant.phone}
                  </a>
                </div>
              </div>
              
              <div className="col-span-2 hidden md:block">
                {new Date(applicant.appliedAt).toLocaleDateString()}
              </div>
              
              <div className="col-span-4 md:col-span-3">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  applicant.status === 'hired' ? 'bg-green-100 text-green-800' :
                  applicant.status === 'rejected' ? 'bg-red-100 text-red-800' :
                  applicant.status === 'interviewed' ? 'bg-purple-100 text-purple-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {applicant.status.charAt(0).toUpperCase() + applicant.status.slice(1)}
                </span>
              </div>
              
              <div className="col-span-2 md:col-span-1 flex justify-end">
                <button
                  onClick={() => downloadResume(applicant._id, applicant.name)}
                  className="text-blue-600 hover:text-blue-800 p-1"
                  title="Download Resume"
                >
                  <Download size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ApplicantsList;