import axios from "axios";
import baseurl from ".";

export const AddNewCalenderRouter = async (calenderData) => {
  try {
    const response = await axios.post(`${baseurl}/event/add`, calenderData);

    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const getCalendertRouter = async (id) => {
  console.log(id);
  try {
    const response = await axios.get(`${baseurl}/event/read`, {
      params: { id: id },
    });
    console.log(response);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};
