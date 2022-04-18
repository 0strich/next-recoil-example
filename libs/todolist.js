import axios from "axios";

export const getTodoList = async () => {
  const response = await axios.get("/api/todolist");
  return response.data;
};
