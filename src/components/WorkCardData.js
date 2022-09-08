import pro1 from '../assests/pro1.jpeg';
import pro2 from '../assests/pro2.png';
import proj3 from '../assests/proj3.png';
const ProjectCardData = [
    {
        imgsrc: pro1,
        title: "Chat-App",
        text: "A real time Chat App using socket.io, where user can join a public or private chat room with any name and then exchange messages with other users. Used Node.js and Express.js for backened. Used Socket.io to make use of Web Sockets to allow synchronous exchange between Client & Server.",
        source: "https://github.com/aditimishraa/Chat-App"
    },
    {
        imgsrc: pro2,
        title: "Clima",
        text: "Made a beautiful, dark-mode enabled weather app. You'll be able to check the weather for the current location based on the GPS data from the iPhone as well as by searching for a city manually.",
        source: "https://github.com/aditimishraa/Weather-App/tree/main/Clima-iOS13"
    },
    {
        imgsrc: proj3,
        title: "Course-Goal-App",
        text: "A simple React-Native app which allows user to track there goals. Once the goals are added and achieved, the user can tap the goal to remove them. This app gives a deep dive into The Core Fundamentals: using React Native components and building UIs, styling React Native apps and adding interactivity and managing states.  ",
        source: "https://github.com/aditimishraa/LOGIN-FORM"

    },

];

export default ProjectCardData;