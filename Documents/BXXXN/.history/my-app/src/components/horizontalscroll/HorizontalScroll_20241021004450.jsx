import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const HorizontalScroll = ({ theme }) => {
  const scrollContainerRef = useRef(null);
  const scrollSpeed = 1; // Set a more reasonable scroll speed
  let requestId; // For handling smooth scroll animation

  // Automated scrolling effect with requestAnimationFrame for smooth scroll
  const smoothScroll = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollSpeed;
      
      // If the scroll reaches the end, reset to the beginning
      if (
        scrollContainerRef.current.scrollLeft +
        scrollContainerRef.current.offsetWidth >=
        scrollContainerRef.current.scrollWidth
      ) {
        scrollContainerRef.current.scrollLeft = 0;
      }
    }

    // Request the next animation frame
    requestId = requestAnimationFrame(smoothScroll);
  };

  useEffect(() => {
    requestId = requestAnimationFrame(smoothScroll); // Start the scrolling animation
    return () => cancelAnimationFrame(requestId); // Clean up on component unmount
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
          style={{ whiteSpace: 'nowrap', scrollBehavior: 'smooth' }} // Ensuring smooth scrolling
        >
          {/* Placeholders */}
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`flex-none w-60 h-40 ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-600'} rounded-lg shadow-md`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// PropTypes validation for the `theme` prop
HorizontalScroll.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default HorizontalScroll;
