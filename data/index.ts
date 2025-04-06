export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "News", link: "#news" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Great products start with great communication. Let's bring your ideas to life, together.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.webp",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "I aspire to deliver solutions beyond time zones and borders.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Driven by Technology and Innovation",
    description: "Building solutions with passion and purpose.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building Campaign Management Site.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Devium - Interactive Code Editor",
    des: "Devium is a real-time code editor that lets users write, execute, and share code in up to 10 languages.",
    img: "/p1-devium.webp",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/dock.svg", "/c.svg"],
    link: "https://devium-nine.vercel.app/",
  },
  {
    id: 2,
    title: "Chatzy",
    des: "Chatzy is a real-time chat application built with MERN stack, integrated AI chatbot and 30+ themes.",
    img: "/p2-chatzy.webp",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/mongo.svg",
      "/cloud.svg",
      "/gemini.webp",
    ],
    link: "https://chatzy-mxp8.onrender.com/",
  },
  {
    id: 3,
    title: "Flauntify",
    des: "Flauntify is your one-stop shopping platform. Seamlessly browse, shop, and pay with ease.",
    img: "/p3-flauntify.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ex.webp", "/mongo.svg", "/cloud.svg"],
    link: "https://flauntify.vercel.app/",
  },
  {
    id: 4,
    title: "ReferralHub",
    des: "ReferralHub helps businesses launch campaigns, track referrals, and analyze performance—all in one place.",
    img: "/p4-referralhub.webp",
    iconLists: ["/re.svg", "/tail.svg", "/mongo.svg", "/ex.webp", "/gemini.webp"],
    link: "https://referral-hub-alpha.vercel.app/",
  },
];

export const news = [
  {
    quote:
      "I actively participated in Smart India Hackathon (SIH) 2024, where I developed an innovative platform enabling farmers to directly sell their crops to retailers, effectively eliminating middlemen and ensuring better profitability for farmers.",
    name: "Suyash Pandey",
    title: "Author",
  },
  {
    quote:
      "I secured the Second Runner-Up position in the RBI@90 State-Level Quiz, competing among 200+ teams and demonstrating strong analytical and problem-solving skills. This achievement was further recognized with a cash prize of ₹1 Lakh.",
    name: "Suyash Pandey",
    title: "Author",
  },
  {
    quote:
      "I have also recently started learning Machine Learning and Deep Learning, expanding my technical skill set to explore cutting-edge technologies and their real-world applications.",
    name: "Suyash Pandey",
    title: "Author",
  },
  {
    quote:
      "I have solved 500+ coding problems on various competitive programming platforms, continuously honing my problem-solving abilities and enhancing my technical expertise.",
    name: "Suyash Pandey",
    title: "Author",
  },
  // {
  //   quote:
  //     "",
  //     name: "Suyash Pandey",
  //   title: "Author",
  // },
];

export const companies = [
  {
    id: 1,
    name: "nextjs",
    img: "/next.svg",
    nameImg: "/nextName.png",
  },
  {
    id: 2,
    name: "typescript",
    img: "/ts.svg",
    nameImg: "/tsName.webp",
  },
  {
    id: 3,
    name: "mongoDB",
    img: "/mongo.svg",
    nameImg: "/mongoName.jpg",
  },
  {
    id: 4,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 5,
    name: "docker",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const recentActivities = [
  {
    id: 1,
    title: "Gained proficiency in Docker",
    desc: "Enhancing my ability to build, deploy, and manage containerized applications efficiently.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Learned Next.js",
    desc: "Enabling me to create high-performance and scalable web applications.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Mastered TypeScript",
    desc: "Improving code quality, maintainability, and developer productivity through strong typing and robust tooling.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Proficiency in creating WebSockets",
    desc: "Enhancing user experience with instant updates.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    name: "github",
    img: "/git.svg",
  },
  {
    id: 2,
    name: "linkedin",
    img: "/link.svg",
  },
];
