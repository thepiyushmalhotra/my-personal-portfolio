import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaMediumM } from 'react-icons/fa';

const SocialMedia = () => {
  return (
  <div className="app__social">
    <div>
      <a target="_blank" href="https://github.com/thepiyushmalhotra" rel="noreferrer">
      <BsGithub />
      </a> 
    </div>
    <div>
      <a target="_blank" href="https://www.linkedin.com/in/thepiyushmalhotra/" rel="noreferrer">
      <BsLinkedin />
      </a>
    </div>
    <div>
      <a target="_blank" href="https://thepiyushmalhotra.medium.com/" rel="noreferrer">
      <FaMediumM />
      </a>
    </div>
  </div>
  );
};

export default SocialMedia;