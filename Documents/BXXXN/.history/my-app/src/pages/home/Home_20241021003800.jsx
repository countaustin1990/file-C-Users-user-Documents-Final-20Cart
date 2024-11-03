import HeroSection from "../../components/folder/HeroSection"
import HorizontalScroll from "../../components/horizontalscroll/HorizontalScroll.test"
import { useState, useEffect } from "react";


const Home = () => {
     // State for theme, defaulting to 'dark'
  const [theme, setTheme] = useState('dark');

  // Check localStorage for saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);
  return (
    <div>
      <HeroSection/>
      <HorizontalScroll  theme={theme} />
    </div>
  )
}

export default Home
