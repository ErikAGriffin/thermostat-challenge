describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it('should be initialized with a temperature of 20 C', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  describe('Changing Temperate', function() {

    it('Pressing ↑ raises the temperature by 1 degree', function() {
      thermostat.raiseTemp();
      expect(thermostat.temperature).toEqual(21);
    });

    it('Pressing ↓ lowers the temperature by 1 degree', function() {
      thermostat.lowerTemp();
      expect(thermostat.temperature).toEqual(19);
    });

  }); // end Describe 'Changing Temperature' temperature


});