import { subDays, subHours, subMinutes, subSeconds } from "date-fns";

const now = new Date();

export const companies = [
  {
    id: "GR-2FR43",
    averageRating: 4.5,
    employees: "50-100",
    isVerified: true,
    jobs: [
      {

        id: "560a3dfd48c1602f4ff5d6ac",
        currency: "$",
        isRemote: true,
        publishedAt: subMinutes(now, 24).getTime(),
        salaryMax: "75k",
        salaryMin: "55k",
        // title: "Position 1 | Full time | On-site | 0 -2 years ",
position:'Position 1',
work:'Full Time',
place:'On-site',
exp:'6 months - 1.5 years',

        jobtitle:'React JS / Next JS',
        jobDesc:
          "We are seeking a talented and motivated ReactJS Developer to join our team. This is a full-time, onsite position, ideal for candidates with 0 to 2 years of professional experience in ReactJS development. As a ReactJS Developer, you will play a crucial role in developing and maintaining innovative web applications using ReactJS and related technologies.",
        responsibilities: [
          `Collaborate with cross-functional teams to design and develop user-friendly web applications using ReactJS`,
          `Participate in the entire software development lifecycle, including requirements gathering, design, coding, testing, and deployment.`,
          `Implement responsive web designs and ensure optimal performance across different devices and browsers.`,
          `Write clean, efficient, and scalable code while following coding standards and best practices.`,
          `Troubleshoot and debug issues in existing applications, and propose and implement solutions.`,
          `Stay updated with the latest trends and advancements in ReactJS and web development, and apply them to enhance our applications.`,
        ],
        requirements: [
          `Strong understanding of JavaScript, HTML, CSS, and related web technologies.`,
          `Experience working with ReactJS and its core principles.`,
          `Familiarity with popular ReactJS libraries and frameworks (e.g., Redux, React Router).`,
          `Knowledge of RESTful APIs and integration of backend services with ReactJS applications.`,
          `Understanding of modern web development concepts such as responsive design, performance optimization, and cross-browser compatibility.`,
          `Proficient in version control systems like Git.`,
          `Excellent problem-solving and debugging skills.`,
          `Strong communication and teamwork abilities.`,
        ],
      },
    ],
    logo: "./assets/react.png",
    name: "React JS / Next JS",
    shortDescription:
      "Building technologies and ideas that move us as the leaders in Augmented Reality",
  },
  {
    id: "FR-58F46",
    averageRating: 4.3,
    employees: "50-100",
    isVerified: false,
    jobs: [
      {
        id: "52cf72df2a519538d3d8a18d",
        currency: "$",
        isRemote: true,
        publishedAt: subHours(now, 1).getTime(),
        salaryMax: "160k",
        salaryMin: "80k",
        position:'Position 1',
        work:'Full Time',
        place:'On-site',
        exp:'0 - 2 years',
          jobtitle:"BDE",
        jobDesc:
          "We are looking for a dynamic and results-driven Business Development Executive (BDE) to join our team. This full-time, onsite position is suitable for candidates with 0 to 2 years of experience in business development, preferably in the IT industry. As a BDE, you will play a vital role in driving our company's growth by identifying new business opportunities, building relationships with potential clients, and promoting our IT services.",
        responsibilities: [
          `Research and identify potential clients in the target market and develop a strategy to approach and engage them.`,
          `Build and maintain strong relationships with prospects, understanding their needs and effectively communicating the value proposition of our IT services.`,
          `Collaborate with the sales and marketing teams to develop and implement effective sales strategies and campaigns.`,
          `Conduct presentations, demos, and product/service demonstrations to potential clients, showcasing the benefits and capabilities of our offerings.`,
          `Prepare and negotiate proposals, contracts, and pricing agreements, ensuring alignment with clients' requirements and company objectives.`,
          `Monitor market trends, competitor activities, and industry developments to identify opportunities for business growth.`,
          `Meet or exceed assigned sales targets and contribute to the overall revenue generation goals of the company.`,
          `Provide regular updates and reports on sales activities, pipeline, and progress towards goals to the management team.`,
        ],
        requirements: [
          `Bachelor's degree in Business Administration, Marketing, or a related field.`,
          `Strong passion for sales, business development, and achieving targets.`,
          `Excellent communication and presentation skills, both verbal and written.`,
          `Strong negotiation and persuasion abilities.`,
          `Knowledge of the IT industry, including software development, web services, or related fields.`,
          `Familiarity with sales techniques, lead generation strategies, and customer relationship management (CRM) tools.`,
          `Ability to work independently, self-motivated, and result-oriented.`,
          `Good organizational and time management skills, with the ability to prioritize tasks effectively.`,
          `Willingness to travel and attend industry events, conferences, and client meetings as required.`,
          `Join our team and be part of an exciting opportunity to contribute to the growth of our IT company as a Business Development Executive. If you are driven, have a passion for sales, and want to work in a dynamic environment, apply now!`,
        ],
      },
    ],
    logo: "/assets/companies/company-logo-2.svg",
    name: "BDE",
    shortDescription:
      "Monitor and optimize your content for long-term audience loyalty",
  },
  {
    id: "FR-2X70G",
    averageRating: 4.5,
    employees: "50-100",
    isVerified: false,
    jobs: [
      {
        id: "5f59ed345f6527d6dbb81339",
        currency: "$",
        isRemote: true,
        publishedAt: subDays(
          subHours(subMinutes(subSeconds(now, 52), 39), 7),
          5
        ).getTime(),
        salaryMax: "210k",
        salaryMin: "150k",
        position:'Position 1',
        work:'Full Time',
        place:'On-site',
        exp:'0 - 2 years',
        jobtitle:"HR",
        jobDesc:
          "We are seeking a talented and enthusiastic HR Associate to join our team. This full-time, onsite position is ideal for candidates with 0 to 2 years of experience in HR, preferably in the IT industry. As an HR Associate, you will play a crucial role in supporting various HR functions and ensuring smooth operations within our organization.",
        responsibilities: [
          `Assist in the recruitment and selection process, including sourcing candidates, conducting initial screenings, and coordinating interviews.`,
          `Maintain employee records and databases, ensuring accuracy and confidentiality of information.`,
          `Facilitate the onboarding process for new hires, including preparing offer letters, conducting orientation sessions, and ensuring all required documentation is completed accurately.`,
          `Support HR administration tasks, such as managing employee contracts, leave management, and employee benefits enrollment.`,
          `Assist in performance management processes, including tracking performance evaluations and providing support in the performance appraisal cycle.`,
          `Support employee engagement initiatives, such as organizing company events, team-building activities, and recognition programs.`,
          `Handle employee queries and provide guidance on HR policies and procedures.`,
          `Assist in HR policy development and implementation to ensure compliance with relevant labor laws and regulations.`,
          `Contribute to HR projects and initiatives aimed at improving HR processes and employee satisfaction.`,
          `Stay updated on HR best practices and industry trends to provide recommendations and contribute to continuous improvement efforts.`,
        ],
        requirements: [
          `Bachelor's degree in Human Resources, Business Administration, or a related field.`,
          `Strong understanding of HR principles, policies, and practices. `,
          `Excellent communication and interpersonal skills.`,
          `Proficient in MS Office applications, including Word, Excel, and PowerPoint.`,
          `Attention to detail and strong organizational skills.`,
          `Ability to handle confidential information with discretion and maintain a high level of professionalism.`,
          `Strong problem-solving and analytical skills.`,
          `Ability to work effectively in a team and collaborate with various stakeholders.`,
          `Familiarity with HRIS (Human Resources Information System) software is a plus.`,
          `Join our team and be part of a collaborative HR environment where you can contribute to the growth and success of our organization. If you have a passion for HR and want to kickstart your career in the IT industry, apply now!`,
        ],
      },
    ],
    logo: "/assets/companies/company-logo-3.svg",
    name: "HR",
    shortDescription:
      "Discover innovative companies and the people behind them",
  },
];

