function Thermostat() {
  this.temperature = 20;
};

Thermostat.prototype.raiseTemp = function() {
  this.temperature++;
};

Thermostat.prototype.lowerTemp = function() {
  this.temperature--;
};