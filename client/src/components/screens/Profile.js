import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";

const Profile = () => {
  const [myPics, setPics] = useState([]);
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    fetch("/mypost", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setPics(result.mypost);
      });
  }, []);

  useEffect(() => {
    if (image) {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "austugram");
      data.append("cloud_name", "austinscloud");
      fetch("	https://api.cloudinary.com/v1_1/austinscloud/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setUrl(data.url);
          localStorage.setItem(
            "user",
            JSON.stringify({ ...state, pic: data.url })
          );
          dispatch({ type: "UPDATEPIC", payload: data.url });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [image]);

  const uploadPhoto = (file) => {
    setImage(file);
  };

  return (
    <div style={{ maxWidth: "550px", margin: "0px auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "18px 0px",
          borderBottom: "1px solid grey",
        }}
      >
        <div>
          <img
            style={{ width: "160px", height: "160px", borderRadius: "80px" }}
            src={state ? state.pic : "Loading"}
            alt=""
          />
        </div>
        <div>
          <div className="file-field input-field">
            <div className="btn #81d4fa light-blue lighten-3">
              <span>Edit Pic</span>
              <input
                type="file"
                onChange={(e) => uploadPhoto(e.target.files[0])}
              />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div>
          </div>
        </div>
        <div>
          <h4>{state ? state.name : "Loading"}</h4>
          <h5>{state ? state.email : "Loading"}</h5>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "108%",
            }}
          >
            <h6>{myPics.length} posts</h6>
            <h6>{state ? state.followers.length : "0"} followers</h6>
            <h6>{state ? state.following.length : "0"} following</h6>
          </div>
        </div>
      </div>
      <div className="gallery">
        {myPics.map((item) => {
          return (
            <img
              key={item._id}
              className="item"
              src={item.photo}
              alt={item.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
