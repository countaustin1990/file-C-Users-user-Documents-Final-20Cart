import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './style.css'; // Add any specific styling here
import { FaArrowUp } from 'react-icons/fa'; // Import an icon for the button

const HorizontalScroll = ({ theme }) => {
  const scrollContainerRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollSpeed = 1; // Adjust speed if necessary

  // Smooth scrolling effect
  useEffect(() => {
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

    const scrollInterval = requestAnimationFrame(smoothScroll);
    return () => cancelAnimationFrame(scrollInterval);
  }, [scrollSpeed]);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Track scroll position to show/hide the button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) { // Show button after scrolling down 200px
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`horizontal-scroll ${theme}-mode`}>
      <div className="container mx-auto py-8">
        <h1 className={`text-3xl font-bold mb-6 text-center ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
          Best Trend For 2024
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

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-4 right-4 p-3 rounded-full shadow-lg ${theme === 'light' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
          aria-label="Scroll to Top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

// PropTypes validation for the `theme` prop
HorizontalScroll.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default HorizontalScroll;
