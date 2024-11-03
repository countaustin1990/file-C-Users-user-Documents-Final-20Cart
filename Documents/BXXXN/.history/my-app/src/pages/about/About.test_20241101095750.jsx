import PropTypes from 'prop-types';
import TeamMember1 from '../../assets/TeamMember1.webp'; // Adjust paths based on your project structure
import TeamMember2 from '../../assets/teammember2.jpeg';
import TeamMember3 from '../../assets/TeamMember3.jpeg';

const About = ({ theme }) => {
  const teamMembers = [
    {
      name: 'Sholar Adegboye',
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
    <div
      className={`container-fluid h-full py-16 px-6 md:px-12 lg:px-24 xl:px-48 ${
        theme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-900 text-gray-200'
      }`}
    >
      <h1 className="text-5xl font-bold text-center mb-10 tracking-widest leading-tight">
        About Us
      </h1>
      <p className="text-xl text-center mb-8 max-w-3xl mx-auto leading-relaxed">
        At our fashion brand, we believe in creating bespoke pieces that reflect your individuality and style. Our journey began with a passion for fashion and a desire to make high-quality clothing accessible to everyone.
      </p>
      <h2 className="text-3xl font-semibold mb-6 text-center uppercase tracking-wide">
        Our Mission
      </h2>
      <p className="text-lg text-center mb-12 max-w-2xl mx-auto leading-relaxed">
        Our mission is to empower individuals through fashion, providing unique pieces that tell your story. We strive to maintain the highest standards of craftsmanship while ensuring sustainability in our processes.
      </p>
      <h2 className="text-3xl font-semibold mb-6 text-center uppercase tracking-wide">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`p-6 shadow-xl rounded-lg transition-transform transform hover:scale-105 ${
              theme === 'light'
                ? 'bg-gray-100 border border-gray-300 hover:bg-gray-800 hover:text-gray-100'
                : 'bg-gray-800 border border-gray-600 hover:bg-gray-100 hover:text-gray-800'
            }`}
          >
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-full h-48 object-cover rounded-lg mb-4 transition-all duration-300 hover:shadow-lg"
            />
            <h3 className="text-2xl font-bold mb-1 tracking-wide text-center">
              {member.name}
            </h3>
            <p className="text-md text-center mb-2 opacity-70">{member.role}</p>
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
