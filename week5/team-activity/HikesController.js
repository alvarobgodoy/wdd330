import HikeModel from './HikeModel.js';
import HikesView from './HikesView.js';

// Hike controller
export default class HikesController {
  constructor(parentId) {
    this.parentElement = document.getElementById(parentId); 
    // this is how our controller will know about the model and view...we add them right into the class as members.
    this.hikeModel = new HikeModel();
    this.hikesView = new HikesView(parentId);
  }
  
  showHikeList() {
    //  this will get called each time we need to display our full hike list. It should grab the list of hikes from the Model, and then send them to the view.
    const hikeList = this.hikeModel.getAllHikes();
    this.hikesView.renderHikeList(hikeList, this.parentElement);
    this.addHikeListener();
  }

  showOneHike(hikeName) {
    // use this when you need to show just one hike...with full details
    let hike = this.hikeModel.getHikeByName(hikeName);
    this.hikesView.renderOneHikeFull(hike, this.parentElement);  
  }
  addHikeListener() {
    // for the stretch you will need to attach a listener to each of the listed hikes to watch for a touchend. 
    const childrenArray = Array.from(this.parentElement.children);
    childrenArray.forEach(child => {
      child.addEventListener('click', e => {
        // why currentTarget instead of target?
        this.showOneHike(e.currentTarget.dataset.name);
        // console.log(e.currentTarget.dataset.name)
      });
    });
  }
}