import axios from "axios"
const KEY = 'AIzaSyDjdTHKMUX4W01iIN-87OEqKbqLi2Oq5hA'

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }
})
