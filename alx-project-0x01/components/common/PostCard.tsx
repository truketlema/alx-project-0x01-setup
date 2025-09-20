import React from "react";

const PostCard: React.FC = () => {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="font-semibold text-lg">Post Title</h3>
      <p className="text-gray-500">Post description...</p>
    </div>
  );
};

export default PostCard;
