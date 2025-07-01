// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';


// import { useUser } from '@clerk/clerk-react';

// import Home from './components/Home/home'
// import Resumebuilder from './components/Resumebuilder/Resumebuilder';
// import Sign from './components/Signin/Sign'
// import JobList from './Joblist.jsx';
// import Dashboard from './components/Dashboard/Dashrecruiter'
// import Dashjobseeker from './components/Dashboard/Dashjobseeker'
// // import Login from "./components/Signin/Login"
// import  Parser from "./components/parser/parser"
// import JobInsightsDashboard from "./components/JobInsightsDashboard/JobInsightsDashboard"
// import Courses from "./components/Courses/Courses"
// import Meet from "./components/Meet"
// import ResumeAnalyzer from './Resumeanalyser';
// import Udemy from './components/Udemy/Udemy';
// import SQLPage from './components/Udemy/Pages/sql.jsx';
// import APPDEV  from './components/Udemy/Pages/appdev.jsx';
// import ARTI from './components/Udemy/Pages/artificial.jsx';
// import Backend from './components/Udemy/Pages/Backend.jsx';

// import JavaPage from './components/Udemy/Pages/Java.jsx';
// import PythonPage from './components/Udemy/Pages/Python.jsx';
// import JavascriptPage from './components/Udemy/Pages/Javascript.jsx';
// import CppPage from './components/Udemy/Pages/Cpp.jsx';
// import GoPage from './components/Udemy/Pages/Go.jsx';
// import SpringPage from './components/Udemy/Pages/Spring.jsx';
// import ProductPage from './components/Udemy/Pages/Product.jsx';
// import AA from './components/Udemy/Pages/QA.jsx';
// import CsharpPage from './components/Udemy/Pages/Csharp.jsx';
// import FrontendPage from './components/Udemy/Pages/Frontend.jsx'; 
// import CloudPage from './components/Udemy/Pages/Cloud.jsx';
// import BlockchainPage from './components/Udemy/Pages/Blockchain.jsx';


// //         "Deep dive into TensorFlow",
// // import Joblist from './Joblist.jsx';
// function App() {
//   // const isAuthenticated = localStorage.getItem("token"); // Check if the user is signed in

//   // Protect other routes (ResumeBuilder, JobList) if user is not authenticated
//   const { user } = useUser();
//   return (
//     <>
//     <Router>
      
      
//       <Routes>
        
//         <Route path="/" element={<Home />} />
//         <Route path="/Resumebuilder" element={<Resumebuilder />} />
//         <Route path="/Signin" element={<Sign />} />
//         <Route path="/Joblist" element={<JobList />} />
//         <Route path="/Dashboard" element={<Dashboard/>}/>
//         <Route path="/Jobseeker" element={<Dashjobseeker/>}/>
//         {/* <Route path="/Login" element={<Login/>}/> */}
//         <Route path="/Parser" element={<Parser/>}/>
//         <Route path="/JobInsightsDashboard" element={<JobInsightsDashboard/>}/>
//         <Route path="/Courses" element={<Courses/>}/>
//         <Route path="/Meet" element={<Meet />} />
//         <Route path="/Resuemeanalyser" element={<ResumeAnalyzer />} />
//         <Route path="/Udemy" element={<Udemy />} />
        


//         <Route path="/sql" element={<SQLPage />} />
//         <Route path="/app" element={<APPDEV />} />
//         <Route path="/ARTI" element={<ARTI />} />
//         <Route path="/backend" element={<Backend/>} />
//         <Route path="/java" element={<JavaPage />} />
//         <Route path="/python" element={<PythonPage />} />
//         <Route path="/javascript" element={<JavascriptPage />} />
//         <Route path="/cpp" element={<CppPage />} />
//         <Route path="/go" element={<GoPage />} />
//         <Route path="/spring" element={<SpringPage />} />
//         <Route path="/product" element={<ProductPage />} />
//         <Route path="/QA" element={<AA />} />
//         <Route path="/csharp" element={<CsharpPage />} />\
//         <Route path="/cloud" element={<CloudPage />} />
//         <Route path="/blockchain" element={<BlockchainPage />} />
//         <Route path="/frontend" element={<FrontendPage />} />
       


      






//       </Routes>
//     </Router>
    











//     {/* <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />  
//         <Route path="/Signin" element={<Sign />} />  

       
//         <Route path="/Resumebuilder" element={
//           <ProtectedRoute>
//             <Resumebuilder />
//           </ProtectedRoute>
//         } />
//         <Route path="/Joblist" element={
//           <ProtectedRoute>
//             <JobList />
//           </ProtectedRoute>
//         } />
//       </Routes>
//     </Router> */}




//     </>
   
//   )
// }

// export default App









import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useUser, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

import Home from './components/Home/home';
import Resumebuilder from './components/Resumebuilder/Resumebuilder';
import Sign from './components/Signin/Sign';

import JobList from '../src/components/Joblist/joblist.jsx';
import JobApplicationForm from '../src/components/Joblist/Jobappli.jsx';
import A from '../src/components/Joblist/A.jsx';

