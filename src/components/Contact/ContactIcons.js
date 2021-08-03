import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InlineIcon } from '@iconify/react';

import data from '../../data/contact';

const ContactIcons = () => (
  <ul className="icons">
    {data.map((s) => (
      <li key={s.label}>
        <a href={s.link}>
          <FontAwesomeIcon icon={s.icon} />
          <InlineIcon icon={s.icon} />
        </a>
      </li>
    ))}
  </ul>
);

export default ContactIcons;
