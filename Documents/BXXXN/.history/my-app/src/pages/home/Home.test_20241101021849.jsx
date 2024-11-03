import HeroSection from '../../components/folder/HeroSection.test';
import HorizontalScroll from '../../components/horizontalscroll/HorizontalScroll.test'; // Corrected import
import PropTypes from 'prop-types';

const Home = ({ theme }) => {
  return (
    <div className={`home ${theme}-mode`}>
      <HorizontalScroll theme={theme} /> {/* Added HorizontalScroll component */}
      <HeroSection theme={theme} /> {/* Pass the theme to HeroSection */}
    </div>
  );
};

// PropTypes validation for the `theme` prop
Home.propTypes = {
  theme: PropTypes.string.isRequired, // theme is required and should be a string
};

export default Home;
