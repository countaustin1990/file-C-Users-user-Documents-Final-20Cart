import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './style.css'; // Add any specific styling here

const HorizontalScroll = ({ theme }) => {
  const scrollContainerRef = useRef(null);
  const scrollSpeed = 1; // Adjust speed if necessary

  // Automated scrolling effect using requestAnimationFrame for smoother scroll
  const smoothScroll = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollSpeed;
      // Reset scroll when it reaches the end
      if (
        scrollContainerRef.current.scrollLeft +
        scrollContainerRef.current.offsetWidth >=
        scrollContainerRef.current.scrollWidth
      ) {
        scrollContainerRef.current.scrollLeft = 0;
      }
    }
    requestAnimationFrame(smoothScroll);
  };

  useEffect(() => {
    const scrollInterval = requestAnimationFrame(smoothScroll);
    return () => cancelAnimationFrame(scrollInterval);
  }, []);

  return (
    <div className={`horizontal-scroll ${theme}-mode`}>
      <div className="container mx-auto py-8">
        <h1 className={`text-3xl font-bold mb-6 text-center ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
          Automated Horizontal Scroll Bar
        </h1>

        <div
          className={`overflow-x-auto flex gap-6 items-center scroll-smooth p-4 ${
            theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'
          }`}
          ref={scrollContainerRef}
          style={{ whiteSpace: 'nowrap', scrollBehavior: 'smooth' }}
        >
          {/* Placeholder elements */}
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
