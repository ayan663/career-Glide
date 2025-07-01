// ResumeAnalyzer.js
import Navbar from "../Navbar/navbar";

const ResumeAnalyzer = () => {
  return (
    <>
    <Navbar/>
    <div style={{ height: '100vh', padding: '1rem' }}>
      <h1 style={{ textAlign: 'center' }}>AI Resume Analyzer</h1>
      <iframe
  src="https://biplab25-resumes.hf.space"
  width="100%"
  height="800px"
  style={{ border: "none" }}
></iframe>

    </div>
    </>
  );
};

export default ResumeAnalyzer;
