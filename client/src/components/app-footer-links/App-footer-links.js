import React from 'react';
import '../app-footer/App-footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTelegramPlane,
  faInstagram,
  faFacebook
} from '@fortawesome/free-brands-svg-icons';
import { socialNetworkLinks } from '../../configs/frontend-config';

const AppFooterLinks = () => (
  <div className='footer-card-body'>
    <div className='footer-icons-box'>
      <div className='footer-card-title'>{socialNetworkLinks.title}</div>
      <div>
        <a
          className='footer-icon'
          href={socialNetworkLinks.telegram}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon className='icon' icon={faTelegramPlane} />
        </a>
        <a
          className='footer-icon'
          href={socialNetworkLinks.instagram}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon className='icon' icon={faInstagram} />
        </a>
        <a
          className='footer-icon'
          href={socialNetworkLinks.facebook}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon className='icon' icon={faFacebook} />
        </a>
      </div>
    </div>
  </div>
);

export default AppFooterLinks;
