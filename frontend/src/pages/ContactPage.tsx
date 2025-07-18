import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get in touch with Viveka School. We're here to help with all your questions and inquiries.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">
                  📍
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                  <p className="text-gray-600">123 Education Street<br />Academic District, Learning City 12345</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl">
                  📞
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567<br />+1 (555) 123-4568</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl">
                  📧
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">info@vivekaschool.edu<br />admissions@vivekaschool.edu</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl">
                  🕒
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Office Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 4:00 PM<br />Saturday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8">
              <h3 className="font-semibold text-gray-800 mb-4">Find Us</h3>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <img 
                  src="https://placehold.co/600x300/E5E7EB/6B7280?text=🗺️+School+Location+Map"
                  alt="School Location Map"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="admissions">Admissions Inquiry</option>
                      <option value="general">General Information</option>
                      <option value="academics">Academic Programs</option>
                      <option value="fees">Fees & Payment</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-vertical"
                    placeholder="Please describe your inquiry or message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold py-4 px-8 rounded-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  Send Message 📤
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Quick Contact Cards */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
            Quick Contact Options
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                🎓
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-600">Admissions Office</h3>
              <p className="text-gray-600 mb-4">For enrollment and admission inquiries</p>
              <a href="mailto:admissions@vivekaschool.edu" className="text-blue-600 hover:text-blue-700 font-medium">
                admissions@vivekaschool.edu
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                👨‍🏫
              </div>
              <h3 className="text-xl font-bold mb-2 text-green-600">Academic Support</h3>
              <p className="text-gray-600 mb-4">For academic and curriculum questions</p>
              <a href="mailto:academics@vivekaschool.edu" className="text-green-600 hover:text-green-700 font-medium">
                academics@vivekaschool.edu
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                🛠️
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-600">Technical Support</h3>
              <p className="text-gray-600 mb-4">For technical and system support</p>
              <a href="mailto:support@vivekaschool.edu" className="text-purple-600 hover:text-purple-700 font-medium">
                support@vivekaschool.edu
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
