
const asset = (p) => `${import.meta.env.BASE_URL}${p}`

export const programs = [
  {
    code: 'BSCS',
    name: 'Computer Science',
    degree: 'Bachelor of Science in Computer Science',
    desc: 'The Computer Science (CS) Program is designed for students who want to study computing in depth, focusing on the software and the hardware.',
    logo: asset('logos/cs.png'),
    alt: 'Computer Science Society logo',
    color: '#2f80ed',
    url: 'https://www.ccs.cpu.edu.ph/'
  },
  {
    code: 'BSIT',
    name: 'Information Technology',
    degree: 'Bachelor of Science in Information Technology',
    desc: 'The Information Technology (IT) program is designed to bridge the gap between computer science and management information systems.',
    logo: asset('logos/itso.png'),
    alt: 'ITSO logo',
    color: '#fcae1e',
    url: 'https://www.ccs.cpu.edu.ph/'
  },
  {
    code: 'BSDMIA',
    name: 'Digital Media and Interactive Arts',
    degree: 'Bachelor of Science in Digital Media and Interactive Arts',
    desc: 'The Degree of Bachelor of Science in Digital Media and Interactive Arts is focused on creativity, applied arts and digital media technologies.',
    logo: asset('logos/midas.png'),
    alt: 'MIDAS logo',
    color: '#e8833a',
    url: 'https://www.ccs.cpu.edu.ph/'
  },
  {
    code: 'BLIS',
    name: 'Library and Information Science',
    degree: 'Bachelor of Library and Information Science',
    desc: 'The Degree of Bachelor of Library and Information Science (BLIS) is a four-year program that prepares students in the development of library and information systems and services.',
    logo: asset('logos/lisso.png'),
    alt: 'LISSO logo',
    color: '#c0392b',
    url: 'https://www.ccs.cpu.edu.ph/library-information-science/'
  }
]
