import HeroSection from "../../components/folder/HeroSection"
import HorizontalScroll from "../../components/horizontalscroll/HorizontalScroll"
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
    <div className={`app ${theme}-mode`}>
      <HeroSection/>
      <HorizontalScroll />
    </div>
  )
}

export default Home
