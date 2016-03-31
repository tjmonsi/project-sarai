import React from 'react';
import L from 'leaflet';

import DrawerContent from './drawer-content.jsx';

class WeatherMap extends React.Component {
  constructor() {
    super()
    this.renderForecast = this.renderForecast.bind(this);
    this.data = 
{
  "response": {
  "version":"0.1",
  "termsofService":"http://www.wunderground.com/weather/api/d/terms.html",
  "features": {
  "forecast10day": 1
  ,
  "conditions": 1
  }
  }
  , "current_observation": {
    "image": {
    "url":"http://icons.wxug.com/graphics/wu2/logo_130x80.png",
    "title":"Weather Underground",
    "link":"http://www.wunderground.com"
    },
    "display_location": {
    "full":"Los Banos, Philippines",
    "city":"Los Banos",
    "state":"",
    "state_name":"Philippines",
    "country":"PH",
    "country_iso3166":"PH",
    "zip":"00000",
    "magic":"57",
    "wmo":"98432",
    "latitude":"14.165845",
    "longitude":"121.241158",
    "elevation":"27.00000000"
    },
    "observation_location": {
    "full":"WFP NCAS, Laguna (UPLB), Los BaÃ±os, CALABARZON",
    "city":"WFP NCAS, Laguna (UPLB), Los BaÃ±os",
    "state":"CALABARZON",
    "country":"PHILIPPINES",
    "country_iso3166":"PH",
    "latitude":"14.165845",
    "longitude":"121.241158",
    "elevation":"860 ft"
    },
    "estimated": {
    },
    "station_id":"ICALABAR6",
    "observation_time":"Last Updated on March 31, 12:44 PM PHT",
    "observation_time_rfc822":"Thu, 31 Mar 2016 12:44:23 +0800",
    "observation_epoch":"1459399463",
    "local_time_rfc822":"Thu, 31 Mar 2016 12:57:01 +0800",
    "local_epoch":"1459400221",
    "local_tz_short":"PHT",
    "local_tz_long":"Asia/Manila",
    "local_tz_offset":"+0800",
    "weather":"Mostly Cloudy",
    "temperature_string":"82.4 F (28.0 C)",
    "temp_f":82.4,
    "temp_c":28.0,
    "relative_humidity":"78%",
    "wind_string":"From the ENE at 7.0 MPH Gusting to 11.0 MPH",
    "wind_dir":"ENE",
    "wind_degrees":71,
    "wind_mph":7.0,
    "wind_gust_mph":"11.0",
    "wind_kph":11.3,
    "wind_gust_kph":"17.7",
    "pressure_mb":"1014",
    "pressure_in":"29.95",
    "pressure_trend":"-",
    "dewpoint_string":"75 F (24 C)",
    "dewpoint_f":75,
    "dewpoint_c":24,
    "heat_index_string":"89 F (32 C)",
    "heat_index_f":89,
    "heat_index_c":32,
    "windchill_string":"NA",
    "windchill_f":"NA",
    "windchill_c":"NA",
    "feelslike_string":"89 F (32 C)",
    "feelslike_f":"89",
    "feelslike_c":"32",
    "visibility_mi":"6.2",
    "visibility_km":"10.0",
    "solarradiation":"522",
    "UV":"8.6","precip_1hr_string":"0.00 in ( 0 mm)",
    "precip_1hr_in":"0.00",
    "precip_1hr_metric":" 0",
    "precip_today_string":" in ( mm)",
    "precip_today_in":"",
    "precip_today_metric":"--",
    "icon":"mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/mostlycloudy.gif",
    "forecast_url":"http://www.wunderground.com/global/stations/98432.html",
    "history_url":"http://www.wunderground.com/weatherstation/WXDailyHistory.asp?ID=ICALABAR6",
    "ob_url":"http://www.wunderground.com/cgi-bin/findweather/getForecast?query=14.165845,121.241158",
    "nowcast":""
  }
    ,
  "forecast":{
    "txt_forecast": {
    "date":"12:05 PM PHT",
    "forecastday": [
    {
    "period":0,
    "icon":"chancerain",
    "icon_url":"http://icons.wxug.com/i/c/k/chancerain.gif",
    "title":"Thursday",
    "fcttext":"Considerable cloudiness with occasional rain showers. High 88F. Winds ENE at 10 to 15 mph. Chance of rain 40%.",
    "fcttext_metric":"Overcast with rain showers at times. High 31C. Winds ENE at 10 to 15 km/h. Chance of rain 40%.",
    "pop":"40"
    }
    ,
    {
    "period":1,
    "icon":"nt_clear",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
    "title":"Thursday Night",
    "fcttext":"Mainly clear skies. Low 76F. Winds ENE at 5 to 10 mph.",
    "fcttext_metric":"Mainly clear skies. Low 24C. Winds ENE at 10 to 15 km/h.",
    "pop":"10"
    }
    ,
    {
    "period":2,
    "icon":"chancerain",
    "icon_url":"http://icons.wxug.com/i/c/k/chancerain.gif",
    "title":"Friday",
    "fcttext":"Partly cloudy in the morning. Increasing clouds with periods of showers later in the day. High near 90F. Winds ENE at 5 to 10 mph. Chance of rain 50%.",
    "fcttext_metric":"Partly cloudy skies during the morning hours will give way to occasional showers in the afternoon. High 32C. Winds ENE at 10 to 15 km/h. Chance of rain 50%.",
    "pop":"50"
    }
    ,
    {
    "period":3,
    "icon":"nt_clear",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
    "title":"Friday Night",
    "fcttext":"A mostly clear sky. Low 76F. Winds ENE at 5 to 10 mph.",
    "fcttext_metric":"A mostly clear sky. Low around 25C. Winds ENE at 10 to 15 km/h.",
    "pop":"10"
    }
    ,
    {
    "period":4,
    "icon":"partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "title":"Saturday",
    "fcttext":"Partly cloudy skies. High 92F. Winds ENE at 10 to 15 mph.",
    "fcttext_metric":"Abundant sunshine. High 33C. Winds ENE at 10 to 15 km/h.",
    "pop":"20"
    }
    ,
    {
    "period":5,
    "icon":"nt_clear",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
    "title":"Saturday Night",
    "fcttext":"Partly cloudy. Low 76F. Winds ENE at 5 to 10 mph.",
    "fcttext_metric":"A mostly clear sky. Low 24C. Winds ENE at 10 to 15 km/h.",
    "pop":"10"
    }
    ,
    {
    "period":6,
    "icon":"partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "title":"Sunday",
    "fcttext":"Sunshine and clouds mixed. High 91F. Winds ENE at 5 to 10 mph.",
    "fcttext_metric":"Mostly sunny skies. High 33C. Winds ENE at 10 to 15 km/h.",
    "pop":"10"
    }
    ,
    {
    "period":7,
    "icon":"nt_clear",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
    "title":"Sunday Night",
    "fcttext":"Clear to partly cloudy. Low 77F. Winds ENE at 5 to 10 mph.",
    "fcttext_metric":"A few clouds overnight. Low near 25C. Winds ENE at 10 to 15 km/h.",
    "pop":"20"
    }
    ,
    {
    "period":8,
    "icon":"partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "title":"Monday",
    "fcttext":"Sunshine and clouds mixed. High 92F. Winds ENE at 5 to 10 mph.",
    "fcttext_metric":"Intervals of clouds and sunshine. High 33C. Winds ENE at 10 to 15 km/h.",
    "pop":"20"
    }
    ,
    {
    "period":9,
    "icon":"nt_clear",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
    "title":"Monday Night",
    "fcttext":"Mainly clear skies. Low 76F. Winds ENE at 5 to 10 mph.",
    "fcttext_metric":"Generally fair. Low near 25C. Winds ENE at 10 to 15 km/h.",
    "pop":"20"
    }
    ,
    {
    "period":10,
    "icon":"partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "title":"Tuesday",
    "fcttext":"Intervals of clouds and sunshine. High 92F. Winds ENE at 5 to 10 mph.",
    "fcttext_metric":"Intervals of clouds and sunshine. High 33C. Winds ENE at 10 to 15 km/h.",
    "pop":"20"
    }
    ,
    {
    "period":11,
    "icon":"nt_partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
    "title":"Tuesday Night",
    "fcttext":"A few clouds. Low 77F. Winds ENE at 5 to 10 mph.",
    "fcttext_metric":"Partly cloudy. Low near 25C. Winds ENE at 10 to 15 km/h.",
    "pop":"10"
    }
    ,
    {
    "period":12,
    "icon":"partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "title":"Wednesday",
    "fcttext":"Partly cloudy skies. High 91F. Winds ENE at 5 to 10 mph.",
    "fcttext_metric":"Partly cloudy. High 33C. Winds ENE at 10 to 15 km/h.",
    "pop":"20"
    }
    ,
    {
    "period":13,
    "icon":"nt_clear",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
    "title":"Wednesday Night",
    "fcttext":"A mostly clear sky. Low 77F. Winds ENE at 5 to 10 mph.",
    "fcttext_metric":"Mostly clear. Low around 25C. Winds ENE at 10 to 15 km/h.",
    "pop":"20"
    }
    ,
    {
    "period":14,
    "icon":"partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "title":"Thursday",
    "fcttext":"Partly cloudy skies. High 93F. Winds E at 5 to 10 mph.",
    "fcttext_metric":"Intervals of clouds and sunshine. High 34C. Winds E at 10 to 15 km/h.",
    "pop":"20"
    }
    ,
    {
    "period":15,
    "icon":"nt_clear",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
    "title":"Thursday Night",
    "fcttext":"Mainly clear skies. Low 77F. Winds ENE at 5 to 10 mph.",
    "fcttext_metric":"Generally fair. Low around 25C. Winds ENE at 10 to 15 km/h.",
    "pop":"10"
    }
    ,
    {
    "period":16,
    "icon":"partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "title":"Friday",
    "fcttext":"Sunshine and clouds mixed. High 93F. Winds ENE at 5 to 10 mph.",
    "fcttext_metric":"Sunshine and clouds mixed. High 34C. Winds E at 10 to 15 km/h.",
    "pop":"10"
    }
    ,
    {
    "period":17,
    "icon":"nt_clear",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
    "title":"Friday Night",
    "fcttext":"Mainly clear early, then a few clouds later on. Low 77F. Winds ENE at 5 to 10 mph.",
    "fcttext_metric":"Clear to partly cloudy. Low around 25C. Winds light and variable.",
    "pop":"10"
    }
    ,
    {
    "period":18,
    "icon":"partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "title":"Saturday",
    "fcttext":"Partly cloudy. High 93F. Winds ENE at 5 to 10 mph.",
    "fcttext_metric":"Partly cloudy skies. High 34C. Winds ENE at 10 to 15 km/h.",
    "pop":"20"
    }
    ,
    {
    "period":19,
    "icon":"nt_clear",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
    "title":"Saturday Night",
    "fcttext":"Mainly clear skies. Low 76F. Winds light and variable.",
    "fcttext_metric":"Mainly clear skies. Low near 25C. Winds light and variable.",
    "pop":"10"
    }
    ]
    },
    "simpleforecast": {
    "forecastday": [
    {"date":{
  "epoch":"1459422000",
  "pretty":"7:00 PM PHT on March 31, 2016",
  "day":31,
  "month":3,
  "year":2016,
  "yday":90,
  "hour":19,
  "min":"00",
  "sec":0,
  "isdst":"0",
  "monthname":"March",
  "monthname_short":"Mar",
  "weekday_short":"Thu",
  "weekday":"Thursday",
  "ampm":"PM",
  "tz_short":"PHT",
  "tz_long":"Asia/Manila"
},
    "period":1,
    "high": {
    "fahrenheit":"88",
    "celsius":"31"
    },
    "low": {
    "fahrenheit":"76",
    "celsius":"24"
    },
    "conditions":"Chance of Rain",
    "icon":"chancerain",
    "icon_url":"http://icons.wxug.com/i/c/k/chancerain.gif",
    "skyicon":"",
    "pop":40,
    "qpf_allday": {
    "in": 0.02,
    "mm": 1
    },
    "qpf_day": {
    "in": 0.03,
    "mm": 1
    },
    "qpf_night": {
    "in": 0.00,
    "mm": 0
    },
    "snow_allday": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_day": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_night": {
    "in": 0.0,
    "cm": 0.0
    },
    "maxwind": {
    "mph": 15,
    "kph": 24,
    "dir": "ENE",
    "degrees": 62
    },
    "avewind": {
    "mph": 10,
    "kph": 16,
    "dir": "ENE",
    "degrees": 62
    },
    "avehumidity": 64,
    "maxhumidity": 0,
    "minhumidity": 0
    }
    ,
    {"date":{
  "epoch":"1459508400",
  "pretty":"7:00 PM PHT on April 01, 2016",
  "day":1,
  "month":4,
  "year":2016,
  "yday":91,
  "hour":19,
  "min":"00",
  "sec":0,
  "isdst":"0",
  "monthname":"April",
  "monthname_short":"Apr",
  "weekday_short":"Fri",
  "weekday":"Friday",
  "ampm":"PM",
  "tz_short":"PHT",
  "tz_long":"Asia/Manila"
},
    "period":2,
    "high": {
    "fahrenheit":"90",
    "celsius":"32"
    },
    "low": {
    "fahrenheit":"76",
    "celsius":"24"
    },
    "conditions":"Chance of Rain",
    "icon":"chancerain",
    "icon_url":"http://icons.wxug.com/i/c/k/chancerain.gif",
    "skyicon":"",
    "pop":50,
    "qpf_allday": {
    "in": 0.03,
    "mm": 1
    },
    "qpf_day": {
    "in": 0.03,
    "mm": 1
    },
    "qpf_night": {
    "in": 0.00,
    "mm": 0
    },
    "snow_allday": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_day": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_night": {
    "in": 0.0,
    "cm": 0.0
    },
    "maxwind": {
    "mph": 10,
    "kph": 16,
    "dir": "ENE",
    "degrees": 60
    },
    "avewind": {
    "mph": 8,
    "kph": 13,
    "dir": "ENE",
    "degrees": 60
    },
    "avehumidity": 67,
    "maxhumidity": 0,
    "minhumidity": 0
    }
    ,
    {"date":{
  "epoch":"1459594800",
  "pretty":"7:00 PM PHT on April 02, 2016",
  "day":2,
  "month":4,
  "year":2016,
  "yday":92,
  "hour":19,
  "min":"00",
  "sec":0,
  "isdst":"0",
  "monthname":"April",
  "monthname_short":"Apr",
  "weekday_short":"Sat",
  "weekday":"Saturday",
  "ampm":"PM",
  "tz_short":"PHT",
  "tz_long":"Asia/Manila"
},
    "period":3,
    "high": {
    "fahrenheit":"92",
    "celsius":"33"
    },
    "low": {
    "fahrenheit":"76",
    "celsius":"24"
    },
    "conditions":"Partly Cloudy",
    "icon":"partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "skyicon":"",
    "pop":20,
    "qpf_allday": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_day": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_night": {
    "in": 0.00,
    "mm": 0
    },
    "snow_allday": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_day": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_night": {
    "in": 0.0,
    "cm": 0.0
    },
    "maxwind": {
    "mph": 15,
    "kph": 24,
    "dir": "ENE",
    "degrees": 70
    },
    "avewind": {
    "mph": 10,
    "kph": 16,
    "dir": "ENE",
    "degrees": 70
    },
    "avehumidity": 63,
    "maxhumidity": 0,
    "minhumidity": 0
    }
    ,
    {"date":{
  "epoch":"1459681200",
  "pretty":"7:00 PM PHT on April 03, 2016",
  "day":3,
  "month":4,
  "year":2016,
  "yday":93,
  "hour":19,
  "min":"00",
  "sec":0,
  "isdst":"0",
  "monthname":"April",
  "monthname_short":"Apr",
  "weekday_short":"Sun",
  "weekday":"Sunday",
  "ampm":"PM",
  "tz_short":"PHT",
  "tz_long":"Asia/Manila"
},
    "period":4,
    "high": {
    "fahrenheit":"91",
    "celsius":"33"
    },
    "low": {
    "fahrenheit":"77",
    "celsius":"25"
    },
    "conditions":"Partly Cloudy",
    "icon":"partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "skyicon":"",
    "pop":10,
    "qpf_allday": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_day": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_night": {
    "in": 0.00,
    "mm": 0
    },
    "snow_allday": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_day": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_night": {
    "in": 0.0,
    "cm": 0.0
    },
    "maxwind": {
    "mph": 10,
    "kph": 16,
    "dir": "ENE",
    "degrees": 72
    },
    "avewind": {
    "mph": 9,
    "kph": 14,
    "dir": "ENE",
    "degrees": 72
    },
    "avehumidity": 63,
    "maxhumidity": 0,
    "minhumidity": 0
    }
    ,
    {"date":{
  "epoch":"1459767600",
  "pretty":"7:00 PM PHT on April 04, 2016",
  "day":4,
  "month":4,
  "year":2016,
  "yday":94,
  "hour":19,
  "min":"00",
  "sec":0,
  "isdst":"0",
  "monthname":"April",
  "monthname_short":"Apr",
  "weekday_short":"Mon",
  "weekday":"Monday",
  "ampm":"PM",
  "tz_short":"PHT",
  "tz_long":"Asia/Manila"
},
    "period":5,
    "high": {
    "fahrenheit":"92",
    "celsius":"33"
    },
    "low": {
    "fahrenheit":"76",
    "celsius":"24"
    },
    "conditions":"Partly Cloudy",
    "icon":"partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "skyicon":"",
    "pop":20,
    "qpf_allday": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_day": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_night": {
    "in": 0.00,
    "mm": 0
    },
    "snow_allday": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_day": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_night": {
    "in": 0.0,
    "cm": 0.0
    },
    "maxwind": {
    "mph": 10,
    "kph": 16,
    "dir": "ENE",
    "degrees": 69
    },
    "avewind": {
    "mph": 7,
    "kph": 11,
    "dir": "ENE",
    "degrees": 69
    },
    "avehumidity": 64,
    "maxhumidity": 0,
    "minhumidity": 0
    }
    ,
    {"date":{
  "epoch":"1459854000",
  "pretty":"7:00 PM PHT on April 05, 2016",
  "day":5,
  "month":4,
  "year":2016,
  "yday":95,
  "hour":19,
  "min":"00",
  "sec":0,
  "isdst":"0",
  "monthname":"April",
  "monthname_short":"Apr",
  "weekday_short":"Tue",
  "weekday":"Tuesday",
  "ampm":"PM",
  "tz_short":"PHT",
  "tz_long":"Asia/Manila"
},
    "period":6,
    "high": {
    "fahrenheit":"92",
    "celsius":"33"
    },
    "low": {
    "fahrenheit":"77",
    "celsius":"25"
    },
    "conditions":"Partly Cloudy",
    "icon":"partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "skyicon":"",
    "pop":20,
    "qpf_allday": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_day": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_night": {
    "in": 0.00,
    "mm": 0
    },
    "snow_allday": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_day": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_night": {
    "in": 0.0,
    "cm": 0.0
    },
    "maxwind": {
    "mph": 10,
    "kph": 16,
    "dir": "ENE",
    "degrees": 77
    },
    "avewind": {
    "mph": 9,
    "kph": 14,
    "dir": "ENE",
    "degrees": 77
    },
    "avehumidity": 63,
    "maxhumidity": 0,
    "minhumidity": 0
    }
    ,
    {"date":{
  "epoch":"1459940400",
  "pretty":"7:00 PM PHT on April 06, 2016",
  "day":6,
  "month":4,
  "year":2016,
  "yday":96,
  "hour":19,
  "min":"00",
  "sec":0,
  "isdst":"0",
  "monthname":"April",
  "monthname_short":"Apr",
  "weekday_short":"Wed",
  "weekday":"Wednesday",
  "ampm":"PM",
  "tz_short":"PHT",
  "tz_long":"Asia/Manila"
},
    "period":7,
    "high": {
    "fahrenheit":"91",
    "celsius":"33"
    },
    "low": {
    "fahrenheit":"77",
    "celsius":"25"
    },
    "conditions":"Partly Cloudy",
    "icon":"partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "skyicon":"",
    "pop":20,
    "qpf_allday": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_day": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_night": {
    "in": 0.00,
    "mm": 0
    },
    "snow_allday": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_day": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_night": {
    "in": 0.0,
    "cm": 0.0
    },
    "maxwind": {
    "mph": 10,
    "kph": 16,
    "dir": "ENE",
    "degrees": 72
    },
    "avewind": {
    "mph": 9,
    "kph": 14,
    "dir": "ENE",
    "degrees": 72
    },
    "avehumidity": 63,
    "maxhumidity": 0,
    "minhumidity": 0
    }
    ,
    {"date":{
  "epoch":"1460026800",
  "pretty":"7:00 PM PHT on April 07, 2016",
  "day":7,
  "month":4,
  "year":2016,
  "yday":97,
  "hour":19,
  "min":"00",
  "sec":0,
  "isdst":"0",
  "monthname":"April",
  "monthname_short":"Apr",
  "weekday_short":"Thu",
  "weekday":"Thursday",
  "ampm":"PM",
  "tz_short":"PHT",
  "tz_long":"Asia/Manila"
},
    "period":8,
    "high": {
    "fahrenheit":"93",
    "celsius":"34"
    },
    "low": {
    "fahrenheit":"77",
    "celsius":"25"
    },
    "conditions":"Partly Cloudy",
    "icon":"partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "skyicon":"",
    "pop":20,
    "qpf_allday": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_day": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_night": {
    "in": 0.00,
    "mm": 0
    },
    "snow_allday": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_day": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_night": {
    "in": 0.0,
    "cm": 0.0
    },
    "maxwind": {
    "mph": 10,
    "kph": 16,
    "dir": "E",
    "degrees": 84
    },
    "avewind": {
    "mph": 8,
    "kph": 13,
    "dir": "E",
    "degrees": 84
    },
    "avehumidity": 62,
    "maxhumidity": 0,
    "minhumidity": 0
    }
    ,
    {"date":{
  "epoch":"1460113200",
  "pretty":"7:00 PM PHT on April 08, 2016",
  "day":8,
  "month":4,
  "year":2016,
  "yday":98,
  "hour":19,
  "min":"00",
  "sec":0,
  "isdst":"0",
  "monthname":"April",
  "monthname_short":"Apr",
  "weekday_short":"Fri",
  "weekday":"Friday",
  "ampm":"PM",
  "tz_short":"PHT",
  "tz_long":"Asia/Manila"
},
    "period":9,
    "high": {
    "fahrenheit":"93",
    "celsius":"34"
    },
    "low": {
    "fahrenheit":"77",
    "celsius":"25"
    },
    "conditions":"Partly Cloudy",
    "icon":"partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "skyicon":"",
    "pop":10,
    "qpf_allday": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_day": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_night": {
    "in": 0.00,
    "mm": 0
    },
    "snow_allday": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_day": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_night": {
    "in": 0.0,
    "cm": 0.0
    },
    "maxwind": {
    "mph": 10,
    "kph": 16,
    "dir": "ENE",
    "degrees": 78
    },
    "avewind": {
    "mph": 9,
    "kph": 14,
    "dir": "ENE",
    "degrees": 78
    },
    "avehumidity": 63,
    "maxhumidity": 0,
    "minhumidity": 0
    }
    ,
    {"date":{
  "epoch":"1460199600",
  "pretty":"7:00 PM PHT on April 09, 2016",
  "day":9,
  "month":4,
  "year":2016,
  "yday":99,
  "hour":19,
  "min":"00",
  "sec":0,
  "isdst":"0",
  "monthname":"April",
  "monthname_short":"Apr",
  "weekday_short":"Sat",
  "weekday":"Saturday",
  "ampm":"PM",
  "tz_short":"PHT",
  "tz_long":"Asia/Manila"
},
    "period":10,
    "high": {
    "fahrenheit":"93",
    "celsius":"34"
    },
    "low": {
    "fahrenheit":"76",
    "celsius":"24"
    },
    "conditions":"Partly Cloudy",
    "icon":"partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "skyicon":"",
    "pop":20,
    "qpf_allday": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_day": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_night": {
    "in": 0.00,
    "mm": 0
    },
    "snow_allday": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_day": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_night": {
    "in": 0.0,
    "cm": 0.0
    },
    "maxwind": {
    "mph": 10,
    "kph": 16,
    "dir": "ENE",
    "degrees": 71
    },
    "avewind": {
    "mph": 7,
    "kph": 11,
    "dir": "ENE",
    "degrees": 71
    },
    "avehumidity": 63,
    "maxhumidity": 0,
    "minhumidity": 0
    }
    ]
    }
  }
}
  }

  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }

    Session.set('drawerVisibility', 'false');

    const {stations} = this.props;

    //Store all this data in db
    const northEast = L.latLng(21.924058, 115.342984);
    const southWest = L.latLng(4.566972, 128.614468);
    const bounds = L.latLngBounds(southWest, northEast);

    const map = L.map('map', {
      maxBounds: bounds,
      center: [14.154604, 121.247505],
      zoom: 8,
      minZoom: 7
    });

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWNhcmFuZGFuZyIsImEiOiJjaWtxaHgzYTkwMDA4ZHZtM3E3aXMyYnlzIn0.x63VGx2C-BP_ttuEsn2fVg', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      // maxZoom: 14,
      id: 'mcarandang.p67769a5',
      accessToken: 'pk.eyJ1IjoibWNhcmFuZGFuZyIsImEiOiJjaWtxaHgzYTkwMDA4ZHZtM3E3aXMyYnlzIn0.x63VGx2C-BP_ttuEsn2fVg'
    }).addTo(map);

    const markerIcon = L.icon({
      iconUrl: '/images/weather-monitoring/map/marker.png',
      iconSize: [40, 40],
      iconAnchor: [20, 39],
      popupAnchor: [0, -40]
    });

    for (let station of stations) {
        L.marker(
          [station.coords[0], station.coords[1]],
          {icon: markerIcon})
        .bindPopup(`<h5>${station.label}</h5>`)
        .on('click', () => {
          $.getJSON(
            `http:\/\/api.wunderground.com/api/9470644e92f975d3/forecast10day/conditions/q/pws:${station.id}.json`,
            (data) => {
              this.data = data;
            })
        })
        .addTo(map);
        
    }

    const sampleStation = L.marker(
        [14.165845, 121.241158],
        {icon: markerIcon})
        .bindPopup(
          `<h5>WFP NCAS, Laguna (UPLB), Los Banos</h5>
          25.1 °C`
        )
        .on('click', () => {

                

        }).addTo(map);
  }

  toMeters(elevation_feet) {
    let m = parseInt(elevation_feet) * 0.3048;
    return Number(Math.round(m));
  }

  formatCoordinates(c) {
    return Number(Math.round(c+'e2')+'e-2');
  }

  renderForecast() {
    const fc = this.data.forecast.simpleforecast.forecastday
    const c = this.data.current_observation

    return (
      <div id="forecast-grid">

        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--1-offset-desktop mdl-cell--10-col-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone">
            <div className="mdl-grid">

              <div className="mdl-cell mdl-cell--3-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
                <div className="mdl-grid">
                  <div className="mdl-cell mdl-cell--12-col">
                    <h5>{c.observation_location.city}</h5>
                  </div>
                  <div className="mdl-cell mdl-cell--12-col">
                    <div className="mdl-grid">
                      <div id="current-coordinates" className="mdl-cell mdl-cell--12-col">
                        Elevation <span className="number">{this.toMeters(c.observation_location.elevation)}</span> m <span className="number">{this.formatCoordinates(c.observation_location.latitude)}</span> °N <span className="number">{this.formatCoordinates(c.observation_location.longitude)}</span> °E
                      </div>


                      <div className="mdl-cell mdl-cell--4-col-desktop mdl-cell--2-col-tablet mdl-cell--2-col-phone center">
                        <img src={c.icon_url} />
                      </div>

                      <div id="current-temperature" className="mdl-cell mdl-cell--4-col-desktop mdl-cell--3-col-tablet mdl-cell--1-col-phone center">
                        {c.temp_c} °C
                      </div>

                      <div id="current-wind" className="mdl-cell mdl-cell--4-col-desktop mdl-cell--3-col-tablet mdl-cell--1-col-phone center">
                      Humidity<br/>
                        <span className="value">{c.relative_humidity}</span>
                      </div>

                      <div id="current-weather-text" className="mdl-cell mdl-cell--4-col-desktop mdl-cell--2-col-tablet mdl-cell--2-col-phone center">
                        {c.weather}
                      </div>

                      <div id="current-heat-index" className="mdl-cell mdl-cell--4-col-desktop mdl-cell--3-col-tablet mdl-cell--1-col-phone center">
                        Feels like<br /><span className="temp">{c.feelslike_c} °C</span>
                      </div>

                      <div id="current-wind-string" className="mdl-cell mdl-cell--4-col-desktop mdl-cell--3-col-tablet mdl-cell--1-col-phone center">
                        Wind from <span className="value">{c.wind_dir}</span>
                        <br/><span className="value">{c.wind_gust_kph}</span> km/h gusts
                      </div>

                      <div id="current-updated" className="mdl-cell mdl-cell--12-col">
                        {c.observation_time}
                      </div>

                    </div>
                  </div>
                </div>
                
              </div>

              <div className="mdl-cell mdl-cell--9-col mdl-cell--4-col-phone">
                <div className="mdl-grid">
                  <div className="mdl-cell mdl-cell--12-col">
                    <h5>Forecast</h5>
                  </div>
                  <div className="mdl-cell mdl-cell--12-col">
                    <div className="mdl-grid">
                      <div className="mdl-cell mdl-cell--2-col mdl-cell--2-col-phone">
                        <div className="mdl-grid">
                          <div className="mdl-cell--12-col center">
                            {fc[0].date.monthname_short} {fc[0].date.day}
                          </div>
                          <div className="mdl-cell--12-col center">
                            {fc[0].low.celsius}° | {fc[0].high.celsius}°
                          </div>
                          <div className="mdl-cell--12-col center">
                            <img src={fc[0].icon_url} />
                            <br/>{fc[0].conditions}
                            <br/>{fc[0].qpf_allday.mm} mm
                          </div>
                        </div>
                      </div>

                      <div className="mdl-cell mdl-cell--2-col mdl-cell--2-col-phone">
                        <div className="mdl-grid">
                          <div className="mdl-cell--12-col center">
                            {fc[1].date.monthname_short} {fc[1].date.day}
                          </div>
                          <div className="mdl-cell--12-col center">
                            {fc[1].low.celsius}° | {fc[1].high.celsius}°
                          </div>
                          <div className="mdl-cell--12-col center">
                            <img src={fc[1].icon_url} />
                            <br/>{fc[1].conditions}
                            <br/>{fc[1].qpf_allday.mm} mm
                          </div>
                        </div>
                      </div>

                      <div className="mdl-cell mdl-cell--2-col mdl-cell--2-col-phone">
                        <div className="mdl-grid">
                          <div className="mdl-cell--12-col center">
                            {fc[2].date.monthname_short} {fc[2].date.day}
                          </div>
                          <div className="mdl-cell--12-col center">
                            {fc[2].low.celsius}° | {fc[2].high.celsius}°
                          </div>
                          <div className="mdl-cell--12-col center">
                            <img src={fc[2].icon_url} />
                            <br/>{fc[2].conditions}
                            <br/>{fc[2].qpf_allday.mm} mm
                          </div>
                        </div>
                      </div>

                      <div className="mdl-cell mdl-cell--2-col mdl-cell--2-col-phone">
                        <div className="mdl-grid">
                          <div className="mdl-cell--12-col center">
                            {fc[3].date.monthname_short} {fc[3].date.day}
                          </div>
                          <div className="mdl-cell--12-col center">
                            {fc[3].low.celsius}° | {fc[3].high.celsius}°
                          </div>
                          <div className="mdl-cell--12-col center">
                            <img src={fc[3].icon_url} />
                            <br/>{fc[3].conditions}
                            <br/>{fc[3].qpf_allday.mm} mm
                          </div>
                        </div>
                      </div>

                      <div className="mdl-cell mdl-cell--2-col mdl-cell--2-col-phone">
                        <div className="mdl-grid">
                          <div className="mdl-cell--12-col center">
                            {fc[4].date.monthname_short} {fc[4].date.day}
                          </div>
                          <div className="mdl-cell--12-col center">
                            {fc[4].low.celsius}° | {fc[4].high.celsius}°
                          </div>
                          <div className="mdl-cell--12-col center">
                            <img src={fc[4].icon_url} />
                            <br/>{fc[4].conditions}
                            <br/>{fc[4].qpf_allday.mm} mm
                          </div>
                        </div>
                      </div>

                      <div className="mdl-cell mdl-cell--2-col mdl-cell--2-col-phone">
                        <div className="mdl-grid">
                          <div className="mdl-cell--12-col center">
                            {fc[5].date.monthname_short} {fc[5].date.day}
                          </div>
                          <div className="mdl-cell--12-col center">
                            {fc[5].low.celsius}° | {fc[5].high.celsius}°
                          </div>
                          <div className="mdl-cell--12-col center">
                            <img src={fc[5].icon_url} />
                            <br/>{fc[5].conditions}
                            <br/>{fc[5].qpf_allday.mm} mm
                          </div>
                        </div>
                      </div>

                      <div className="mdl-cell mdl-cell--2-col mdl-cell--2-col-phone">
                        <div className="mdl-grid">
                          <div className="mdl-cell--12-col center">
                            {fc[6].date.monthname_short} {fc[6].date.day}
                          </div>
                          <div className="mdl-cell--12-col center">
                            {fc[6].low.celsius}° | {fc[6].high.celsius}°
                          </div>
                          <div className="mdl-cell--12-col center">
                            <img src={fc[6].icon_url} />
                            <br/>{fc[6].conditions}
                            <br/>{fc[6].qpf_allday.mm} mm
                          </div>
                        </div>
                      </div>

                      <div className="mdl-cell mdl-cell--2-col mdl-cell--2-col-phone">
                        <div className="mdl-grid">
                          <div className="mdl-cell--12-col center">
                            {fc[7].date.monthname_short} {fc[7].date.day}
                          </div>
                          <div className="mdl-cell--12-col center">
                            {fc[7].low.celsius}° | {fc[7].high.celsius}°
                          </div>
                          <div className="mdl-cell--12-col center">
                            <img src={fc[7].icon_url} />
                            <br/>{fc[7].conditions}
                            <br/>{fc[7].qpf_allday.mm} mm
                          </div>
                        </div>
                      </div>

                      <div className="mdl-cell mdl-cell--2-col mdl-cell--2-col-phone">
                        <div className="mdl-grid">
                          <div className="mdl-cell--12-col center">
                            {fc[8].date.monthname_short} {fc[8].date.day}
                          </div>
                          <div className="mdl-cell--12-col center">
                            {fc[8].low.celsius}° | {fc[8].high.celsius}°
                          </div>
                          <div className="mdl-cell--12-col center">
                            <img src={fc[8].icon_url} />
                            <br/>{fc[8].conditions}
                            <br/>{fc[8].qpf_allday.mm} mm
                          </div>
                        </div>
                      </div>

                      <div className="mdl-cell mdl-cell--2-col mdl-cell--2-col-phone">
                        <div className="mdl-grid">
                          <div className="mdl-cell--12-col center">
                            {fc[9].date.monthname_short} {fc[9].date.day}
                          </div>
                          <div className="mdl-cell--12-col center">
                            {fc[9].low.celsius}° | {fc[9].high.celsius}°
                          </div>
                          <div className="mdl-cell--12-col center">
                            <img src={fc[9].icon_url} />
                            <br/>{fc[9].conditions}
                            <br/>{fc[9].qpf_allday.mm} mm
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              

            </div>
          </div>
        </div>

        
      </div>
    )
  }

  render() {
    return (
      <div>
        <div id="map-container">
          <div id="map"></div>
        </div>
        {this.renderForecast()}
      </div>
    );
  }
}

export default WeatherMap;