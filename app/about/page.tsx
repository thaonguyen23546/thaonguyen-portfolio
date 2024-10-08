import '@fortawesome/fontawesome-free/css/all.min.css';

export default function About() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8">
      <div className="max-w-4xl w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-gray-200">About Me</h1>
        <p className="text-lg mb-4 text-gray-300">
          Hi! I am Thao Nguyen, an enthusiastic developer with an insatiable appetite for learning and exploring new technologies. Currently, I am diving into PHP and mastering the Laravel framework while also building dynamic WordPress websites. I thrive on the thrill of solving complex problems and developing new skills with each project.
        </p>
        <p className="text-lg mb-4 text-gray-300">
          My journey in tech is driven by curiosity and a passion for innovation. Whether it is refining my skills or tackling a challenging problem, I am always eager to embrace new learning opportunities.
        </p>
        <p className="text-lg text-gray-300">
          Feel free to check out my blogs where I share my insights and experiences:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-300">
          <li>
            <a href="https://kafkablog.kesug.com/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
              KafkaBlog: A community-driven space where language learners and tech enthusiasts converge.
            </a>
          </li>
          <li>
            <a href="https://harrypage.hashnode.dev/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
              Hashnode Blog: My personal space where I document my coding journey, explore the latest in web development, and share tips and tricks.
            </a>
          </li>
        </ul>
        <p className="text-lg text-gray-300">
          Connect with me on social media:
        </p>
        <div className="flex space-x-4 mb-4">
          <a href="https://github.com/Gianguyen1234" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="https://facebook.com/your-profile" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="https://linkedin.com/in/your-profile" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://twitter.com/your-profile" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </div>
      </div>
    </main>
  );
}
