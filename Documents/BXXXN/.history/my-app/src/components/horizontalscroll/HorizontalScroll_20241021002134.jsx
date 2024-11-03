import React, { useRef } from 'react';
import './App.css'; // Import your CSS if needed (optional)

const HorizontalScroll = () => {
  const scrollContainerRef = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -300, // Adjust scroll distance
      behavior: 'smooth', // Smooth scrolling effect
    });
  };

  // Function to scroll right
  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 300, // Adjust scroll distance
      behavior: 'smooth', // Smooth scrolling effect
    });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Horizontal Animated Scroll Bar</h1>

      {/* Scrollable Container */}
      <div
        className="overflow-x-auto flex gap-6 items-center scroll-smooth"
        ref={scrollContainerRef}
      >
        {/* Placeholder 1 */}
        <div className="flex-none w-60 h-40 bg-gray-300 rounded-lg shadow-md"></div>

        {/* Placeholder 2 */}
        <div className="flex-none w-60 h-40 bg-gray-300 rounded-lg shadow-md"></div>

        {/* Placeholder 3 */}
        <div className="flex-none w-60 h-40 bg-gray-300 rounded-lg shadow-md"></div>

        {/* Placeholder 4 */}
        <div className="flex-none w-60 h-40 bg-gray-300 rounded-lg shadow-md"></div>

        {/* Placeholder 5 */}
        <div className="flex-none w-60 h-40 bg-gray-300 rounded-lg shadow-md"></div>

        {/* Placeholder 6 */}
        <div className="flex-none w-60 h-40 bg-gray-300 rounded-lg shadow-md"></div>

        {/* Placeholder 7 */}
        <div className="flex-none w-60 h-40 bg-gray-300 rounded-lg shadow-md"></div>
      </div>

      {/* Scroll Buttons */}
      <div className="flex justify-center mt-6">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg mx-2"
          onClick={scrollLeft}
        >
          Scroll Left
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg mx-2"
          onClick={scrollRight}
        >
          Scroll Right
        </button>
      </div>
    </div>
  );
};

export default HorizontalScroll;
