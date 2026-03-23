import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted (replace with EmailJS API)");
  };

  return (
    <section id="contact" className="py-24 px-6 text-center">
      <h2 className="text-4xl font-bold mb-8 text-cyan-400">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col gap-4">
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="p-3 rounded bg-gray-800 border border-gray-700 text-white"
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="p-3 rounded bg-gray-800 border border-gray-700 text-white"
        />
        <textarea
          name="message"
          placeholder="Message"
          onChange={handleChange}
          className="p-3 rounded bg-gray-800 border border-gray-700 text-white"
        />
        <button
          type="submit"
          className="bg-cyan-400 text-black px-6 py-3 rounded font-bold hover:scale-105 transition-transform"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;