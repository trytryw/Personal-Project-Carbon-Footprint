function calculateCarbonFootprint() {
    const kilometersDriven = document.getElementById("kilometers-driven").value;
    const kpl = document.getElementById("kpl").value;    
    const publicTransit = document.getElementById("public-transit").value;
    const airTravel = document.getElementById("air-travel").value;
    const electricity = document.getElementById("electricity").value;
    const naturalGas = document.getElementById("natural-gas").value;
    const recycling = document.getElementById("recycling").value;

    // Calculate transportation carbon footprint, the carbon footprint of a car is calculated by taking kilometres per liter then converting it to miles per gallon, 
    // then multiplying it by 8.887 to get the amount of CO2 produced per gallon of gas, then dividing it by 1000 to get the amount of CO2 produced per litre of gas
    // then adding the carbon footprint of public transit and air travel
     const carcarbonfootprint = (((kilometersDriven / kpl) / 1.609) * 8.887) / 1000;
     const publicTransitcarbonfootprint = publicTransit * 0.1/1000;
     const airTravelcarbonfootprint = airTravel * 0.25/;
     // Adds the three transportation carbon footprints together
     const transportationCarbonFootprint = carcarbonfootprint + publicTransitcarbonfootprint + airTravelcarbonfootprint
  
    // Calculate energy carbon footprint by converting kWh to metric tons of CO2 and converting natural gas usage to metric tons of CO2
    const electrictycarbonfootprint = (electricity * 0.9) /2205
    const naturalGascarbonfootprint = ((naturalGas * 35.3147) *1435) / 2205
    // Adds the two energy carbon footprints together
    const energyCarbonFootprint = electrictycarbonfootprint + naturalGascarbonfootprint
  
    // Calculate waste carbon footprint, assuming that 0.31 metric tons of CO2 is produced per person per year with goods that can be but are not being recycled
    let averagewaste = 0.31;
    function percentageToRatio(recycling) {
      return (100 - recycling) / 100;
    }
    const wasteCarbonFootprint  = percentageToRatio(recycling) * averagewaste;
  
    // Calculate total carbon footprint
    const carbonFootprint =
      transportationCarbonFootprint +
      energyCarbonFootprint +
      wasteCarbonFootprint;
  
  
  
    document.getElementById(
      "result"
    ).innerHTML = `Your carbon footprint is: ${carbonFootprint.toFixed(2)} metric tons of CO2 per year.`;

    document.getElementById(
      "transportation"
    ).innerHTML = `${transportationCarbonFootprint.toFixed(2)}`;
  };
