var config_new = {
  degreedays: 2228,
  heating_MWT: 40.0,
  
  T: {
    external: -3.0,
    ground: 10.0,
    unheated: 10.0
  },

  element_type: {
    "Ground Floor": { uvalue:0.7 },
    "Insulated Roof": { uvalue:0.6 },
    "Stone Wall 0.85m": { uvalue:1.1 },
    "Stone Wall 0.65m": { uvalue:1.3 },
    "Timber Frame Wall": { uvalue:0.6 },
    "Secondary Glazing": { uvalue:2.8 },
    "Double Glazing": { uvalue:1.6 },
    "Door": { uvalue:2.8 }
  },
  
  rooms: {
   "New Bothy":{
      temperature: 18.0,
      area: 20.5, 
      height: 2.7,
      air_change_an_hour: 1.5,
      
      elements: [
      ],
      
      radiators: [
      ]
    }
  },
    
  radiators:{
      "Single Panel Convector 1200x400":{heat50k:875, incvat:42},
      "Double Panel Convector 600x400":{heat50k:764, incvat:42},
      "Double Panel Convector 800x400":{heat50k:1018, incvat:42},
      "Double Panel Convector 1000x400":{heat50k:1273, incvat:69},
      "Double Panel Convector 1100x400":{heat50k:1400, incvat:70},
      "Double Panel Convector 1200x400":{heat50k:1528, incvat:79},

      "Double Panel Convector 1200x500":{heat50k:1834, incvat:84},
      "Double Panel Convector 1000x500":{heat50k:1528, incvat:84},
      
      "Double Panel Convector 800x600":{heat50k:1430, incvat:53},
      "Double Panel Convector 1000x600":{heat50k:1788, incvat:62},
      "Double Panel Convector 1200x600":{heat50k:2146, incvat:69},
      "Double Panel Convector 1400x600":{heat50k:2503, incvat:113},
      "Double Panel Convector 1600x600":{heat50k:2861, incvat:120},
      "Double Panel Convector 1800x600":{heat50k:3218, incvat:143},

      "Double Panel Convector 1200x700":{heat50k:2407, incvat:110},

      "Cast Iron 1200x700x160":{heat50k:1600},
      "Cast Iron 1200x600x160":{heat50k:1500},
      "Cast Iron 1200x400x160":{heat50k:1400},
      
      "Dimplex SmartRad SRX180 Fan:3, 300L/h":{model:"linear", m:102.34, c:-2104.10, incvat:334},
      "Dimplex SmartRad SRX180 Fan:2, 300L/h":{model:"linear", m:69.49, c:-1413.75, incvat:334},
      "Dimplex SmartRad SRX180 Fan:1, 300L/h":{model:"linear", m:42.05, c:-847.75, incvat:334}
  }
};
