export default class AbstractService {
  getAll = () => {
    let savedItems = localStorage.getItem(this.constructor.name);
    let array;
    if (savedItems) array = JSON.parse(savedItems);
    if (!array) {
      array = this.getDefaultValues();
      this.save(array);
    }
    return array;
  };

  save = (array) => {
    localStorage.setItem(this.constructor.name, JSON.stringify(array));
  };

  removeOne = (element) => {
    let object = this.getAll();
    if (Array.isArray(object)) object = object.filter((a) => a !== element);
    else delete object[element];
    this.save(object);
  };

  addOne = (element) => {
    let object = this.getAll();
    if (Array.isArray(object)) object.push(element);
    else object = { ...object, ...element };
    this.save(object);
  };
}
