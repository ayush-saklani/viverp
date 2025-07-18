import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
const LandingPage: React.FC = () => {
  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Background images for slideshow
  const backgroundImages = [
    'https://placehold.co/200x200/EEE/31343C?text=image1',
    'https://placehold.co/200x200/EEE/31343C?text=image2',
    'https://placehold.co/200x200/EEE/31343C?text=image3',
    'https://placehold.co/200x200/EEE/31343C?text=image4',
    'https://placehold.co/200x200/EEE/31343C?text=image5'
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-[green] min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-lg backdrop-blur-sm bg-white/95 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🎓</span>
            </div>
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Viveka School
            </Link>
          </div>
          {/* Main Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</Link>
            <Link to="/admissions" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Admissions</Link>
            <Link to="/academics" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Academics</Link>
            <Link to="/events" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Events</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</Link>
          </div>
          <div className="flex items-center space-x-2">
            <Link
              to="/login"
              className="text-blue-600 hover:text-blue-700 px-4 py-2 rounded-lg transition-all hover:bg-blue-50"
            >
              Staff Login
            </Link>
            <Link
              to="/register"
              className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Slideshow Background */}
      <Carousel autoplay={true} autoplayDelay={3000} pauseOnHover={true} loop={true} round={false} />
      <header className="relative min-h-screen flex items-center text-white overflow-hidden pt-32 pb-32">

        {/* Hero Content */}

        <div className="container mx-auto px-6 text-center relative z-30">
          <div className="max-w-4xl mx-auto">
            {/* Hero Image/Logo */}
            <div className="mb-10 flex justify-center">
              <div className="relative">
                <img
                  src="https://placehold.co/200x200/2563EB/FFFFFF?text=School+Logo"
                  alt="Viveka School Logo"
                  className="w-32 h-32 rounded-full object-cover border-4 border-white/30 backdrop-blur-sm shadow-2xl"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-10 leading-tight">
              Welcome to
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                Viveka School
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Nurturing young minds with excellence in education, character building, and holistic development for tomorrow's leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/register"
                className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full hover:shadow-xl transition-all transform hover:scale-105 text-lg flex items-center gap-2"
              >
                🎒 Start Your Journey
              </Link>
              <a
                href="#features"
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-blue-600 transition-all text-lg flex items-center gap-2"
              >
                📖 Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Decorative wave element */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-r from-blue-600 to-green-500 z-30">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-blue-600 group-hover:text-green-500 transition-colors">500+</div>
              <div className="text-gray-600 font-medium">Students</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-purple-600 group-hover:text-blue-600 transition-colors">15+</div>
              <div className="text-gray-600 font-medium">Years of Excellence</div>
            </div>
            {/* Add more stats as needed */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Why Choose Viveka School?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive education management and exceptional learning experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <img
                src="https://placehold.co/400x250/3B82F6/FFFFFF?text=Student+Management"
                alt="Student Management"
                className="h-48 w-full object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-blue-600 group-hover:text-green-500 transition-colors">
                  Student Management
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive student profiles, academic tracking, and seamless communication between teachers, students, and parents.
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <img
                src="https://placehold.co/400x250/10B981/FFFFFF?text=Smart+Attendance"
                alt="Smart Attendance"
                className="h-48 w-full object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-green-500 group-hover:text-purple-600 transition-colors">
                  Smart Attendance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Digital attendance tracking with real-time notifications, automated reports, and parent alerts for better monitoring.
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <img
                src="https://placehold.co/400x250/9333EA/FFFFFF?text=Assessment+and+Grades"
                alt="Assessment & Grades"
                className="h-48 w-full object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-purple-600 group-hover:text-blue-600 transition-colors">
                  Assessment & Grades
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Online examinations, instant grading, detailed analytics, and comprehensive report cards for academic excellence.
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <img
                src="https://placehold.co/400x250/2563EB/FFFFFF?text=Fee+Management"
                alt="Fee Management"
                className="h-48 w-full object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-blue-600 group-hover:text-green-500 transition-colors">
                  Fee Management
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Streamlined fee collection, payment tracking, receipt generation, and financial reporting for transparency.
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <img
                src="https://placehold.co/400x250/10B981/FFFFFF?text=Teacher+Portal"
                alt="Teacher Portal"
                className="h-48 w-full object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-green-500 group-hover:text-purple-600 transition-colors">
                  Teacher Portal
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dedicated teacher dashboard for lesson planning, grade management, and student progress monitoring.
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <img
                src="https://placehold.co/400x250/9333EA/FFFFFF?text=Parent+Connect"
                alt="Parent Connect"
                className="h-48 w-full object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-purple-600 group-hover:text-blue-600 transition-colors">
                  Parent Connect
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Real-time updates, progress reports, communication tools, and involvement in their child's educational journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Gallery Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Our School Life
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take a glimpse into the vibrant life at Viveka School
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gallery Item 1 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="https://placehold.co/600x400/3B82F6/FFFFFF?text=Modern+Classrooms"
                alt="Modern Classrooms"
                className="h-64 w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-lg font-semibold">State-of-the-art Learning</div>
                  <div className="text-sm">Interactive smart boards and modern facilities</div>
                </div>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="https://placehold.co/600x400/10B981/FFFFFF?text=Sports+Complex"
                alt="Sports Complex"
                className="h-64 w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-lg font-semibold">Athletic Excellence</div>
                  <div className="text-sm">Professional sports facilities and training</div>
                </div>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="https://placehold.co/600x400/9333EA/FFFFFF?text=Science+Labs"
                alt="Science Labs"
                className="h-64 w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-lg font-semibold">Discovery & Innovation</div>
                  <div className="text-sm">Fully equipped laboratories for hands-on learning</div>
                </div>
              </div>
            </div>

            {/* Gallery Item 4 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="https://placehold.co/600x400/F97316/FFFFFF?text=Art+Studio"
                alt="Art Studio"
                className="h-64 w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-lg font-semibold">Creative Expression</div>
                  <div className="text-sm">Inspiring creativity through art and design</div>
                </div>
              </div>
            </div>

            {/* Gallery Item 5 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="https://placehold.co/600x400/0891B2/FFFFFF?text=Library"
                alt="Library"
                className="h-64 w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-lg font-semibold">Knowledge Hub</div>
                  <div className="text-sm">Extensive collection of books and digital resources</div>
                </div>
              </div>
            </div>

            {/* Gallery Item 6 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="https://placehold.co/600x400/7C3AED/FFFFFF?text=Auditorium"
                alt="Auditorium"
                className="h-64 w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-lg font-semibold">Performance Arts</div>
                  <div className="text-sm">Cultural events and theatrical performances</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10">Ready to Join Our School Family?</h2>
          <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto">
            Take the first step towards excellent education and comprehensive development.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/register"
              className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full hover:shadow-xl transition-all transform hover:scale-105 text-lg"
            >
              🎓 Enroll Your Child
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-blue-600 transition-all text-lg"
            >
              📞 Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🎓</span>
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  Viveka School
                </div>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Excellence in education since 2010. Nurturing young minds for a brighter tomorrow through innovative learning and character development.
              </p>
              <div className="flex space-x-4">
                <span className="text-2xl hover:text-blue-400 cursor-pointer transition-colors">📘</span>
                <span className="text-2xl hover:text-blue-400 cursor-pointer transition-colors">📧</span>
                <span className="text-2xl hover:text-green-400 cursor-pointer transition-colors">📱</span>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
                <li><Link to="/academics" className="hover:text-white transition-colors">Academics</Link></li>
                <li><Link to="/events" className="hover:text-white transition-colors">Events</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-purple-400">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📍 123 Education Street</li>
                <li>📞 +1 (555) 123-4567</li>
                <li>📧 info@vivekaschool.edu</li>
                <li>🕒 Mon-Fri: 8AM-4PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Viveka School. All rights reserved. Empowering education through technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
