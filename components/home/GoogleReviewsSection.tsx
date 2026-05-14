"use client";

import { motion } from 'framer-motion';
import Script from 'next/script';

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white overflow-hidden">
      {/* Script is loaded once for the whole page */}
      <script src="https://elfsightcdn.com/platform.js" async></script>


      <div className="container mx-auto px-4 text-center mb-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What Customers Say About Us 💬
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Real feedback from our satisfied clients. Don't just take our word for it—see why so many trust us with their roofing needs.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-2 md:px-6">
        <div className="bg-gray-50 rounded-3xl p-4 md:p-8 shadow-inner border border-gray-100 min-h-[400px] flex flex-col justify-center">
          {/* 
            This div is the placeholder for the Elfsight Widget. 
            The ID below is your specific widget ID from Elfsight.
          */}
          <div className="elfsight-app-313a65b4-81d2-4777-b5e6-09513719431c" data-elfsight-app-lazy></div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Latest reviews synced from Google Business Profile
        </p>
      </div>
    </section>
  );
}