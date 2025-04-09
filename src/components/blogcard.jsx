import React, { useState } from "react";
import { FaRegThumbsUp, FaRegCommentDots } from "react-icons/fa";

const BlogCard = ({
  picture,
  description,
  likes,
  comments,
  profileImage,
  profileName,
}) => {
  const [likeCount, setLikeCount] = useState(likes);

  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={picture} alt="Blog" className="w-full h-64 object-cover" />

      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <div
            className="flex items-center mr-6 cursor-pointer"
            onClick={handleLikeClick}
          >
            <FaRegThumbsUp className="mr-1" />
            <span className="text-black">{likeCount}</span>{" "}
            <p className="mx-2"> likes</p>
          </div>
          <div className="flex items-center">
            <FaRegCommentDots className="mr-1" />
            <span className="text-black">{comments}</span>{" "}
            <p className="mx-2"> comments</p>
          </div>
        </div>

        <p className="text-gray-600 text-base mb-4">{description}</p>

        <div className="flex items-center">
          <img
            src={profileImage}
            alt={profileName}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <p className="font-semibold text-lg">{profileName}</p>
            <p className="text-gray-400">5 min read</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
