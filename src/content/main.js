import line_desktop from '../assets/line_desktop.jpg';
import line_mobile from '../assets/line_mobile.png';
import self from '../assets/alex_king.jpg';

const content = {
  navigation: ['projects', 'services', 'writing', 'about', 'contact'],
  landing: {
    title: "Hi, I'm Alex.",
    sub_title:
      "I'm a freelance software developer with a love for coffee, pleasant user experience, and intentionality.",
    image: self
  },
  projects: [
    {
      images: {
        desktop: line_desktop,
        mobile: line_mobile
      },
      title: 'LINE',
      introduction:
        'Id consequat amet aute esse mollit incididunt excepteur. Sit exercitation sit est quis sit fugiat aliqua culpa do enim id Lorem proident adipisicing.',
      content: {
        p_1:
          'Excepteur ad dolore irure incididunt commodo ipsum do sit nostrud veniam non labore. Ex qui ullamco eiusmod in incididunt aliquip velit. Velit ex sit aliqua nostrud sunt anim anim.',
        p_2:
          'Est in mollit officia tempor ullamco do eiusmod ad pariatur ad anim reprehenderit. Duis Lorem enim dolor ea sit laboris. Adipisicing sit eu ex eu non aliquip exercitation amet.'
      },
      links: {
        github: 'https://github.com/alex-ak',
        live_site: 'https://linebyhand.com/'
      }
    },
    {
      title: 'LINE',
      introduction:
        'Id consequat amet aute esse mollit incididunt excepteur. Sit exercitation sit est quis sit fugiat aliqua culpa do enim id Lorem proident adipisicing.',
      content: {
        p_1:
          'Excepteur ad dolore irure incididunt commodo ipsum do sit nostrud veniam non labore. Ex qui ullamco eiusmod in incididunt aliquip velit. Velit ex sit aliqua nostrud sunt anim anim.',
        p_2:
          'Est in mollit officia tempor ullamco do eiusmod ad pariatur ad anim reprehenderit. Duis Lorem enim dolor ea sit laboris. Adipisicing sit eu ex eu non aliquip exercitation amet.'
      },
      images: {
        desktop: line_desktop,
        mobile: line_mobile
      },
      links: {
        github: 'https://github.com/alex-ak',
        live_site: 'https://linebyhand.com/'
      }
    },
    {
      title: 'LINE',
      introduction:
        'Id consequat amet aute esse mollit incididunt excepteur. Sit exercitation sit est quis sit fugiat aliqua culpa do enim id Lorem proident adipisicing.',
      content: {
        p_1:
          'Excepteur ad dolore irure incididunt commodo ipsum do sit nostrud veniam non labore. Ex qui ullamco eiusmod in incididunt aliquip velit. Velit ex sit aliqua nostrud sunt anim anim.',
        p_2:
          'Est in mollit officia tempor ullamco do eiusmod ad pariatur ad anim reprehenderit. Duis Lorem enim dolor ea sit laboris. Adipisicing sit eu ex eu non aliquip exercitation amet.'
      },
      images: {
        desktop: line_desktop,
        mobile: line_mobile
      },
      links: {
        github: 'https://github.com/alex-ak',
        live_site: 'https://linebyhand.com/'
      }
    }
  ]
};

export default content;
