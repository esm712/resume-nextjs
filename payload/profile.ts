import { faEnvelope, faPen } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/profile_image.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '이승민',
  },
  contact: [
    {
      title: '0283esm@naver.com',
      link: 'mailto:0283esm@naver.com',
      icon: faEnvelope,
    },
    {
      link: 'https://github.com/esm712',
      icon: faGithub,
    },
    {
      link: 'https://www.linkedin.com/in/hokkom/',
      icon: faLinkedin,
    },
    {
      link: 'https://hokkom.tistory.com/',
      icon: faPen,
    },
  ],
  notice: {
    title:
      "The content below is all fictitious and is just a sample from 'https://github.com/uyu423/resume-nextjs'.",
    icon: faBell,
  },
};

export default profile;
