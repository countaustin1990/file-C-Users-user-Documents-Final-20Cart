import React from 'react';

const ServicesInfo = () => {
  return (
    <section className="info-section bg-gray-100 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Commitment to You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Line of Services Column */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Line of Services</h3>
            <p className="text-gray-600">
              From personal styling to seasonal collections, we offer an array of services tailored to fit every fashion need. Our team is dedicated to helping you find the perfect style for any occasion.
            </p>
          </div>

          {/* Delivery Time Column */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Delivery Time</h3>
            <p className="text-gray-600">
              We pride ourselves on quick processing and delivery. Orders are usually dispatched within 24-48 hours and arrive within 3-5 business days, depending on your location.
            </p>
          </div>

          {/* Quality Assurance Column */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Quality Assurance</h3>
            <p className="text-gray-600">
              Every item goes through rigorous quality checks to ensure durability and comfort. Our commitment to excellence means that you receive only the best, crafted with care.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesInfo;
