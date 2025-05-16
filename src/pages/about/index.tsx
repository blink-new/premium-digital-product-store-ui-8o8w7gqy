import { motion } from 'framer-motion';
import { Briefcase, Users, Award, History, Globe, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Alexandra Chen',
      title: 'Founder & Creative Director',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      bio: 'With over 15 years in digital design, Alexandra founded Lumina to create a space where creators can find premium digital resources that inspire.'
    },
    {
      name: 'Marcus Johnson',
      title: 'Head of Product',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      bio: 'Marcus leads our product curation process, ensuring that every item in our marketplace meets our high standards for quality and usability.'
    },
    {
      name: 'Sarah Patel',
      title: 'Design Lead',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      bio: 'Sarah oversees our internal design team and works directly with creators to develop exclusive products for the Lumina marketplace.'
    }
  ];

  const milestones = [
    {
      year: 2016,
      title: 'Humble Beginnings',
      description: 'Lumina was founded with a simple mission: to provide high-quality digital resources for creators.'
    },
    {
      year: 2018,
      title: 'Growing Community',
      description: 'Our marketplace expanded to support over 100 independent creators and reached 50,000 customers worldwide.'
    },
    {
      year: 2020,
      title: 'Digital Innovation',
      description: 'Launched our exclusive collections program and introduced advanced product customization tools.'
    },
    {
      year: 2022,
      title: 'Global Expansion',
      description: 'Expanded our team to 30+ members across 12 countries and introduced localized experiences.'
    },
    {
      year: 2023,
      title: 'Lumina Today',
      description: 'Now serving over 500,000 customers with a curated catalog of premium digital products from world-class creators.'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        {/* Hero Section */}
        <div className="mb-20 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">Our Story</h1>
          <p className="text-slate text-lg md:text-xl mb-12 max-w-3xl mx-auto">
            Lumina began with a vision to create a marketplace where creators could find the highest quality digital resources 
            to elevate their work. Today, we're proud to be the premier destination for premium digital products.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
              alt="Lumina office"
              className="rounded-lg w-full md:w-80 h-56 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
              alt="Lumina team meeting"
              className="rounded-lg w-full md:w-80 h-56 object-cover"
            />
          </div>
        </div>

        {/* Mission & Values */}
        <div className="bg-gradient-to-br from-sapphire/5 to-amber/5 rounded-xl p-8 md:p-12 mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <div className="inline-block bg-sapphire text-pearl text-sm font-medium px-3 py-1 rounded mb-3">
                  Our Mission
                </div>
                <h2 className="text-2xl md:text-3xl font-serif mb-4">Empowering Creators Worldwide</h2>
                <p className="text-slate mb-6">
                  At Lumina, we believe in the power of high-quality digital resources to transform creative work. 
                  Our mission is to curate the finest digital products and make them accessible to creators at every level.
                </p>
                <p className="text-slate">
                  We're passionate about supporting independent creators and fostering a community where quality and 
                  craftsmanship are celebrated. Every product in our marketplace reflects our commitment to excellence.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="inline-block bg-amber text-charcoal text-sm font-medium px-3 py-1 rounded mb-3">
                  Our Values
                </div>
                <h2 className="text-2xl md:text-3xl font-serif mb-4">What Drives Us</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: <Award size={20} />, text: 'Quality Excellence' },
                    { icon: <Heart size={20} />, text: 'Creator Support' },
                    { icon: <Globe size={20} />, text: 'Global Community' },
                    { icon: <Users size={20} />, text: 'Inclusive Design' }
                  ].map((value, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                      <div className="text-sapphire">{value.icon}</div>
                      <span>{value.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline/Company History */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Journey</h2>
            <p className="text-slate max-w-2xl mx-auto">
              From humble beginnings to becoming a leading marketplace for digital products, 
              our path has been defined by a commitment to excellence and innovation.
            </p>
          </div>

          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate/10"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col ${
                    index % 2 === 0 
                      ? 'md:flex-row' 
                      : 'md:flex-row-reverse'
                  } items-center gap-8`}
                >
                  <div className="md:w-1/2 md:pr-8 md:text-right md:flex md:flex-col md:items-end">
                    <div className={`bg-sapphire rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-pearl font-bold text-xl absolute left-1/2 md:static transform -translate-x-1/2 md:translate-x-0 ${
                      index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                    }`}>
                      <History size={24} />
                    </div>
                    {index % 2 === 1 && (
                      <div className="hidden md:block py-4 px-6 bg-white shadow-sm rounded-lg max-w-sm ml-auto">
                        <div className="text-xl font-serif text-sapphire">{milestone.year}</div>
                        <h3 className="text-lg font-medium mb-2">{milestone.title}</h3>
                        <p className="text-slate">{milestone.description}</p>
                      </div>
                    )}
                  </div>
                  <div className="md:w-1/2 md:pl-8 pt-10 md:pt-0">
                    {index % 2 === 0 && (
                      <div className="md:block py-4 px-6 bg-white shadow-sm rounded-lg max-w-sm">
                        <div className="text-xl font-serif text-sapphire">{milestone.year}</div>
                        <h3 className="text-lg font-medium mb-2">{milestone.title}</h3>
                        <p className="text-slate">{milestone.description}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Meet Our Team</h2>
            <p className="text-slate max-w-2xl mx-auto">
              The passionate individuals behind Lumina who are dedicated to supporting creators and delivering exceptional digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm text-center"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-1">{member.name}</h3>
                  <div className="text-sapphire mb-4">{member.title}</div>
                  <p className="text-slate">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Join Team CTA */}
        <div className="relative overflow-hidden rounded-xl">
          <div className="relative z-10 p-12 md:p-16 lg:p-20 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-3xl md:text-4xl font-serif mb-4 text-pearl">Join Our Team</h2>
              <p className="text-pearl/80 mb-6 max-w-lg">
                We're always looking for talented individuals who are passionate about digital products and supporting creators.
              </p>
              <Link to="/contact" className="inline-flex items-center bg-pearl text-charcoal hover:bg-white px-6 py-3 rounded-md font-medium transition-all">
                <Briefcase size={18} className="mr-2" />
                View Open Positions
              </Link>
            </div>
            <div className="w-full md:w-auto">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                alt="Lumina team collaboration"
                className="rounded-lg w-full md:w-64 h-auto md:h-48 object-cover"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-sapphire to-charcoal z-0"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;