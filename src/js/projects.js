import discordScreen from "../screens/discord-mern.png";
import typingScreen from "../screens/typing-game.png";
// import cleanImage from "../screens/clean-image.png";

const projects = [
  {
    title: "Discord Clone",
    used: ["nodejs", "react", "redux", "express", "mongodb", "socketio"],
    image: discordScreen,
    link: "https://github.com/GiorgiR2/discord-clone-react",
    liveView: "https://giorgir2.github.io/discord-clone",
  },
  {
    title: "Typing Game",
    used: ["JS Dom", "python/flask", "sqlite", "socketio"],
    image: typingScreen,
    link: "https://github.com/GiorgiR2/typing-game",
    liveView: null,
  },
  // {
  //   title: "no name",
  //   used: ["no data"],
  //   image: cleanImage,
  //   link: "#",
  // },
  // {
  //   title: "no name",
  //   used: ["no data"],
  //   image: cleanImage,
  //   link: "#",
  // },
];

export default projects;
