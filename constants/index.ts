import { Github, Linkedin, Mail, MapPin, Phone, ShieldAlert, Presentation, Code, Network, Computer, Cloud, Box, Database } from "lucide-react";

export const navLinks = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Experience",
    url: "/experience",
  },
  {
    label: "Portfolio",
    url: "/portfolio",
  },
  {
    label: "Contact",
    url: "/contact",
  },
];
export const skills = [
  {
    id: 1,
    name: "Microsoft Windows and Linux operating systems",
    description:
      "In my studies, I learned a lot of things about the systems, how can I manage them in a small or a bigger company. In my university they preffered to teach Linux systems, but we also made a lot of task in Windows too.",
    icon: Computer,
  },
  {
    id: 2,
    name: "Network knowledge",
    description:
      "The networking lessons were the most interesting for me. We learned about the Internet history after that we started to use Cisco. This program was the first lesson to me to understand the companies network solutions. I can recommend this program to everyone who want to get some knowledge about the networks. This topic is enourmous.",
    icon: Network,
  },
  {
    id: 3,
    name: "Programming languages",
    description:
      "In university, we learned a lot of programming languages, both of machine code and program code. My favourites were C# and Python. After school I started to learn Javascript and Web developing with React, Next JS.",
    icon: Code,
  },
  {
    id: 4,
    name: "Cybersecurity techniques",
    description:
      "I am still learning it, but it's very interesting. In the future this techniques can be useful. The world is evolving and every electic tool can be hacked if we don't make protocols to secure them.",
    icon: ShieldAlert,
  },
  {
    id: 5,
    name: "Cloud Networking",
    description:
      "After the basics of networking, I started to use OpenStack and AWS Amazon. I want to get more knowledge of these because in the future I think every company will use some of the cloud technics.",
    icon: Cloud,
  },
  {
    id: 6,
    name: "Office programs",
    description:
      "Like most of the people, I can use them as well. In my studies we had to use them a lot. We learned how can we make good documents or excel sheets.",
    icon: Presentation,
  },
  {
    id: 7,
    name: "Basics in 3D modelling",
    description:
      "I learned it from my last college flatmate. It was very interesting to me, I learned how can I modell little things and 3D print them. This helped me to see things in 3D and my logic is improved.",
    icon: Box,
  },
  {
    id: 8,
    name: "Knowledge of Databases",
    description:
      "I learned about MSSQL in university, but I also know a lot of things about the Oracle. In my hobby projects I used MongoDB. I love to make difficult SQL queries.",
    icon: Database,
  },
];
export const infocards = [
  {
    id: 1,
    name: "Love to learn and interested in new things.",
    description:
      "After university I started to learn a lot of new things to me, what I was interested in. I wanted to improve in IT, so I moved to the capital town, Budapest, because I could find lot more opportunities there.",
  },
  {
    id: 2,
    name: "Languages",
    description:
      "In primary school I started to learn English as my second language. In middle school I started to learn russian. I loved it, but my vocabulary of words was not enough to get better. Before University I got my language exam in English (B2). After all because of the IT, I also started to learn German. I finished one basic online school what provided by my company. I would like to learn more German, but at the moment, I haven't got enough time for it.",
  },
  {
    id: 3,
    name: "Hobbies",
    description:
      "My hobbies are programming, hiking, sports, watching series, playing board games and also I am interested in  cars and car mechanics. I like to spend my time with just repairing things. I also have B category driving licence and I would like to take E category in the future.",
  },
  {
    id: 4,
    name: "Personal competences",
    description:
      "I am capable of identifying and solving problems. I am also capable of continuous learning and self-improvement, constantly developing skills and knowledge. The time managment is not a question for me, I can set my goals for every week. I think my personality is very creative and open-minded. I can easily communicate with anybody.",
  },
  {
    id: 5,
    name: "Goals",
    description:
      "In the future I would like to get my Master's degree at Cyber Security. I also want to take more German lessons because I want to take a German language exam too. I want to improve my programming skills and my logic to solve more difficult IT problems.",
  },
];
export const portfolios = [
  {
    id: 1,
    title: "CarDiary App V2",
    link: "https://krisii0327-cardiary.vercel.app",
    images: [
      "/images/mainproject-1.png",
      "/images/mainproject-2.png",
      "/images/mainproject-3.png",
    ],
  },
  {
    id: 2,
    title: "Food Ordering App",
    link: "https://krisii0327-food-ordering.vercel.app",
    images: [
      "/images/foodordering-1.png",
      "/images/foodordering-2.png",
      "/images/foodordering-3.png",
    ],
  },
  {
    id: 3,
    title: "Ablakozok CSS",
    link: "https://krisii0327.github.io/ablakozok/",
    images: [
      "/images/ablakozok-1.png",
      "/images/ablakozok-2.png",
      "/images/ablakozok-3.png",
    ],
  }
];

