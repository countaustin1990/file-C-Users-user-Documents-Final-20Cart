import HeroSection from '../../components/folder/HeroSection';
import HorizontalScroll from '../../components/horizontalscroll/HorizontalScroll.test';
import PropTypes from 'prop-types';

const Home = ({ theme }) => {
  return (
    <div className={`home ${theme}-mode`}>
      <HeroSection className={`text-3xl ${theme === 'light' ? 'text-black' : 'text-white'}`}/>
    </div>
  );
};

export default Home;
