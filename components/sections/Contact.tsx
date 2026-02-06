import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! (Demo functionality)');
  };

  return (
    <div className="animate-fade-in">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-6 relative inline-block">
          Contact
          <span className="absolute -bottom-2 left-0 w-12 h-1.5 bg-accent rounded-full"></span>
        </h2>
      </header>

      <section className="mb-10">
        <h3 className="text-2xl font-bold text-white mb-6">Contact Form</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <input 
                        type="text" 
                        name="fullname"
                        placeholder="Full Name"
                        value={formData.fullname}
                        onChange={handleChange}
                        className="w-full bg-[#222224] border border-[#383838] text-white text-base p-4 rounded-xl focus:outline-none focus:border-accent transition-colors placeholder-gray-500"
                        required
                    />
                </div>
                <div>
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-[#222224] border border-[#383838] text-white text-base p-4 rounded-xl focus:outline-none focus:border-accent transition-colors placeholder-gray-500"
                        required
                    />
                </div>
            </div>
            
            <textarea 
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#222224] border border-[#383838] text-white text-base p-4 rounded-xl focus:outline-none focus:border-accent transition-colors placeholder-gray-500 resize-none"
                required
            ></textarea>

            <div className="flex justify-end">
                <button 
                    type="submit" 
                    className="flex items-center gap-2 bg-[#222224] text-accent text-base border border-accent/20 px-8 py-4 rounded-xl font-semibold hover:bg-accent hover:text-white transition-all duration-300 shadow-lg group"
                >
                    <span>Send Message</span>
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </form>
      </section>

       <section>
        <h3 className="text-2xl font-bold text-white mb-6">Map</h3>
        <div className="w-full h-[300px] bg-[#222224] rounded-2xl overflow-hidden border border-[#383838] relative grayscale hover:grayscale-0 transition-all duration-500">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99846.12643891785!2d-121.57945763784112!3d38.561623949852236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA!5e0!3m2!1sen!2sus!4v1709403812345!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;