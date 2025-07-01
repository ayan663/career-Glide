import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Briefcase, 
  DollarSign, 
  MapPin, 
  Filter, 
  BarChart2, 
  PieChart, 
  Users, 
  Award 
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  PieChart as RechartsPieChart, 
  Pie, 
  Cell 
} from 'recharts';

const JobInsightsDashboard = () => {
  const [jobInsights, setJobInsights] = useState({
    totalJobs: 0,
    averageSalary: 0,
    topIndustries: [],
    jobApplications: [],
    salaryByExperience: [],
    jobLocationDistribution: [],
    recentTrends: []
  });

  const [filters, setFilters] = useState({
    industry: '',
    location: '',
    experienceLevel: ''
  });

  // Simulated data fetch (would be replaced by actual API call)
  useEffect(() => {
    const fetchJobInsights = async () => {
      // Simulated data generation
      const mockData = {
        totalJobs: 5423,
        averageSalary: 85000,
        topIndustries: [
          { name: 'Technology', jobs: 1250, color: '#3B82F6' },
          { name: 'Healthcare', jobs: 950, color: '#10B981' },
          { name: 'Finance', jobs: 750, color: '#EF4444' },
          { name: 'Education', jobs: 500, color: '#8B5CF6' },
          { name: 'Manufacturing', jobs: 350, color: '#F59E0B' }
        ],
        jobApplications: [
          { month: 'Jan', applications: 1200 },
          { month: 'Feb', applications: 1500 },
          { month: 'Mar', applications: 1800 },
          { month: 'Apr', applications: 2100 },
          { month: 'May', applications: 1900 },
          { month: 'Jun', applications: 2300 }
        ],
        salaryByExperience: [
          { level: 'Entry', salary: 55000 },
          { level: 'Mid', salary: 85000 },
          { level: 'Senior', salary: 125000 },
          { level: 'Executive', salary: 180000 }
        ],
        jobLocationDistribution: [
          { name: 'Remote', value: 40 },
          { name: 'Hybrid', value: 35 },
          { name: 'On-site', value: 25 }
        ],
        recentTrends: [
          { trend: 'AI/ML Jobs', growth: '+45%' },
          { trend: 'Cybersecurity', growth: '+35%' },
          { trend: 'Cloud Computing', growth: '+28%' }
        ]
      };

      setJobInsights(mockData);
    };

    fetchJobInsights();
  }, []);

  const renderStatCard = (icon, title, value) => (
    <div className="bg-white shadow rounded-lg p-4 flex items-center">
      <div className="bg-blue-100 p-3 rounded-full mr-4">
        {icon}
      </div>
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h3 className="text-xl font-bold">{value}</h3>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Job Market Insights</h1>

      {/* Top Stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        {renderStatCard(
          <Briefcase className="text-blue-500" />, 
          'Total Jobs', 
          jobInsights.totalJobs.toLocaleString()
        )}
        {renderStatCard(
          <DollarSign className="text-green-500" />, 
          'Average Salary', 
          `$${jobInsights.averageSalary.toLocaleString()}`
        )}
        {renderStatCard(
          <MapPin className="text-purple-500" />, 
          'Job Locations', 
          '50+ Cities'
        )}
        {renderStatCard(
          <Users className="text-red-500" />, 
          'Job Applications', 
          '12,500+'
        )}
      </div>

      {/* Dashboard Content */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Top Industries */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Award className="mr-2 text-yellow-500" /> Top Industries
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <RechartsPieChart>
              <Pie
                data={jobInsights.topIndustries}
                dataKey="jobs"
                nameKey="name"
                outerRadius={120}
                fill="#8884d8"
              >
                {jobInsights.topIndustries.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </RechartsPieChart>
          </ResponsiveContainer>
        </div>

        {/* Job Applications Trend */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <TrendingUp className="mr-2 text-blue-500" /> Job Applications
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={jobInsights.jobApplications}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="applications" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Salary by Experience */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <BarChart2 className="mr-2 text-green-500" /> Salary by Experience
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={jobInsights.salaryByExperience}>
              <XAxis dataKey="level" />
              <YAxis />
              <Tooltip formatter={(value) => [`$${value}`, 'Salary']} />
              <Bar dataKey="salary" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Job Location Distribution */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <MapPin className="mr-2 text-purple-500" /> Work Location
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <RechartsPieChart>
              <Pie
                data={jobInsights.jobLocationDistribution}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                fill="#8884d8"
                label
              >
                {jobInsights.jobLocationDistribution.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={['#3B82F6', '#10B981', '#EF4444'][index]} 
                  />
                ))}
              </Pie>
              <Tooltip />
            </RechartsPieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Trends */}
      <div className="bg-white shadow rounded-lg p-4 mt-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Filter className="mr-2 text-red-500" /> Job Market Trends
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {jobInsights.recentTrends.map((trend, index) => (
            <div 
              key={index} 
              className="border p-3 rounded-lg text-center hover:bg-gray-50 transition"
            >
              <h3 className="font-semibold">{trend.trend}</h3>
              <p className="text-green-600 font-bold">{trend.growth}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobInsightsDashboard;