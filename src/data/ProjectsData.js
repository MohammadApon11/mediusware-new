// hero
import AllProjectHero from "../assets/projects/projectHero.png";
// project image
import project1 from "../assets/projects/24.png";
import project2 from "../assets/projects/hr.png";
import project3 from "../assets/projects/marketing.png";
import project4 from "../assets/projects/affiliate.png";
import project5 from "../assets/projects/rent.png";
import project6 from "../assets/projects/education.png";

// tech images
import backend1 from "../assets/tech/1.png";
import backend2 from "../assets/tech/2.png";
import backend3 from "../assets/tech/4.png";
import frontend1 from "../assets/tech/8.png";
import frontend2 from "../assets/tech/7.png";
import frontend3 from "../assets/tech/3.png";
import frontend4 from "../assets/tech/21.png";
import framework1 from "../assets/tech/5.png";
import framework2 from "../assets/tech/21.png";
import framework3 from "../assets/tech/3.png";
import serverSide1 from "../assets/tech/9.png";
import serverSide2 from "../assets/tech/11.png";
import serverSide3 from "../assets/tech/10.png";
import serverSide4 from "../assets/tech/8.png";
import api1 from "../assets/tech/mapbox.png";
import api2 from "../assets/tech/12.png";
import management1 from "../assets/tech/14.png";
import management2 from "../assets/tech/22.png";
import management3 from "../assets/tech/13.png";

