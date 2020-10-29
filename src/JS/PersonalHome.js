import React, { useState } from "react";
import { useStateValue } from "./StateProvider";
import { auth, db } from "./firebase";
import { firebaseApp } from "./firebase";

function PersonalHome() {
  const [fileUrl, setFileUrl] = useState("");
  const [{ user }, dispatch] = useStateValue();
  const [disable1, setDisabled1] = useState(true);

  const deleteFile = () => {
    document.getElementById("file1").value="";
  };


  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = firebaseApp.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
    setDisabled1(false);
  };

  const submitForm = (e) => {
    e.preventDefault();
    const username = auth.currentUser.displayName;
    const pic = auth.currentUser.photoURL;
    const id = auth.currentUser.uid;

    console.log(username);
    console.log(auth.currentUser.uid);
    console.log(fileUrl);

    db.collection("users")
      .doc(id)
      .set({
        username: username,
        pic: pic,
        file: fileUrl,
      })
      .then(alert("Info Saved"))
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="personalhome">
      This is the personal Home screen
      <form onSubmit={submitForm}>
        <input
          type="file"
          id="file1"
          placeholder="Your file here"
          onChange={onFileChange}
        />

        <div onClick={deleteFile}>
          Remove This File
        </div>

        <button disabled={disable1} type="submit">
          <span>{disable1 ? <p>Disabled</p> : "Submit Form"}</span>
        </button>
      </form>
    </div>
  );
}

export default PersonalHome;
