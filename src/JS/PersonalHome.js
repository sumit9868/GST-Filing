import React, { useState } from "react";
import { auth, db } from "./firebase";
import { firebaseApp } from "./firebase";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

function PersonalHome() {
  const [fileUrl1, setFileUrl1] = useState("");
  const [fileUrl2, setFileUrl2] = useState("");
  const [disable1, setDisabled1] = useState(true);
  const [disable2, setDisabled2] = useState(true);

  const history = useHistory();

  const onFileChange1 = async (e) => {
    const file = e.target.files[0];
    const storageRef = firebaseApp.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl1(await fileRef.getDownloadURL());
    setDisabled1(false);
  };

  const onFileChange2 = async (e) => {
    const file = e.target.files[0];
    const storageRef = firebaseApp.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl2(await fileRef.getDownloadURL());
    setDisabled2(false);
  };

  const deleteFile1 = () => {
    const desertRef = firebaseApp.storage().refFromURL(fileUrl1);
    desertRef
      .delete()
      .then(function () {
        alert("Deleted");
      })
      .catch(function (error) {
        alert("Cannot delete");
      });
    document.getElementById("file1").value = "";
    setDisabled1(true);
    setFileUrl1("");
  };

  const deleteFile2 = () => {
    const desertRef = firebaseApp.storage().refFromURL(fileUrl2);
    desertRef
      .delete()
      .then(function () {
        alert("Deleted");
      })
      .catch(function (error) {
        alert("Cannot delete");
      });
    document.getElementById("file2").value = "";
    setDisabled1(true);
    setFileUrl1("");
  };

  const submitForm = (e) => {
    e.preventDefault();

    db.collection("users")
      .doc(auth.currentUser.uid)
      .set({
        username: auth.currentUser.displayName,
        pic: auth.currentUser.photoURL,
        file1: fileUrl1,
        file2: fileUrl2,
      })
      .then(alert("Info Saved"))
      .catch((error) => {
        alert(error.message);
      });

    history.replace("/");
  };

  return (
    <div className="personalhome">
      This is the personal Home screen
      <form onSubmit={submitForm}>
        <div>
          <input
            type="file"
            id="file1"
            placeholder="Your file here"
            onChange={onFileChange1}
          />

          <Button disabled={!fileUrl1} onClick={deleteFile1}>
            Remove This File
          </Button>
        </div>

        <div>
          <input
            type="file"
            id="file2"
            placeholder="Your file here"
            onChange={onFileChange2}
          />

          <Button disabled={!fileUrl2} onClick={deleteFile2}>
            Remove This File
          </Button>
        </div>

        <div>
          <button disabled={disable1 || disable2} type="submit">
            Submit Form
          </button>
        </div>
      </form>
    </div>
  );
}

export default PersonalHome;
