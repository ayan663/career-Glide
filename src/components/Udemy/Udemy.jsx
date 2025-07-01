
import "../Udemy/Udemy.css"; 

import { Link } from "react-router-dom";

import '@fortawesome/fontawesome-free/css/all.min.css';


const RoadmapHub = () => {
  const toggleSteps = (e) => {
    const card = e.currentTarget;
    card.classList.toggle("active");
  };



//   function toggleSteps(card) {
//     card.classList.toggle('active');
//   }
  
const searchRoadmap=() =>{
    const searchInput = document.querySelector('input[type="text"]').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      const summary = card.querySelector('.card-summary').textContent.toLowerCase();
  
      if (title.includes(searchInput) || summary.includes(searchInput)) {
        card.style.display = 'block'; 
      } else {
        card.style.display = 'none'; 
      }
    });
  }
  
    // document.querySelector('input[type="text"]').addEventListener('input', searchRoadmap);

  const cards = [
    {
      icon: "fas fa-laptop-code",
      title: "Frontend Developer",
      summary: "HTML, CSS, JS, React, Vue, UI/UX",
      steps: [
        "Learn HTML5 & CSS3",
        "Master JavaScript (ES6+)",
        "Dive into React or Vue",
        "Understand UI principles",
        "Build real-world projects",
      ],
      link: "/frontend",
    },
    {
      icon: "fas fa-brain",
      title: "AI/ML Engineer",
      summary: "Python, ML, DL, TensorFlow, Scikit",
      steps: [
        "Learn Python & Numpy",
        "Get familiar with ML concepts",
        "Train with Scikit-learn",
        "Explore Deep Learning",
        "Work on real datasets",
      ],
       link: '/ARTI',
    },
    {
      icon: "fas fa-server",
      title: "Backend Developer",
      summary: "Node.js, Express, Databases, APIs",
      steps: [
        "Learn Node.js basics",
        "Get familiar with Express.js",
        "Master RESTful APIs",
        "Connect to Databases (MySQL, MongoDB)",
        "Build scalable backend systems",
      ],
      link: "/backend",
    },
    {
      icon: "fab fa-java",
      title: "Java",
      summary: "OOP, Java SE, Spring Boot, Hibernate",
      steps: [
        "Learn Java basics (Syntax, Variables, Operators)",
        "Understand Object-Oriented Programming (OOP)",
        "Master Collections, Streams, Lambdas",
        "Dive into Spring Boot & RESTful APIs",
        "Learn Hibernate and JPA",
        "Build real-world Java applications",
      ],
      link: "/java",
    },
    {
      icon: "fab fa-python",
      title: "Python",
      summary: "OOP, Django, Flask, Data Science",
      steps: [
        "Learn Python syntax and basic concepts",
        "Understand Object-Oriented Programming",
        "Learn Django or Flask for web development",
        "Dive into Data Science with Pandas, Numpy",
        "Explore Machine Learning libraries like TensorFlow",
      ],
      link: "/python",
    },
    {
      icon: "fab fa-js-square",
      title: "JavaScript",
      summary: "ES6+, Node.js, React, Vue",
      steps: [
        "Learn JavaScript basics and ES6 features",
        "Understand asynchronous programming (Promises, async/await)",
        "Learn Node.js for server-side development",
        "Explore frontend libraries like React or Vue.js",
        "Master full-stack JavaScript development",
      ],
      link: "/javascript",
    },
    {
      icon: "fas fa-cogs",
      title: "C++",
      summary: "OOP, STL, Algorithms, Game Development",
      steps: [
        "Learn C++ basics (Syntax, Data Structures)",
        "Understand Object-Oriented Programming (OOP)",
        "Master Standard Template Library (STL)",
        "Explore algorithms and problem-solving techniques",
        "Build game development projects with C++",
      ],
      link: "/cpp",
    },
    {
      icon: "fas fa-cogs",
      title: "Go (Golang)",
      summary: "Concurrency, Web Development, Microservices",
      steps: [
        "Learn Go basics and syntax",
        "Understand Go's concurrency model (goroutines, channels)",
        "Build web applications with Go and Gin",
        "Learn about microservices and Docker",
        "Work on real-world Go projects",
      ],
      link: "/go",
    },
    {
      icon: "fab fa-java",
      title: "Spring Boot Developer",
      summary: "Java, Spring Boot, REST APIs, JPA",
      steps: [
        "Learn Java fundamentals",
        "Get comfortable with Spring Boot basics",
        "Understand REST APIs and their principles",
        "Master JPA and Spring Data",
        "Build microservices with Spring Boot",
      ],
      link: "/spring",
    },
    {
      icon: "fas fa-briefcase",
      title: "Product Manager",
      summary: "Product Strategy, Roadmap, UX/UI, Leadership",
      steps: [
        "Learn product lifecycle management",
        "Understand market research and user feedback",
        "Develop product vision and strategy",
        "Work closely with UX/UI designers",
        "Master communication and leadership skills",
      ],
      link: "/product", 
    },
    {
      icon: "fas fa-cogs",
      title: "QA Engineer",
      summary: "Testing, Automation, Selenium, CI/CD",
      steps: [
        "Learn manual testing fundamentals",
        "Get familiar with test automation frameworks",
        "Learn Selenium for web application testing",
        "Understand Continuous Integration/Continuous Deployment (CI/CD)",
        "Practice writing test scripts and reports",
      ],
      link: "/QA", 
    },
    {
      icon: "fas fa-database",
      title: "SQL Developer",
      summary: "SQL, Queries, Database Design, Optimization",
      steps: [
        "Learn SQL syntax (SELECT, INSERT, UPDATE, DELETE)",
        "Understand database normalization and relationships",
        "Master SQL queries (joins, subqueries, aggregate functions)",
        "Learn indexing and query optimization",
        "Practice working with different databases (MySQL, PostgreSQL)",
      ],
      link: "/sql", 
    },
    {
      icon: "fas fa-code",
      title: "C# Developer",
      summary: "C#, .NET, ASP.NET, WinForms, LINQ",
      steps: [
        "Master C# syntax & OOP concepts",
        "Learn .NET framework & Core",
        "Develop web apps using ASP.NET",
        "Explore WinForms & WPF for desktop",
        "Work with LINQ & Entity Framework",
    ],
    link: "/csharp",
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud Computing",
      summary: "AWS, Azure, GCP, DevOps, Deployment",
      steps: [
        "Learn basics of Cloud Computing",
        "Choose AWS, Azure, or GCP",
        "Understand compute, storage & networking",
        "Explore CI/CD & DevOps tools",
        "Deploy scalable cloud apps",
    ],
    link: "/cloud",
    },
    {
      icon: "fas fa-mobile-alt",
      title: "App Developer",
      summary: "Java, Kotlin, Flutter, Swift, UI/UX",
      steps: [
        "Choose Android (Java/Kotlin) or iOS (Swift)",
        "Learn mobile app lifecycle",
        "Explore Flutter for cross-platform apps",
        "Focus on responsive UI/UX design",
        "Publish your app to Play Store/App Store",
  ],
    link: "/app",

    },
   
   {
      icon: "fas fa-link",
      title: "Blockchain Developer",
      summary: "Solidity, Ethereum, Smart Contracts, Web3.js",
      steps: [
        "Understand Blockchain fundamentals",
        "Learn Solidity & Smart Contracts",
        "Explore Ethereum & EVM",
        "Use Web3.js or Ethers.js",
        "Build DApps & deploy on testnets",
    ],
    link: "/blockchain",
    },
  ];

  return (
    <div>
      <header>
        <h1>Roadmap Hub</h1>
        <nav>
          <input type="text" placeholder="Search roadmap..." />
        </nav>
      </header>

      <main>
        <section className="card-container" id="roadmapCards">
        {cards.map((card, index) => (
  <div className="card" onClick={toggleSteps} key={index}>
    <div className="card-icon">
      <i className={card.icon}></i>
    </div>
    <h3>{card.title}</h3>
    <p className="card-summary">{card.summary}</p>
    <ul className="card-steps">
      {card.steps.map((step, i) => (
        <li key={i}>✅ {step}</li>
      ))}
    </ul>

    {/* ✅ Add this conditional button */}
    {card.link && (
  <Link to={card.link}>
    <button className="btn-sql">Go to {card.title} Roadmap</button>
  </Link>
)}
  </div>
))}

        </section>
      </main>

      <footer>
        <p>Made with dhania(44) && bito(45)</p>
      </footer>
    </div>
  );
};

export default RoadmapHub;
