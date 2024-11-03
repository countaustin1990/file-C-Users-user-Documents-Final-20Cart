import PropTypes from 'prop-types';
import TeamMember1 from '../../assets/TeamMember1.webp'; // Adjust paths based on your project structure
import TeamMember2 from '../../assets/teammember3.jpeg';
import TeamMember3 from '../../assets/TeamMember3.jpeg';

const About = ({ theme }) => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Founder & Designer',
      imageUrl: TeamMember1,
    },
    {
      name: 'Jane Smith',
      role: 'Head Tailor',
      imageUrl: TeamMember2,
    },
    {
      name: 'Emily Johnson',
      role: 'Marketing Specialist',
      imageUrl: TeamMember3,
    },
  ];

  return (
    <div className={`container-fluid h-70 py-12 px-4 ${theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'}`}>
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <p className="text-lg mb-6 p-6 container mx-auto">
        At our fashion brand, we believe in creating bespoke pieces that reflect your individuality and style. Our journey began with a passion for fashion and a desire to make high-quality clothing accessible to everyone.
      </p>
      <h2 className="text-3xl font-semibold mb-4 text-center">Our Mission</h2>
      <p className="mb-8 p-6 container mx-auto">
        Our mission is to empower individuals through fashion, providing unique pieces that tell your story. We strive to maintain the highest standards of craftsmanship while ensuring sustainability in our processes.
      </p>
      <h2 className="text-3xl font-semibold mb-4 text-center">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className={`p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 ${theme === 'light' ? 'bg-white border border-gray-300 hover:bg-gray-700 hover:text-gray-200' : 'bg-gray-700 border border-gray-600 hover:bg-gray-200 hover:text-gray-700'}`}>
            <img src={member.imageUrl} alt={member.name} className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <p className={`p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 ${theme === 'light' ? 'bg-white border border-gray-300 hover:bg-gray-300 hover:text-gray-200' : 'bg-gray-700 border border-gray-600 hover:bg-gray-200 hover:text-gray-700'}`}>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// PropTypes validation
About.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default About;