export const portfoliosAll = [
  {
    id: 1,
    title: "CarDiary App V2",
    link: "https://krisii0327-cardiary.vercel.app",
    images: [
      "/images/mainproject-1.png",
      "/images/mainproject-2.png",
      "/images/mainproject-3.png",
    ],
    github: "https://github.com/krisii0327/cardiary-app",
    info: "CarDiary App V2 is my main project at the momment. I have a lot of idea for this project, my main goal is to make a useful page to small companies. I started this page in Next JS 14. In the future, I want to share this with the world, because in my opinion it can be useful. With this application, they can manage their own vehicles everywhere, they don't have to collect all the bills about a car. They can document it in here easily with a few steps in a responsive webpage."
  },
  {
    id: 2,
    title: "Food Ordering App",
    link: "https://krisii0327-food-ordering.vercel.app",
    images: [
      "/images/foodordering-1.png",
      "/images/foodordering-2.png",
      "/images/foodordering-3.png",
    ],
    github: "https://github.com/krisii0327/food-ordering/tree/master",
    info: "The Food Ordering App was a project, what I started because I wanted to know, how can I use providers in a project. For example because of Stripe, I can test the purchase in a website. I can make E-Commerce website with this logic easily.",
  },
  {
    id: 3,
    title: "CarDiary App V1",
    link: "https://krisii0327-oldcardiary.vercel.app",
    images: [
      "/images/cardiaryv1-1.png",
      "/images/cardiaryv1-2.png",
      "/images/cardiaryv1-3.png",
    ],
    github: "https://github.com/krisii0327/carDiary",
    info: "This project was my idea, I created it with React, Next JS 13 and Tailwind. I learned a lot from this project. I am not gonna finish it because a lot of things get updates in Next JS 14. This project was good for me to make a responsive webpage with Tailwind and Javascript and MongoDB, to get better at backend and in frontend also."
  },
  {
    id: 4,
    title: "ProShop",
    link: "",
    images: [
      "/images/proshop-1.png",
      "/images/proshop-2.png",
      "/images/proshop-3.png",
    ],
    github: "https://github.com/krisii0327/proshop-mern",
    info: "This project created by Traversy Media. This project was a big lesson for me. I learned a lot of things from it, what I used in other projects."
  },
  {
    id: 5,
    title: "Ablakozok CSS",
    link: "https://krisii0327.github.io/ablakozok/",
    images: [
      "/images/ablakozok-1.png",
      "/images/ablakozok-2.png",
      "/images/ablakozok-3.png",
    ],
    github: "https://github.com/krisii0327/ablakozok",
    info: "This page was my first bigger HTML project. In this page, I learned the basics of CSS to improve my logic to Tailwind.",
  },
  {
    id: 6,
    title: "Shopping List",
    link: "https://krisii0327.github.io/shopping-list/",
    images: [
      "/images/shopping-1.png"
    ],
    github: "https://github.com/krisii0327/shopping-list",
    info: "This page was just a test for how can I use the browser console to make Javascript. I made a search bar with it."
  },
  {
    id: 7,
    title: "Testimonials grid section main",
    link: "https://krisii0327.github.io/testimonials-grid-section-main/",
    images: [
      "/images/testimonial-1.png"
    ],
    github: "https://github.com/krisii0327/testimonials-grid-section-main",
    info: "Testimonial page helped me to understand the basics of Tailwind CSS."
  }
];

export const socialLinks = [
  {
    id: 1,
    label: "Linkedin",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/kristofkovesi/",
  },
  {
    id: 2,
    label: "Github",
    icon: Github,
    url: "https://github.com/krisii0327",
  },
];
export const contactDetails = [
  {
    id: 1,
    icon: Phone,
    text: "+36/20/232-9642",
    detail: "Call me"
  },
  {
    id: 2,
    icon: Mail,
    text: "kovesi44@gmail.com",
    detail: "Email me"
  },
  {
    id: 3,
    icon: MapPin,
    text: "Budapest, Hungary",
    detail: "Location"
  },
];
export const timeline = [
  {
    id: 1,
    position: "IT MES System Engineer",
    duration: "2022 - NOW",
    company: "Robert Bosch Elektronika Kft. - Hatvan",
    description: [
      "Managing around 200 VM, Windows and Linux also.",
      "Management of user rights - with the company own programs",
      "Managing MSSQL and Oracle databases, writing SQL querys.",
      "Working with MES, SAP.",
      "Creating C# and PowerShell/Bash scripts.",
      "Support the Factory production with new solutions.",
      "Support new production lines / robots from the MES configuration side.",
    ]
  },
  {
    id: 2,
    position: "Network Builder - System Engineer trainee",
    duration: "2021 - 2022",
    company: "SopiaNet Kft. - Pécs",
    description: [
      "Construction and programming of security systems.",
      "Construction and configuration of camera systems.",
      "Building structured network, configuring and programming network devices.",
      "Building RACK storages and documentation about the whole RACK managment",
      "Construction and programming of fire protection systems.",
    ]
  },
  {
    id: 3,
    position: "Student",
    duration: "2015 - 2020",
    company: "Meló-Diák Dunaújváros Iskolaszövetkezet - Dunaújváros",
    description: [
      "In most of the time I worked in a Factory, where I got the opportunity to see different positions.",
      "I had the chance to work in a lot of different type of companies."
    ]
  },
];
export const schools = [
  {
    id: 1,
    name: "University of Óbuda - NIK",
    study: "Cybersecurity Engineer Master's Degree",
    duration: "2023 - NOW",
    logo: "/images/nik.png",
  },  {
    id: 2,
    name: "University of Pécs - MIK",
    study: " Computer Science Engineer Bachelor's Degree with System Engineer specialization",
    duration: "2018 - 2022",
    logo: "/images/mik.jpg",
  },  {
    id: 3,
    name: "University of Kecskemét - GAMF",
    study: "System Administrator Engineer Assistant",
    duration: "2017 - 2019",
    logo: "/images/gamf.png",
  },  {
    id: 4,
    name: "István Széchényi High School - Dunaújváros",
    study: "Graduation",
    duration: "2011 - 2017",
    logo: "/images/szig.jpg",
  }
]