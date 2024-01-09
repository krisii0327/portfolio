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
      "In university, we learned a lot of programming languages, both of machine code and program code. Az én kedvenceim a Python és a C# voltak. After school I started to learn Javascript and Web developing with React, Next JS.",
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
    name: "Love to learning and interesting in new things.",
    description:
      "After diplome I started to learn a lot of things, what I want to learn. I started to improve myself and I started my own life in the capital town in Budapest.",
  },
  {
    id: 2,
    name: "Languages",
    description:
      "In primary school I started to learn English as first language in my life after my mother language. In middle school I started to learn russian. I loved it, but my vocabulary of words was not enough to get better. Before university I got my language exam in english (B2). After all because of the IT, I also started to learn germany. I finished one basic online school. I want to learn more it, but at the moment. I haven't got enough time for it.",
  },
  {
    id: 3,
    name: "Hobbies",
    description:
      "My hobbies are programming, hiking, sports, watching series, playing board games and the cars and car mechanics. I love to spend my night to just repair something. I also have B category driving licence and I would like to take E category.",
  },
  {
    id: 4,
    name: "Personal competences",
    description:
      "I am capable of identifying and solving problems. I am also capable for continuous learning and self-improvement, constantly developing skills and knowledge. The time managment is not question for me, I can set my goals to every week. I think my personality is very creative and open-minded. I can easily communicate with someone else.",
  },
  {
    id: 5,
    name: "Placeholder card",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
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
    info: "CarDiary App V2 is my main project at the momment. I have a lot of idea for this page, my main goal is to make a useful page to small companies. I started this page in Next JS 14. In the future, I want to share this page to the world, because in my opinion It can be useful. With this page, they can manage their own vehicles everywhere, they don't have to collect all the bills about a car. They can document it in this page easily with some easy steps in a responsive webpage."
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
    info: "This page was my first biggest project. In this page, I learned the basics of CSS, to improve my logic to Tailwind.",
  },
  {
    id: 6,
    title: "Shopping List",
    link: "https://krisii0327.github.io/shopping-list/",
    images: [
      "/images/shopping-1.png"
    ],
    github: "https://github.com/krisii0327/shopping-list",
    info: "This page was just a test for how can I play with browser console. I made a search bar."
  },
  {
    id: 7,
    title: "Testimonials grid section main",
    link: "https://krisii0327.github.io/testimonials-grid-section-main/",
    images: [
      "/images/testimonial-1.png"
    ],
    github: "https://github.com/krisii0327/testimonials-grid-section-main",
    info: "Testimonial page was helped me to understand the basics of tailwind css."
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
    duration: "2021 - NOW",
    company: "Robert Bosch Elektronika Kft. - Hatvan",
    description: [
      "Managing around 200 VM, Windows and Linux also.",
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
    duration: "2020 - 2021",
    company: "SopiaNet Kft. - Pécs",
    description: [
      "Construction and programming of security systems.",
      "Construction and configuration of camera systems.",
      "Building structured network, configuring and programming network devices.",
      "Construction and programming of fire protection systems.",
    ]
  },
  {
    id: 3,
    position: "Student",
    duration: "2015 - 2020",
    company: "Meló-Diák Dunaújváros Iskolaszövetkezet - Dunaújváros",
    description: [
      "In the most of time I worked in a Factory, where I worked in some different positions.",
      "I was in a lot of different company, where I had chance to work."
    ]
  },
];
export const schools = [
  {
    id: 1,
    name: "University of Óbuda - NIK",
    study: "Cybersecurity Engineer Master's Deegre",
    duration: "2023 - NOW",
    logo: "/images/nik.png",
  },  {
    id: 2,
    name: "University of Pécs - MIK",
    study: " Computer Science Engineer Bachelor's Deegre with System Engineer specialization",
    duration: "2018 - 2021",
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