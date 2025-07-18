import React from 'react';

const AcademicsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Academics</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Excellence in education through innovative curriculum, dedicated faculty, and personalized learning approaches that prepare students for success.
          </p>
        </div>
      </div>

      {/* Curriculum Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Our Curriculum
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive academic programs designed to foster critical thinking, creativity, and lifelong learning
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://placehold.co/600x400/3B82F6/FFFFFF?text=📚+Curriculum+Excellence" 
                alt="Curriculum Excellence"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Holistic Learning Approach</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our curriculum integrates academic rigor with practical application, ensuring students develop both 
                intellectual capabilities and real-world skills. We follow national standards while incorporating 
                innovative teaching methods and technology.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl mb-2">🎯</div>
                  <h4 className="font-semibold text-blue-600 mb-2">Personalized Learning</h4>
                  <p className="text-sm text-gray-600">Adaptive teaching methods tailored to individual learning styles</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl mb-2">🔬</div>
                  <h4 className="font-semibold text-green-600 mb-2">STEAM Integration</h4>
                  <p className="text-sm text-gray-600">Science, Technology, Engineering, Arts, and Mathematics combined</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-2xl mb-2">🌍</div>
                  <h4 className="font-semibold text-purple-600 mb-2">Global Perspective</h4>
                  <p className="text-sm text-gray-600">International awareness and cultural competency development</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="text-2xl mb-2">💭</div>
                  <h4 className="font-semibold text-orange-600 mb-2">Critical Thinking</h4>
                  <p className="text-sm text-gray-600">Problem-solving and analytical skills development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subject Areas */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Core Subject Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive academic disciplines that build strong foundations for future success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <img 
                src="https://placehold.co/400x250/3B82F6/FFFFFF?text=📖+Language+Arts" 
                alt="Language Arts"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Language Arts</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive reading, writing, speaking, and listening skills development through literature and creative expression.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Reading comprehension</li>
                <li>• Creative & academic writing</li>
                <li>• Public speaking</li>
                <li>• Literature analysis</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <img 
                src="https://placehold.co/400x250/10B981/FFFFFF?text=🔢+Mathematics" 
                alt="Mathematics"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-green-600">Mathematics</h3>
              <p className="text-gray-600 mb-4">
                From fundamental arithmetic to advanced calculus, building logical thinking and problem-solving abilities.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Algebra & Geometry</li>
                <li>• Calculus & Statistics</li>
                <li>• Applied mathematics</li>
                <li>• Mathematical modeling</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <img 
                src="https://placehold.co/400x250/9333EA/FFFFFF?text=🔬+Sciences" 
                alt="Sciences"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-purple-600">Sciences</h3>
              <p className="text-gray-600 mb-4">
                Hands-on exploration of biology, chemistry, physics, and earth sciences with modern laboratory facilities.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Biology & Life Sciences</li>
                <li>• Chemistry & Physics</li>
                <li>• Environmental Science</li>
                <li>• Laboratory research</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <img 
                src="https://placehold.co/400x250/F59E0B/FFFFFF?text=🌍+Social+Studies" 
                alt="Social Studies"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-orange-600">Social Studies</h3>
              <p className="text-gray-600 mb-4">
                Understanding history, geography, civics, and economics to develop informed global citizens.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• World & National History</li>
                <li>• Geography & Cultures</li>
                <li>• Government & Civics</li>
                <li>• Economics & Society</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <img 
                src="https://placehold.co/400x250/EF4444/FFFFFF?text=🎨+Arts" 
                alt="Arts"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-red-600">Creative Arts</h3>
              <p className="text-gray-600 mb-4">
                Fostering creativity and self-expression through visual arts, music, drama, and digital media.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Visual Arts & Design</li>
                <li>• Music & Performance</li>
                <li>• Drama & Theater</li>
                <li>• Digital Media Arts</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <img 
                src="https://placehold.co/400x250/06B6D4/FFFFFF?text=💻+Technology" 
                alt="Technology"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-cyan-600">Technology</h3>
              <p className="text-gray-600 mb-4">
                Modern computer science, coding, robotics, and digital literacy preparing students for the future.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Computer Programming</li>
                <li>• Robotics & Engineering</li>
                <li>• Digital Citizenship</li>
                <li>• Web Development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Advanced Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized programs for high-achieving students and college preparation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">🏆 Honors & AP Courses</h3>
              <p className="text-gray-700 mb-6">
                Advanced Placement and Honors courses providing college-level academic experience and potential 
                college credit for high school students.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-2">AP Sciences</h4>
                  <p className="text-sm text-gray-600">Biology, Chemistry, Physics, Environmental Science</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-2">AP Mathematics</h4>
                  <p className="text-sm text-gray-600">Calculus AB/BC, Statistics, Computer Science</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-2">AP Humanities</h4>
                  <p className="text-sm text-gray-600">Literature, History, Psychology, Economics</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-2">AP Languages</h4>
                  <p className="text-sm text-gray-600">Spanish, French, Mandarin Chinese</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-green-600">🎓 College Prep Programs</h3>
              <p className="text-gray-700 mb-6">
                Comprehensive college preparation including guidance counseling, standardized test prep, 
                and university application support.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  SAT/ACT preparation courses
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  College application guidance
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Essay writing workshops
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Scholarship search assistance
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Career exploration programs
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  University campus visits
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Special Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Unique opportunities for enrichment and specialized learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-6xl mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-3 text-blue-600">Gifted & Talented</h3>
              <p className="text-gray-600">
                Specialized programs for intellectually gifted students with accelerated learning opportunities 
                and enrichment activities.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-6xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3 text-green-600">Special Education</h3>
              <p className="text-gray-600">
                Individualized support services for students with diverse learning needs, ensuring inclusive 
                education for all.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3 text-purple-600">ESL Program</h3>
              <p className="text-gray-600">
                English as a Second Language support for international students and English language learners.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-6xl mb-4">🎭</div>
              <h3 className="text-xl font-bold mb-3 text-orange-600">Fine Arts Focus</h3>
              <p className="text-gray-600">
                Intensive programs in visual arts, music, theater, and dance for artistically inclined students.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-6xl mb-4">⚽</div>
              <h3 className="text-xl font-bold mb-3 text-red-600">Athletic Excellence</h3>
              <p className="text-gray-600">
                Competitive sports programs with professional coaching and opportunities for athletic scholarships.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-6xl mb-4">👑</div>
              <h3 className="text-xl font-bold mb-3 text-teal-600">Leadership Academy</h3>
              <p className="text-gray-600">
                Development of leadership skills through student government, community service, and mentorship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Support */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Academic Support
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive support systems to ensure every student succeeds
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Student Success Services</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We believe every student has the potential to excel. Our comprehensive support services ensure 
                that all students receive the help they need to achieve their academic goals.
              </p>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg flex items-start">
                  <span className="text-blue-500 text-2xl mr-4">📚</span>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-1">Tutoring Services</h4>
                    <p className="text-sm text-gray-600">Free peer and professional tutoring in all subjects</p>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg flex items-start">
                  <span className="text-green-500 text-2xl mr-4">🎯</span>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-1">Study Skills Training</h4>
                    <p className="text-sm text-gray-600">Time management, note-taking, and test preparation strategies</p>
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg flex items-start">
                  <span className="text-purple-500 text-2xl mr-4">🧠</span>
                  <div>
                    <h4 className="font-semibold text-purple-600 mb-1">Learning Differences Support</h4>
                    <p className="text-sm text-gray-600">Specialized assistance for students with learning differences</p>
                  </div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg flex items-start">
                  <span className="text-orange-500 text-2xl mr-4">👥</span>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-1">Counseling Services</h4>
                    <p className="text-sm text-gray-600">Academic counseling and emotional support services</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://placehold.co/600x500/10B981/FFFFFF?text=🎓+Student+Support" 
                alt="Student Support Services"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Assessment & Progress */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Assessment & Progress Tracking
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern assessment methods that promote learning and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-bold mb-2 text-blue-600">Continuous Assessment</h3>
              <p className="text-gray-600 text-sm">
                Regular formative assessments to monitor progress and adjust teaching methods
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-lg font-bold mb-2 text-green-600">Progress Reports</h3>
              <p className="text-gray-600 text-sm">
                Detailed quarterly reports showing academic growth and areas for improvement
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-lg font-bold mb-2 text-purple-600">Parent Conferences</h3>
              <p className="text-gray-600 text-sm">
                Regular meetings to discuss student progress and collaborative goal setting
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-lg font-bold mb-2 text-orange-600">Digital Portfolio</h3>
              <p className="text-gray-600 text-sm">
                Online showcases of student work and achievements throughout their academic journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Explore Our Academic Excellence</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover how our innovative curriculum and dedicated faculty can unlock your child's full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/admissions" 
              className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full hover:shadow-xl transition-all transform hover:scale-105"
            >
              📚 Learn About Admissions
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-blue-600 transition-all"
            >
              📞 Schedule a Campus Tour
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicsPage;
