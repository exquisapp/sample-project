import React, { useEffect, useState } from "react";

const Posts = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${resourceType}`
      );
      const json = await response.json();
      setItems(json);
    };
    fetchData();
  }, [resourceType]);

  return (
    <div>
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("comments")}>Comment</button>

      <h1> {resourceType}</h1>
      {items.map((items, idx) => {
        return <pre key={idx}>{JSON.stringify(items)}</pre>;
      })}
    </div>
  );
};

export default Posts;
