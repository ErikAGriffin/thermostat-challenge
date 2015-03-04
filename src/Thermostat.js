function Thermostat() {
  this.temperature = 20;
  this.isPowerSaving = true;
};

Thermostat.prototype.togglePowerSaver = function() {
  this.isPowerSaving = !this.isPowerSaving;
};

Thermostat.prototype.raiseTemp = function() {
  if (this.isPowerSaving) {
    if (this.temperature < 25) {
      this.temperature++;
    }
  }
  else {
    if (this.temperature < 32) {
      this.temperature++;
    }
  }
};

Thermostat.prototype.lowerTemp = function() {
  if (this.temperature > 10) {
    this.temperature--;
  }
};

Thermostat.prototype.resetTemp = function () {
  this.temperature = 20;
};