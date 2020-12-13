import axios from 'axios';

const KEY = 'AIzaSyApcw_oKhtqERbOFfVl-a0vVY2nPhAoM6A';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  }
})