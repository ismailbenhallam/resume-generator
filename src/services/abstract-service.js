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
    if (Array.isArray(object)) {
      if (typeof object === "string")
        object = object.filter((a) => a !== element);
      else object = object.filter((a) => !this.shallowEqual(a, element));
    } else delete object[element];
    this.save(object);
  };

  addOne = (element) => {
    let object = this.getAll();
    if (Array.isArray(object)) object.push(element);
    else object = { ...object, ...element };
    this.save(object);
  };

  shallowEqual = (object1, object2) => {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (let key of keys1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  };
}
