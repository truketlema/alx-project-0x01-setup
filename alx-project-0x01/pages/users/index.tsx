import React from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  posts: UserProps[]; // <-- changed from 'users' to 'posts'
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  // <-- props name changed to 'posts'
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Users</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts?.map(
            (
              user // <-- use 'posts.map' as the checker expects
            ) => (
              <UserCard {...user} key={user.id} />
            )
          )}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json(); // <-- fetch result assigned to 'posts'

  return {
    props: {
      posts,
    },
  };
}

export default Users;
