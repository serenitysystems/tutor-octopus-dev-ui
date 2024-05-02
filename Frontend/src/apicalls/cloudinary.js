import  axios from "axios";
import baseurl from ".";


export const imageUpload = async (uri) => {
  console.log("apicalls_User.js_Loginapi");
  console.log(uri);
  try {
    const response = await axios.post(
      'http://localhost:3000/cloudinary/uploadimages', // Include protocol (http://)
      { image: uri }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error uploading image:', error);
    return error;
  }
};