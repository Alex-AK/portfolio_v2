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
  navigation: ['projects', 'writing', 'about', 'contact'],
  // navigation: ['projects', 'services', 'writing', 'about', 'contact'],
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
      intro:
        'A full stack web application built in React to allow training managers send employees automated messages.',
      content: {
        p_1:
          'Built and deployed production level notification bot utilizing Node, MySQL, and AWS with custom written automation functions to manage notification data, interval timers, and notification triggers.',
        p_2:
          'Coordinate with team of four developers to meet daily feature goals based on agile methodologies to build and deliver a scalable React, Redux notification bot with automated text and email services.',
        p_3:
          'Utilized APIs such as Twilio, SendGrid, Auth0, and Stripe to meet feature complete deadlines.'
      },
      links: {
        github: 'https://github.com/training-bot/',
        live_site: 'https://trainingbot.co'
      }
    },
    {
      title: 'LINE',
      intro:
        'An e-commerce site built with SquareSpace to meet client requirements of being able to manage store and orders.',
      content: {
        p_1:
          'Designed and implemented a home goods e-commerce site with Content Management System (CMS).',
        p_2:
          'Produced site wire frames, UI / UX mockups for website and established new data schema for project.'
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
      intro:
        'Mentor Me lets new entrepreneurs seek advice from qualified business professionals.',
      content: {
        p_1:
          'Designed and implemented database schema with production level RESTful API endpoints for a full stack messaging application using Node and PostgreSQL based on front end endpoint requests.',
        p_2:
          'Utilized unit and integration testing with Jest to ensured integrity of endpoints and data models.',
        p_3:
          'Wrote back end documentation detailing database schema and production endpoints.'
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
      intro:
        'A full stack lifestyle design web application to track activities and weekly reflections. Built with React, Redux, and Node.',
      content: {
        p_1:
          'Coordinated with team lead, back end engineer, UI / UX and iOS developers to deliver a full stack React lifestyle web application to track daily activities and log weekly reflections.',
        p_2:
          'Implemented user authentication with JSON Web Token and bcrypt to ensure application security.',
        p_3:
          'Coordinated with back end developer to connect with RESTful API for data access and implemented Redux for application state management.'
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
      intro:
        'A modern responsive architecture website built with HTML, CSS, and custom ES6 JavaScript components.',
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
