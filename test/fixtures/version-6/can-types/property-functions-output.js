class Bar extends DefineObject {
  static get define() {
    return {
      name: 'string'
    };
  }

  createItem(args) {
    return new Item(args);
  }
};

class Foo extends DefineObject {
  static get define() {
    return {};
  }

  createItem(args) {
    return new Item(args);
  }
};

class List extends DefineArray {
  static get define() {
    return {
      name: 'string',
      items: []
    };
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(index) {
    this.items.splice(index, 1);
  }
};
