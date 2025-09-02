import React, { useState } from 'react';
import { toast } from 'react-toastify';

const PopupForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studentClass: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thanks! You'll be contacted via email.");
    onClose();
    setFormData({
        name: '',
        email: '',
        phone: '',
        studentClass: '',
        message: '',
    });
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
          <div className="mt-18 bg-white p-8 rounded-lg shadow-2xl w-full max-w-md relative">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">Start Free Trial</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 text-left">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 text-left">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              {/* Class */}
              <div>
                <label htmlFor="studentClass" className="block text-sm font-medium text-gray-700 text-left">
                  Class
                </label>
                <input
                  type="text"
                  name="studentClass"
                  id="studentClass"
                  value={formData.studentClass}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 text-left">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
    </>
  );
};

export default PopupForm;