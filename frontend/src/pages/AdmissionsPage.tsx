import React from 'react';

const AdmissionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Admissions</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Begin your child's journey of excellence at Viveka School. Join our community of learners, innovators, and future leaders.
          </p>
        </div>
      </div>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Application Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to secure your child's place in our school
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-600">Submit Application</h3>
              <p className="text-gray-600">
                Complete and submit the online application form with required documents.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-green-600">Assessment</h3>
              <p className="text-gray-600">
                Student assessment and parent-teacher interaction to understand learning needs.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-600">Interview</h3>
              <p className="text-gray-600">
                Brief interaction with student and parents to ensure mutual fit and expectations.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 text-orange-600">Enrollment</h3>
              <p className="text-gray-600">
                Complete enrollment formalities and welcome to the Viveka School family!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grade Levels */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Grade Levels & Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive education from early childhood to high school
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <img 
                src="https://placehold.co/400x250/3B82F6/FFFFFF?text=🧸+Kindergarten" 
                alt="Kindergarten"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Kindergarten (K-2)</h3>
              <p className="text-gray-600 mb-4">
                Foundation years focusing on basic literacy, numeracy, and social skills through play-based learning.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Age: 3-5 years</li>
                <li>• Play-based curriculum</li>
                <li>• Language development</li>
                <li>• Creative arts & crafts</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <img 
                src="https://placehold.co/400x250/10B981/FFFFFF?text=📚+Elementary" 
                alt="Elementary School"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-green-600">Elementary (3-8)</h3>
              <p className="text-gray-600 mb-4">
                Core academic subjects with emphasis on critical thinking, creativity, and character development.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Age: 6-13 years</li>
                <li>• STEM integration</li>
                <li>• Project-based learning</li>
                <li>• Sports & extracurriculars</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <img 
                src="https://placehold.co/400x250/9333EA/FFFFFF?text=🎓+High+School" 
                alt="High School"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-purple-600">High School (9-12)</h3>
              <p className="text-gray-600 mb-4">
                Advanced academics with college preparation, leadership opportunities, and career guidance.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Age: 14-18 years</li>
                <li>• AP courses available</li>
                <li>• College counseling</li>
                <li>• Leadership programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Admission Requirements
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What you need to know before applying
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">📋 Required Documents</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Completed application form
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Birth certificate (official copy)
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Previous school transcripts/records
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Immunization records
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Parent/guardian identification
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Two passport-size photographs
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Character certificate (if applicable)
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-green-600">🎯 Assessment Areas</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">📖</span>
                  Reading comprehension
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">🔢</span>
                  Mathematical reasoning
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✍️</span>
                  Writing skills
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">🗣️</span>
                  Verbal communication
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">🧩</span>
                  Problem-solving abilities
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">🤝</span>
                  Social interaction skills
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">🎨</span>
                  Creative thinking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Important Dates
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mark your calendar for key admission milestones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold mb-3 text-blue-600">Application Opens</h3>
              <p className="text-2xl font-bold text-gray-800 mb-2">November 1st</p>
              <p className="text-gray-600">Online applications become available</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-3 text-green-600">Application Deadline</h3>
              <p className="text-2xl font-bold text-gray-800 mb-2">February 15th</p>
              <p className="text-gray-600">All applications must be submitted</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-purple-600">Assessment Period</h3>
              <p className="text-2xl font-bold text-gray-800 mb-2">March 1-15</p>
              <p className="text-gray-600">Student assessments conducted</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="text-4xl mb-4">📬</div>
              <h3 className="text-xl font-bold mb-3 text-orange-600">Admission Results</h3>
              <p className="text-2xl font-bold text-gray-800 mb-2">March 30th</p>
              <p className="text-gray-600">Admission decisions communicated</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3 text-red-600">Fee Payment</h3>
              <p className="text-2xl font-bold text-gray-800 mb-2">April 15th</p>
              <p className="text-gray-600">Enrollment fees due</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="text-4xl mb-4">🎒</div>
              <h3 className="text-xl font-bold mb-3 text-teal-600">School Begins</h3>
              <p className="text-2xl font-bold text-gray-800 mb-2">June 1st</p>
              <p className="text-gray-600">New academic year starts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition & Fees */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Tuition & Fees
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transparent pricing for quality education
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200">
              <h3 className="text-2xl font-bold mb-4 text-blue-600 text-center">Kindergarten</h3>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-blue-600">$8,000</div>
                <div className="text-gray-600">per year</div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Play-based learning
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Nutritious meals
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  After-school care
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  All learning materials
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200 transform scale-105">
              <h3 className="text-2xl font-bold mb-4 text-green-600 text-center">Elementary</h3>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-green-600">$12,000</div>
                <div className="text-gray-600">per year</div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Core curriculum
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  STEM programs
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Sports activities
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Technology access
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border-2 border-purple-200">
              <h3 className="text-2xl font-bold mb-4 text-purple-600 text-center">High School</h3>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-purple-600">$15,000</div>
                <div className="text-gray-600">per year</div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Advanced courses
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  College prep
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Leadership programs
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Career counseling
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              <strong>Payment Plans Available:</strong> Monthly, quarterly, and annual payment options
            </p>
            <p className="text-gray-600">
              <strong>Financial Aid:</strong> Need-based scholarships available for qualified families
            </p>
          </div>
        </div>
      </section>

      {/* Application Form CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Apply?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards your child's bright future. Start your application today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/register" 
              className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full hover:shadow-xl transition-all transform hover:scale-105"
            >
              🎓 Start Application
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-blue-600 transition-all"
            >
              📞 Schedule Tour
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionsPage;
