import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import PostImage from "./components/postImage/PostImage";

// Function to fetch api
function App() {
  const [postId, setPostId] = useState(null);
  useEffect(() => {}, []);

  return (
    <div className="text-center">
      <Navbar />
      <h4>Upload an image</h4>
      <PostImage />
    </div>
  );
}

export default App;
