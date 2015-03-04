describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it('is initialized with a temperature of 20 C', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('is initialized with the PowerSaver ON', function() {
    expect(thermostat.isPowerSaving).toBe(true);
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

    it('The temperature will not lower beyond 10 degrees', function() {
      for (i=0; i<11; i++) {
        thermostat.lowerTemp();
      }
      expect(thermostat.temperature).toEqual(10);
    });

    describe('With and without PowerSaver', function() {

      it('Can toggle PowerSaver OFF', function() {
        thermostat.togglePowerSaver();
        expect(thermostat.isPowerSaving).toBe(false);
      });

      it('Can toggle PowerSaver ON', function() {
        thermostat.togglePowerSaver();
        thermostat.togglePowerSaver();
        expect(thermostat.isPowerSaving).toBe(true);
      });

      it('Will not raise above 25 if PowerSaver is ON', function() {
        for (i=0; i<6; i++) {
          thermostat.raiseTemp();
        }
        expect(thermostat.temperature).toEqual(25);
      });

      it('Will not raise above 32 if PowerSaver is OFF', function() {
        thermostat.togglePowerSaver();
        for (i=0;i<13;i++) {
          thermostat.raiseTemp();
        }
        expect(thermostat.temperature).toEqual(32);
      });


    }); // end Describe 'With and Without PowerSaver'

    it('Can reset the temperature to 20 with RESET', function() {
      thermostat.raiseTemp();
      thermostat.resetTemp();
      expect(thermostat.temperature).toEqual(20);
    });


  }); // end Describe 'Changing Temperature' temperature


});