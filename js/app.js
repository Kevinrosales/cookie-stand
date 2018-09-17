'use strict'

var hours = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12am: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','8pm:'];

var firstAndPike = {
    min: 23,
    max: 65,
    avg: 6.3,
    cookieSales: [],

    randoMen: function (min, max) {
        min = Math.ceil(this.min);
        max = Math.floor(this.max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
      
      makeAvg: function () {
      
      }
};
