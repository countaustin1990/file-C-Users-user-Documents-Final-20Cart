import HeroSection from '../../components/folder/HeroSection';
import HorizontalScroll from '../../components/horizontalscroll/HorizontalScroll'; // Corrected import
import PropTypes from 'prop-types';

const Home = ({ theme }) => {
  return (
    <div className={`home ${theme}-mode`}>
      <HeroSection theme={theme} /> {/* Pass the theme to HeroSection */}
      <HorizontalScroll theme={theme} /> {/* Added HorizontalScroll component */}
    </div>
  );
};

// PropTypes validation for the `theme` prop
Home.propTypes = {
  theme: PropTypes.string.isRequired, // theme is required and should be a string
};

export default Home;
