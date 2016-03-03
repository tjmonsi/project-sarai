import {StationList} from '/lib/collections';

if (!StationList.findOne({})) {
  StationList.insert({
      "name" : "uplbsaraivp1",
      "source" : "Nel Altoveros",
      "contacts" : "+63 9301397288",
      "label" : "SARAI IPB (UPLB)",
      "coords" : [14.156225354635, 121.26219986137],
      "region" : "IV-A"
  })
  StationList.insert({
      "name" : "uplbsaraivp2",
      "source" : "Nel Altoveros",
      "contacts" : "+63 9301397288",
      "label" : "SARAI MOSCAT (UPLB)",
      "coords" : [8.6102662772058, 124.8833035269],
      "region" : "IV-A"
  })
  StationList.insert({
      "name" : "uplbsaraivp3",
      "source" : "Nel Altoveros",
      "contacts" : "+63 9301397288",
      "label" : "SARAI La Granja (UPLB)",
      "coords" : [10.40493098442, 122.97888743021],
      "region" : "IV-A"
  })
  StationList.insert({
      "name" : "uplbweather4",
      "source" : "Nel Altoveros",
      "contacts" : "+63 9301397288",
      "label" : "Mabitac WFP (UPLB)",
      "coords" : [14.425471, 121.42955],
      "region" : "IV-A"
  })
  StationList.insert({
      "name" : "uplbweather5",
      "source" : "Nel Altoveros",
      "contacts" : "+63 9301397288",
      "label" : "Rizal WFP (UPLB)",
      "coords" : [14.10926227335, 121.3965901438],
      "region" : "IV-A"
  })
  StationList.insert({
      "name" : "uplbweather6",
      "source" : "Nel Altoveros",
      "contacts" : "+63 9301397288",
      "label" : "IMSP WFP (UPLB)",
      "coords" : [14.164776039259, 121.24226038456],
      "region" : "IV-A"
  })
   StationList.insert({
      "name" : "uplbsaraivp7",
      "source" : "Nel Altoveros",
      "contacts" : "+63 9301397288",
      "label" : "Tuntungin, Los Banos (UPLB)",
      "coords" : [14.16329978446, 121.25689723009],
      "region" : "IV-A"
  })
}
