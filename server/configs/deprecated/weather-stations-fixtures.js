import {WeatherStations} from '/lib/collections';

if (!WeatherStations.findOne({})) {
  WeatherStations.insert({
    "id" : "ICAGAYAN2",
    "coords" : [16.725618, 121.698509],
    "label": "SARAI ISU Echague, Isabela (UPLB), Echague"
  });

  WeatherStations.insert({
    "id" : "ICAGAYAN3",
    "coords" : [17.410467, 121.813698],
    "label": "SARAI ISU Cabagan, Isabela (UPLB), Cabagan"
  });

  WeatherStations.insert({
    "id" : "ICALABAR18",
    "coords" : [14.156224, 121.262199],
    "label": "SARAI IPB, Laguna (UPLB), Los Baños"
  });

  WeatherStations.insert({
    "id" : "ICALABAR25",
    "coords" : [13.944949, 121.369759],
    "label": "SARAI DA-QAES Tiaong, Quezon (UPLB), Tiaong"
  });

  WeatherStations.insert({
    "id" : "ICALABAR6",
    "coords" : [14.165845, 121.241158],
    "label": "WFP NCAS, Laguna (UPLB), Los Baños"
  });

  WeatherStations.insert({
    "id" : "ICENTRAL91",
    "coords" : [15.738162,120.928391],
    "label": "SARAI CLSU Science City of Munoz, Nueva Ecija, Science City Of Muñoz"
  });

  WeatherStations.insert({
    "id" : "IWESTERN596",
    "coords" : [10.404931,122.978889],
    "label": "SARAI La Granja La Carlota City, Negros Occidental (UPLB), La Carlota City"
  });
}
