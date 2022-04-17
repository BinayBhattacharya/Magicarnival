import axios from "axios";

const url = "http://localhost:5000/api/get_started";

export const startDAction = async (formData) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(url, formData, config);
    if (!data) {
      throw new Error("Oops! Something is wrong.");
      return;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};
