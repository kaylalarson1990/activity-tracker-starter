if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  var hydrationData = require('../data/hydrationData');
}

class Hydration {
  constructor(id) {
    this.id = id;
  }

  ouncesPerDate() {
    // object.key[date].find to match specific date dd/mm/yyyy
    // return value for key numOunces
  }

  ouncesPerWeek() {
    // accept date start and date finish
    // probaby reduce over array for keys matching start and end dates accumulating all values for key numOunces between start and end
  }
}

if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Hydration;
}
