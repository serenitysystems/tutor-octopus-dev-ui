import axios from "axios";
import baseurl from ".";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AddQuestionRouter = async (data) => {
  try {
    const response = await axios.post(`${baseurl}/teacher/question/add`, data);

    if (response.status === 403) {
      toast("User not authorized");
    }

    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const ReadQuiz = async (data) => {
  const token = sessionStorage.getItem("token");

  try {
    const response = await axios.get(`${baseurl}/Quiz/read`, {
      params: { userId: data.userId, role: data.role,quizType:data.quizType },
      headers: {
        authorization: token,
      },
    });
    console.log(response, "quizes");
    if (response.status === 210) {
      toast("User not authorized!");
    }

    return response.data.data;
  } catch (error) {
    return error.message;
  }
};

export const CreateQuiz = async (data) => {
  const token = sessionStorage.getItem("token");
  // const navigate=useNavigate();
  try {
    const response = await axios.post(`${baseurl}/Quiz/create`, data, {
      headers: {
        authorization: token,
      },
    });

    if (response.status === 210) {
      toast("User not authorized");
      // navigate('/Login');
    }

    //  RETURN RESPONSE.DATA FROM HERE!!!!!
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const AddUpdateQuesitons = async (data) => {
  try {
    //THIS WAS A PATCH REQUEST
    const response = await axios.patch(`${baseurl}/Quiz/updateQuestion`, data);
    console.log(response);
    if (response.status === 403) {
      toast("User not authorized");
    } else if (response.status === 500) {
      toast.info(response.data.message);
    }

    return response.data;
  } catch (error) {
    return error.response ? error.response.data : "An error occurred";
  }
};

export const deleteQuiz = async (data) => {
  try {
    const response = await axios.post(`${baseurl}/Quiz/deleteQuiz`, data);
    console.log(response);
    if (response.status === 403) {
      toast("User not authorized");
    }

    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const submitQuiz = async (data) => {
  try {
    const response = await axios.post(`${baseurl}/Quiz/submitQuiz`, data);
    console.log(response);
    if (response.status === 403) {
      toast("User not authorized");
    }

    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const removesubmitQuiz = async (data) => {
  try {
    console.log(data);
    const response = await axios.post(`${baseurl}/Quiz/reallowQuiz`,data);
    console.log(response);
    if (response.status === 403) {
      toast("User not authorized");
    }

    return response.data;
  } catch (error) {
    return error.message;
  }
};

//Student-Section for Quiz

export const ReadStudentQuiz = async (data) => {
  const token = sessionStorage.getItem("token");

  try {
    const response = await axios.get(`${baseurl}/Quiz/read`, {
      params: { userId: data.userId, role: data.role },
      headers: {
        authorization: token,
      },
    });
    console.log(response, "quizes");
    if (response.status === 210) {
      toast("User not authorized!");
    }

    return response.data.data;
  } catch (error) {
    return error.message;
  }
};

export const fetchStudentQuizDetails = async (data) => {
  const token = sessionStorage.getItem("token");

  try {
    const response = await axios.get(`${baseurl}/Quiz/recordQuiz`, {
      params: { quizId: data.quizId, batch: data.batch,managedBy:sessionStorage.getItem('userId') },
      headers: {
        authorization: token,
      },
    });
    console.log(response, "quizes");
    if (response.status === 210) {
      toast("User not authorized!");
    }

    return response.data.data;
  } catch (error) {
    return error.message;
  }
};



export const fetchStudentQuizBatchList = async (data) => {
  const token = sessionStorage.getItem("token");

  try {
    const response = await axios.get(`${baseurl}/Quiz/recordQuiz`, {
      params: { batch: data.batch,managedBy:sessionStorage.getItem('userId') },
      headers: {
        authorization: token,
      },
    });
    console.log(response, "quizes");
    if (response.status === 210) {
      toast("User not authorized!");
    }

    return response.data.data;
  } catch (error) {
    return error.message;
  }
};



