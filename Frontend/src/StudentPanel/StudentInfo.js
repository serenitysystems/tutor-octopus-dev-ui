import { useSelector,useDispatch } from "react-redux";
import { setStudentDetails, studentDetails } from "../redux/studentSlice";
import { ReadQuiz } from "../apicalls/Questions";
import { LoginUser } from "../apicalls/User";
import { useEffect } from "react";
import { getStudentOneRead } from "../apicalls/Student";

const StudentInfo = () => {
 
  const dispatch=useDispatch();
  const fetchData = async () => {
    console.log('......')
    const response = await getStudentOneRead({userId:sessionStorage.getItem("userId")});
       dispatch(setStudentDetails(response.data));
  };
  const data = useSelector((state) => {
    return state.student.data
  });


  useEffect(()=>{
    fetchData();
  },[])
 // console.log(data);

  return (
    <div className="justify-content-center">
      <div className="d-flex gap-2 justify-content-center align-items-center">
        <img src="/img/user.svg" className="logoimgy1" alt="student-icon" />
        {/* <span>{data.firstName[0]+data.lastName[0] || "PS"}</span> */}
      </div>
      <hr />
      <ul className="d-flex flex-column gap-1 justify-content-center align-items-start m-4">
        {/* <li>email {data.user ||"PANKAJ"}</li>
        <li>Group: {data.batch || "Batch-1"}</li>
        <li>Programme: {data.programme || "abcd"}</li>
        <li>id: {data.userId.substring(15) || "abcd"}</li> */}

      </ul>
      <hr />
    </div>
  );
};
export default StudentInfo;
