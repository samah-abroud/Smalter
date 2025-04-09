import React from "react";
import BlogCard from "../components/blogcard";

import Blog1 from "../assets/Blog1.jpg";
import Blog2 from "../assets/Blog2.jpg";
import Blog3 from "../assets/Blog3.jpg";
import Profil1 from "../assets/Profil1.jpg";
import Profil2 from "../assets/Profil2.jpg";
import Profil3 from "../assets/Profil3.jpg";

const cardData = [
  {
    picture: Blog1,
    description:
      "Mauris ullamcorper tortor sed purus interdum, fermentum efficitur est dictu.",
    likes: 120,
    comments: 30,
    profileImage: Profil1,
    profileName: "John Doe",
  },
  {
    picture: Blog2,
    description:
      "Mauris ullamcorper tortor sed purus interdum, fermentum efficitur est dictu.",
    likes: 80,
    comments: 25,
    profileImage: Profil2,
    profileName: "Jane Smith",
  },
  {
    picture: Blog3,
    description:
      "Mauris ullamcorper tortor sed purus interdum, fermentum efficitur est dictu.",
    likes: 200,
    comments: 50,
    profileImage: Profil3,
    profileName: "Alice Johnson",
  },
];

const Blog = () => {
  return (
    <div className="mt-20 " id="blog">
      <div className="flex flex-col justify-center pt-16 items-center  text-blue-600 font-semibold text-s text-center">
        <p>Blog</p>
        <span className="text-center">___</span>
      </div>
      <h1 className="text-3xl font-bold text-center mt-6  ">Récent blog</h1>
      <p className="mt-4 mb-6 text-center text-gray-500">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />{" "}
        Reiciendis, non reprehenderit adipisci repellat corrupti.
      </p>

      <div className="flex flex-wrap justify-center">
        {cardData.map((card, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <BlogCard
              picture={card.picture}
              description={card.description}
              likes={card.likes}
              comments={card.comments}
              profileImage={card.profileImage}
              profileName={card.profileName}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
