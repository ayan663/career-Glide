import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/navbar';
import { 
  Book, 
  Filter, 
  Star, 
  Clock, 
  Video, 
  CodeIcon, 
  ChevronRight, 
  Search 
} from 'lucide-react';

const SkillEnhancementCourses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    difficulty: '',
    category: '',
    price: ''
  });
  const [coursesData, setCoursesData] = useState([]); // State to store courses data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch courses from your API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/courses`); 
        setCoursesData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch courses');
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Filter courses based on search and filter criteria
  const filteredCourses = coursesData.filter(course => {
    const searchMatch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        course.category.toLowerCase().includes(searchTerm.toLowerCase());

    const difficultyMatch = !filters.difficulty || course.difficulty === filters.difficulty;
    const categoryMatch = !filters.category || course.category === filters.category;
    const priceMatch = !filters.price || 
      (filters.price === 'free' && course.price === 0) ||
      (filters.price === 'paid' && course.price > 0);

    return searchMatch && difficultyMatch && categoryMatch && priceMatch;
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetFilters = () => {
    setFilters({
      difficulty: '',
      category: '',
      price: ''
    });
    setSearchTerm('');
  };

  if (loading) {
    return <div className="text-center py-10">Loading courses...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-10">{error}</div>;
  }

  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Skill Enhancement Courses</h1>

      {/* Search and Filter Section */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="flex-grow relative">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-10 border rounded-lg"
          />
          <Search className="absolute left-3 top-3 text-gray-500" />
        </div>

        <div className="flex space-x-2">
          {/* Difficulty Filter */}
          <select 
            name="difficulty"
            value={filters.difficulty}
            onChange={handleFilterChange}
            className="p-3 border rounded-lg"
          >
            <option value="">Difficulty</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          {/* Category Filter */}
          <select 
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            className="p-3 border rounded-lg"
          >
            <option value="">Category</option>
            <option value="Web Development">Web Development</option>
            <option value="Data Science">Data Science</option>
            <option value="Cloud Technology">Cloud Technology</option>
          </select>

          {/* Price Filter */}
          <select 
            name="price"
            value={filters.price}
            onChange={handleFilterChange}
            className="p-3 border rounded-lg"
          >
            <option value="">Price</option>
            <option value="free">Free</option>
            <option value="paid">Paid</option>
          </select>

          <button 
            onClick={resetFilters}
            className="p-3 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <div 
              key={course.id} 
              className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 text-blue-500">{course.icon}</div>
                <h2 className="text-xl font-semibold">{course.title}</h2>
              </div>

              <p className="text-gray-600 mb-4">{course.description}</p>

              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="flex items-center">
                  <Clock className="mr-2 text-gray-500" size={20} />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Star className="mr-2 text-yellow-500" size={20} />
                  <span>{course.rating}</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">${course.price}</span>
                <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Enroll Now <ChevronRight className="ml-2" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-500">No courses found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default SkillEnhancementCourses;
