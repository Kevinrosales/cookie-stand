'use strict'

var hours = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12am: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','8pm:'];
var table = document.getElementById('table');
var i;
var newLi;
var postiton;
var allStores = [];
var placeTable = document.getElementById('table');

var Store = function(name, min, max, avg) {
    this.storeName = name;
    this.minCust = min;
    this.maxCust = max;
    this.avgSales = avg;
    this.cookieSales = [];
    this.findSales();
    allStores.push(this);
};

 Store.prototype.ranNum = function(min, max) {
    min = this.minCust;
    max = this.maxCust;
    var randomHourlyCust = Math.round(Math.random() * (max - min) + min);
    return randomHourlyCust;
    
};

Store.prototype.findSales = function() {
    for (i =0;i < hours.length; i++) {
        this.cookieSales.push(Math.round(this.ranNum() * this.avgSales));   
    }
}

Store.prototype.render = function() {
    var trElement = document.createElement('tr');
    var tdNameElement = document.createElement('th');
    tdNameElement.textContent = this.name;
    trElement.appendChild(tdNameElement);

    for(i=0; i < hours.length; i++) {
        var tdElement = document.createElement('td');
        tdElement.textContent = this.cookieSales[i];
        trElement.appendChild(tdElement);
    }
        placeTable.appendChild(trElement);    
}

function makeHeaderRow() {
    var tableHeaderElement = document.createElement('tHead');
    var trTableHeaderElement = document.createElement('tr');
    trTableHeaderElement.appendChild(document.createElement('th'));

    for(i=0; i < hours.length; i++){
        var tdHeaderElement = document.createElement('th');
        tdHeaderElement.appendChild(document.createTextNode(hours[i]));
        trTableHeaderElement.appendChild(tdHeaderElement);
    }
    table.appendChild(trTableHeaderElement);
}

new Store('First and Pike', 23, 65, 6.3);  
new Store('Seatac AirPort', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

this.makeHeaderRow();
allStores[0].render();
allStores[1].render();
allStores[2].render();
allStores[3].render();
allStores[4].render();



// for(i =0; i < 1; i++) { 
//  newLi = document.createElement('li');
//  newLi.textContent = this.cookieSales;
//  postiton.appendChild(newLi);
//  console.log(this.cookieSales);

//  pike.findSales() first then 
//  pike.cookieSales gets the data in the console.
//  }
