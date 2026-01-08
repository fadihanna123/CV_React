import Project3 from '@assets/2.PNG';
import Project10 from '@assets/5.png';
import Project8 from '@assets/6.PNG';

export const workList: WorkList[] = [
  {
    id: 1,
    title: 'Fullstack utvecklare - Praktik',
    workPlace: 'Luday',
    start: {
      month: 'April',
      year: 2024,
    },
    end: { month: 'Augusti', year: 2024 },
  },
  {
    id: 2,
    title: 'Datakonsult - Grundare',
    workPlace: 'Södertälje Techhouse',
    city: 'Södertälje',
    start: {
      month: 'September',
      year: 2023,
    },
    end: { month: 'Augusti', year: 2024 },
  },
  {
    id: 3,
    title: 'Data admin - Konsult',
    workPlace: 'Academic Work',
    start: {
      month: 'Oktober',
      year: 2022,
    },
    end: { month: 'November', year: 2022 },
  },
  {
    id: 4,
    title: 'Systemutvecklare',
    workPlace: 'Rektron',
    city: 'Solna',
    start: {
      month: 'Januari',
      year: 2022,
    },
    end: { month: 'July', year: 2022 },
  },
  {
    id: 5,
    title: 'Javascript utvecklare',
    workPlace: 'Aqilea',
    city: 'Tumba och Älvsjö',
    start: {
      month: 'April',
      year: 2021,
    },
    end: { month: 'December', year: 2021 },
  },
  {
    id: 6,
    title: 'PHP utvecklare - Konsult',
    workPlace: 'Kringelstan Webbyrå',
    city: 'Södertälje',
    start: {
      month: 'November',
      year: 2020,
    },
    end: { month: 'December', year: 2020 },
  },
  {
    id: 7,
    title: 'Webbutvecklare - Praktik',
    workPlace: 'Kringelstan Webbyrå',
    city: 'Södertälje',
    start: {
      month: 'Oktober',
      year: 2020,
    },
    end: { month: 'November', year: 2020 },
  },
  {
    id: 8,
    title: 'Lärare inom media- och informationsteknik',
    workPlace: 'Wendela Hebbegymnasiet',
    city: 'Södertälje',
    start: {
      month: 'Augusti',
      year: 2020,
    },
    end: { month: 'September', year: 2020 },
  },
];

export const studieList: StudioList[] = [
  {
    id: 1,
    title: 'Learn Front end Development',
    schoolName: 'W3schools',
    start: {
      month: 'Februari',
      year: 2023,
    },
    end: { month: 'Februari', year: 2023 },
  },
  {
    id: 2,
    title: 'Webbutvecklingsprogrammet',
    schoolName: 'Mittuniversitetet',
    city: 'Sundsvall',
    start: {
      month: 'Augusti',
      year: 2018,
    },
    end: { month: 'Juni', year: 2020 },
  },
  {
    id: 3,
    title: 'Teknikprogrammet',
    schoolName: 'Komvux',
    city: 'Södertälje',
    start: {
      month: 'Augusti',
      year: 2013,
    },
    end: { month: 'Mars', year: 2018 },
  },
];

export const projectList: ProjectList[] = [
  {
    id: 1,
    title: 'Intranätet(Dashboard)',
    image: { path: Project3, alt: 'Intranätsprojekt' },
    links: {
      githubURL: 'https://github.com/fadihanna123/Intranat',
      URL: 'https://intranet.gssonsel.se.185-133-206-116.bb.kringelstan.se',
    },
  },
  {
    id: 2,
    title: 'PixabayFinder',
    image: { path: Project8, alt: 'PixabayFinder' },
    links: {
      githubURL: 'https://github.com/fadihanna123/PixaBayFinder',
      URL: 'https://pixabayfinderx.netlify.app',
    },
  },
  {
    id: 3,
    title: 'Datahjälp',
    image: { path: Project10, alt: 'Datahjälpsprojekt' },
    links: {
      githubURL: 'https://github.com/fadihanna123/DatahjalpProjekt',
      URL: 'https://fadihanna123.github.io/DatahjalpProjekt',
    },
  },
];
