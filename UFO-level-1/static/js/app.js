// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

tableData.forEach(sighting => {
    
    var row = tbody.append('tr');

    Object.entries(sighting).forEach(([key,value]) => {
        var cell = row.append('td');
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");

var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {
  
  d3.event.preventDefault();

  //d3.event.select('#ufo-table tbody > tr').remove()
  
  var inputElement = d3.select('#datetime');
  
  var inputValue = inputElement.property('value');
  
  var filteredData = tableData.filter((row) => row.datetime === inputValue);

  d3.select('tbody').html("");

  filteredData.forEach(sighting => {
    
    var row = tbody.append('tr');

    Object.entries(sighting).forEach(([key,value]) => {
        var cell = row.append('td');
        cell.text(value);
    });
});
  
} 
