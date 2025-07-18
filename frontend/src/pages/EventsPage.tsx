import React from 'react';

const EventsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">School Events</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Discover the vibrant community life at Viveka School through our exciting events, celebrations, and activities throughout the year.
          </p>
        </div>
      </div>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't miss these exciting upcoming events and activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">Mar 15</span>
                <span className="text-blue-600 text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-600">Annual Science Fair</h3>
              <p className="text-gray-700 mb-4">
                Students showcase their innovative science projects and research. Open to all grade levels with prizes in multiple categories.
              </p>
              <div className="text-sm text-gray-600">
                <p><strong>Time:</strong> 9:00 AM - 3:00 PM</p>
                <p><strong>Location:</strong> Main Auditorium</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">Mar 22</span>
                <span className="text-green-600 text-2xl">🎭</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-green-600">Spring Theater Production</h3>
              <p className="text-gray-700 mb-4">
                Our drama club presents "A Midsummer Night's Dream" featuring talented student actors, musicians, and crew.
              </p>
              <div className="text-sm text-gray-600">
                <p><strong>Time:</strong> 7:00 PM - 9:30 PM</p>
                <p><strong>Location:</strong> School Theater</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">Mar 29</span>
                <span className="text-purple-600 text-2xl">⚽</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-600">Inter-School Sports Day</h3>
              <p className="text-gray-700 mb-4">
                Annual athletic competition featuring track and field, soccer, basketball, and swimming events.
              </p>
              <div className="text-sm text-gray-600">
                <p><strong>Time:</strong> 8:00 AM - 5:00 PM</p>
                <p><strong>Location:</strong> Sports Complex</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">Apr 5</span>
                <span className="text-orange-600 text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-orange-600">Art Exhibition Opening</h3>
              <p className="text-gray-700 mb-4">
                Celebrate student creativity with our annual art exhibition featuring paintings, sculptures, and digital art.
              </p>
              <div className="text-sm text-gray-600">
                <p><strong>Time:</strong> 6:00 PM - 8:00 PM</p>
                <p><strong>Location:</strong> Art Gallery</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">Apr 12</span>
                <span className="text-red-600 text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-red-600">Family Fun Day</h3>
              <p className="text-gray-700 mb-4">
                A day of fun activities for the whole family including games, food stalls, face painting, and live music.
              </p>
              <div className="text-sm text-gray-600">
                <p><strong>Time:</strong> 10:00 AM - 4:00 PM</p>
                <p><strong>Location:</strong> School Grounds</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">Apr 19</span>
                <span className="text-teal-600 text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-teal-600">Book Fair & Author Visit</h3>
              <p className="text-gray-700 mb-4">
                Meet bestselling children's author Sarah Mitchell and browse hundreds of books at our annual book fair.
              </p>
              <div className="text-sm text-gray-600">
                <p><strong>Time:</strong> 9:00 AM - 2:00 PM</p>
                <p><strong>Location:</strong> Library & Cafeteria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Event Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the different types of events we host throughout the year
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                🎓
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-600">Academic Events</h3>
              <p className="text-gray-600">
                Science fairs, math competitions, debate tournaments, and academic showcases.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                🎨
              </div>
              <h3 className="text-xl font-bold mb-3 text-green-600">Cultural Events</h3>
              <p className="text-gray-600">
                Art exhibitions, music concerts, theater productions, and cultural celebrations.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                ⚽
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-600">Sports Events</h3>
              <p className="text-gray-600">
                Inter-school competitions, sports days, tournaments, and athletic championships.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                🎉
              </div>
              <h3 className="text-xl font-bold mb-3 text-orange-600">Social Events</h3>
              <p className="text-gray-600">
                Family days, fundraising events, community gatherings, and celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Calendar */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Annual Event Calendar
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A year-round schedule of exciting events and activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <img 
                src="https://placehold.co/400x250/3B82F6/FFFFFF?text=🍂+Fall+Events" 
                alt="Fall Events"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Fall Semester</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Back to School Night (September)</li>
                <li>• Homecoming Dance (October)</li>
                <li>• Halloween Costume Contest</li>
                <li>• Fall Harvest Festival</li>
                <li>• Parent-Teacher Conferences</li>
                <li>• Thanksgiving Food Drive</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl">
              <img 
                src="https://placehold.co/400x250/10B981/FFFFFF?text=❄️+Winter+Events" 
                alt="Winter Events"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-green-600">Winter Semester</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Winter Concert (December)</li>
                <li>• Holiday Celebration</li>
                <li>• Science Fair (January)</li>
                <li>• Black History Month Events</li>
                <li>• Valentine's Day Dance</li>
                <li>• Career Day (February)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <img 
                src="https://placehold.co/400x250/9333EA/FFFFFF?text=🌸+Spring+Events" 
                alt="Spring Events"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-purple-600">Spring Semester</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Spring Musical (March)</li>
                <li>• Art Exhibition Opening</li>
                <li>• Earth Day Activities (April)</li>
                <li>• Spring Sports Championships</li>
                <li>• Prom Night (May)</li>
                <li>• Graduation Ceremony (June)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Event Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Capturing memorable moments from our recent events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group cursor-pointer">
              <img 
                src="https://placehold.co/300x300/3B82F6/FFFFFF?text=🎭+Theater" 
                alt="Theater Production"
                className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all"
              />
              <p className="text-center mt-3 text-gray-700 font-medium">Spring Theater Production</p>
            </div>

            <div className="group cursor-pointer">
              <img 
                src="https://placehold.co/300x300/10B981/FFFFFF?text=🔬+Science" 
                alt="Science Fair"
                className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all"
              />
              <p className="text-center mt-3 text-gray-700 font-medium">Annual Science Fair</p>
            </div>

            <div className="group cursor-pointer">
              <img 
                src="https://placehold.co/300x300/9333EA/FFFFFF?text=⚽+Sports" 
                alt="Sports Day"
                className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all"
              />
              <p className="text-center mt-3 text-gray-700 font-medium">Inter-School Sports Day</p>
            </div>

            <div className="group cursor-pointer">
              <img 
                src="https://placehold.co/300x300/F59E0B/FFFFFF?text=🎨+Art" 
                alt="Art Exhibition"
                className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all"
              />
              <p className="text-center mt-3 text-gray-700 font-medium">Student Art Exhibition</p>
            </div>

            <div className="group cursor-pointer">
              <img 
                src="https://placehold.co/300x300/EF4444/FFFFFF?text=🎉+Family" 
                alt="Family Fun Day"
                className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all"
              />
              <p className="text-center mt-3 text-gray-700 font-medium">Family Fun Day</p>
            </div>

            <div className="group cursor-pointer">
              <img 
                src="https://placehold.co/300x300/06B6D4/FFFFFF?text=🎓+Graduation" 
                alt="Graduation"
                className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all"
              />
              <p className="text-center mt-3 text-gray-700 font-medium">Graduation Ceremony</p>
            </div>

            <div className="group cursor-pointer">
              <img 
                src="https://placehold.co/300x300/8B5CF6/FFFFFF?text=🏆+Awards" 
                alt="Awards Night"
                className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all"
              />
              <p className="text-center mt-3 text-gray-700 font-medium">Annual Awards Night</p>
            </div>

            <div className="group cursor-pointer">
              <img 
                src="https://placehold.co/300x300/10B981/FFFFFF?text=🌍+Community" 
                alt="Community Service"
                className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all"
              />
              <p className="text-center mt-3 text-gray-700 font-medium">Community Service Day</p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Registration */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Event Registration & Information
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay connected and never miss an event
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">📧 Stay Informed</h3>
              <p className="text-gray-700 mb-6">
                Sign up for our event newsletter to receive timely updates about upcoming events, 
                registration deadlines, and special announcements.
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Weekly event updates
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Early registration reminders
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Event photos and highlights
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Special event invitations
                </li>
              </ul>
              <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors">
                Subscribe to Newsletter
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-green-600">📱 Quick Access</h3>
              <p className="text-gray-700 mb-6">
                Download our mobile app for instant access to event calendars, registration forms, 
                and real-time event updates.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">📅</div>
                  <h4 className="font-semibold text-gray-800 mb-1">Event Calendar</h4>
                  <p className="text-sm text-gray-600">View all upcoming events</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">🎫</div>
                  <h4 className="font-semibold text-gray-800 mb-1">Online Registration</h4>
                  <p className="text-sm text-gray-600">Register for events easily</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">🔔</div>
                  <h4 className="font-semibold text-gray-800 mb-1">Push Notifications</h4>
                  <p className="text-sm text-gray-600">Never miss important updates</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">📷</div>
                  <h4 className="font-semibold text-gray-800 mb-1">Event Photos</h4>
                  <p className="text-sm text-gray-600">Access event galleries</p>
                </div>
              </div>
              <button className="bg-green-600 text-white font-bold py-3 px-6 rounded-full hover:bg-green-700 transition-colors">
                Download App
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Community Events</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Be part of the excitement! Participate in our events and create lasting memories with the Viveka School community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/register" 
              className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full hover:shadow-xl transition-all transform hover:scale-105"
            >
              🎪 View All Events
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-blue-600 transition-all"
            >
              📞 Contact Event Coordinator
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
