import React, { useState } from "react";
import { auth, db } from "./firebase";
import { firebaseApp } from "./firebase";
import { useHistory } from "react-router-dom";
import "../CSS/PersonalHome.css";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

function PersonalHome() {

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      alignSelf:'center'
      
    },
  }));

  const classes = useStyles();

  const [fileUrl1, setFileUrl1] = useState("");
  const [fileUrl2, setFileUrl2] = useState("");
  const [fileUrl3, setFileUrl3] = useState("");
  const [fileUrl4, setFileUrl4] = useState("");
  const [fileUrl5, setFileUrl5] = useState("");
  const [fileUrl6, setFileUrl6] = useState("");


  const [disable1, setDisabled1] = useState(true);
  const [disable2, setDisabled2] = useState(true);
  const [disable3, setDisabled3] = useState(true);
  const [disable4, setDisabled4] = useState(true);
  const [disable5, setDisabled5] = useState(true);
  const [disable6, setDisabled6] = useState(true);
  
  const history = useHistory();

  const onFileChange1 = async (e) => {
    const file = e.target.files[0];
    const storageRef = firebaseApp.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl1(await fileRef.getDownloadURL());
    setDisabled1(false);
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

  const onFileChange2 = async (e) => {
    const file = e.target.files[0];
    const storageRef = firebaseApp.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl2(await fileRef.getDownloadURL());
    setDisabled2(false);
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

  

  const onFileChange3 = async (e) => {
    const file = e.target.files[0];
    const storageRef = firebaseApp.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl3(await fileRef.getDownloadURL());
    setDisabled3(false);
  };

  const deleteFile3 = () => {
    const desertRef = firebaseApp.storage().refFromURL(fileUrl3);
    desertRef
      .delete()
      .then(function () {
        alert("Deleted");
      })
      .catch(function (error) {
        alert("Cannot delete");
      });
    document.getElementById("file3").value = "";
    setDisabled3(true);
    setFileUrl3("");
  };

  const onFileChange4 = async (e) => {
    const file = e.target.files[0];
    const storageRef = firebaseApp.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl4(await fileRef.getDownloadURL());
    setDisabled4(false);
  };

  const deleteFile4 = () => {
    const desertRef = firebaseApp.storage().refFromURL(fileUrl4);
    desertRef
      .delete()
      .then(function () {
        alert("Deleted");
      })
      .catch(function (error) {
        alert("Cannot delete");
      });
    document.getElementById("file4").value = "";
    setDisabled4(true);
    setFileUrl4("");
  };


  const onFileChange5 = async (e) => {
    const file = e.target.files[0];
    const storageRef = firebaseApp.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl5(await fileRef.getDownloadURL());
    setDisabled5(false);
  };

  const deleteFile5 = () => {
    const desertRef = firebaseApp.storage().refFromURL(fileUrl5);
    desertRef
      .delete()
      .then(function () {
        alert("Deleted");
      })
      .catch(function (error) {
        alert("Cannot delete");
      });
    document.getElementById("file5").value = "";
    setDisabled5(true);
    setFileUrl5("");
  };

  const onFileChange6 = async (e) => {
    const file = e.target.files[0];
    const storageRef = firebaseApp.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl6(await fileRef.getDownloadURL());
    setDisabled6(false);
  };

  const deleteFile6 = () => {
    const desertRef = firebaseApp.storage().refFromURL(fileUrl6);
    desertRef
      .delete()
      .then(function () {
        alert("Deleted");
      })
      .catch(function (error) {
        alert("Cannot delete");
      });
    document.getElementById("file6").value = "";
    setDisabled6(true);
    setFileUrl6("");
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
      <div className="perosonalhome__box">
  
        <div className="personalhome__heading"> Submit your documents here </div>
        <form onSubmit={submitForm} className="personalhome__form">
          <div className="form__field">
            <span className="form__field__heading">Upload Pan</span>
            <input
              type="file"
              id="file1"
              placeholder="Your file here"
              onChange={onFileChange1}
            /> 

            <Button
              disabled={!fileUrl1}
              onClick={deleteFile1}
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
            >
              Delete
      </Button>
          </div>

          <div className="form__field">
            <span className="form__field__heading">Upload Pan</span>
            <input
              type="file"
              id="file2"
              placeholder="Your file here"
              onChange={onFileChange2}
            />



            <Button
              disabled={!fileUrl2}
              onClick={deleteFile2}
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
            >
              Delete
      </Button>
          </div>

          <div className="form__field">
            <span className="form__field__heading">Upload Pan</span>
            <input
              type="file"
              id="file3"
              placeholder="Your file here"
              onChange={onFileChange3}
            />



            <Button
              disabled={!fileUrl3}
              onClick={deleteFile3}
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
            >
              Delete
      </Button>


          </div>

          <div className="form__field">
            <span className="form__field__heading">Upload Pan</span>
            <input
              type="file"
              id="file4"
              placeholder="Your file here"
              onChange={onFileChange4}
            />


            <Button
              disabled={!fileUrl4}
              onClick={deleteFile4}
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
            >
              Delete
      </Button>
          </div>

          <div className="form__field">
            <span className="form__field__heading">Upload Pan</span>
            <input
              type="file"
              id="file5"
              placeholder="Your file here"
              onChange={onFileChange5}
            />



            <Button
              disabled={!fileUrl5}
              onClick={deleteFile5}
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
            >
              Delete
      </Button>


          </div>

          <div className="form__field">
            <span className="form__field__heading">Upload Pan</span>
            <input
              type="file"
              id="file6"
              placeholder="Your file here"
              onChange={onFileChange6}
            />

            <Button
              disabled={!fileUrl6}
              onClick={deleteFile6}
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
            >
              Delete
             </Button>


          </div >
          
          <div>
          <Button
        variant="contained"
        color="default"
        className={classes.button}
        disabled={disable1 || disable2 || disable3 || disable4 || disable5 || disable6} type="submit"
           startIcon={<CloudUploadIcon />}
      >
           Upload
          </Button>
          </div>
    
        </form>
      </div>
    </div>
  );
}

export default PersonalHome;
