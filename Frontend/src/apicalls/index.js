// import cloudinary from 'cloudinary';
// export const axiosInstance=axios.create({
//     headers:{
//         autherization:`Bearer ${localStorage.getItem('token')}`
//     },
// });

 const baseurl='https://tutor-octupus-office.onrender.com';
// require('dotenv').config()


// const baseurl='http://localhost:8080';





// config
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // req.files.file.path
// exports.upload = async (req, res) => {
//     try {
//         //console.log(req.body.image);
//       let result = await cloudinary.uploader.upload(req.body.image, {
//         public_id: `${Date.now()}`,
//         resource_type: "auto", // jpeg, png
//       });
//       res.json({
//         public_id: result.public_id,
//         url: result.secure_url,
//       });
//     } catch (error) {
//       console.error("Error uploading image:", error);
//       res.status(500).json({ error: "An error occurred while uploading the image" });
//     }
//   };
  

// exports.remove = (req, res) => {
//   let image_id = req.body.public_id;

//   cloudinary.uploader.destroy(image_id, (err, result) => {
//     if (err) return res.json({ success: false, err });
//     res.send("ok");
//   });
// };




export default baseurl;

