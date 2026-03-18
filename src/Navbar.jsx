export default function Navbar() {

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 
          className="text-xl font-bold text-indigo-600 cursor-pointer" 
          onClick={() => handleScroll('hero')}
        >
           Portfolio
        </h1>

        
        <ul className="flex space-x-8 font-medium text-gray-700">
          <li>
            <span onClick={() => handleScroll('hero')} className="hover:text-indigo-600 cursor-pointer">Home</span>
          </li>
          <li>
            <span onClick={() => handleScroll('about')} className="hover:text-indigo-600 cursor-pointer">About</span>
          </li>
          <li>
            <span onClick={() => handleScroll('skills')} className="hover:text-indigo-600 cursor-pointer">Skills</span>
          </li>
          <li>
            <span onClick={() => handleScroll('projects')} className="hover:text-indigo-600 cursor-pointer">Projects</span>
          </li>
          <li>
             <span onClick={() => handleScroll('achievements')} className="hover:text-indigo-600 cursor-pointer">Certifications</span>
          </li>
          <li>
            <span onClick={() => handleScroll('achievements')} className="hover:text-indigo-600 cursor-pointer">Achievements</span>
          </li>
          <li>
            <span onClick={() => handleScroll('education')} className="hover:text-indigo-600 cursor-pointer">Education</span>
          </li>
          <li>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="hover:text-indigo-600 cursor-pointer">Resume</a>
          </li>
          <li>
             <span onClick={() => handleScroll('contact')} className="hover:text-indigo-600 cursor-pointer">Contact</span>
          </li>
        </ul>

      </div>

    </nav>
  );
}