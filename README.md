### What is kmuvscorona?

KMU vs. Corona provides sector-specific and problem-specific knowledge and solution approaches for German SMEs. Working with experts and information from the internet, we identified the major challenges for SMEs right now, as well as potential solutions. KMU Vs. Corona maps solutions with problems and in turn links the problems to one or more of the six main target groups we defined. The end-user visits our website as a handyman, hairdresser or independent artist and chooses the target group or industry they identify with, finding relevant problems and solutions ready listed.
 
[You can find a live demo here.](https://www.kmuvscorona.de/)

Feel free to use our source code for your regional / national "SME Vs. Corona" project. Our project is divided into 3 packages:

* ### `backend`

This package contains code for the backend built with express + mongoose

* ### `admin-frontend`

This is a React App which manages all targetGroups, problems and solutions

* ### `user-frontend`

This is the fronted that shows business owners applicable solutions to their problems

### How to install

1. Install Node on your machine
2. Change to the directories of the three packages and install through node package manager
`$ npm install marked`
3. In the src folder of user-frontend and admin-frontend add a axiosInstance.js file. For baseURL either enther the address of your hosted backend server or - in the development phase - use "localhost:5000/"
<pre>
import axios from 'axios';


// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: 'YOUR BACKEND SERVER BASE URL,
});
export default instance;
</pre>
4. We used a MongoDB 
