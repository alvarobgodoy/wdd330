import Hikes from './hikes.js';
const myHike = new Hikes();
window.addEventListener("load", () => {
  //on load grab the array and insert it into the page
  myHike.showHikeList();
});

