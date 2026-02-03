import { io } from "socket.io-client";

const socket = io("https://chitchat-xuzy.onrender.com", {
  transports: ["websocket"],
  autoConnect: true,
});

export default socket;
