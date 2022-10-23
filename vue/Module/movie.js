export default class {
  constructor(obj) {
    this.id = obj.id;
    this.title = obj.fullTitle;
    this.img = obj.image;
    this.rating = obj.imDbRating;
    this.type = obj.genres;
    this.year = obj.year;
    this.time = obj.runtimeStr;
    this.plot = obj.plot;
    this.awards = obj.awards;
    this.directors = obj.directors;
    this.stars = obj.stars;
    this.actorList = obj.actorList;
  }
}
