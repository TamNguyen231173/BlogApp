import storage from "../../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export const uploadImageToStorage = async (path, imageName) => {
  const storageRef = ref(storage, `${path}/${imageName}`);
  const response = await fetch(imageName);
  const blob = await response.blob();
  const uploadTask = uploadBytesResumable(storageRef, blob);

  const next = (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log("Upload is " + progress + "% done");
    switch (snapshot.state) {
      case "paused":
        console.log("Upload is paused");
        break;
      case "running":
        console.log("Upload is running");
        break;
    }
  };

  const error = (error) => {
    console.log(error);
  };

  const complete = () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log("File available at", downloadURL);
    });
  };

  uploadTask.on("state_changed", {
    next,
    error,
    complete,
  });

  const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
  return downloadURL;
};
