import React, { useState } from "react";
import axios from "axios";

const PostImage = () => {
  const [upload, setUpload] = useState("");

  const uploadHandler = (e) => {
    setUpload(e.target.files[0]);
  };

  //   curl --location --request POST 'https://api.imgur.com/3/image' \
  // --header 'Authorization: Client-ID {{clientId}}' \
  // --form 'image="R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"'

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://api.imgur.com/3/image";

    const formData = new FormData();
    formData.append("orunSTu", upload, upload.id);
    formData.append("id", "demo");
    let response = await axios.post(url, formData);
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container mt-5">
        <div className="m-auto w-50">
          <input
            type="file"
            className="form-control my-2"
            id="orunSTu"
            onChange={uploadHandler}
          />
          <input
            type="submit"
            value="upload"
            className="form-control btn btn-primary my-2"
          />
        </div>
      </div>
    </form>
  );
};

export default PostImage;
