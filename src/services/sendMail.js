import axios from "axios";

export const sendContactMail = async (name, phone_number) => {
  const data = {
    name,
    phone_number,
  };

  try {
    return axios.post("/api/contact", data);
  } catch (error) {
    return error;
  }
};
