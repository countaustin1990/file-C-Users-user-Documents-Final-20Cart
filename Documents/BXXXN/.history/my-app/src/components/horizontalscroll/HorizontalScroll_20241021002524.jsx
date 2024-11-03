import { useEffect, useRef } from 'react';
import './style.css'; // Optional for additional styling

const HorizontalScroll = () => {
  const scrollContainerRef = useRef(null);
  const scrollSpeed = 2; // Adjust the speed of automated scroll
  const intervalTime = 50; // Interval for the scroll speed (in milliseconds)

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      // Automatically scroll right
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += scrollSpeed;
      }

      // Reset the scroll to the beginning if at the end
      if (
        scrollContainerRef.current.scrollLeft + 
        scrollContainerRef.current.offsetWidth >=
        scrollContainerRef.current.scrollWidth
      ) {
        scrollContainerRef.current.scrollLeft = 0; // Loop back to the start
      }
    }, intervalTime);

    // Clear the interval when component is unmounted
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Automated Horizontal Scroll Bar
      </h1>

      {/* Scrollable Container */}
      <div
        className="overflow-x-auto flex gap-6 items-center scroll-smooth"
        ref={scrollContainerRef}
        style={{ whiteSpace: 'nowrap' }} // To prevent wrapping of content
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
    </div>
  );
};

export default HorizontalScroll;