export const company = {
  id: "GR-2FR43",
  activities: [
    {
      id: "f66e15066cc6bf1c903f0c81",
      addedJob: "Remote React / React Native Developer",
      author: "Jie Yang Song",
      avatar: "/assets/avatars/avatar-jie-yan-song.png",
      createdAt: subDays(
        subHours(subMinutes(subSeconds(now, 3), 7), 5),
        81
      ).getTime(),
      type: "new_job",
    },
    {
      id: "e756e1393b620f87728ab28b",
      addedJob: "Senior Golang Backend Engineer",
      author: "Anika Visser",
      avatar: "/assets/avatars/avatar-iulia-albu.png",
      createdAt: subDays(
        subHours(subMinutes(subSeconds(now, 3), 7), 5),
        82
      ).getTime(),
      type: "new_job",
    },
    {
      id: "f80b8d4ed2a0ed9099593d39",
      addedMember: "Omar Darboe",
      author: "Jie Yang Song",
      avatar: "/assets/avatars/avatar-jie-yan-song.png",
      createdAt: subDays(
        subHours(subMinutes(subSeconds(now, 3), 7), 5),
        83
      ).getTime(),
      type: "new_team_member",
    },
    {
      id: "53b48b76b01ed00bddee2038",
      author: "Jie Yang Song",
      avatar: "/assets/avatars/avatar-jie-yan-song.png",
      createdAt: subDays(
        subHours(subMinutes(subSeconds(now, 3), 7), 5),
        84
      ).getTime(),
      createdCompany: "Augmastic Inc",
      type: "created",
    },
  ],
  assets: [
    {
      id: "08514371b9d92f92f12c8b0a",
      extension: "png",
      fileName: "company-cover.png",
      size: "23 Kb",
      url: "/assets/covers/abstract-2-4x4-small.png",
    },
    {
      id: "e7626dd2086bf8a7aa6a991d",
      extension: "pdf",
      fileName: "Presentation.pdf",
      size: "3 Mb",
      url: "",
    },
  ],
  averageRating: 3.66,
  description: `Augmastic is the world’s leading AR technology company, sparking creative and engaging journeys in the real world. Our products inspire outdoor exploration, exercise, and meaningful social interaction. 

 Originally formed at Google in 2011, we became an independent company in 2015 with a strong group of investors including Nintendo, The Pokémon Company, and Alsop Louie Partners. 

Niantic is an Equal Opportunity and Affirmative Action employer. We believe that cultivating a workplace where our people are supported and included is essential to creating great products our community will love. 

Our mission emphasizes seeking and hiring diverse voices, including those who are traditionally underrepresented in the technology industry, and we consider this to be one of the most important values we hold close. We're a hard-working, fun, and exciting group who value intellectual curiosity and a passion for problem-solving! We have growing offices located in San Francisco, Sunnyvale, Bellevue, Los Angeles, Tokyo, Hamburg, London, and Zurich.`,
  employees: "50-100",
  founders: [
    {
      id: "5e8883f7ed1486d665d8be1e",
      avatar: "/assets/avatars/avatar-jie-yan-song.png",
      name: "Jie Yang Song",
      role: "CEO & Co-founder",
    },
    {
      id: "5e887b209c28ac3dd97f6db5",
      avatar: "/assets/avatars/avatar-fran-perez.png",
      name: "Fran Perez",
      role: "CTO & Co-founder",
    },
    {
      id: "d058d861d43bbb36fb73b0bc",
      avatar: "/assets/avatars/avatar-omar-darboe.png",
      name: "Omar Darboe",
      role: "CFO",
    },
  ],
  images: [
    "/assets/gallery/gallery-1.jpg",
    "/assets/gallery/gallery-2.jpg",
    "/assets/gallery/gallery-3.jpg",
    "/assets/gallery/gallery-4.jpg",
    "/assets/gallery/gallery-5.jpg",
    "/assets/gallery/gallery-6.jpg",
  ],
  isVerified: true,
  jobs: [
    {
      id: "560a3dfd48c1602f4ff5d6ac",
      currency: "$",
      isRemote: true,
      publishedAt: subMinutes(now, 24).getTime(),
      salaryMax: "75k",
      salaryMin: "55k",
      title: "Position 1 | Full time | Remote/On-site | 0 -2 years ",
    },
    {
      id: "6681e0dbfab15e83498b0d10",
      city: "Munich",
      country: "Germany",
      currency: "$",
      publishedAt: subHours(now, 2).getTime(),
      salaryMax: "160k",
      salaryMin: "80k",
      title: "Senior Golang Backend Engineer",
    },
  ],
  locations: ["New York City", "Milano", "Moscow"],
  logo: "/assets/companies/company-logo-1.svg",
  members: [
    {
      id: "5e8883f7ed1486d665d8be1e",
      avatar: "/assets/avatars/avatar-jie-yan-song.png",
      name: "Jie Yang Song",
      role: "CEO & Co-founder",
      skills: ["JavaScript", "React", "Go"],
    },
    {
      id: "5e887b209c28ac3dd97f6db5",
      avatar: "/assets/avatars/avatar-fran-perez.png",
      name: "Fran Perez",
      role: "CTO & Co-founder",
      skills: ["C", "C++", "Java"],
    },
    {
      id: "d058d861d43bbb36fb73b0bc",
      avatar: "/assets/avatars/avatar-omar-darboe.png",
      name: "Omar Darboe",
      role: "CFO",
      skills: ["Go", "Python"],
    },
  ],
  name: "Augmastic Inc.",
  reviews: [
    {
      id: "ab8ed24cd579605c386e1275",
      author: "Anika Visser",
      avatar: "/assets/avatars/avatar-anika-visser.png",
      createdAt: subDays(
        subHours(subMinutes(subSeconds(now, 4), 9), 4),
        2
      ).getTime(),
      description:
        "I have been working with this company full-time. Great for the work life balance. Cons, decentralized decision making process across the organization.",
      rating: 3.8,
      title: "Great company, providing an awesome & easy to use product",
    },
    {
      id: "973a87618e946f08ea8d8491",
      author: "Victor Plesoianu",
      createdAt: subDays(
        subHours(subMinutes(subSeconds(now, 4), 9), 4),
        25
      ).getTime(),
      description:
        "Every day you learn something new - that is a typical day at work in Augmastic. I am surrounded by supportive people, from different cultures, we have a strong and unified team and help each other whenever is needed. The most enjoyable part of the job is that you meet new people, experts on different disciplines that might help you in your work, but the hardest part of the job is that there are too many tools and systems to use.",
      rating: 3.4,
      title: "Friendly environment",
    },
    {
      id: "7fdf64061aba2fd67d732006",
      author: "Victor Plesoianu",
      createdAt: subDays(
        subHours(subMinutes(subSeconds(now, 4), 9), 4),
        70
      ).getTime(),
      description:
        "I have been working with this company full-time. Great for the work life balance. Cons, decentralized decision making process across the organization.",
      rating: 3.8,
      title: "Great company, providing an awesome & easy to use product",
    },
  ],
  shortDescription:
    "Building technologies and ideas that move us as the leaders in Augmented Reality",
  website: "https://augmastic.dev",
};
