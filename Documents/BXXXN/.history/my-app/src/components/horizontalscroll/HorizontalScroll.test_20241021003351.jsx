import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './App.css'; // Optional for additional styling

const HorizontalScroll = ({ theme }) => {
  const scrollContainerRef = useRef(null);
  const scrollSpeed = 2;
  const intervalTime = 50;

  // Automated scrolling effect
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += scrollSpeed;
      }
      if (
        scrollContainerRef.current.scrollLeft +
        scrollContainerRef.current.offsetWidth >=
        scrollContainerRef.current.scrollWidth
      ) {
        scrollContainerRef.current.scrollLeft = 0; // Loop back to the start
      }
    }, intervalTime);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className={`app ${theme}-mode`}>
      <div className="container mx-auto py-8">
        <h1 className={`text-3xl font-bold mb-6 text-center ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
          Automated Horizontal Scroll Bar
        </h1>

        {/* Scrollable Container */}
        <div
          className={`overflow-x-auto flex gap-6 items-center scroll-smooth p-4 ${
            theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'
          }`}
          ref={scrollContainerRef}
          style={{ whiteSpace: 'nowrap' }} 
        >
          {/* Placeholder 1 */}
          <div className={`flex-none w-60 h-40 ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-600'} rounded-lg shadow-md`}></div>

          {/* Placeholder 2 */}
          <div className={`flex-none w-60 h-40 ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-600'} rounded-lg shadow-md`}></div>

          {/* Placeholder 3 */}
          <div className={`flex-none w-60 h-40 ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-600'} rounded-lg shadow-md`}></div>

          {/* Placeholder 4 */}
          <div className={`flex-none w-60 h-40 ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-600'} rounded-lg shadow-md`}></div>

          {/* Placeholder 5 */}
          <div className={`flex-none w-60 h-40 ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-600'} rounded-lg shadow-md`}></div>
        </div>
      </div>
    </div>
  );
};

// PropTypes validation for the `theme` prop
HorizontalScroll.propTypes = {
  theme: PropTypes.string.isRequired, // theme is required and should be a string
};

export default HorizontalScroll;
