import profile from "../assets/blog-page/profile-1.png";
import blog1 from "../assets/blog-page/blog-1.png";
import blog2 from "../assets/blog-page/blog-2.png";
import blog3 from "../assets/blog-page/blog-3.png";

export const BlogData = [
  {
    id: 1,
    authors: {
      name: "John Smith",
      publishDate: "01/01/2015",
      photo: profile,
    },
    keys: ["UI/UX", "Design", "Research"],
    title: "UX Lessons That We Can Learn from “Threads”",
    image: blog1,
  },
  {
    id: 2,
    authors: {
      name: "Will Smith",
      publishDate: "01/01/2015",
      photo: profile,
    },
    keys: ["Developer", "Coding", "Research"],
    title: "UX Lessons That We Can Learn from “Threads”",
    image: blog2,
  },
  {
    id: 3,
    authors: {
      name: "Justin Beiber",
      publishDate: "01/01/2015",
      photo: profile,
    },
    keys: ["Marketing", "Client", "Research"],
    title: "UX Lessons That We Can Learn from “Threads”",
    image: blog3,
  },
];
