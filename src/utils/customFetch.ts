import axios from "axios";

const snapiAPI = "https://api.spaceflightnewsapi.net/v4/articles/";
const snapiBlogAPI = "https://api.spaceflightnewsapi.net/v4/blogs/";

export const snapiCustomFetch = axios.create({
	baseURL: snapiAPI,
});

export const snapiBlogFetch = axios.create({
	baseURL: snapiBlogAPI,
});
