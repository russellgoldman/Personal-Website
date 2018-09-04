import {
  gelatoBanner,
  novaBanner,
  rgBanner,
  coursehawkBanner,
  careWearBanner,
  beerBuddyBanner,
  comingSoonBanner,
  gelato,
  nova,
  rg,
  coursehawk,
  careWear,
  beerBuddy,
  comingSoon
} from './../images/projects';

export const projectData = [
  {
    id: 0,
    name: 'CareWear',
    title: 'CareWear',
    description: 'CareWear is a wearable which detects the environmental conditions around a child or pet and reports those results in real time to our React Native mobile application. A parent or pet owner can see those conditions and know if there is a danger to their loved one. It was built with React Native (mobile), Arduino (hardware), and Figma (design) at Hack the 6ix 2018 (hosted by Top Hat in Toronto) in a team of three.',
    github: 'https://github.com/russellgoldman/CareWear',
    bannerImgPath: `${careWearBanner}`,
    profileImgPath: `${careWear}`,
    toolsUsed: [
      'JavaScript',
      'React Native',
      'HTML',
      'CSS',
    ],
  },
  {
    id: 1,
    name: 'CourseHawk',
    title: 'CourseHawk',
    description: `CourseHawk is a React Native mobile application available on both iOS and Android, that makes course search effortless for students at Wilfrid Laurier University. In response to a lack of better alternatives to the school's academic calendar, CourseHawk was born. The course data for the app is fetched from the original source using a Python web scraper to then be exported for use in the app. Currently, the app allows users to view by departments and search by course codes. Future features may include user ratings, advanced filters, and wishlists.`,
    github: 'https://github.com/russellgoldman/CourseHawk',
    bannerImgPath: `${coursehawkBanner}`,
    profileImgPath: `${coursehawk}`,
    toolsUsed: [
      'JavaScript',
      'React Native',
      'Redux',
      'NodeJS',
      'MongoDB',
      'Python',
    ]
  },
  {
    id: 2,
    name: 'Portfolio Site',
    title: 'Portfolio Site',
    description: `This portfolio site (which you are currently reading) was built as a non-school related, independent software side-project. The aim of this website was tell a bit more about who I am as a person, my software related accomplishments, and to display my front-end web development skills firsthand. If you're interested in learning more, feel free to shoot me a message in the Contact form located at the bottom of this site!`,
    github: 'https://github.com/russellgoldman/Personal-Website',
    bannerImgPath: `${rgBanner}`,
    profileImgPath: `${rg}`,
    toolsUsed: [
      'JavaScript',
      'ReactJS',
      'HTML',
      'CSS'
    ]
  },
  {
    id: 3,
    name: 'Nova',
    title: 'Nova - AI Mental Health Chatbot',
    description: 'Nova is an artificially intelligent chatbot designed to act as an intelligent and non-judgemental mental health assistant with the ability to redirect students to appropriate on-campus resources at their respective university. It was created in response to the recent increase in suicide attempts at various universities across Ontario, and was developed in a team of 4 at the StarterHacks 2018 hosted at the University of Waterloo.',
    github: 'https://github.com/russellgoldman/Nova',
    bannerImgPath: `${novaBanner}`,
    profileImgPath: `${nova}`,
    toolsUsed: ['Java', 'Android', 'NodeJS']
  },
  {
    id: 4,
    name: 'Gelato',
    title: 'Gelato - Gamified Education Tool',
    description: 'Gelato is a ReactJS web app that allows teachers to put together education content such as quizzes and other practice material into a dashboard which the app then uses to populate questions with a game. The student section functions like an RPG game based on the content the teacher has made for their class. It was built at the Equithon 2018 hosted at the University of Waterloo in a team of four.',
    github: 'https://github.com/russellgoldman/Project-Gelato',
    bannerImgPath: `${gelatoBanner}`,
    profileImgPath: `${gelato}`,
    toolsUsed: [
      'JavaScript',
      'ReactJS',
      'HTML',
      'CSS',
    ],
  },
  {
    id: 5,
    name: 'BeerBuddy',
    title: 'BeerBuddy',
    description: "BeerBuddy is a Django web application that allows users of legal drinking age to search for beer brands that fit their desired criteria. It utilizes Bootstrap CSS on the frontend and a Flask API on the backend to provide intelligent search results to user queries. The API is hosted on a Heroku server that is fetched from the Django app. The project was built as part of Laurier's Software Engineering course (CP317) in a group of 20 students.",
    github: 'https://github.com/russellgoldman/CP317-Beer-Finder',
    bannerImgPath: `${beerBuddyBanner}`,
    profileImgPath: `${beerBuddy}`,
    toolsUsed: [
      'Django',
      'Flask',
      'HTML',
      'CSS',
      'Bootstrap',
    ],
  },
  {
    id: 6,
    name: 'Coming Soon',
    title: 'Coming Soon',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent felis magna, laoreet a est id, cursus condimentum quam. Praesent a dolor lectus. Nullam eget est massa. Aenean interdum, felis non finibus tempus, sem libero tempus ex, eget congue justo diam sit amet ipsum. In malesuada mollis ante, a lobortis neque ornare non. Quisque volutpat diam ligula, id sollicitudin mauris mollis sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut quam.',
    github: '',
    bannerImgPath: `${comingSoonBanner}`,
    profileImgPath: `${comingSoon}`,
    toolsUsed: [
      'Swift (learning in progress)',
      'iOS (learning in progress)',
      'NodeJS',
      'MongoDB',
    ]
  },
  {
    id: 7,
    name: 'Coming Soon',
    title: 'Coming Soon',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent felis magna, laoreet a est id, cursus condimentum quam. Praesent a dolor lectus. Nullam eget est massa. Aenean interdum, felis non finibus tempus, sem libero tempus ex, eget congue justo diam sit amet ipsum. In malesuada mollis ante, a lobortis neque ornare non. Quisque volutpat diam ligula, id sollicitudin mauris mollis sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut quam.',
    github: '',
    bannerImgPath: `${comingSoonBanner}`,
    profileImgPath: `${comingSoon}`,
    toolsUsed: [
      'JavaScript',
    ]
  },
];
