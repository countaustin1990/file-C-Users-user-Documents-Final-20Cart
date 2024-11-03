import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './style.css'; // Optional for additional styling

const HorizontalScroll = ({ theme }) => {
  const scrollContainerRef = useRef(null);
  const scrollSpeed = 2;
  const intervalTime = 50;

  // Automated scrolling effect
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += scrollSpeed;
        // If it reaches the end of the first set, reset to start of the first set
        if (scrollContainerRef.current.scrollLeft >= scrollContainerRef.current.scrollWidth / 2) {
          scrollContainerRef.current.scrollLeft = 0;
        }
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
          className={`overflow-x-hidden flex gap-6 items-center scroll-smooth p-4 ${
            theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'
          }`}
          ref={scrollContainerRef}
          style={{ whiteSpace: 'nowrap' }} 
        >
          {/* Placeholder Content - First Set */}
          {[...Array(5)].map((_, index) => (
            <div key={index} className={`flex-none w-60 h-40 ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-600'} rounded-lg shadow-md`}></div>
          ))}
          {/* Placeholder Content - Second Set for Continuous Effect */}
          {[...Array(5)].map((_, index) => (
            <div key={index + 5} className={`flex-none w-60 h-40 ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-600'} rounded-lg shadow-md`}></div>
          ))}
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
