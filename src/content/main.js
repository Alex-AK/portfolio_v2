// import desktop images
import line_desktop from '../assets/project_desktop/line_desktop.jpg';
import training_bot_desktop from '../assets/project_desktop/training_bot_desktop.jpg';
import mentor_me_desktop from '../assets/project_desktop/mentor_me_desktop.jpg';
import good_time_journal_desktop from '../assets/project_desktop/good_time_journal_desktop.jpg';
import smith_and_jones_desktop from '../assets/project_desktop/smith_and_jones_desktop.jpg';

// import mobile images
import training_bot_mobile from '../assets/project_mobile/training_bot_mobile.png';
import line_mobile from '../assets/project_mobile/line_mobile.png';
import mentor_me_mobile from '../assets/project_mobile/mentor_me_mobile.png';
import good_time_journal_mobile from '../assets/project_mobile/good_time_journal_mobile.png';
import smith_and_jones_mobile from '../assets/project_mobile/smith_and_jones_mobile.png';

const content = {
  navigation: ['projects', 'services', 'writing', 'about', 'contact'],
  landing: {
    title: "Hi, I'm Alex.",
    sub_title:
      "I'm a software developer with a love for coffee, pleasant user experience, and intentionality. "
  },
  services: [
    {
      title: 'Web Development',
      summary: 'this is some summary text for web development',
      l_1: 'this is list item one',
      l_2: 'this is list item two',
      l_3: 'this is list item three',
      l_4: 'this is list item four'
    },
    {
      title: 'Web Development',
      summary: 'this is some summary text for web development',
      l_1: 'this is list item one',
      l_2: 'this is list item two',
      l_3: 'this is list item three',
      l_4: 'this is list item four'
    },
    {
      title: 'Web Development',
      summary: 'this is some summary text for web development',
      l_1: 'this is list item one',
      l_2: 'this is list item two',
      l_3: 'this is list item three',
      l_4: 'this is list item four'
    },
    {
      title: 'Web Development',
      summary: 'this is some summary text for web development',
      l_1: 'this is list item one',
      l_2: 'this is list item two',
      l_3: 'this is list item three',
      l_4: 'this is list item four'
    }
  ],
  work_together: [
    {
      title: 'Initial Assessment',
      summary: 'this is some summary text for web development',
      l_1: 'this is list item one',
      l_2: 'this is list item two',
      l_3: 'this is list item three',
      l_4: 'this is list item four'
    },
    {
      title: 'Full Service Development',
      summary: 'this is some summary text for web development',
      l_1: 'this is list item one',
      l_2: 'this is list item two',
      l_3: 'this is list item three',
      l_4: 'this is list item four'
    },
    {
      title: 'Individual Service',
      summary: 'this is some summary text for web development',
      l_1: 'this is list item one',
      l_2: 'this is list item two',
      l_3: 'this is list item three',
      l_4: 'this is list item four'
    }
  ],
  projects: [
    {
      images: {
        desktop: training_bot_desktop,
        mobile: training_bot_mobile
      },
      title: 'Training Bot',
      introduction:
        'Id consequat amet aute esse mollit incididunt excepteur. Sit exercitation sit est quis sit fugiat aliqua culpa do enim id Lorem proident adipisicing.',
      content: {
        p_1:
          'Excepteur ad dolore irure incididunt commodo ipsum do sit nostrud veniam non labore. Ex qui ullamco eiusmod in incididunt aliquip velit. Velit ex sit aliqua nostrud sunt anim anim.',
        p_2:
          'Est in mollit officia tempor ullamco do eiusmod ad pariatur ad anim reprehenderit. Duis Lorem enim dolor ea sit laboris. Adipisicing sit eu ex eu non aliquip exercitation amet.'
      },
      links: {
        github: 'https://github.com/training-bot/',
        live_site: 'https://trainingbot.co'
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
        // github: 'https://github.com/alex-ak',
        live_site: 'https://linebyhand.com'
      }
    },
    {
      title: 'Mentor Me',
      introduction:
        'Id consequat amet aute esse mollit incididunt excepteur. Sit exercitation sit est quis sit fugiat aliqua culpa do enim id Lorem proident adipisicing.',
      content: {
        p_1:
          'Excepteur ad dolore irure incididunt commodo ipsum do sit nostrud veniam non labore. Ex qui ullamco eiusmod in incididunt aliquip velit. Velit ex sit aliqua nostrud sunt anim anim.',
        p_2:
          'Est in mollit officia tempor ullamco do eiusmod ad pariatur ad anim reprehenderit. Duis Lorem enim dolor ea sit laboris. Adipisicing sit eu ex eu non aliquip exercitation amet.'
      },
      images: {
        desktop: mentor_me_desktop,
        mobile: mentor_me_mobile
      },
      links: {
        github: 'https://github.com/team-mentor-me/mentor-me-back'
        // live_site: 'https://team-mentor-me.github.io/mentor-me-landing/#'
      }
    },
    {
      title: 'Good Time Journal',
      introduction:
        'Id consequat amet aute esse mollit incididunt excepteur. Sit exercitation sit est quis sit fugiat aliqua culpa do enim id Lorem proident adipisicing.',
      content: {
        p_1:
          'Excepteur ad dolore irure incididunt commodo ipsum do sit nostrud veniam non labore. Ex qui ullamco eiusmod in incididunt aliquip velit. Velit ex sit aliqua nostrud sunt anim anim.',
        p_2:
          'Est in mollit officia tempor ullamco do eiusmod ad pariatur ad anim reprehenderit. Duis Lorem enim dolor ea sit laboris. Adipisicing sit eu ex eu non aliquip exercitation amet.'
      },
      images: {
        desktop: good_time_journal_desktop,
        mobile: good_time_journal_mobile
      },
      links: {
        github: 'https://github.com/GoodTimeJournal/react-front-end',
        live_site: 'https://goodtimejournal.netlify.com/'
      }
    },
    {
      title: 'Smith and Jones Architecture',
      introduction:
        'Id consequat amet aute esse mollit incididunt excepteur. Sit exercitation sit est quis sit fugiat aliqua culpa do enim id Lorem proident adipisicing.',
      content: {
        p_1:
          'Excepteur ad dolore irure incididunt commodo ipsum do sit nostrud veniam non labore. Ex qui ullamco eiusmod in incididunt aliquip velit. Velit ex sit aliqua nostrud sunt anim anim.',
        p_2:
          'Est in mollit officia tempor ullamco do eiusmod ad pariatur ad anim reprehenderit. Duis Lorem enim dolor ea sit laboris. Adipisicing sit eu ex eu non aliquip exercitation amet.'
      },
      images: {
        desktop: smith_and_jones_desktop,
        mobile: smith_and_jones_mobile
      },
      links: {
        github: 'https://github.com/lambda-projects-ak/sj-architecture',
        live_site: 'https://smithandjohnson.netlify.com/'
      }
    }
  ]
};

export default content;
