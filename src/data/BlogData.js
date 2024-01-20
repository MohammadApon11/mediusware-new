import profile from "../assets/blog-page/profile-1.png";
import blog1 from "../assets/blog-page/blog-1.jpg";
import blog2 from "../assets/blog-page/blog-2.jpg";
import blog3 from "../assets/blog-page/blog-3.jpg";
import blog4 from "../assets/blog-page/blog-4.jpg";
import blog5 from "../assets/blog-page/blog-5.jpg";
import blog6 from "../assets/blog-page/blog-6.jpg";
import blog7 from "../assets/blog-page/blog-7.jpg";
import blog8 from "../assets/blog-page/blog-8.jpg";
import blog9 from "../assets/blog-page/blog-9.jpg";

// for spisific blog
import laravel1 from "../assets/blog-page/laravel1.jpg"
import laravel2 from "../assets/blog-page/laravel2.jpg"
import laravel3 from "../assets/blog-page/laravel3.jpg"
import uiux1 from "../assets/blog-page/ui-ux1.jpg"
import uiux2 from "../assets/blog-page/ui-ux2.jpg"
import uiux3 from "../assets/blog-page/ui-ux3.jpg"
import django1 from "../assets/blog-page/django1.jpg"
import django2 from "../assets/blog-page/django2.jpg"
import django3 from "../assets/blog-page/django3.jpg"
import python1 from "../assets/blog-page/python1.jpg"
import python2 from "../assets/blog-page/python2.jpg"
import python3 from "../assets/blog-page/python3.jpg"
import react1 from "../assets/blog-page/react1.jpg"
import react2 from "../assets/blog-page/react2.jpg"
import react3 from "../assets/blog-page/react3.jpg"
import frontend1 from "../assets/blog-page/laravel1.jpg"
import frontend2 from "../assets/blog-page/frontend2.jpg"
import frontend3 from "../assets/blog-page/frontend3.jpg"
import sqa1 from "../assets/blog-page/sqa1.jpg"
import sqa2 from "../assets/blog-page/sqa2.jpg"
import sqa3 from "../assets/blog-page/sqa3.jpg"

