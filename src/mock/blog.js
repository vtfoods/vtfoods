export const faqs = [
    {
        question: "What is mobile app development?",
        answer:
            "Mobile app development involves creating software applications specifically designed to operate on mobile devices like smartphones and tablets.",
    },
    {
        question: "What are the different types of mobile apps?",
        answer: "Mobile apps can be categorized into native apps (built for specific platforms like iOS or Android), web apps (accessed via web browsers), and hybrid apps (combining elements of native and web apps)."
    },
    {
        question: "What are the key steps in the mobile app development process?",
        answer:
            "The mobile app development process typically includes idea conceptualization, market research, planning (wireframing and prototyping), design, development, testing, deployment, and ongoing maintenance."},
    {
        question: " How long does it take to develop a mobile app?",
        answer:
            "Development time varies depending on factors like complexity, features, platforms, and team size. Simple apps might take a few months, while complex ones can take over a year.",
    },
    {
        question: "What are common monetization strategies for mobile apps?",
        answer:
        "Popular monetization strategies include in-app purchases, subscriptions, advertising (banner ads or native ads), freemium models (basic app is free, premium features are paid), and selling the app itself."
    }
];

export const jobPostDetailsMockData = [
  {
    id: 1,
    image: "https://via.placeholder.com/400x400",
    title: "Qui mollit labore li",
    updatedAt: "May 27, 2024",
    readTime: 55,
    blogDescription: "Esse culpa necessit",
    questions: [
      {
        question: "Dignissimos optio i",
        answer: "Non doloribus beatae",
      },
    ],
  },
];

