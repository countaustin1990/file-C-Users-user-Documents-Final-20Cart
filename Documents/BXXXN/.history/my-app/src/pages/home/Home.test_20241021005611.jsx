import HorizontalScroll from '../../components/horizontalscroll/HorizontalScroll.test';

const Home = ({ theme }) => {
  return (
    <div className={`home ${theme}-mode`}>
      <h1 className={`text-3xl ${theme === 'light' ? 'text-black' : 'text-white'}`}>Welcome to the Home Page</h1>
      {/* Include your other components */}
      <HorizontalScroll theme={theme} />
    </div>
  );
};

export default Home;
