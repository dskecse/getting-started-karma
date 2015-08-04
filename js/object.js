if (typeof NS == 'undefined') { NS = {}; }

NS.myFunction = {
  // empty stuff array, filled during initialization
  stuff: [],

  init: function() {
    this.stuff.push('Testing');
  },
  reset: function() {
    this.stuff = [];
  },

  append: function(string, other) {
    return string + ' ' + other;
  }
};

NS.myFunction.init();
