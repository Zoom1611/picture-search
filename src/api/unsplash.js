import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID 4aLDa95JV1e4_aXk6h3SD85GMqy13MB0XPydNxyWRKU",
	},
});
