import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Viveka School</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Discover our journey of excellence in education, our mission to nurture young minds, and our commitment to building tomorrow's leaders.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Viveka School, we are dedicated to providing exceptional education that nurtures intellectual curiosity, 
                character development, and lifelong learning. We believe in creating an environment where every student can 
                discover their potential and develop the skills needed to thrive in an ever-changing world.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl mb-2">🎯</div>
                  <h3 className="font-semibold text-blue-600 mb-2">Excellence</h3>
                  <p className="text-sm text-gray-600">Striving for the highest standards in education</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl mb-2">🌱</div>
                  <h3 className="font-semibold text-green-600 mb-2">Growth</h3>
                  <p className="text-sm text-gray-600">Fostering personal and academic development</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://placehold.co/600x400/3B82F6/FFFFFF?text=🏫+Our+Mission" 
                alt="Our Mission"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A journey of 15 years in educational excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://placehold.co/600x400/10B981/FFFFFF?text=📚+Our+History" 
                alt="Our History"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Founded in 2010</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Viveka School was established with a vision to create an educational institution that goes beyond traditional 
                teaching methods. Our founders, a group of passionate educators and visionaries, believed that education should 
                be holistic, engaging, and accessible to all students regardless of their background.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Over the years, we have grown from a small institution with 50 students to a thriving school community of 
                over 500 students, supported by 50+ dedicated teachers and staff members. Our commitment to innovation 
                in education has earned us recognition as one of the leading schools in the region.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600">Faculty</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                🤝
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-600">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest ethical standards and encourage honesty and transparency in all our interactions.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                🌟
              </div>
              <h3 className="text-xl font-bold mb-3 text-green-600">Innovation</h3>
              <p className="text-gray-600">
                We embrace new ideas and technologies to enhance learning experiences and prepare students for the future.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                🎯
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-600">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in all aspects of education, from curriculum design to student support services.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                ❤️
              </div>
              <h3 className="text-xl font-bold mb-3 text-orange-600">Compassion</h3>
              <p className="text-gray-600">
                We create a caring environment where every student feels valued, supported, and encouraged to grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals leading our educational mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <img 
                src="https://placehold.co/150x150/3B82F6/FFFFFF?text=SJ" 
                alt="Principal Sarah Johnson"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-800">Sarah Johnson</h3>
              <p className="text-blue-600 font-medium mb-3">Principal</p>
              <p className="text-gray-600 text-sm">
                M.Ed in Educational Leadership, 20+ years of experience in education and administration.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <img 
                src="https://placehold.co/150x150/10B981/FFFFFF?text=DC" 
                alt="David Chen"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-800">David Chen</h3>
              <p className="text-green-600 font-medium mb-3">Academic Director</p>
              <p className="text-gray-600 text-sm">
                Ph.D in Curriculum Development, specialized in innovative teaching methodologies and assessment.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <img 
                src="https://placehold.co/150x150/9333EA/FFFFFF?text=EM" 
                alt="Emily Martinez"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-800">Emily Martinez</h3>
              <p className="text-purple-600 font-medium mb-3">Student Affairs Director</p>
              <p className="text-gray-600 text-sm">
                M.A in Student Development, passionate about creating supportive learning environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Recognition and milestones that mark our journey of excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2 text-blue-600">Excellence Award</h3>
              <p className="text-gray-600">Regional Education Excellence Award 2023</p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-2 text-green-600">Innovation Recognition</h3>
              <p className="text-gray-600">Best Digital Learning Platform 2022</p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-2 text-purple-600">Academic Success</h3>
              <p className="text-gray-600">98% University Acceptance Rate</p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2 text-orange-600">Community Impact</h3>
              <p className="text-gray-600">Outstanding Community Service Award</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Viveka School Family</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Be part of our mission to nurture the next generation of leaders, innovators, and compassionate citizens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/register" 
              className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full hover:shadow-xl transition-all transform hover:scale-105"
            >
              🎓 Apply for Admission
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-blue-600 transition-all"
            >
              📞 Schedule a Visit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
