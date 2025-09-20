import React from "react";
import PostCard from "@/components/common/PostCard";

const Posts: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <PostCard />
      <PostCard />
    </div>
  );
};

export default Posts;
