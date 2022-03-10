import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './About.scss';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">A little bit <span>About Me</span></h2><br></br>
      <p className="about__para">I view myself as a coding enthusiast and I love tinkering with tech, building stuff, and 
        creating projects be it in software or web development, game development, and data science. 
        Even at home, I am in a permanent Beta Mode: Constantly learning, evolving, and getting proficient 
        in software development. My love of reading integrates well with my coding habit as I am always riffling 
        through Hacker News, programming subreddits, or tearing through books even remotely related to computer science. 
        Apart from reading, my other favorite hobby is gaming so naturally, I fused that too into my affinity for programming 
        by learning Unity. When I'm not working, I enjoy Art, Skateboarding and Reading.</p>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'), 
  'about', 
  "app__whitebg"
);