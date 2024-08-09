import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import logo_footer from "@/assets/logo_footer.jpg";

type Props = {}

const Footer: React.FC<Props> = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="container mx-auto px-4 md:px-0 flex flex-col md:flex-row gap-16">
        <div className="md:basis-1/2">
          <h3 className="font-bold text-2xl">AURA</h3>
          <p className="my-5">
            At Aura Gym, we're dedicated to transforming your body and mind.
            Our team is here to help you achieve your goals and support you every step of the way on your fitness journey.
          </p>
          <p>© Aura Gym. All Rights Reserved.</p>
          <img src={logo_footer} alt="logo" className="mt-4" style={{ height: '100px', width: '100px' }} />
        </div>
        <div className="md:basis-1/4">
          <h4 className="font-bold text-xl">Links</h4>
          <div className="my-5">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800 my-2">
              <FontAwesomeIcon icon={faFacebook} className="mr-2" />
              Facebook
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-pink-600 hover:text-pink-800 my-2">
              <FontAwesomeIcon icon={faInstagram} className="mr-2" />
              Instagram
            </a>
          </div>
        </div>
        <div className="md:basis-1/4">
          <h4 className="font-bold text-xl">Contact Us</h4>
          <p className="my-5 flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            <a href="mailto:email123@gmail.com" className="text-blue-600 hover:underline">email123@gmail.com</a>
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            <a href="tel:123456789" className="text-blue-600 hover:underline">123-456-789</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
