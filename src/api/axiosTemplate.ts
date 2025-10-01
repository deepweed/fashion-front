import axios from "axios";

const axiosOption = {
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

export const axiosTemplate = axios.create(axiosOption);
