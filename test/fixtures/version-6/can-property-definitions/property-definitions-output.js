class Foo extends DefineArray {
  static get define() {
    return {
      name: 'string',
      date: 'date',
      success: 'boolean',
      completed: {
        type: type.maybeConvert(Boolean),
        default: false
      },
      items: 'any'
    };
  }

  get foo () {
  }

  get define () {
    return {
      foo: 'string'
    }
  }
};

class Bar extends DefineObject {
  static get define() {
    return {
      name: 'string',
      items: {
        enumerable: false,
        type: List,
        default: () => []
      },
      list: {
        type: List,
        default: List
      }
    };
  }
};

class CustomScroll extends StacheDefineElement {
  static get view() {
    return ``;
  }

  static get define() {
    return {
      scrolled: 'boolean',
      elem: 'string',
      something: {
        type: type.maybeConvert(String),
        async (resolve, lastSet) {
          resolve(true);
        }
      }
    };
  }
};

class Baz extends DefineObject {
  static get define() {
    return {
      name: {
        default: () => {
          return 'Hello';
        }
      },
      items: {
        enumerable: false,
        type: List,
        default () {
          return 'World!'
        }
      },
      list: {
        type: List,
        default: List
      }
    };
  }
};