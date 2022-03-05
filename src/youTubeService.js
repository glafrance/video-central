import axios from "axios";

const youTubeAPIKey = "AIzaSyBQBvnWLLUUCKMOl9bmRsG-_aLAjDGYxN0";

export const getVideos = async (term) => {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${youTubeAPIKey}&type=video&part=snippet&q=${term}`;

  const response = await axios.get(url);

  return response;
};