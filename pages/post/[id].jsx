import React from "react";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  console.log(router);
  return (
    <React.Fragment>
      <h1>Post {router.query.id} </h1>
    </React.Fragment>
  );
};

export default Post;
