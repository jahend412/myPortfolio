import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_7xm2wnd',
        'template_s87ellb',
        formData,
        '3NIVvLXi0dN-ajh-R'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.log('FAILED...', error);
        }
      );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col items-center border-b-2 border-gray-800 bg-amber-50 px-4 pb-16 pt-20 dark:border-white dark:bg-gray-800">
      <h1 className="mb-8 text-4xl font-bold text-gray-800 dark:text-white">
        Contact Me
      </h1>
      <p className="large:text-xl mb-8 text-center text-lg font-bold text-gray-800 dark:text-white">
        Let's connect about web development opportunities. I look forward to our
        conversation.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg space-y-6 rounded-lg border-2 bg-amber-50 p-8 shadow-md dark:bg-gray-700"
      >
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 bg-amber-50 p-2 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 bg-amber-50 p-2 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full rounded-md border border-gray-300 bg-amber-50 p-2 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 py-2 text-white transition-colors hover:bg-blue-700 dark:bg-red-600 dark:hover:bg-red-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
