$(document).ready (function() {
var thermostat = new Thermostat;
var tempDisplay = document.getElementById('temperature');
var powerSaver = document.getElementById('powerSaver');
var colorArray = {};
colorArray['mild'] = 'green';
colorArray['medium'] = 'orange';
colorArray['severe'] = 'red';
powerSaver.checked = thermostat.isPowerSaving;
tempDisplay.innerHTML = thermostat.temperature;
tempDisplay.style.color = colorArray[thermostat.energyUsage];

  $('#tempUp').on('click', function() {
    thermostat.raiseTemp();
  });
  $('#tempDown').on('click', function() {
    thermostat.lowerTemp();
  });
  $('#resetTemp').on('click', function() {

    thermostat.resetTemp();


  });

  $('#powerSaver').on('click', function() {

    thermostat.togglePowerSaver();
    tempDisplay.innerHTML = thermostat.temperature;
    tempDisplay.style.color = colorArray[thermostat.energyUsage];
  });

  $('button').on('click', function() {
    tempDisplay.innerHTML = thermostat.temperature;
    tempDisplay.style.color = colorArray[thermostat.energyUsage];
  });

});
