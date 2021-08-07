import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faXing } from '@fortawesome/free-brands-svg-icons/faXing';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faFile } from '@fortawesome/free-regular-svg-icons/faFile';
import leetcodeIcon from '@iconify-icons/simple-icons/leetcode';

// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/ayushshrma',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://facebook.com/',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'https://leetcode.com/realayushsharma/',
    label: 'LeetCode',
    icon: leetcodeIcon,
  },
  {
    link: 'https://www.linkedin.com/in/ayushsharmaa',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://www.dropbox.com/s/vonhd1w9ujp2ntx/Ayush_Resume.pdf?dl=1',
    label: 'Resume',
    icon: faFile,
  },
  {
    link: 'https://www.xing.com/profile/Ayush_Sharma9/',
    label: 'Xing',
    icon: faXing,
  },
  {
    link: 'mailto:sharmaayush20999@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