export const ProjectsData = [
  {
    id: "24 hours views",
    industry:"Construction",
    path: "24-hours-views",
    title: "24 HOURS VIEWS",
    heroImage: AllProjectHero,
    description1: "Social media promotion has turned out to be a major ",
    description2: "opportunity for modern businesses.",
    projectImage: project1,
    shortOverview:
      "Social media promotion has turned out to be a major opportunity for modern businesses. Recognizing the significance of this aspect 24hoursviews started as a...",
    fullOverview:
      "Social media promotion has turned out to be a major opportunity for modern businesses. Recognizing the significance of this aspect 24hoursviews started as a social marketing platform, which promotes Youtube, Tiktok & Instagram videos, & posts at a lower cost. It helps social platforms to increase subscribers and more views for videos. Even, the channel owners can get more responses to their individual accounts. Users can order service upon paying for it to start a campaign for them. They can also add or withdraw money to their account Via Stripe, Visa, or MasterCard.We followed nothing less than the state-of-the-art technologies for this project. The technologies we used for the project are of the finest grade and highest functionality.",
    history:
      "Our client demanded a social marketing system that would promote them on various popular social media – like Youtube, Tiktok, Instagram. The idea was to create a “win-win situation”, in which a user adds a choice service and pays for that, and on the other side, another user earns from that by reacting to the service. We recognized this demand seriously and provided a complete solution for it. We simplified the registration & login processes for the users. A graphical dashboard with all details also allows knowing about the objectives. To summarize, we did our best to make the overall process simple, minimal, and user-friendly.",
    challenges: [
      "Getting access and refresh tokens from the google accounts was very crucial.",
      "There were some critical issues when we used YT player for tracking youtube video history and reaction multiple times on a page.",
      "People who do not have a Youtube Channel can’t access comments in youtube videos.",
      "Payment gateway integration for secure transactions.",
      "Money refund to perspective accounts of the user.",
      "Super Admin to login Admin or other User Accounts what the client requires.",
    ],
    overcomes: [
      "First of all, we followed Youtube api documentation, then we requested the correct end-point with exact credentials. In this way, we have solved youtube api integration.",
      "Ensured secure and reliable payment method via Stripe api integration.",
      "Followed Yt player documentation.",
      "People who have no channel on youtube, we notified them that without a channel they can’t comment.",
      "Built a login system using ajax and session.",
    ],
    overcomeSummary:
      "Throughout the process, we discussed with our team members and used various documentation, Stackoverflow, medium.com, Google, Youtube for overcoming various problems.",
    softArchitect: [
      "Client-server architecture",
      "Frontend HTML, CSS, ajax",
      "PHP server with Codeigniter Framework",
    ],
    projectSummary:
      "24 hours views was indeed a large project for us. Thanks to the team, we dealt well enough with the challenge and identified the most feasible solution. We’ve maintained regular communication with our clients and taken their feedback seriously, which helped us to achieve the goal. We have to say, it was a great experience to work on such a great project and to develop such a smart solution.",
    technology: [backend1, frontend1, framework1, serverSide1],
    backend: [backend1, backend2, backend3],
    frontend: [frontend1, frontend2, frontend3, frontend4],
    frameworks: [framework1, framework2],
    serverSide: [serverSide1, serverSide2],
    api: [api1],
    management: [management1, management2],
  },
  {
    id: "galileo",
    industry:"ERP",
    path: "galileo",
    title: "GALILEO",
    heroImage: AllProjectHero,
    projectImage: project2,
    description1: "Galileo is an HR management project for",
    description2: "SAAS-based companies.",
    shortOverview:
      "Galileo is an HR management project for SAAS-based companies. The company mainly has four different authorization roles...",
    fullOverview:
      "Galileo is an HR management project for SAAS-based companies. The company mainly has four different authorization roles. These are Superadmin, Admin, HR manager, and User.A company can get registered in the “Galileo Platform” under a number of different membership plannings. If the company has already been registered to the platform, then it can recruit the employees under different assessment tests. The assessment test would be done by Hogan API.Companies can communicate with Galileo Admin or SuperAdmin for help through the ticketing system. For helping the clients, ‘Galileo Admin/Superadmin’ can access the client dashboard through an OTP code from the client.The companies themselves will have some role permission like Admin, Team, and others. They can upload single or multiple files using Google Drive, One Drive, Dropbox, AWS S3, or Local Computer. The Galileo system also supports multiple languages.",
    history:
      "Our client wanted a SASS-based HR solution. It was quite a challenge to finish such a project within the limited time-frame we had. Thanks to our expert and dedicated team members, we could finish the project well within the timeline given. However, when the client expressed his satisfaction with our work, all our efforts became successful!",
    challenges: [
      "Hogan API Integration: We have faced some problems when we wanted to integrate Hogan API. Getting access and refreshing the token was very much crucial.",
      "One Drive API integration: Integrating OneDrive API with our system was a challenging task as the redirect url does not match properly. Also we faced some problems due to the lack of proper documents.",
      "Paypal Recurring payment: In this project, we had to use 3 payment systems with a monthly subscription.",
      "Multiple Authentication: Superadmin should be able to login into admin or other user accounts using OTP. We had some tough times matching this client requirement.",
    ],
    overcomes: [
      "Hogan API Integration: Firstly, we followed hogan API documentation, then we requested the correct endpoint with exact credentials. In this way, we solved hogan api integration.",
      "One Drive API integration: We created our local server as a live server with ngrok, then redirect URL worked properly.",
      "Paypal Recurring payment: Used Stripe, PayPal & FattureInCloud. Each of these three was used for subscription.",
      "Multiple logins: Using Passport’s OAuth token stored in a local store.",
    ],
    overcomeSummary:
      "We discussed with our team members and used Stackoverflow, Google, Youtube for overcoming various problems.",
    softArchitect: [
      "Client-server architecture",
      "Frontend (browser SPA written in VueJS)",
      "The backend is the server (provides REST services written in Laravel Framework)",
      "The back office is completely isolated (separate frontend, separate backend)",
      "SaaS Solution – multiple organizations in the same application cluster",
    ],
    projectSummary:
      "Galileo was one of the largest SASS projects we have ever worked on. Though it was a difficult task, we worked effectively enough to finish it smoothly. The best thing about this project was that our client was very helpful as well. Our effective communication contributed directly to the successful completion of this project. Along with all functionalities, Galileo was a smooth experience for our client. We have to say, working with them has been a pleasing experience for us.",
    technology: [backend1, frontend3, framework1, serverSide1],
    backend: [backend1, backend2, backend3],
    frontend: [frontend3],
    frameworks: [framework1, framework2],
    serverSide: [serverSide1, serverSide2],
    api: [api2],
    management: [management3, management1],
  },
  {
    id: "info stream web",
    industry:"STREAM",
    path: "info-stream-web",
    title: "INFO STREAM WEB",
    heroImage: AllProjectHero,
    projectImage: project3,
    description1:
      "Scorecard is a Digital Marketing management system, that shows an overview",
    description2: "of the clients’ projects and current status.",
    shortOverview:
      "Scorecard is a Digital Marketing management system, that shows an overview of the clients’ projects and current status. It also allows detailed reports with...",
    fullOverview:
      "Scorecard is a Digital Marketing management system, that shows an overview of the clients’ projects and current status. It also allows detailed reports with analytics. These reports give an overview and market improvement for each client and each marketing platform. Potentially it reduces the hassle of managing a huge client base for digital marketers.In this application client means Scorecard. Actually, each scorecard is an individual client. Scorecard has two authorization roles (i.e. Admin and User). So user’s access is protected with passwords. You can also add Scorecard (i.e. clients) as much as you want. Again integration with different marketing platforms like MOZ, Google Adwords, Unamo(SEO and Social Media analytical tools for online marketing professionals), CallRail(Call Tracking System) enables the marketers to get all updates in a single place. Thus, it makes the whole process easy & simple.",
    history:
      "Our client wanted to extract the performance of marketing for different platforms and different clients in a single dashboard. We have given him a complete solution with a simple and effective design.",
    challenges: [
      "To organize the whole thing in a single platform or dashboard",
      "Extract multiple data in the form of reports from digital marketing tools",
      "Allowing multiple users in the management system",
      "Adding vast numbers of clients on the dashboard in an organized way",
      "To make it secure via password & other security protocols",
    ],
    overcomes: [
      "API integration for digital marketing tools to import reports",
      "Descriptive & visual reports for clients",
      "Authentication via a secure login system",
      "Made it flexible to add multiple users",
    ],
    overcomeSummary:
      "Throughout the process, we discussed with our team members and used various documentation, Stackoverflow, medium.com, Google, Youtube for overcoming various problems.",
    softArchitect: ["Frontend (Laravel blade)", "Backend (Laravel)"],
    projectSummary:
      "To sum up, Scoreboard is a complete management system for digital marketers. It is a one-hand solution to manage clients. Rest apart, a detailed reporting system with all the necessary data customers want is a big release for digital marketing. We are really happy to make something very effective and useful.",
    technology: [backend1, frontend2, framework1, serverSide1],
    backend: [backend1, backend2],
    frontend: [frontend2, frontend3, frontend4],
    frameworks: [framework1, framework2, framework3],
    serverSide: [serverSide1, serverSide2],
    api: [api1],
    management: [management1, management2],
  },
  {
    id: "product advisor",
    industry:"E-Commerce",
    path: "product-advisor",
    title: "PRODUCT ADVISOR",
    heroImage: AllProjectHero,
    projectImage: project4,
    description1:
      "Product Advisor is a top-level affiliate web app, which delivers support to advanced API ",
    description2: "services like Amazon, Walmart, eBay, Best Buy, etc. ",
    shortOverview:
      "Product Advisor is a top-level affiliate web app, which delivers support to advanced API services like Amazon, Walmart, eBay, Best Buy, etc...",
    fullOverview:
      "Product Advisor is a top-level affiliate web app, which delivers support to advanced API services like Amazon, Walmart, eBay, Best Buy, etc. If you are looking for a useful product at the most affordable price, a Product Advisor can be the best alternative for you. This amazing tool can help you to find out the perfect product from Amazon, Walmart, eBay, Best Buy etc. so that you can get the products that are perfectly in line with your requirements. We believe this next-generation software will play a significant role to improve customer experience in the future.",
    history:
      "The demand of our partners was to provide a next-generation product advisor algorithm to them. At the initial state, our partner came to us with a basic Laravel Nova Admin Panel having some fundamental CRUDS. They were looking for a team they can depend on, and ultimately they found us and trusted us enough to hand-over the project.",
    challenges: [
      "We were in need of a package that will fetch Amazon related data for us, but sadly we did not find a good enough package to support this",
      "We needed some additional information That we were not getting from amazon API",
      "We needed a smart algorithm to get some genuine reviews of the products",
      "Handling a very large data by job schedule",
      "Memory Usages",
      "Image rendering & merging.",
    ],
    overcomes: [
      "To get data from amazon, We created our own version of API and released a package for it. Thanks to our dedicated engineers, the effort became successful and it worked like a charm.",
      "We used proxy crawl on demands, which gave us exact information regarding the things we needed",
      "We spent several weeks making this algorithm & put our level best, which helped to ensure an optimum quality",
      "Optimization is the only way to reduce memory usage. We optimized every possible query and situation to handle things perfectly.",
      "We used image intervention for image rendering and merging, which can compress 8 images into 1.",
    ],
    overcomeSummary:
      "This project was one of our best works ever. The project delivered a huge success to us and led us to a huge boost.",
    softArchitect: [
      "Client-server architecture",
      "Frontend vue, react, bootstrap",
      "PHP server with Codeigniter Framework",
    ],
    projectSummary:
      "This project was one of our best works ever. The project delivered a huge success to us and led us to a huge boost.",
    technology: [backend1, frontend1, framework1, serverSide1],
    backend: [backend1, backend2, backend3],
    frontend: [frontend1, frontend2, frontend3, frontend4],
    frameworks: [framework1, framework2, framework3],
    serverSide: [serverSide1, serverSide2, serverSide3, serverSide4],
    api: [api1, api2],
    management: [management1, management2],
  },
  {
    id: "short term rental",
    industry:"Services",
    path: "short-term-rental",
    title: "SHORT TERM RENTAL",
    heroImage: AllProjectHero,
    projectImage: project5,
    description1: "Short Term Rental is an app that helps to identify and",
    description2: "manage short-term rental properties.",
    shortOverview:
      "“Short Term Rental” is an app that helps to identify and manage short-term rental properties...",
    fullOverview:
      "“Short Term Rental” is an app that helps to identify and manage short-term rental properties. Generally, this application works with two types of properties: Rental Property and Fixed Property. Short Term Rental is also a part of the Community Management application.The application has a matching engine that helps to match Rental Property with Regular Property. The agents collect evidence between the properties and other users vote for them. Based on the voting, the property gets marked as either an Identified or an Unidentified property. Short Term Rental is also a part of the Community Management application. The application has a matching engine that helps to match Rental Property with Regular Property. The agents collect evidence between the properties and other users vote for them. Based on the voting, the property gets marked as either an Identified or an Unidentified property.",
    history:
      "Our client demanded an effective and functional app from us that would help them to identify and manage their needs effectively. We worked night and day to perfect the app in line with their requirements. The core platform of Prochamps has four types of programs, FCL, LTR, STR, VPO. Short Term Rental only handles the properties which are related to Short Term Rental. This also provides its data via RestAPI to let other platforms use it.",
    challenges: [
      "Building the matching engine & reverse matching engine",
      "Plot the matched properties that are within 1.5 miles",
      "Navigate among different properties in Street View",
    ],
    overcomes: [
      "We built the matching engine to help users filter and match the properties by their preferred features. We also included Google place search API to locate the properties.",
      "To get the properties that fall within 1.5 miles, we calculated their distance from the Rental Property. Then, we took only the properties that had a distance less than or equal to 1.5. We plot the points by transforming properties coordinates to GeoJSON.",
      "Google Street View was implemented to show the real visuals of the property environment.",
    ],
    overcomeSummary:
      "Throughout the process, we discussed with our team members and used various documentation, Stackoverflow, medium.com, Google, Youtube for overcoming various problems.",
    softArchitect: [
      "Client-server architecture",
      "Frontend vue, bootstrap",
      "PHP server with Codeigniter Framework",
    ],
    projectSummary:
      "Indeed, Short Term Rental is one of the most innovative projects we have ever worked on. We always try to make this project a major success, and we tried heart and soul for that. Definitely, we had to go through a lot of ups and downs while completing this project. Thanks to our team of skilled and dedicated warriors, we could satisfy our client with an effective and delighting offering.",
    technology: [backend2, frontend2, framework1, serverSide4],
    backend: [backend1, backend2],
    frontend: [frontend2, frontend3],
    frameworks: [framework1, framework2],
    serverSide: [serverSide4, serverSide3],
    api: [api2],
    management: [management3, management2],
  },
  {
    id: "woo study",
    industry:"Edcucational",
    path: "woo-study",
    title: "WOO STUDY",
    heroImage: AllProjectHero,
    projectImage: project6,
    description1: "WooStudy is an Educational Networking platform in which",
    description2: "you can register yourself and apply for studying abroad,",
    shortOverview:
      "WooStudy is an Educational Networking platform in which you can register yourself and apply for studying abroad, without the involvement of any third person...",
    fullOverview:
      "WooStudy is an Educational Networking platform in which you can register yourself and apply for studying abroad, without the involvement of any third person. To summarize, we dedicated ourselves to the fullest to helping WooStudy become one of the best global Edtech platforms. Providing Real-time chat, easy sign-up, massive information, and a lot of other features, we contributed to the efficiency of the company. Indeed, it has been a great experience to work with such a client who contributes so much to society.",
    history:
      "he demand of our partner was mainly to have an advanced system where educational institutes & students can be connected based on certain conditions and prerequisites. As we always try to understand the core needs of our clients, we figured out that they are looking for a solution to something very innovative. We maximized our dedication to the project when we understood that it might just change the shape of education methods. It can highly facilitate the students who want to achieve higher degrees abroad. To go with the project, we developed a platform where both the students & institutions can share their required information. It essentially takes less time and students can choose their desired institution. On the contrary, the enrollment process for universities or educational institutions would be faster and easier. Potentially, it reduces the dependency on agencies to enroll in a foreign university.",
    challenges: [
      "Introducing a secure & simplified registration process",
      "Program onboarding based on course and prerequisites",
      "Location-based onboarding",
      "Sending an automatic invitation to students and institutes",
      "Lead calculation & subscription modules for institutes",
      "API Integration for different services",
      "Real-time notifications",
      "Adding brunches under an institution or university",
    ],
    overcomes: [
      "We made the signup procedure easier than ever.",
      "We enabled user login via Gmail, Facebook, and Twitter accounts.",
      "Onboarding being a massive part of this project, we conducted frequent software testing.",
      "Load calculation was a very sensitive issue in this project because it is related to transactions. We integrated Stripe to make the payment secure.",
      "Location-based onboarding takes us a full day to rethink the situation twice. We have ensured it to be faster, via Geolocation & Google map API integration.",
    ],
    overcomeSummary:
      "Throughout the process, we discussed with our team members and used various documentation, Stackoverflow, medium.com, Google, Youtube for overcoming various problems.",
    softArchitect: [
      "Client-server architecture",
      "Frontend HTML, CSS, vue, bootstrap",
      "PHP server with Codeigniter Framework",
    ],
    projectSummary:
      "To summarize, we dedicated ourselves to the fullest to helping WooStudy become one of the best global Edtech platforms. Providing Real-time chat, easy sign-up, massive information, and a lot of other features, we contributed to the efficiency of the company. Indeed, it has been a great experience to work with such a client who contributes so much to society.",
    technology: [backend2, frontend2, framework1, serverSide4],
    backend: [backend1, backend2, backend3],
    frontend: [frontend2, frontend3],
    frameworks: [framework1, framework2, framework3],
    serverSide: [serverSide1, serverSide2],
    api: [api1],
    management: [management1, management2],
  },
];

