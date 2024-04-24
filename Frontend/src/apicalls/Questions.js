import  axios from "axios";
import baseurl from ".";
import { toast } from "react-toastify";

export const AddQuestionRouter=async (data)=>{
    // console.log("AddNewStudentRouter")
    // console.log(studentData);
    // const token = sessionStorage.getItem('token');
    console.log("reached");
  try{
     const response = await axios.post(`${baseurl}/teacher/question/add`,  data);
     console.log(response )
        if(response.status===403)
        {
          toast("User not authorized")
        }
      // console.log(response);
       return response.data;
  }
  catch(error)
  {
       return error.message;
  }

};