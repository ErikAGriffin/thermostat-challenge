describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it('should be initialized with a temperature of 20 C', function() {
    expect(thermostat.temperature).toEqual(20);
  });


});