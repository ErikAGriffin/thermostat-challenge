function Thermostat() {
  this.temperature = 20;
  this.isPowerSaving = true;
  this.energyUsage = this.getEnergyUsage();

};

Thermostat.prototype.togglePowerSaver = function() {
  if (this.temperature > 25) { this.temperature = 25; }
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

Thermostat.prototype.getEnergyUsage = function() {
  if (this.temperature > 24) {this.energyUsage = 'severe'}
  else if (this.temperature > 17) {this.energyUsage = 'medium'}
  else {this.energyUsage = 'mild'}
  return this.energyUsage;
};