export const projectsFilterBtn = [
  { id: 1, title: "All", length: 0 },
  { id: 2, title: "ERP", length: 11 },
  { id: 3, title: "App", length: 6 },
  { id: 4, title: "Java", length: 15 },
  { id: 5, title: "Personal", length: 9 },
  { id: 6, title: "E-commerce", length: 10 },
  { id: 7, title: "Corporate", length: 2 },
  { id: 8, title: "Restaurant", length: 4 },
  { id: 9, title: "Restaurant", length: 5 },
  { id: 10, title: "Social", length: 1 },
  { id: 11, title: "Educational", length: 4 },
  { id: 12, title: "Job Board", length: 8 },
  { id: 13, title: "Event ", length: 10 },
  { id: 14, title: "Travel", length: 9 },
  { id: 15, title: "News", length: 4 },
  { id: 16, title: "Fitness", length: 10 },
  { id: 17, title: "Freelancer", length: 5 },
  { id: 18, title: "Photography", length: 3 },
  { id: 19, title: "Music", length: 9 },
  { id: 20, title: "Tech", length: 7 },
  { id: 21, title: "Community", length: 3 },
  { id: 22, title: "Nonprofit", length: 2 },
  { id: 23, title: "Recipe", length: 6 },
  { id: 24, title: "Gaming", length: 3 },
  { id: 25, title: "Wedding", length: 9 },
  { id: 26, title: "Finance", length: 5 },
  { id: 27, title: "Weather", length: 6 },
  { id: 28, title: "Art", length: 3 },
  { id: 29, title: "Language", length: 2 },
  { id: 30, title: "Podcast", length: 1 },
  { id: 31, title: "Government", length: 3 },
  { id: 32, title: "Cryptocurrency", length: 5 },
];
