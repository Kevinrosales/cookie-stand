'use strict'

var hours = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12am: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','8pm:'];
var newLi;
var displaySales;
var postiton;
var i;

var Store = function(name, min, max, avg) {
    this.storeName = name;
    this.minCust = min;
    this.maxCust = max;
    this.avgSales = avg;
    this.cookieSales = [];
};

 Store.prototype.ranNum = function(min, max) {
    min = this.minCust;
    max = this.maxCust;
    var randomHourlyCust = Math.round(Math.random() * (max - min) + min);
    return randomHourlyCust;

    };

Store.prototype.findSales = function() {
    for (var i =0;i < hours.length; i++) {
      this.cookieSales.push(Math.round(this.ranNum() * this.avgSales));   
    }
}
    
var pike = new Store('First and Pike', 23, 65, 6.3);  
var seaTac = new Store('Seatac AirPort', 3, 11, 1.2);
var seattle = new Store('Seattle Center', 11, 38, 3.7);
var capitol = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);''

for(i =0; i <= hours.length; i++) {
    newLi = document.createElement('li');
    displaySales = document.createTextNode(pike.cookieSales[i]);
    newLi.appendChild(displaySales);
    postiton = document.getElementById(pike);
    postiton.appendChild(newLi);
}