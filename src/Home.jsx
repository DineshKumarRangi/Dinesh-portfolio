export default function Home() {
  return (
    <div className="w-full bg-gray-50 flex flex-col font-sans">
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 p-6">
        <img
          src="/profile.jpeg"
          alt="profile"
          className="w-40 h-40 rounded-full mb-6 object-cover shadow-lg border-4 border-white"
        />
        <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-700 tracking-tight text-center">
          Dinesh Kumar Rangi
        </h1>
        <h2 className="text-2xl text-gray-700 mt-4 font-medium text-center">
          Full Stack Developer
        </h2>
        <p className="max-w-2xl text-gray-500 mt-6 text-center text-lg leading-relaxed">
          Welcome to my digital playground! I craft elegant, high-performance solutions through clean code and modern design.
        </p>
        <div className="flex gap-4 mt-8">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-md"
          >
            View My Work
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-full font-semibold transition-all shadow-sm"
          >
            Contact Me
          </button>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-24 bg-white w-full flex justify-center p-8 border-b border-gray-100">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-16">
          {/* Visual/Decoration element */}
          <div className="flex-1 w-full flex justify-center items-center order-2 md:order-1">
            <div className="relative w-full max-w-sm aspect-square bg-indigo-50 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl flex flex-col items-center justify-center p-10 text-center transform transition hover:scale-105 duration-500 hover:rotate-2">
                 <span className="text-7xl mb-6 drop-shadow-md">🚀</span>
                 <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-600 leading-tight mb-3">Driven by <br/> Curiosity</h3>
                 <p className="text-indigo-800 font-medium text-lg mt-2">Constantly exploring new tools & platforms to build better experiences.</p>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 flex items-center justify-center md:justify-start gap-4">
              <span className="text-indigo-600 text-5xl">👋</span> About Me
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Hi, I'm <strong className="text-indigo-700">Dinesh Kumar Rangi</strong>! I'm a passionate Full Stack Developer with a strong foundation in modern web technologies and software design. 
              I love turning complex technical challenges into simple, beautiful, and intuitive digital experiences.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              My journey in tech has given me experience across the entire development stack—from crafting pixel-perfect, responsive front-ends, to building robust back-end architectures. I'm constantly learning and expanding my skill set to stay at the cutting edge of the industry.
            </p>
            
            {/* Quick Stats/Info */}
            <div className="grid grid-cols-2 gap-4 text-left border-t-2 border-gray-100 pt-8 mt-4">
              <div className="bg-gray-50 p-4 rounded-2xl hover:bg-indigo-50 transition border border-gray-100 flex flex-col justify-center">
                <h4 className="font-bold text-gray-800 uppercase text-xs tracking-wider mb-1">Education</h4>
                <p className="text-indigo-700 font-semibold text-sm">Lovely Professional Univ.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl hover:bg-indigo-50 transition border border-gray-100 flex flex-col justify-center">
                <h4 className="font-bold text-gray-800 uppercase text-xs tracking-wider mb-1">Location</h4>
                <p className="text-indigo-700 font-semibold text-sm">India</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl hover:bg-indigo-50 transition border border-gray-100 flex flex-col justify-center">
                <h4 className="font-bold text-gray-800 uppercase text-xs tracking-wider mb-1">Interests</h4>
                <p className="text-indigo-700 font-semibold text-sm">3D Modeling, Hackathons</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl hover:bg-indigo-50 transition border border-gray-100 flex flex-col justify-center">
                <h4 className="font-bold text-gray-800 uppercase text-xs tracking-wider mb-1">Availability</h4>
                <p className="text-green-600 font-semibold text-sm">Open to Work</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 flex flex-col items-center p-8 bg-gray-50">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Technical Arsenal</h2>
        <p className="text-gray-600 mb-12 text-lg text-center max-w-2xl leading-relaxed">
            A comprehensive breakdown of the technologies, languages, and tools I use to bring ideas to life.
        </p>
        
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Programming Languages */}
          <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition duration-300">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl">💻</span>
              <h3 className="text-2xl font-bold text-gray-800">Programming Languages</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {["C++", "Java", "Python", "JavaScript", "TypeScript"].map(skill => (
                <span key={skill} className="font-semibold px-4 py-2 rounded-xl text-sm bg-blue-100 text-blue-800">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Web Development */}
          <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition duration-300">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl">🌐</span>
              <h3 className="text-2xl font-bold text-gray-800">Web Development</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {["React", "Node.js", "Express", "HTML5", "CSS3", "Tailwind CSS"].map(skill => (
                <span key={skill} className="font-semibold px-4 py-2 rounded-xl text-sm bg-purple-100 text-purple-800">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Database & Cloud */}
          <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition duration-300">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl">☁️</span>
              <h3 className="text-2xl font-bold text-gray-800">Database & Cloud</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {["MongoDB", "SQL", "Mongoose"].map(skill => (
                <span key={skill} className="font-semibold px-4 py-2 rounded-xl text-sm bg-green-100 text-green-800">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Other */}
          <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition duration-300">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl">🛠️</span>
              <h3 className="text-2xl font-bold text-gray-800">Tools & Other</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {["Git", "GitHub", "Unity", "Blender", "VS Code", "Figma"].map(skill => (
                <span key={skill} className="font-semibold px-4 py-2 rounded-xl text-sm bg-orange-100 text-orange-800">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-min py-20 bg-gray-50 w-full flex flex-col items-center p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Featured Projects</h2>
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Cards */}
          {[
            { 
              id: 1, 
              title: "Catering Platform", 
              description: "A comprehensive event catering platform where users can browse menus, book packages, and manage their rentals.",
              image: "/project1.png",
              link: "https://github.com/DineshKumarRangi/Catering-Business-Management-"
            },
            { 
              id: 2, 
              title: "PowerCare", 
              description: "A platform dedicated to improving electricity services where users can voice their issues and submit feedback for their area.",
              image: "/project2.png",
              link: "https://github.com/DineshKumarRangi/Power-Supply-Feedback"
            },
            { 
              id: 3, 
              title: "3D Racing Prototype", 
              description: "A low-poly 3D car racing game prototype built with custom assets and track design, demonstrating 3D modeling and game engine environments.",
              image: "/project3.png",
              link: "https://drive.google.com/file/d/1Q71sSzFtWN2rkvuHW6LoFDqB2RiKVXED/view?usp=sharing"
            }
          ].map(project => (
            <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 flex flex-col">
              {project.image ? (
                <img src={project.image} alt={project.title} className="h-48 w-full object-cover border-b border-gray-100" />
              ) : (
                <div className="h-48 bg-indigo-200 flex items-center justify-center">
                  <span className="text-indigo-600 font-bold text-xl">Project Image</span>
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                  {project.description}
                </p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold hover:text-indigo-800 flex items-center gap-1 inline-flex mt-auto">
                  View full project &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements & Certifications Section */}
      <section id="achievements" className="min-h-min py-20 flex flex-col items-center bg-white p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Achievements & Certifications</h2>
        
        <div className="max-w-4xl w-full flex flex-col gap-6 mb-12">
          {/* Achievement Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 flex items-start gap-5">
              <div className="text-3xl bg-white/20 w-14 h-14 flex items-center justify-center rounded-full flex-shrink-0 shadow-sm border border-white/20">
                💻
              </div>
              <div className="text-white">
                <h3 className="text-xl font-bold mb-2 leading-tight">Leetcode Challenger</h3>
                <p className="text-indigo-100 text-sm leading-relaxed">Consistently solved <strong>100+ questions</strong> on LeetCode, significantly strengthening core data structures and algorithmic thinking.</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-500 to-emerald-600 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 flex items-start gap-5">
              <div className="text-3xl bg-white/20 w-14 h-14 flex items-center justify-center rounded-full flex-shrink-0 shadow-sm border border-white/20">
                🚀
              </div>
              <div className="text-white">
                <h3 className="text-xl font-bold mb-2 leading-tight">Hackathon Finalist</h3>
                <p className="text-teal-100 text-sm leading-relaxed">Successfully placed in the <strong>top 50%</strong> during a highly competitive Web Development Hackathon.</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mt-4 px-2">Certifications</h3>

          {/* Cert Cards */}
          {[
            { name: 'Logic Building, Programming and Data Structures', issuedBy: 'Lovely Professional University', link: 'https://drive.google.com/file/d/1xkdL4s5v-6rZmtCRbLM_Ee52rO8UXTC3/view' },
            { name: 'Computational Theory', issuedBy: 'Infosys', link: 'https://drive.google.com/file/d/1lOgTmoRt5P0yibqgOOsgdEGTKgmmFq26/view' },
            { name: 'Deep Learning', issuedBy: 'NPTEL', link: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-ee16/Course/NPTEL25EE16S64750098604510914.pdf' }
          ].map(cert => (
            <div key={cert.name} className="flex flex-col md:flex-row items-center md:justify-between bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xl">
                  🏆
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{cert.name}</h3>
                  <p className="text-gray-500 text-sm">Issued by {cert.issuedBy}</p>
                </div>
              </div>
              <a 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 md:mt-0 px-4 py-2 border border-black rounded-lg text-gray-800 hover:bg-black hover:text-white transition font-semibold inline-block text-center"
              >
                View Credential
              </a>
            </div>
          ))}
        </div>
        
        {/* Resume Download */}
        <div className="flex flex-col items-center bg-indigo-50 p-10 rounded-3xl border border-indigo-100 w-full max-w-4xl shadow-sm mt-4">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">Interested in my full profile?</h3>
            <p className="text-indigo-700 mb-8 text-center max-w-2xl text-lg">
              Check out my complete resume below to see a detailed overview of my experience, education, and technical skills.
            </p>

            {/* Resume Preview */}
            <div className="w-full h-96 md:h-[600px] mb-8 rounded-xl overflow-hidden border-2 border-indigo-200 shadow-inner bg-white">
              <iframe 
                src="/resume.pdf" 
                title="Resume Preview"
                className="w-full h-full"
                type="application/pdf"
              />
            </div>

            <a 
              href="/resume.pdf" 
              download="Dinesh_Kumar_Rangi_Resume.pdf"
              className="flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-indigo-700 hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume (PDF)
            </a>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="min-h-min py-20 bg-gray-50 w-full flex flex-col items-center p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Education Journey</h2>
        <div className="max-w-4xl w-full flex flex-col gap-8 relative">
          
          {/* Timeline Line (for larger screens) */}
          <div className="hidden md:block absolute left-8 top-8 bottom-0 w-1 bg-indigo-200 rounded-full transform -translate-x-1/2"></div>

          {/* Item 1 */}
          <div className="relative pl-0 md:pl-20">
            <div className="hidden md:flex absolute left-8 top-8 w-6 h-6 bg-indigo-600 rounded-full items-center justify-center border-4 border-gray-50 shadow-sm z-10 transform -translate-x-1/2"></div>
            <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Bachelor of Technology (Computer Science)</h3>
                  <p className="text-indigo-600 font-bold text-lg">Lovely Professional University</p>
                </div>
                <div className="text-left md:text-right bg-indigo-50 px-4 py-2 rounded-xl h-fit border border-indigo-100">
                  <span className="block text-indigo-800 font-bold whitespace-nowrap text-sm">Aug '23 – Present</span>
                </div>
              </div>
              <p className="text-gray-500 flex items-center gap-2 mb-3">
                <span className="text-lg">📍</span> Phagwara, Punjab
              </p>
              <p className="text-gray-700 font-medium flex items-center">
                CGPA: <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold ml-2">7.75</span>
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative pl-0 md:pl-20">
            <div className="hidden md:flex absolute left-8 top-8 w-6 h-6 bg-indigo-400 rounded-full items-center justify-center border-4 border-gray-50 shadow-sm z-10 transform -translate-x-1/2"></div>
            <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Intermediate (Class XII)</h3>
                  <p className="text-indigo-600 font-bold text-lg">Army Public School - Jhansi</p>
                </div>
                <div className="text-left md:text-right bg-gray-50 px-4 py-2 rounded-xl h-fit border border-gray-200">
                  <span className="block text-gray-600 font-bold whitespace-nowrap text-sm">Mar '20 – May '22</span>
                </div>
              </div>
              <p className="text-gray-500 flex items-center gap-2 mb-3">
                <span className="text-lg">📍</span> Jhansi, Uttar Pradesh
              </p>
              <p className="text-gray-700 font-medium flex items-center">
                Percentage: <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold ml-2">80.2%</span>
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="relative pl-0 md:pl-20">
            <div className="hidden md:flex absolute left-8 top-8 w-6 h-6 bg-indigo-300 rounded-full items-center justify-center border-4 border-gray-50 shadow-sm z-10 transform -translate-x-1/2"></div>
            <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Matriculation (Class X)</h3>
                  <p className="text-indigo-600 font-bold text-lg">Army Public School - Tezpur</p>
                </div>
                <div className="text-left md:text-right bg-gray-50 px-4 py-2 rounded-xl h-fit border border-gray-200">
                  <span className="block text-gray-600 font-bold whitespace-nowrap text-sm">Mar '19 – May '20</span>
                </div>
              </div>
              <p className="text-gray-500 flex items-center gap-2 mb-3">
                <span className="text-lg">📍</span> Tezpur, Assam
              </p>
              <p className="text-gray-700 font-medium flex items-center">
                Percentage: <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold ml-2">90.6%</span>
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Contacts Section */}
      <section id="contact" className="min-h-min py-24 bg-indigo-600 w-full flex justify-center p-8 text-white text-center md:text-left">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Contact Info */}
          <div className="flex flex-col items-center lg:items-start text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Let's Work Together</h2>
            <p className="text-indigo-100 mb-10 text-lg leading-relaxed max-w-lg">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <a href="mailto:dinesh@example.com" className="bg-white text-indigo-600 px-6 py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-indigo-50 transition transform hover:-translate-y-1 flex items-center justify-center gap-3 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Email Me
              </a>
              <a href="https://linkedin.com/in/dineshkumarrangi" target="_blank" rel="noopener noreferrer" className="bg-[#0077b5] text-white px-6 py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-[#006396] transition transform hover:-translate-y-1 flex items-center justify-center gap-3 w-full">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                LinkedIn
              </a>
              <div className="bg-indigo-700 border-2 border-indigo-400 text-white px-6 py-4 rounded-xl font-bold text-lg shadow-xl flex items-center justify-center gap-3 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +91 9817150524
              </div>
            </div>
          </div>

          {/* Right Side: Message Box */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl text-gray-800 w-full max-w-lg mx-auto lg:mx-0">
            <h3 className="text-2xl font-bold mb-6 text-indigo-900 border-b pb-4 text-left">Drop a Message</h3>
            <form className="flex flex-col gap-4 text-left">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm font-semibold text-gray-600">Your Name</label>
                <input type="text" id="name" placeholder="John Doe" className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50 transition" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm font-semibold text-gray-600">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50 transition" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="message" className="text-sm font-semibold text-gray-600">Message</label>
                <textarea id="message" rows="4" placeholder="Hello Dinesh, let's talk about..." className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50 transition resize-none"></textarea>
              </div>
              <button type="submit" className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-md transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2 w-full text-center">
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </div>
          
        </div>
      </section>

    </div>
  );
}