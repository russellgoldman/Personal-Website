import {
  gelato,
  nova,
  rg,
  pawk,
  vapeCare,
  careWear,
  mcBrews,
  beerBuddy
} from './../images/projects';

export const projectData = [
  {
    id: 0,
    name: 'Pawk',
    title: 'Pawk',
    description: `
      Pawk is a course and program exploration app for students at Laurier.
      The backend architecture utilizes a Dockerized environment to containerize
      our GraphQL API and PostgreSQL database. A custom Node.js webscraper
      is also used to fetch all course / program data from Laurier's academic
      calendar and mutate it into our Postgres database. The frontend client
      was developed for Android and the project was created in a team of five.
      Pawk was built as the architectural redesign of an earlier prototype I
      built.
    `,
    github: 'https://github.com/russellgoldman/Pawk',
    profileImgPath: `${pawk}`,
    toolsUsed: [
      'Android',
      'Docker',
      'GraphQL',
      'PostgreSQL',
      'Node.js',
    ],
  },
  {
    id: 1,
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
    github: 'https://devpost.com/software/mcbrews',
    profileImgPath: `${mcBrews}`,
    toolsUsed: [
      'JavaScript',
      'React Native',
    ],
  },
  {
    id: 2,
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
    profileImgPath: `${vapeCare}`,
    toolsUsed: [
      'JavaScript',
      'React Native',
      'Figma'
    ],
  },
  {
    id: 3,
    name: 'Gelato',
    title: 'Gelato',
    description: `
      Gelato is a K-12 gamified education tool that assists teachers in making learning more practical.
      Educators populate teaching content such as quizzes into an admin dashboard which is then generated
      into an RPG game for students. For example, if a student is battling a monster, they must get the
      correct answer to deal damage and progress. Teachers also have the ability to access where students
      are succeeding and require further assistance through an analytics dashboard. Gelato was built 
      at Equithon 2018 in a team of four and we were honoured to be a Hackathon Finalist.
    `,
    github: 'https://devpost.com/software/gelato',
    profileImgPath: `${gelato}`,
    toolsUsed: [
      'JavaScript',
      'React',
      'CSS'
    ],
  },
  {
    id: 4,
    name: 'Portfolio',
    title: 'Portfolio Site',
    description: `
      This portfolio site (which you are currently reading) was built as a non-school
      related, independent software side-project during the summer of 2018. The aim of
      this website was tell a bit more about who I am, my software development projects,
      and use it as an opportunity to continue improving my frontend skills. This site
      is currently being maintained.
    `,
    github: 'https://github.com/russellgoldman/Personal-Website',
    profileImgPath: `${rg}`,
    toolsUsed: [
      'JavaScript',
      'React',
      'CSS'
    ],
  },
  {
    id: 5,
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
    github: 'https://devpost.com/software/carewear',
    profileImgPath: `${careWear}`,
    toolsUsed: [
      'JavaScript',
      'React Native',
    ],
  },
  {
    id: 6,
    name: 'Nova',
    title: 'Nova',
    description: `
      Nova is an artificially intelligent chatbot designed to act as an intelligent
      and non-judgemental mental health assistant with the ability to redirect
      students to appropriate on-campus resources at their respective university.
      It was created in response to various suicide attempts at universities across
      Ontario, and was developed in a team of four at StarterHacks 2018. We were honoured
      to be awared Best Pitch sponsored by Deloitte Digital.
    `,
    github: 'https://github.com/russellgoldman/Nova',
    profileImgPath: `${nova}`,
    toolsUsed: [
      'Java',
      'Android',
      'NodeJS',
    ],
  },
  {
    id: 7,
    name: 'BeerBuddy',
    title: 'BeerBuddy',
    description: "BeerBuddy is a Django web application that allows users of legal drinking age to search for beer brands that fit their desired criteria. It utilizes Bootstrap CSS on the frontend and a Flask API on the backend to provide intelligent search results to user queries. The API is hosted on a Heroku server that is fetched from the Django app. The project was built as part of Laurier's Software Engineering course (CP317) in a group of 20 students.",
    github: 'https://github.com/russellgoldman/CP317-Beer-Finder',
    profileImgPath: `${beerBuddy}`,
    toolsUsed: [
      'Django',
      'Flask',
    ],
  }
];
