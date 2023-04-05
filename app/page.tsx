"use client";
import Post from "../app/components/Post";
import AddPost from "./components/AddPost";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { PostsType } from "./types/Posts";

//Fetch all posts

const allPosts = async () => {
  const response = await axios.get("/api/posts/getPost");
  return response.data;
};

export default function Home() {
  const { data, error, isLoading } =
    useQuery<PostsType[]>
    ({
      queryFn: allPosts,
      queryKey: ["posts"],
    });
  if (error) return error;
  // console.log(error);
  if (isLoading) return "Loading.....";
console.log(data)
  return (
    <div>
      <AddPost />
      {data?.map((post) => (
        <Post
          comments={post.Comment}
          key={post.id}
          id={post.id}
          name={post.user.name}
          avatar={post.user.image}
          postTitle={post.title}
        />
      ))}
    </div>
  );
}
