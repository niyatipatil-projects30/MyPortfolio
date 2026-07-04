import React from 'react';

const About = () => {
  const skills = [
    'React',
    'JavaScript',
    'Java',
    'React Native',
    'C++'
  ];

  return (
    <section id="about" // <-- ADD THIS ID HERE
    className="about-section" 
    style={{ backgroundColor: '#030a16', color: '#8892b0', padding: '40px', fontFamily: 'sans-serif', maxWidth: '2000px' }}
  >
      {/* Section Heading */}
      <h2 className="section-heading" style={{ color: '#ccd6f6', fontSize: '2rem', display: 'flex', alignItems: 'center', margin: '0 0 20px 0' }}>
        <span style={{ color: '#64ffda', marginRight: '10px', fontFamily: 'monospace' }}>/</span> about me
        <span style={{ flexGrow: 1, height: '1px', backgroundColor: '#233554', marginLeft: '20px' }}></span>
      </h2>

      {/* Main Bio */}
      <p style={{ lineHeight: '1.6', fontSize: '1.1rem', marginBottom: '25px' }}>
        I am currently in the <strong>3rd year of my diploma</strong>, where I am actively building my foundation in software development. Currently, I am pursuing a learning internship at <span style={{ color: '#64ffda' }}>Elite Forums</span>, gaining hands-on experience and expanding my technical skill set.
      </p>

      {/* Skills Subsection Heading */}
      <p style={{ marginBottom: '15px',textAlign: 'left' ,color:'#64ffda'}}>
        Here are some technologies I have been working with :
      </p>

      {/* Skills Grid */}
      <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(120px, 300px))', padding: 0, margin: 0, listStyle: 'none' }}>
        {skills.map((skill, index) => (
          <li key={index} style={{position:'relative' ,paddingLeft: '15px', marginBottom: '10px', fontSize: '0.98rem', color: '#b0bfec' }}>
            <span style={{ position:'absolute',left:'0', color: '#64ffda', fontSize: '12px' }}>▶</span> {skill}
          </li>
        ))}
      </ul>

    </section>
  );
};

export default About;