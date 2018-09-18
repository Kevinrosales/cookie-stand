'use strict'

var hours = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12am: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','8pm:'];

var firstAndPike = {
    min: 23,
    max: 65,
    avg: 6.3,
    cookieSales: [],

    //this is what generates the random rumber between 23 and 65
    randoMen: function (min, max) {
        min = Math.ceil(this.min);
        max = Math.floor(this.max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
      
    //list all the hours then multiply the random number with 6.3 and rounds it
    makeAvg: function () {
      for(var i = 0; i < hours.length; i ++){
        var cookieSale = this.randoMen() * this.avg;
        console.log (Math.round(cookieSale));
        }
    }
};

var seaTacAirport = {
    min: 3,
    max: 11,
    avg: 1.2,
    cookieSales: [],

    randoMen: function (min, max) {
        min = Math.ceil(this.min);
        max = Math.floor(this.max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
      
    makeAvg: function () {
      for(var i = 0; i < hours.length; i ++){
        var cookieSale = this.randoMen() * this.avg;
        console.log (Math.round(cookieSale));
        }
    }
};

var seattleCenter = {
    min: 11,
    max: 38,
    avg: 3.7,
    cookieSales: [],

    randoMen: function (min, max) {
        min = Math.ceil(this.min);
        max = Math.floor(this.max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
      
    makeAvg: function () {
      for(var i = 0; i < hours.length; i ++){
        var cookieSale = this.randoMen() * this.avg;
        console.log (Math.round(cookieSale));
        }
    }
};

var capitolHill = {
    min: 20,
    max: 38,
    avg: 2.3,
    cookieSales: [],

    randoMen: function (min, max) {
        min = Math.ceil(this.min);
        max = Math.floor(this.max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
      
    makeAvg: function () {
      for(var i = 0; i < hours.length; i ++){
        var cookieSale = this.randoMen() * this.avg;
        console.log (Math.round(cookieSale));
        }
    }
};

var alki = {
    min: 2,
    max: 16,
    avg: 4.6,
    cookieSales: [],

    randoMen: function (min, max) {
        min = Math.ceil(this.min);
        max = Math.floor(this.max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
      
    makeAvg: function () {
      for(var i = 0; i < hours.length; i ++){
        var cookieSale = this.randoMen() * this.avg;
        console.log (Math.round(cookieSale));
        }
    }
};