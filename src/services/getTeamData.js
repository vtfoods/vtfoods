import { axiosInstance } from "./axios.config";

export const getTeamData = async () => {
  try {
    const res = await axiosInstance.get("ourTeam/getOurTeam");
    if (res.status !== 200) throw new Error("Network response was not ok");
    return res.data;
  } catch (error) {
    console.error("Error while fetching a team data:", error);
    throw new Error(error.message);
  }
};

export const getJobPost = async () => {
  try {
    const res = await axiosInstance.get("career/getcareer");
    if (res.status !== 200) throw new Error("Network response was not ok");
    return res.data;
  } catch (error) {
    console.error("Error while fetching a team data:", error);
    throw new Error(error.message);
  }
};
