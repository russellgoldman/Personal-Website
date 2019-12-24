import {
  gelatoBanner,
  novaBanner,
  rgBanner,
  pawkBanner,
  vapeCareBanner,
  careWearBanner,
  mcBrewsBanner,
  beerBuddyBanner,
  comingSoonBanner,
  gelato,
  nova,
  rg,
  pawk,
  vapeCare,
  careWear,
  mcBrews,
  beerBuddy,
  comingSoon
} from './../images/projects';

export const projectData = [
  {
    id: 0,
    name: 'Pawk',
    title: 'Pawk',
    description: `
      Pawk is a course and program exploration app for students at Laurier.
      The backend architecture utilizes a Dockerized environment to ensure
      consistency across platforms and the ability to provide scalability
      for our GraphQL API and PostgreSQL database. A custom Node.js webscraper
      is also used to fetch all course / program data from Laurier's academic
      calendar and mutate it into our Postgres database. The frontend client
      was developed for Android and the project was created in a team of five.
      Pawk was built as the second iteration of an independent side project
      that I developed in the summer of 2018.
    `,
    github: 'https://github.com/russellgoldman/Pawk',
    bannerImgPath: `${pawkBanner}`,
    profileImgPath: `${pawk}`,
    toolsUsed: [
      'Android',
      'Docker',
      'GraphQL',
      'PostgreSQL',
      'Node.js',
    ]
  },
  {
    id: 1,
    name: 'VapeCare',
    title: 'VapeCare',
    description: `
      VapeCare is a health care tool to assist users in moderating their vape
      consumption. I'm quite proud of this project as I took on more of a
      project management role than in past, having come up with the idea,
      analyzed how to market it to judges and potential investors, and
      recruiting the right team to help bring it to life. My individual
      work consisted of scoping out our business plan and user experience,
      designing the user interface, and developing the cross platform mobile
      app all within 36 hours. VapeCare was built in a group of four at Hack
      the North 2019.
    `,
    github: 'https://devpost.com/software/vapecare',
    bannerImgPath: `${vapeCareBanner}`,
    profileImgPath: `${vapeCare}`,
    toolsUsed: [
      'JavaScript',
      'React Native',
      'Figma'
    ],
  },
  {
    id: 2,
    name: 'McBrews',
    title: 'McBrews',
    description: `
      McBrews is a bar concept which allows users to browse the drink menu
      and place their order(s) right through their mobile devices. Bartenders
      receive the order, prepare the drinks and place completed orders on
      a conveyor belt queuing platform. Users receive a text notification
      when their drink is ready, and tap their phones at any of the provided
      pickup terminals (using NFC technology) to transport their order.
      I came up with the idea, built the mobile app with React Native,
      and completed the project in a team of 4 at McHacks 2019.
      We were honoured to be a Top 6 Finalist.
    `,
    github: 'https://github.com/russellgoldman/McBrews',
    bannerImgPath: `${mcBrewsBanner}`,
    profileImgPath: `${mcBrews}`,
    toolsUsed: [
      'JavaScript',
      'React Native',
    ],
  },
  {
    id: 3,
    name: 'CareWear',
    title: 'CareWear',
    description: `
      CareWear is a wearable which detects the environmental conditions around
      a child or pet and reports those results in real time to our React Native
      mobile application. A parent or pet owner can see those conditions and
      know if there is a danger to their loved one. It was built with React
      Native (mobile), Arduino (hardware), and Figma (design) at Hack the 6ix
      2018 (hosted by Top Hat in Toronto) in a team of three.
    `,
    github: 'https://github.com/russellgoldman/CareWear',
    bannerImgPath: `${careWearBanner}`,
    profileImgPath: `${careWear}`,
    toolsUsed: [
      'JavaScript',
      'React Native',
    ],
  },
  {
    id: 4,
    name: 'Portfolio Site',
    title: 'Portfolio Site',
    description: `This portfolio site (which you are currently reading) was built as a non-school related, independent software side-project. The aim of this website was tell a bit more about who I am as a person, my software related accomplishments, and to display my front-end web development skills firsthand. If you're interested in learning more, feel free to shoot me a message in the Contact form located at the bottom of this site!`,
    github: 'https://github.com/russellgoldman/Personal-Website',
    bannerImgPath: `${rgBanner}`,
    profileImgPath: `${rg}`,
    toolsUsed: [
      'JavaScript',
      'React',
    ]
  },
  {
    id: 5,
    name: 'Nova',
    title: 'Nova - AI Mental Health Chatbot',
    description: 'Nova is an artificially intelligent chatbot designed to act as an intelligent and non-judgemental mental health assistant with the ability to redirect students to appropriate on-campus resources at their respective university. It was created in response to the recent increase in suicide attempts at various universities across Ontario, and was developed in a team of 4 at the StarterHacks 2018 hosted at the University of Waterloo.',
    github: 'https://github.com/russellgoldman/Nova',
    bannerImgPath: `${novaBanner}`,
    profileImgPath: `${nova}`,
    toolsUsed: ['Java', 'Android', 'NodeJS']
  },
  {
    id: 6,
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
    id: 7,
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
  }
];