export const BlogsData = [
  {
    id: 40,
    authors: {
      name: "John Smith",
      publishDate: "08/02/2017",
      photo: profile,
    },
    keys: ["Python", "Design", "NPM"],
    title: "Python Lessons That We Can Learn from “Threads”",
    image: python1,
    readTime: 12,
  },
  {
    id: 41,
    authors: {
      name: "Dipty Paul",
      publishDate: "04/12/2019",
      photo: profile,
    },
    keys: ["SQA", "Assurance", "Research"],
    title: "SQA Lessons That We Can Learn from “Threads”",
    image: sqa2,
    readTime: 15,
  },
  {
    id: 43,
    authors: {
      name: "William",
      publishDate: "05/02/2017",
      photo: profile,
    },
    keys: ["Python", "Development", "COMPLITER"],
    title: "UX Lessons That We Can Learn from “Threads”",
    image: python3,
    readTime: 10,
  },
  {
    id: 2,
    category: "laravel",
    authors: {
      name: "John Smith",
      publishDate: "01/01/2017",
      photo: profile,
    },
    keys: ["laravel", "Design", "Research"],
    title: "laravel Lessons That We Can Learn from “Threads”",
    image: laravel1,
    readTime: 5,
  },
  {
    id: 3,
    category: "laravel",
    authors: {
      name: "Will Smith",
      publishDate: "16/07/2016",
      photo: profile,
    },
    keys: ["laravel", "Coding", "Research"],
    title: "laravel Lessons That We Can Learn from “Threads”",
    image: laravel2,
    readTime: 7,
  },
  {
    id: 5,
    category: "laravel",
    authors: {
      name: "Justin Beiber",
      publishDate: "10/10/2019",
      photo: profile,
    },
    keys: ["laravel", "Client", "Research"],
    title: "laravel Lessons That We Can Learn from “Threads”",
    image: laravel3,
    readTime: 4,
  },
  {
    id: 6,
    category: "ui/ux",
    authors: {
      name: "Justin Beiber",
      publishDate: "15/11/2010",
      photo: profile,
    },
    keys: ["ui/ux", "Client", "Research"],
    title: "UX Lessons That We Can Learn from “Threads”",
    image: uiux1,
    readTime: 5,
  },
  {
    id: 7,
    category: "ui/ux",
    authors: {
      name: "Justin Beiber",
      publishDate: "15/12/2012",
      photo: profile,
    },
    keys: ["ui/ux", "Client", "Research"],
    title: "UX Lessons That We Can Learn from “Threads”",
    image: uiux2,
    readTime: 20,
  },
  {
    id: 9,
    category: "ui/ux",
    authors: {
      name: "Justin Beiber",
      publishDate: "01/01/2018",
      photo: profile,
    },
    keys: ["ui-ux", "Client", "Research"],
    title: "UX Lessons That We Can Learn from “Threads”",
    image: uiux3,
    readTime: 18,
  },
  {
    id: 10,
    category: "django",
    authors: {
      name: "Justin Beiber",
      publishDate: "09/12/2017",
      photo: profile,
    },
    keys: ["django", "Client", "Research"],
    title: "Django Lessons That We Can Learn from “Threads”",
    image: django1,
    readTime: 17,
  },
  {
    id: 11,
    category: "django",
    authors: {
      name: "Band Swift",
      publishDate: "21/01/2019",
      photo: profile,
    },
    keys: ["django", "Client", "Research"],
    title: "Django Lessons That We Can Learn from “Threads”",
    image: django2,
    readTime: 20,
  },
  {
    id: 13,
    category: "django",
    authors: {
      name: "Justin Beiber",
      publishDate: "01/06/2019",
      photo: profile,
    },
    keys: ["django", "Client", "Research"],
    title: "Django Lessons That We Can Learn from “Threads”",
    image: django3,
    readTime: 14,
  },
  {
    id: 14,
    category: "python",
    authors: {
      name: "Jacky Mely",
      publishDate: "01/01/2015",
      photo: profile,
    },
    keys: ["python", "Client", "Research"],
    title: "Python Lessons That We Can Learn from “Threads”",
    image: python1,
    readTime: 13,
  },
  {
    id: 15,
    category: "python",
    authors: {
      name: "Kylor Shwift",
      publishDate: "05/07/2018",
      photo: profile,
    },
    keys: ["python", "Client", "Research"],
    title: "Python Lessons That We Can Learn from “Threads”",
    image: python2,
    readTime:25,
  },
  {
    id: 17,
    category: "python",
    authors: {
      name: "Justin Beiber",
      publishDate: "03/02/2015",
      photo: profile,
    },
    keys: ["python", "Client", "Research"],
    title: "Python Lessons That We Can Learn from “Threads”",
    image: python3,
    readTime: 14,
  },
  {
    id: 18,
    category: "react",
    authors: {
      name: "Justin Beiber",
      publishDate: "19/01/2021",
      photo: profile,
    },
    keys: ["react", "Client", "Research"],
    title: "React Lessons That We Can Learn from “Threads”",
    image: react1,
    readTime: 20,
  },
  {
    id: 19,
    category: "react",
    authors: {
      name: "Justin Beiber",
      publishDate: "18/01/2024",
      photo: profile,
    },
    keys: ["react", "Client", "Research"],
    title: "React Lessons That We Can Learn from “Threads”",
    image: react2,
    readTime: 20,
  },
  {
    id: 21,
    category: "react",
    authors: {
      name: "Justin Beiber",
      publishDate: "01/01/2015",
      photo: profile,
    },
    keys: ["react", "Client", "Research"],
    title: "React Lessons That We Can Learn from “Threads”",
    image: react3,
    readTime: 20,
  },
  {
    id: 22,
    category: "frontend",
    authors: {
      name: "Justin Beiber",
      publishDate: "01/01/2015",
      photo: profile,
    },
    keys: ["frontend", "Client", "Research"],
    title: "Frontend Lessons That We Can Learn from “Threads”",
    image: frontend1,
    readTime: 20,
  },
  {
    id: 23,
    category: "frontend",
    authors: {
      name: "Justin Beiber",
      publishDate: "01/01/2016",
      photo: profile,
    },
    keys: ["frontend", "Client", "Research"],
    title: "Frontend Lessons That We Can Learn from “Threads”",
    image: frontend2,
    readTime: 20,
  },
  {
    id: 25,
    category: "frontend",
    authors: {
      name: "Justin Beiber",
      publishDate: "01/01/2024",
      photo: profile,
    },
    keys: ["frontend", "Client", "Research"],
    title: "Frontend Lessons That We Can Learn from “Threads”",
    image: frontend3,
    readTime: 20,
  },
  {
    id: 26,
    category: "sqa",
    authors: {
      name: "Justin Beiber",
      publishDate: "01/01/2017",
      photo: profile,
    },
    keys: ["sqa", "Client", "Research"],
    title: "SQA Lessons That We Can Learn from “Threads”",
    image: sqa1,
    readTime: 25,
  },
  {
    id: 27,
    category: "sqa",
    authors: {
      name: "Justin Beiber",
      publishDate: "01/01/2020",
      photo: profile,
    },
    keys: ["sqa", "Client", "Research"],
    title: "SQA Lessons That We Can Learn from “Threads”",
    image: sqa2,
    readTime: 22,
  },
  {
    id: 29,
    category: "sqa",
    authors: {
      name: "Justin Beiber",
      publishDate: "01/01/2023",
      photo: profile,
    },
    keys: ["sqa", "Client", "Research"],
    title: "SQA Lessons That We Can Learn from “Threads”",
    image: sqa3,
    readTime: 21,
  },
];
export const LatestBlogsData = [
  {
    id: 1,
    authors: {
      name: "John Smith",
      publishDate: "01/01/2015",
      photo: profile,
    },
    keys: ["UI/UX", "Design"],
    title: "UX Lessons That We Can Learn from “Threads”",
    image: blog4,
    readTime: 12,
  },
  {
    id: 2,
    authors: {
      name: "Will Smith",
      publishDate: "01/01/2015",
      photo: profile,
    },
    keys: ["Developer", "Coding"],
    title: "UX Lessons That We Can Learn from “Threads”",
    image: blog5,
    readTime: 15,
  },
  {
    id: 3,
    authors: {
      name: "Justin Beiber",
      publishDate: "01/01/2015",
      photo: profile,
    },
    keys: ["Marketing", "Client"],
    title: "UX Lessons That We Can Learn from “Threads”",
    image: blog6,
    readTime: 20,
  },
  {
    id: 4,
    authors: {
      name: "Justin Beiber",
      publishDate: "01/01/2015",
      photo: profile,
    },
    keys: ["Marketing", "Client"],
    title: "UX Lessons That We Can Learn from “Threads”",
    image: blog7,
    readTime: 20,
  },
  {
    id: 5,
    authors: {
      name: "Justin Beiber",
      publishDate: "01/01/2015",
      photo: profile,
    },
    keys: ["Marketing", "Client"],
    title: "UX Lessons That We Can Learn from “Threads”",
    image: blog8,
    readTime: 20,
  },
  {
    id: 6,
    authors: {
      name: "Justin Beiber",
      publishDate: "01/01/2015",
      photo: profile,
    },
    keys: ["Marketing", "Client"],
    title: "UX Lessons That We Can Learn from “Threads”",
    image: blog9,
    readTime: 20,
  },
];
export const PopularBlogsData = [
  {
    id: 1,
    authors: {
      name: "John Smith",
      publishDate: "01/01/2015",
      photo: profile,
    },
    keys: ["UI/UX", "Design"],
    title: "UX Lessons That We Can Learn from “Threads”",
    image: blog4,
    readTime: 12,
  },
  {
    id: 2,
    authors: {
      name: "Will Smith",
      publishDate: "01/01/2015",
      photo: profile,
    },
    keys: ["Developer", "Coding"],
    title: "UX Lessons That We Can Learn from “Threads”",
    image: blog5,
    readTime: 15,
  },
  {
    id: 3,
    authors: {
      name: "Justin Beiber",
      publishDate: "01/01/2015",
      photo: profile,
    },
    keys: ["Marketing", "Client"],
    title: "UX Lessons That We Can Learn from “Threads”",
    image: blog6,
    readTime: 20,
  },
  {
    id: 4,
    authors: {
      name: "Justin Beiber",
      publishDate: "01/01/2015",
      photo: profile,
    },
    keys: ["Marketing", "Client"],
    title: "UX Lessons That We Can Learn from “Threads”",
    image: blog7,
    readTime: 20,
  },
  {
    id: 5,
    authors: {
      name: "Justin Beiber",
      publishDate: "01/01/2015",
      photo: profile,
    },
    keys: ["Marketing", "Client"],
    title: "UX Lessons That We Can Learn from “Threads”",
    image: blog8,
    readTime: 20,
  },
  {
    id: 6,
    authors: {
      name: "Justin Beiber",
      publishDate: "01/01/2015",
      photo: profile,
    },
    keys: ["Marketing", "Client"],
    title: "UX Lessons That We Can Learn from “Threads”",
    image: blog9,
    readTime: 20,
  },
];
export const LikedBlogsData = [
  {
    id: 1,
    authors: {
      name: "John Smith",
      publishDate: "01/01/2015",
      photo: profile,
    },
    keys: ["UI/UX", "Design"],
    title: "UX Lessons That We Can Learn from “Threads”",
    image: blog4,
    readTime: 12,
  },
  {
    id: 2,
    authors: {
      name: "Will Smith",
      publishDate: "01/01/2015",
      photo: profile,
    },
    keys: ["Developer", "Coding"],
    title: "UX Lessons That We Can Learn from “Threads”",
    image: blog5,
    readTime: 15,
  },
  {
    id: 3,
    authors: {
      name: "Justin Beiber",
      publishDate: "01/01/2015",
      photo: profile,
    },
    keys: ["Marketing", "Client"],
    title: "UX Lessons That We Can Learn from “Threads”",
    image: blog6,
    readTime: 20,
  },
  {
    id: 4,
    authors: {
      name: "Justin Beiber",
      publishDate: "01/01/2015",
      photo: profile,
    },
    keys: ["Marketing", "Client"],
    title: "UX Lessons That We Can Learn from “Threads”",
    image: blog7,
    readTime: 20,
  },
  {
    id: 5,
    authors: {
      name: "Justin Beiber",
      publishDate: "01/01/2015",
      photo: profile,
    },
    keys: ["Marketing", "Client"],
    title: "UX Lessons That We Can Learn from “Threads”",
    image: blog8,
    readTime: 20,
  },
  {
    id: 6,
    authors: {
      name: "Justin Beiber",
      publishDate: "01/01/2015",
      photo: profile,
    },
    keys: ["Marketing", "Client"],
    title: "UX Lessons That We Can Learn from “Threads”",
    image: blog9,
    readTime: 20,
  },
];