export const jobPostDetailsMockDataCard = [
  {
    id: 1,
    image: "https://via.placeholder.com/400x400",
    title: "The Best NodeJS Frameworks You Can Look Up To",
    updatedAt: "May 27, 2024",
    readTime: 3,
    blogDescription:
      "These major technical skills will indicate how useful a candidate can be for your development projects. However, there are some non-technical aspects to this that you shouldn’t be missing.",
    questions: [

     {
        question: "Back to Basics - What is NodeJS ?",
        answer: [
          {
            description: [
          "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, designed to execute JavaScript code outside of a web browser. Created by Ryan Dahl in 2009, it allows developers to use JavaScript for server-side scripting, producing dynamic web page content before the page is sent to the user's browser. Node.js employs an event-driven, non-blocking I/O model, making it lightweight and efficient for handling multiple concurrent connections. This asynchronous nature helps to manage high scalability in network applications, such as web servers. Node.js includes a rich library of various JavaScript modules, simplifying the development of web applications and using the npm package manager for easy installation and management of libraries and dependencies.",
          "Node.js is widely used for building real-time applications, such as chat applications and online gaming. Its single-threaded event loop architecture can efficiently handle numerous I/O operations, making it suitable for applications that require frequent updates. Additionally, Node.js has a strong community and extensive documentation, making it a popular choice for developers worldwide. The robust ecosystem and active community support ensure continuous improvement and a wealth of resources for developers. With its ability to handle high scalability and efficiency, Node.js has become a critical tool for modern web development."
            ]
             
          },
        ],
      },
      {

        question: "The Steps to Setup",
        answer: [
          {
            description:
              "To set up the Firestore database iOS, you first need to use the FirebaseAuth currentUser property to obtain information about the currently logged-in user. Next, employ the setData function to add a new document to the users collection, including user-specific details such as uid, emailAddress, firstName, and lastName. These details are typically strings, but you can also use other types like boolean, float, or integer. For expert assistance, consider partnering with a Professional iOS",
          },
        ],
      },


      {
        question: "The Best NodeJS Frameworks You Can Look Up To",
        answer: [
          {
           description:"When considering Node.js frameworks, Express.js remains the go-to for many developers due to its simplicity and robustness, making it ideal for building APIs and web applications. Koa.js, created by the same team behind Express, offers a more modern approach with async functions, enhancing middleware development. For those who prefer TypeScript, NestJS is a powerful framework that provides a scalable architecture inspired by Angular, supporting efficient server-side development. Sails.js is tailored for building MVC-based applications, offering features that simplify the development of data-driven, enterprise-grade applications. Adonis.js provides a comprehensive ecosystem, similar to Laravel, with a strong focus on security and development speed, supporting both JavaScript and TypeScript. Lastly, Meteor.js is a full-stack platform that streamlines the development process with integrated front-end and back-end capabilities, making real-time web applications straightforward to build."
          }
    ,
       {
            src: "/assets/whyUs.jpg",
          },
          {
            question: "Express.js",
            subtitle: "Key Features:",
            desc:
              "Express.js is a minimalist web framework for Node.js that provides a robust set of features for building web and mobile applications. It is known for its simplicity, flexibility, and middleware support, making it a popular choice for developers who prefer a lightweight yet powerful framework.",
            keyFeatures: [
              "Minimalistic and flexible routing.",
              "Middleware support for handling requests and responses.",
              "Template engine support (like Pug, EJS, etc.).",
              "Extensive ecosystem with numerous plugins and middleware."
            ],
          },
          {
            question: "Koa.js:",
            subtitle: "Key Features",
            desc:
              "Koa.js is a next-generation web framework for Node.js created by the team behind Express. It utilizes modern JavaScript features such as async/await and generators to enhance code readability and error handling. Koa.js is known for its small footprint and modular design, allowing developers to choose and use only the components they need.",
            keyFeatures: [
              "Modern async/await syntax for middleware.",
              "Lightweight and modular design.",
              "Enhanced error handling and stack traces.",
              "Cleaner codebase with generators and async functions."
            ],
          },
          {
            question: "Nest.js:",
            subtitle: "Key Features",
            desc:
              "Nest.js is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It combines elements from TypeScript, OOP (Object-Oriented Programming), FP (Functional Programming), and functional reactive programming. Nest.js provides a structured approach to building applications with built-in support for modules, dependency injection, and powerful CLI tools.",
               keyFeatures: [
              "Built-in support for TypeScript.",
              "Modular architecture with modules and dependency injection.",
              "Support for MVC (Model-View-Controller) and SOLID principles.",
              "Scalability with microservices architecture and GraphQL integration."
            ],
          },
          {
            question: "Fastify:",
            subtitle: "Key Features",
            desc:
              "Fastify is a fast and low overhead framework for Node.js. It is designed to be highly performant and focuses on providing an excellent developer experience. Fastify emphasizes speed, efficiency, and low memory consumption, making it suitable for building highly optimized APIs and web applications.",
              keyFeatures: [
              "Modern async/await syntax for middleware.",
              "Lightweight and modular design.",
              "Enhanced error handling and stack traces.",
              "Cleaner codebase with generators and async functions."
            ],
          },
          {
            question: "Sails.js:",
            subtitle: "Key Features",
            desc:
              "Sails.js is a full-featured MVC framework for building enterprise-level Node.js applications. It follows the convention-over-configuration principle and provides built-in support for data-driven APIs, real-time features, and automatic RESTful routing. Sails.js is built on top of Express and integrates well with frontend frameworks like Angular, React, and Vue.js.",
            keyFeatures: [
              "Automatic RESTful API generation from models.",
              "Real-time features with WebSockets (via Socket.io).",
              "Waterline ORM for database access.",
              "Blueprints for automatic CRUD (Create, Read, Update, Delete) routes."
            ],
          },
           {
            question: "Meteor.js:",
            subtitle: "Key Features",
            desc:
              "Meteor.js is a full-stack framework for building real-time web and mobile applications in pure JavaScript. It provides a seamless integration of frontend and backend development, offering a unified API for data synchronization and reactive UI updates. Meteor.js includes built-in features such as hot code push, data on the wire, and real-time updates, making it suitable for rapid prototyping and MVP development.",
            keyFeatures: [
              "Full-stack integration with frontend and backend in JavaScript.",
              "Data on the wire with automatic client-server data synchronization.",
              "Hot code push for seamless updates.",
              "Real-time updates with reactive programming and MongoDB integration."
            ],
          },
            {
            question: "Adonis.js:",
            subtitle: "Key Features",
            desc:
              "Adonis.js is a full-featured Node.js framework inspired by Laravel's syntax and structure. It aims to bring the elegance and expressiveness of Laravel to Node.js development, offering features such as MVC architecture, ORM (Object-Relational Mapping) support with Lucid, and a powerful command-line interface. Adonis.js emphasizes developer ergonomics, productivity, and scalability, making it suitable for building robust web applications and APIs.",
            keyFeatures: [
              "Laravel-like syntax and structure.",
              "MVC architecture with powerful ORM (Lucid).",
              "CLI tools for scaffolding and managing projects.",
              "Middleware support and built-in authentication."
            ],
          },
        ],
      },
 
    ],
  },
];


export const requirementData = [
  {
    label: "New Project",
    value:"new-project"
  },
  {
    label: "Hire Dedicated Team",
    value:"hire-dedicated-team"
  },
];

export const selectServices = [
  {
    label: "Web Development",
    value: "web-dev",
  },
  {
    label: "Mobile App Development",
    value: "mobile-app-dev",
  },
  {
    label: "E-commerce Solutions",
    value: "e-commerce-sol",
  },
  {
    label: "Digital Marketing",
    value: "digital-marketing",
  },
  {
    label: "Cyber Security",
    value: "cyber-security",
  },
  {
    label: "Cloud Computing",
    value: "cloud-computing",
  },
  {
    label: "Artificial Intelligence",
    value: "ai",
  },
  {
    label: "Data Analytics",
    value: "data-analytics",
  },
  {
    label: "IT Consulting",
    value: "it-consulting",
  },
  {
    label: "Software Development",
    value: "software-dev",
  },
];
