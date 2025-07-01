import { useState } from "react";
import Navbar from '../Navbar/navbar';
import rec from "../imgages/Recruter-1.jpg";

function Dashrecruiter() {
  const [formData, setFormData] = useState({
    recruiterName: '',
    phoneNumber: '',
    address: '',
    jobTitle: '',
    companyName: '',
    salaryCurrency: 'RUPEES',
    location: '',
    skills: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/jobs/post-job', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      alert(data.message);
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap text-slate-800">
        <div className="relative hidden min-h-screen select-none flex-col justify-center bg-slate-600 text-center md:flex md:w-1/3">
          <img src={rec} className="h-auto max-w-md" alt="Description" />
          <div className="mx-auto py-16 px-8 text-white">
            <p className="my-6 text-4xl font-bold leading-10">
              Hello <span className="truncate border-b-8 border-yellow-400 font-bold text-yellow-400">recruiter</span>
            </p>
            <p className="mb-4 text-lg font-medium">Find Your Best Employee</p>
          </div>
        </div>

        <div className="flex w-full flex-col md:w-2/3">
          <div className="flex justify-center pt-12 md:justify-start md:pl-12">
            <a href="#" className="text-2xl font-bold text-gray-800 bg-yellow-400 px-2 py-1">CarrierGlide</a>
          </div>

          <div className="my-auto flex max-w-screen-md flex-col justify-center px-6 md:pl-12 pt-8 sm:pt-0 md:justify-start">
            <p className="text-center text-3xl font-bold md:text-left">Welcome</p>

            <form className="flex flex-col items-stretch pt-3 pb-8 md:pt-8" onSubmit={handleSubmit}>
              <div className="grid gap-x-4 gap-y-3 sm:grid-cols-2">
                <label className="block">
                  <p className="mb-1 mt-2 text-sm text-gray-600">Name</p>
                  <input
                    name="recruiterName"
                    value={formData.recruiterName}
                    onChange={handleChange}
                    className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-yellow-500 focus:ring-2"
                    type="text"
                    placeholder="Enter your name"
                  />
                </label>

                <label className="block">
                  <p className="mb-1 mt-2 text-sm text-gray-600">Phone Number</p>
                  <input
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-yellow-500 focus:ring-2"
                    type="tel"
                    placeholder="Enter your number"
                  />
                </label>

                <label className="block">
                  <p className="mb-1 mt-2 text-sm text-gray-600">Street Address</p>
                  <input
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-yellow-500 focus:ring-2"
                    type="text"
                    placeholder="Enter your address"
                  />
                </label>
              </div>

              <div className="pt-5">
                <p className="text-center text-3xl font-bold md:text-left">POST A JOB</p>

                <label className="block">
                  <input
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-yellow-500 focus:ring-2"
                    type="text"
                    placeholder="JOB TITLE"
                  />
                </label>

                <label className="block">
                  <p className="mb-1 mt-2 text-sm text-gray-600">Company Name</p>
                  <input
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-yellow-500 focus:ring-2"
                    type="text"
                    placeholder="COMPANY NAME"
                  />
                </label>

                <p className="mb-1 mt-2 text-sm text-gray-600">Salary Currency</p>
                <select
                  name="salaryCurrency"
                  value={formData.salaryCurrency}
                  onChange={handleChange}
                  className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-yellow-500 focus:ring-2"
                >
                  <option value="DOLLAR">DOLLAR</option>
                  <option value="RUPEES">RUPEES</option>
                </select>

                <label className="block">
                  <p className="mb-1 mt-2 text-sm text-gray-600">Location</p>
                  <input
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-yellow-500 focus:ring-2"
                    type="text"
                    placeholder="PLACE"
                  />
                </label>

                <label className="block">
                  <p className="mb-1 mt-2 text-sm text-gray-600">Skills Required</p>
                  <input
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-yellow-500 focus:ring-2"
                    type="text"
                    placeholder="SKILLS"
                  />
                </label>

                <label className="block">
                  <p className="mb-1 mt-2 text-sm text-gray-600">Description</p>
                  <input
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-yellow-500 focus:ring-2"
                    type="text"
                    placeholder="DESCRIPTION"
                  />
                </label>
              </div>

              <div className="block">
                <label className="inline-block text-sm text-gray-500">
                  By clicking POST you agree to the <a className="underline" href="#">Terms and Conditions</a>
                </label>
              </div>

              <button type="submit" className="mt-6 rounded-full bg-yellow-400 px-4 py-2 text-center text-base font-semibold shadow-md outline-none ring-yellow-500 ring-offset-2 transition hover:bg-yellow-300 focus:ring-2 md:w-40">
                POST
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashrecruiter;
