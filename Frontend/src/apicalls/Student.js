import axios from "axios";
import baseurl from ".";
import { toast } from "react-toastify";

export const AddNewStudentRouter = async (studentData) => {
  const token = sessionStorage.getItem("token");
  try {
    const response = await axios.post(`${baseurl}/student/add`, studentData, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 403) {
      toast("User not authorized");
    }

    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const DeleteStudentRouter = async (data) => {
  try {
    console.log(data);
    const response = await axios.post(`${baseurl}/student/delete`, data);
    console.log(response);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const updateStudentAttendenceRouter = async (data) => {
  try {
    const response = await axios.put(
      `${baseurl}/student/Attendenceupdate`,
      data
    );

    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export const getStudentRecordBatchRouter = async (data) => {
  //console.log(id);
  try {
    const response = await axios.get(
      `${baseurl}/student/read/AttendenceRecord/AllStudent/RecordButton`,
      {
        params: { id: data.id, batch: data.batch, date: data.date },
      }
    );
    console.log(response);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export const getStudentWithoutBatch = async (id) => {
  //console.log(id);
  try {
    const response = await axios.get(`${baseurl}/student/read/WithoutBatch`, {
      params: { id: id },
    });
    // console.log(response.data)
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export const AddStudentWithoutBatch = async (data) => {
  //console.log(id);
  try {
    const response = await axios.patch(
      `${baseurl}/student/add/WithoutBatch`,
      data
    );
    // console.log(response.data)
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export const getStudentReadBatch = async (data) => {
  //console.log(id);
  try {
    const response = await axios.get(`${baseurl}/student/read/Batch`, {
      params: { id: data.id, batch: data.batch },
    });
    // console.log(response.data)
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};




export const getStudentOneRead = async (data) => {
  //console.log(id);
  try {
    const response = await axios.get(`${baseurl}/student/read/id`, {
      params: { userId: data.userId},
    });
    // console.log(response.data)
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};