import Jobinputs from '../src/components/Joblist/Applicant.jsx';

import Dashboard from './components/Dashboard/Dashrecruiter';
import Dashjobseeker from './components/Dashboard/Dashjobseeker';
import Parser from "./components/Parser/Parser.jsx";
import JobInsightsDashboard from "./components/JobInsightsDashboard/JobInsightsDashboard";
import Courses from "./components/Courses/Courses";
import Meet from "./components/Meet";
import ResumeAnalyzer from './Resumeanalyser';
import Udemy from './components/Udemy/Udemy';

import SQLPage from './components/Udemy/Pages/sql.jsx';
import APPDEV from './components/Udemy/Pages/appdev.jsx';
import ARTI from './components/Udemy/Pages/artificial.jsx';
import Backend from './components/Udemy/Pages/Backend.jsx';
import JavaPage from './components/Udemy/Pages/Java.jsx';
import PythonPage from './components/Udemy/Pages/Python.jsx';
import JavascriptPage from './components/Udemy/Pages/Javascript.jsx';
import CppPage from './components/Udemy/Pages/Cpp.jsx';
import GoPage from './components/Udemy/Pages/Go.jsx';
import SpringPage from './components/Udemy/Pages/Spring.jsx';
import ProductPage from './components/Udemy/Pages/Product.jsx';
import AA from './components/Udemy/Pages/QA.jsx';
import CsharpPage from './components/Udemy/Pages/Csharp.jsx';
import FrontendPage from './components/Udemy/Pages/Frontend.jsx';
import CloudPage from './components/Udemy/Pages/Cloud.jsx';
import BlockchainPage from './components/Udemy/Pages/Blockchain.jsx';




import Newsletter from '../src/Newsletter.jsx';

import ProtectedRoute from '../Protected.jsx'




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<Sign />} />

        {/* 🔒 Protected Routes */}
        <Route path="/Resumebuilder" element={<ProtectedRoute><Resumebuilder /></ProtectedRoute>} />
        <Route path="/Joblist" element={<ProtectedRoute><JobList /></ProtectedRoute>} />
        <Route path="/Dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/Jobseeker" element={<ProtectedRoute><Dashjobseeker /></ProtectedRoute>} />
        <Route path="/Parser" element={<ProtectedRoute><Parser /></ProtectedRoute>} />
        <Route path="/JobInsightsDashboard" element={<ProtectedRoute><JobInsightsDashboard /></ProtectedRoute>} />
        <Route path="/Courses" element={<ProtectedRoute><Courses /></ProtectedRoute>} />
        <Route path="/Meet" element={<ProtectedRoute><Meet /></ProtectedRoute>} />
        <Route path="/Resuemeanalyser" element={<ProtectedRoute><ResumeAnalyzer /></ProtectedRoute>} />
        <Route path="/Udemy" element={<ProtectedRoute><Udemy /></ProtectedRoute>} />
        <Route path="/apply/:jobId" element={<JobApplicationForm />} />

        
        <Route path="/Newsletter" element={<ProtectedRoute><Newsletter /></ProtectedRoute>} />


        <Route path="/appli/:jobId" element={<ProtectedRoute><Jobinputs /></ProtectedRoute>} />

        
        <Route path="/appli" element={<ProtectedRoute><A/></ProtectedRoute>} />





        {/* 🔒 Protected Udemy Pages */}
        <Route path="/sql" element={<ProtectedRoute><SQLPage /></ProtectedRoute>} />
        <Route path="/app" element={<ProtectedRoute><APPDEV /></ProtectedRoute>} />
        <Route path="/ARTI" element={<ProtectedRoute><ARTI /></ProtectedRoute>} />
        <Route path="/backend" element={<ProtectedRoute><Backend /></ProtectedRoute>} />
        <Route path="/java" element={<ProtectedRoute><JavaPage /></ProtectedRoute>} />
        <Route path="/python" element={<ProtectedRoute><PythonPage /></ProtectedRoute>} />
        <Route path="/javascript" element={<ProtectedRoute><JavascriptPage /></ProtectedRoute>} />
        <Route path="/cpp" element={<ProtectedRoute><CppPage /></ProtectedRoute>} />
        <Route path="/go" element={<ProtectedRoute><GoPage /></ProtectedRoute>} />
        <Route path="/spring" element={<ProtectedRoute><SpringPage /></ProtectedRoute>} />
        <Route path="/product" element={<ProtectedRoute><ProductPage /></ProtectedRoute>} />
        <Route path="/QA" element={<ProtectedRoute><AA /></ProtectedRoute>} />
        <Route path="/csharp" element={<ProtectedRoute><CsharpPage /></ProtectedRoute>} />
        <Route path="/frontend" element={<ProtectedRoute><FrontendPage /></ProtectedRoute>} />
        <Route path="/cloud" element={<ProtectedRoute><CloudPage /></ProtectedRoute>} />
        <Route path="/blockchain" element={<ProtectedRoute><BlockchainPage /></ProtectedRoute>} />
        <Route path="/Newsletter" element={<ProtectedRoute><Newsletter /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
