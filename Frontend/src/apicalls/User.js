import  axios from "axios";
import baseurl from ".";

export const LoginUser=async (user)=>{
     console.log("apicalls_User.js_Loginapi")
   try{
        const response=await axios.post(`${baseurl}/login`,user);
        console.log(response);
        return response.data;
   }
   catch(error)
   {
        return error;
   }

};






export const RegisterUser=async (user)=>{
    try{
         const response=await axios.post(`${baseurl}/register`,user);
         return response.data;
    }
    catch(error)
    {
         return error.response.data;
    }
 
 };



 export const AnnouncementUser=async (user)=>{
     console.log(user)
     try{
          const response=await axios.post(`${baseurl}/teacher/announcement`,user);
          return response.data;
     }
     catch(error)
     {
          return error.response.data;
     }
  
  };


export const getAnnouncementUser=async (data)=>{
     try{
          //console.log(id)
          const response = await axios.get(`${baseurl}/announcement/read`, {
                    params:{id:data.id,
                         
                         // batch:data.batch
                    }
           });
          return response.data;
     }
     catch(error)
     {
          return error.response.data;
     }

}


//get student of particular teacher
export const getStudentRouter=async(id)=>{
     console.log(id);
     try{
          const response=await axios.get(`${baseurl}/student/read`,{
               params:{id:id}
          });
          console.log(response)
          return response.data;

     }catch(err){
          return err.response.data
     }
}


//update student of a particular teacher
export const updateStudentRouter=async(data)=>{
     //console.log(id);
     try{
          const response=await axios.put(`${baseurl}/student/edit`,
          data
          );
          console.log(response)
          return response.data;

     }catch(err){
          return err.response.data
     }
}


export const OtpUser=async (email)=>{
     //console.log(user)
     try{
          const response=await axios.post(`${baseurl}/user/forgetPassword/sendOTP`,email);
          return response.data;
     }
     catch(error)
     {
          return error.response.data;
     }
  
  };


export const ChangePassword=async (data)=>{
     //console.log(user)
     try{
          const response=await axios.put(`${baseurl}/passwordChange`,data);
          return response.data;
     }
     catch(error)
     {
          return error.response.data;
     }
  
  };





export const getStudentBatchRouter=async(data)=>{
     //console.log(id);
     try{
          const response=await axios.get(`${baseurl}/student/read/AttendenceRecord/AllStudent`,{
               params:{id:data.id,batch:data.batch,date:data.date}
          });
          console.log(response)
          return response.data;

     }catch(err){
          return err.response.data
     }
}



export const getTeacherBatchRouter=async(data)=>{
     //console.log(id);
     try{
          const response=await axios.get(`${baseurl}/teacher/read/batch`,{
               params:{id:data.id}
          });
          // console.log(response)
          return response.data;

     }catch(err){
          return err.response.data
     }
}



export const updateTeacherBatchRouter=async (data)=>{
     console.log(data)
     try{
          const response=await axios.patch(`${baseurl}/teacher/update/batch`,data);
          return response.data;
     }
     catch(error)
     {
          return error.response.data;
     }
  
  };
