

const About = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">About Us - Your Fashion Brand</h1>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Story</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At Your Fashion Brand, we believe that fashion is more than just clothing; it’s a form of self-expression.
          Founded in 2020 by Lapparel, our journey began with a vision to create unique, stylish pieces that inspire confidence and creativity.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our mission is to empower individuals to express their personal style through high-quality, innovative designs.
          We strive to create a diverse range of clothing that caters to various tastes and preferences, ensuring that everyone can find something they love.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li><strong>Quality:</strong> We prioritize quality in every piece we create.</li>
          <li><strong>Sustainability:</strong> We are committed to sustainable practices.</li>
          <li><strong>Inclusivity:</strong> Fashion is for everyone.</li>
          <li><strong>Innovation:</strong> We embrace creativity and continuously seek new ways to innovate.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member Card */}
          {[
            {
              name: '[Founder’s Name]',
              title: 'Founder & Creative Director',
              description: 'Leads our creative vision, ensuring every collection resonates with our brand ethos.',
            },
            {
              name: '[Team Member Name]',
              title: 'Head of Marketing',
              description: 'Responsible for crafting our brand story and connecting with our community.',
            },
            {
              name: '[Team Member Name]',
              title: 'Lead Designer',
              description: 'Designs our collections, blending contemporary styles with timeless elegance.',
            },
            {
              name: '[Team Member Name]',
              title: 'Production Manager',
              description: 'Oversees the production process, ensuring quality standards.',
            },
            {
              name: '[Team Member Name]',
              title: 'Customer Experience Specialist',
              description: 'Ensures our customers have a seamless shopping experience.',
            },
          ].map((member, index) => (
            <div key={index} className="p-6 shadow-lg rounded-lg bg-white dark:bg-gray-800 transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.title}</p>
              <p className="text-gray-700">{member.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
