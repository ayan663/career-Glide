import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Rss, 
  Search, 
  PlusCircle, 
  CheckCircle2, 
  BookOpen, 
  Newspaper,
  Filter,
  Star
} from 'lucide-react';

const Newsletter = () => {
  const [newsletters, setNewsletters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [subscribedNewsletters, setSubscribedNewsletters] = useState([]);

  // Categories of newsletters
  const newsletterCategories = [
    'Technology', 'Business', 'Design', 
    'Startups', 'Entrepreneurship', 'AI/ML', 
    'Productivity', 'Finance', 'Creative'
  ];

  // Sample newsletters data
  const sampleNewsletters = [
    {
      id: 1,
      title: 'The Hustle',
      description: 'Daily dose of tech and business news',
      category: 'Business',
      subscribers: 250000,
      frequency: 'Daily',
      rating: 4.7
    },
    {
      id: 2,
      title: 'AI Insider',
      description: 'Latest trends and insights in Artificial Intelligence',
      category: 'AI/ML',
      subscribers: 150000,
      frequency: 'Weekly',
      rating: 4.9
    },
    {
      id: 3,
      title: 'Design Weekly',
      description: 'Curated design inspiration and trends',
      category: 'Design',
      subscribers: 100000,
      frequency: 'Weekly',
      rating: 4.5
    },
    {
      id: 4,
      title: 'Tech Crunch Newsletter',
      description: 'Breaking technology news and startup insights',
      category: 'Technology',
      subscribers: 300000,
      frequency: 'Daily',
      rating: 4.8
    },
    {
      id: 5,
      title: 'Startup Pulse',
      description: 'Insights and stories from the startup ecosystem',
      category: 'Startups',
      subscribers: 200000,
      frequency: 'Weekly',
      rating: 4.6
    },
    {
      id: 6,
      title: 'Entrepreneurial Edge',
      description: 'Strategies and tips for aspiring entrepreneurs',
      category: 'Entrepreneurship',
      subscribers: 180000,
      frequency: 'Bi-Weekly',
      rating: 4.7
    },
    {
      id: 7,
      title: 'Productivity Pro',
      description: 'Tips and tools to supercharge your productivity',
      category: 'Productivity',
      subscribers: 220000,
      frequency: 'Weekly',
      rating: 4.8
    },
    {
      id: 8,
      title: 'Finance Focus',
      description: 'Latest trends and insights in personal and corporate finance',
      category: 'Finance',
      subscribers: 270000,
      frequency: 'Daily',
      rating: 4.9
    },
    {
      id: 9,
      title: 'Growth Mindset Gazette',
      description: 'Inspiration for personal and professional growth',
      category: 'Entrepreneurship',
      subscribers: 120000,
      frequency: 'Weekly',
      rating: 4.7
    },
    {
      id: 10,
      title: 'Startup Success Stories',
      description: 'Inspirational stories of successful startups and founders',
      category: 'Startups',
      subscribers: 160000,
      frequency: 'Monthly',
      rating: 4.5
    },
    {
      id: 11,
      title: 'Money Matters',
      description: 'Personal finance advice and investment tips',
      category: 'Finance',
      subscribers: 300000,
      frequency: 'Bi-Weekly',
      rating: 4.9
    },
    {
      id: 12,
      title: 'Efficiency Engine',
      description: 'Boost your efficiency with actionable strategies',
      category: 'Productivity',
      subscribers: 140000,
      frequency: 'Weekly',
      rating: 4.6
    },
    {
      id: 13,
      title: 'Founders Weekly',
      description: 'Curated news and resources for startup founders',
      category: 'Startups',
      subscribers: 250000,
      frequency: 'Weekly',
      rating: 4.8
    },
    {
      id: 14,
      title: 'CEO Playbook',
      description: 'Leadership and strategy insights for executives',
      category: 'Entrepreneurship',
      subscribers: 200000,
      frequency: 'Monthly',
      rating: 4.8
    },
    {
      id: 15,
      title: 'Wealth Wizard',
      description: 'Guides to building and managing wealth effectively',
      category: 'Finance',
      subscribers: 190000,
      frequency: 'Daily',
      rating: 4.7
    },
    {
      id: 16,
      title: 'Get Things Done',
      description: 'Simple tips for staying organized and productive',
      category: 'Productivity',
      subscribers: 180000,
      frequency: 'Weekly',
      rating: 4.5
    }
  ];
  

  useEffect(() => {
    // Simulate fetching newsletters
    setNewsletters(sampleNewsletters);
  }, []);

  // Filter newsletters
  const filteredNewsletters = newsletters.filter(newsletter => 
    (searchTerm === '' || 
      newsletter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      newsletter.description.toLowerCase().includes(searchTerm.toLowerCase())
    ) &&
    (selectedCategories.length === 0 || 
      selectedCategories.includes(newsletter.category))
  );

  // Subscribe to newsletter
  const handleSubscribe = (newsletter) => {
    if (!subscribedNewsletters.find(n => n.id === newsletter.id)) {
      setSubscribedNewsletters([...subscribedNewsletters, newsletter]);
    }
  };

  // Unsubscribe from newsletter
  const handleUnsubscribe = (newsletterId) => {
    setSubscribedNewsletters(
      subscribedNewsletters.filter(n => n.id !== newsletterId)
    );
  };

  // Toggle category filter
  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold flex items-center">
          <Newspaper className="mr-3 text-blue-500" /> Newsletter Hub
        </h1>
        {/* <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          <PlusCircle className="mr-2" /> Create Newsletter
        </button> */}
      </div>

      {/* Search and Filter Section */}
      <div className="mb-6 flex space-x-4">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search newsletters..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-10 border rounded-lg"
          />
          <Search className="absolute left-3 top-3 text-gray-500" />
        </div>

        {/* Category Filters */}
        <div className="flex space-x-2 overflow-x-auto">
          {newsletterCategories.map(category => (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              className={`px-4 py-2 rounded-lg ${
                selectedCategories.includes(category)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Newsletters Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNewsletters.map(newsletter => (
          <div 
            key={newsletter.id} 
            className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{newsletter.title}</h2>
              <div className="flex items-center text-yellow-500">
                <Star className="mr-1" size={20} />
                <span>{newsletter.rating}</span>
              </div>
            </div>

            <p className="text-gray-600 mb-4">{newsletter.description}</p>

            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <Rss className="mr-2 text-blue-500" />
                <span>{newsletter.frequency}</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 text-green-500" />
                <span>{newsletter.subscribers.toLocaleString()} Subscribers</span>
              </div>
            </div>

            <div className="flex items-center">
              <BookOpen className="mr-2 text-purple-500" />
              <span className="mr-2">{newsletter.category}</span>
            </div>

            <div className="mt-4">
              {subscribedNewsletters.some(n => n.id === newsletter.id) ? (
                <button
                  onClick={() => handleUnsubscribe(newsletter.id)}
                  className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Unsubscribe
                </button>
              ) : (
                <button
                  onClick={() => handleSubscribe(newsletter)}
                  className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Subscribe
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Subscribed Newsletters Section */}
      {subscribedNewsletters.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <CheckCircle2 className="mr-3 text-green-500" /> My Subscriptions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subscribedNewsletters.map(newsletter => (
              <div 
                key={newsletter.id} 
                className="border rounded-lg p-4 bg-green-50"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">{newsletter.title}</h3>
                  <button
                    onClick={() => handleUnsubscribe(newsletter.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Unsubscribe
                  </button>
                </div>
                <p className="text-sm text-gray-600">{newsletter.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Newsletter;