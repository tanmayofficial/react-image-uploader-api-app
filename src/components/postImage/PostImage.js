import React, { useState, useEffect } from "react";
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
    const formData = new FormData();
    formData.append("uploadFile", upload);
    const getUrl = document.getElementById("url");

    const url = "https://api.imgur.com/3/image/";

    axios
      .post(url, {
        headers: {
          Authorization: "Client-ID {{3c183b64abaedc1}}",
        },
        body: formData,
      })
      .then((response, data) => {
        console.log(response);
        getUrl.innerText = data.data.link;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container mt-3">
        <div className="m-auto w-50">
          <input
            type="file"
            className="form-control my-2"
            id="uploadFile"
            onChange={uploadHandler}
          />
          <button
            type="submit"
            value=""
            className="form-control btn btn-primary my-2"
          >
            upload
          </button>
        </div>
        <div className="w-25 img-fluid">
          <p className="url"></p>
        </div>
      </div>
    </form>
  );
};

export default PostImage;
