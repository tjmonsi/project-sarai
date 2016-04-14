import {Meteor} from 'meteor/meteor';

export default {
  getSampleResponse() {
    const data = {
      "response": {
      "version":"0.1",
      "termsofService":"http://www.wunderground.com/weather/api/d/terms.html",
      "features": {
      "forecast10day": 1
      ,
      "conditions": 1
      ,
      "hourly10day": 1
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
        "observation_time":"Last Updated on April 2, 4:30 PM PHT",
        "observation_time_rfc822":"Sat, 02 Apr 2016 16:30:14 +0800",
        "observation_epoch":"1459585814",
        "local_time_rfc822":"Sat, 02 Apr 2016 16:41:40 +0800",
        "local_epoch":"1459586500",
        "local_tz_short":"PHT",
        "local_tz_long":"Asia/Manila",
        "local_tz_offset":"+0800",
        "weather":"Mostly Cloudy",
        "temperature_string":"85.5 F (29.7 C)",
        "temp_f":85.5,
        "temp_c":29.7,
        "relative_humidity":"68%",
        "wind_string":"From the ENE at 7.0 MPH Gusting to 15.0 MPH",
        "wind_dir":"ENE",
        "wind_degrees":77,
        "wind_mph":7.0,
        "wind_gust_mph":"15.0",
        "wind_kph":11.3,
        "wind_gust_kph":"24.1",
        "pressure_mb":"1011",
        "pressure_in":"29.86",
        "pressure_trend":"0",
        "dewpoint_string":"74 F (23 C)",
        "dewpoint_f":74,
        "dewpoint_c":23,
        "heat_index_string":"93 F (34 C)",
        "heat_index_f":93,
        "heat_index_c":34,
        "windchill_string":"NA",
        "windchill_f":"NA",
        "windchill_c":"NA",
        "feelslike_string":"93 F (34 C)",
        "feelslike_f":"93",
        "feelslike_c":"34",
        "visibility_mi":"6.2",
        "visibility_km":"10.0",
        "solarradiation":"155",
        "UV":"1.0","precip_1hr_string":"0.00 in ( 0 mm)",
        "precip_1hr_in":"0.00",
        "precip_1hr_metric":" 0",
        "precip_today_string":"0.00 in (0 mm)",
        "precip_today_in":"0.00",
        "precip_today_metric":"0",
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
        "date":"4:07 PM PHT",
        "forecastday": [
        {
        "period":0,
        "icon":"clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "title":"Saturday",
        "fcttext":"Mostly clear. Lows overnight in the mid 70s.",
        "fcttext_metric":"Clear. Low 24C.",
        "pop":"10"
        }
        ,
        {
        "period":1,
        "icon":"nt_clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "title":"Saturday Night",
        "fcttext":"Mainly clear. Low near 75F. Winds ENE at 5 to 10 mph.",
        "fcttext_metric":"Clear skies. Low 24C. Winds ENE at 10 to 15 km/h.",
        "pop":"10"
        }
        ,
        {
        "period":2,
        "icon":"clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "title":"Sunday",
        "fcttext":"Except for a few afternoon clouds, mainly sunny. High 91F. Winds ENE at 5 to 10 mph.",
        "fcttext_metric":"Sunny along with a few clouds. High 33C. Winds ENE at 10 to 15 km/h.",
        "pop":"10"
        }
        ,
        {
        "period":3,
        "icon":"nt_clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "title":"Sunday Night",
        "fcttext":"Clear to partly cloudy. Low around 75F. Winds ENE at 5 to 10 mph.",
        "fcttext_metric":"A few clouds overnight. Low 24C. Winds ENE at 10 to 15 km/h.",
        "pop":"10"
        }
        ,
        {
        "period":4,
        "icon":"partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "title":"Monday",
        "fcttext":"Sunshine and clouds mixed. High 91F. Winds ENE at 5 to 10 mph.",
        "fcttext_metric":"Partly cloudy skies. High 33C. Winds ENE at 10 to 15 km/h.",
        "pop":"20"
        }
        ,
        {
        "period":5,
        "icon":"nt_partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "title":"Monday Night",
        "fcttext":"A few clouds. Low 76F. Winds ENE at 5 to 10 mph.",
        "fcttext_metric":"A few clouds from time to time. Low 24C. Winds ENE at 10 to 15 km/h.",
        "pop":"10"
        }
        ,
        {
        "period":6,
        "icon":"chancerain",
        "icon_url":"http://icons.wxug.com/i/c/k/chancerain.gif",
        "title":"Tuesday",
        "fcttext":"Partly cloudy in the morning. Increasing clouds with periods of showers later in the day. High 89F. Winds ENE at 5 to 10 mph. Chance of rain 40%.",
        "fcttext_metric":"Partly cloudy in the morning. Increasing clouds with periods of showers later in the day. High 32C. Winds ENE at 10 to 15 km/h. Chance of rain 40%.",
        "pop":"40"
        }
        ,
        {
        "period":7,
        "icon":"nt_partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "title":"Tuesday Night",
        "fcttext":"Partly cloudy. Low 76F. Winds ENE at 5 to 10 mph.",
        "fcttext_metric":"A few clouds. Low near 25C. Winds ENE at 10 to 15 km/h.",
        "pop":"10"
        }
        ,
        {
        "period":8,
        "icon":"chancetstorms",
        "icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
        "title":"Wednesday",
        "fcttext":"Partly cloudy in the morning followed by scattered thunderstorms in the afternoon. High 89F. Winds ENE at 5 to 10 mph. Chance of rain 40%.",
        "fcttext_metric":"Partly cloudy with afternoon showers or thunderstorms. High 32C. Winds ENE at 10 to 15 km/h. Chance of rain 40%.",
        "pop":"40"
        }
        ,
        {
        "period":9,
        "icon":"nt_partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "title":"Wednesday Night",
        "fcttext":"Clear to partly cloudy. Low 76F. Winds ENE at 5 to 10 mph.",
        "fcttext_metric":"Partly cloudy. Low near 25C. Winds ENE at 10 to 15 km/h.",
        "pop":"10"
        }
        ,
        {
        "period":10,
        "icon":"partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "title":"Thursday",
        "fcttext":"Intervals of clouds and sunshine. High 92F. Winds ENE at 5 to 10 mph.",
        "fcttext_metric":"Partly cloudy. High 33C. Winds ENE at 10 to 15 km/h.",
        "pop":"20"
        }
        ,
        {
        "period":11,
        "icon":"nt_clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "title":"Thursday Night",
        "fcttext":"Clear skies. Low 76F. Winds ENE at 5 to 10 mph.",
        "fcttext_metric":"A mostly clear sky. Low around 25C. Winds ENE at 10 to 15 km/h.",
        "pop":"10"
        }
        ,
        {
        "period":12,
        "icon":"clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "title":"Friday",
        "fcttext":"Mostly sunny skies. High 91F. Winds ENE at 5 to 10 mph.",
        "fcttext_metric":"Except for a few afternoon clouds, mainly sunny. High 33C. Winds ENE at 10 to 15 km/h.",
        "pop":"20"
        }
        ,
        {
        "period":13,
        "icon":"nt_clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "title":"Friday Night",
        "fcttext":"Mainly clear early, then a few clouds later on. Low 77F. Winds ENE at 5 to 10 mph.",
        "fcttext_metric":"A few clouds overnight. Low around 25C. Winds ENE at 10 to 15 km/h.",
        "pop":"20"
        }
        ,
        {
        "period":14,
        "icon":"partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "title":"Saturday",
        "fcttext":"Sunshine and clouds mixed. High 92F. Winds ENE at 10 to 15 mph.",
        "fcttext_metric":"Sunshine and clouds mixed. High 33C. Winds ENE at 15 to 25 km/h.",
        "pop":"20"
        }
        ,
        {
        "period":15,
        "icon":"nt_clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "title":"Saturday Night",
        "fcttext":"A mostly clear sky. Low 76F. Winds ENE at 5 to 10 mph.",
        "fcttext_metric":"A mostly clear sky. Low near 25C. Winds ENE at 10 to 15 km/h.",
        "pop":"10"
        }
        ,
        {
        "period":16,
        "icon":"clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "title":"Sunday",
        "fcttext":"Sunny skies. High 92F. Winds ENE at 5 to 10 mph.",
        "fcttext_metric":"Sunny skies. High 34C. Winds ENE at 10 to 15 km/h.",
        "pop":"10"
        }
        ,
        {
        "period":17,
        "icon":"nt_clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "title":"Sunday Night",
        "fcttext":"Mostly clear skies. Low 77F. Winds ENE at 5 to 10 mph.",
        "fcttext_metric":"Generally fair. Low around 25C. Winds ENE at 10 to 15 km/h.",
        "pop":"10"
        }
        ,
        {
        "period":18,
        "icon":"clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "title":"Monday",
        "fcttext":"Generally sunny despite a few afternoon clouds. High 92F. Winds ENE at 5 to 10 mph.",
        "fcttext_metric":"Sunny along with a few clouds. High 33C. Winds ENE at 10 to 15 km/h.",
        "pop":"20"
        }
        ,
        {
        "period":19,
        "icon":"nt_clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "title":"Monday Night",
        "fcttext":"Mainly clear skies. Low 77F. Winds light and variable.",
        "fcttext_metric":"Mainly clear skies. Low near 25C. Winds light and variable.",
        "pop":"20"
        }
        ]
        },
        "simpleforecast": {
        "forecastday": [
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
        "period":1,
        "high": {
        "fahrenheit":"95",
        "celsius":"35"
        },
        "low": {
        "fahrenheit":"75",
        "celsius":"24"
        },
        "conditions":"Clear",
        "icon":"clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "skyicon":"",
        "pop":10,
        "qpf_allday": {
        "in": 0.00,
        "mm": 0
        },
        "qpf_day": {
        "in": null,
        "mm": null
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
        "in": null,
        "cm": null
        },
        "snow_night": {
        "in": 0.0,
        "cm": 0.0
        },
        "maxwind": {
        "mph": 13,
        "kph": 20,
        "dir": "East",
        "degrees": 0
        },
        "avewind": {
        "mph": 7,
        "kph": 11,
        "dir": "ESE",
        "degrees": 0
        },
        "avehumidity": 75,
        "maxhumidity": 81,
        "minhumidity": 68
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
        "period":2,
        "high": {
        "fahrenheit":"91",
        "celsius":"33"
        },
        "low": {
        "fahrenheit":"75",
        "celsius":"24"
        },
        "conditions":"Clear",
        "icon":"clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
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
        "degrees": 70
        },
        "avewind": {
        "mph": 9,
        "kph": 14,
        "dir": "ENE",
        "degrees": 70
        },
        "avehumidity": 72,
        "maxhumidity": 88,
        "minhumidity": 53
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
        "period":3,
        "high": {
        "fahrenheit":"91",
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
        "degrees": 74
        },
        "avewind": {
        "mph": 8,
        "kph": 13,
        "dir": "ENE",
        "degrees": 74
        },
        "avehumidity": 74,
        "maxhumidity": 89,
        "minhumidity": 56
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
        "period":4,
        "high": {
        "fahrenheit":"89",
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
        "pop":40,
        "qpf_allday": {
        "in": 0.02,
        "mm": 1
        },
        "qpf_day": {
        "in": 0.02,
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
        "degrees": 70
        },
        "avewind": {
        "mph": 9,
        "kph": 14,
        "dir": "ENE",
        "degrees": 70
        },
        "avehumidity": 75,
        "maxhumidity": 89,
        "minhumidity": 63
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
        "period":5,
        "high": {
        "fahrenheit":"89",
        "celsius":"32"
        },
        "low": {
        "fahrenheit":"76",
        "celsius":"24"
        },
        "conditions":"Chance of a Thunderstorm",
        "icon":"chancetstorms",
        "icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
        "skyicon":"",
        "pop":40,
        "qpf_allday": {
        "in": 0.02,
        "mm": 1
        },
        "qpf_day": {
        "in": 0.02,
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
        "degrees": 76
        },
        "avewind": {
        "mph": 8,
        "kph": 13,
        "dir": "ENE",
        "degrees": 76
        },
        "avehumidity": 74,
        "maxhumidity": 89,
        "minhumidity": 58
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
        "period":6,
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
        "degrees": 70
        },
        "avewind": {
        "mph": 8,
        "kph": 13,
        "dir": "ENE",
        "degrees": 70
        },
        "avehumidity": 73,
        "maxhumidity": 88,
        "minhumidity": 56
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
        "period":7,
        "high": {
        "fahrenheit":"91",
        "celsius":"33"
        },
        "low": {
        "fahrenheit":"77",
        "celsius":"25"
        },
        "conditions":"Clear",
        "icon":"clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
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
        "mph": 9,
        "kph": 14,
        "dir": "ENE",
        "degrees": 69
        },
        "avehumidity": 74,
        "maxhumidity": 88,
        "minhumidity": 59
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
        "period":8,
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
        "degrees": 67
        },
        "avewind": {
        "mph": 11,
        "kph": 18,
        "dir": "ENE",
        "degrees": 67
        },
        "avehumidity": 74,
        "maxhumidity": 88,
        "minhumidity": 58
        }
        ,
        {"date":{
      "epoch":"1460286000",
      "pretty":"7:00 PM PHT on April 10, 2016",
      "day":10,
      "month":4,
      "year":2016,
      "yday":100,
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
        "period":9,
        "high": {
        "fahrenheit":"92",
        "celsius":"33"
        },
        "low": {
        "fahrenheit":"77",
        "celsius":"25"
        },
        "conditions":"Clear",
        "icon":"clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
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
        "degrees": 64
        },
        "avewind": {
        "mph": 9,
        "kph": 14,
        "dir": "ENE",
        "degrees": 64
        },
        "avehumidity": 72,
        "maxhumidity": 86,
        "minhumidity": 54
        }
        ,
        {"date":{
      "epoch":"1460372400",
      "pretty":"7:00 PM PHT on April 11, 2016",
      "day":11,
      "month":4,
      "year":2016,
      "yday":101,
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
        "period":10,
        "high": {
        "fahrenheit":"92",
        "celsius":"33"
        },
        "low": {
        "fahrenheit":"77",
        "celsius":"25"
        },
        "conditions":"Clear",
        "icon":"clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
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
        "degrees": 66
        },
        "avewind": {
        "mph": 6,
        "kph": 10,
        "dir": "ENE",
        "degrees": 66
        },
        "avehumidity": 73,
        "maxhumidity": 87,
        "minhumidity": 56
        }
        ]
        }
      }
        ,
      "hourly_forecast": [
        {
        "FCTTIME": {
        "hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "2","mday_padded": "02","yday": "92","isdst": "0","epoch": "1459587600","pretty": "5:00 PM PHT on April 02, 2016","civil": "5:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "85", "metric": "29"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "25",
        "wspd": {"english": "8", "metric": "13"},
        "wdir": {"dir": "ENE", "degrees": "74"},
        "wx": "Mostly Sunny",
        "uvi": "1",
        "humidity": "68",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "91", "metric": "33"},
        "feelslike": {"english": "91", "metric": "33"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "3",
        "mslp": {"english": "29.89", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "2","mday_padded": "02","yday": "92","isdst": "0","epoch": "1459591200","pretty": "6:00 PM PHT on April 02, 2016","civil": "6:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "87", "metric": "31"},
        "dewpoint": {"english": "76", "metric": "24"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "19",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "75"},
        "wx": "Sunny",
        "uvi": "0",
        "humidity": "70",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "98", "metric": "36"},
        "feelslike": {"english": "98", "metric": "36"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "0",
        "mslp": {"english": "29.9", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "2","mday_padded": "02","yday": "92","isdst": "0","epoch": "1459594800","pretty": "7:00 PM PHT on April 02, 2016","civil": "7:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "82", "metric": "28"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "16",
        "wspd": {"english": "8", "metric": "13"},
        "wdir": {"dir": "ENE", "degrees": "74"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "76",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "88", "metric": "31"},
        "feelslike": {"english": "88", "metric": "31"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "0",
        "mslp": {"english": "29.91", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "2","mday_padded": "02","yday": "92","isdst": "0","epoch": "1459598400","pretty": "8:00 PM PHT on April 02, 2016","civil": "8:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "82", "metric": "28"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "11",
        "wspd": {"english": "8", "metric": "13"},
        "wdir": {"dir": "ENE", "degrees": "73"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "77",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "88", "metric": "31"},
        "feelslike": {"english": "88", "metric": "31"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "0",
        "mslp": {"english": "29.93", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "2","mday_padded": "02","yday": "92","isdst": "0","epoch": "1459602000","pretty": "9:00 PM PHT on April 02, 2016","civil": "9:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "82", "metric": "28"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "10",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "71"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "75",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "88", "metric": "31"},
        "feelslike": {"english": "88", "metric": "31"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "0",
        "mslp": {"english": "29.94", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "2","mday_padded": "02","yday": "92","isdst": "0","epoch": "1459605600","pretty": "10:00 PM PHT on April 02, 2016","civil": "10:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "80", "metric": "27"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "10",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "70"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "80",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "85", "metric": "30"},
        "feelslike": {"english": "80", "metric": "27"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "3",
        "mslp": {"english": "29.95", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "2","mday_padded": "02","yday": "92","isdst": "0","epoch": "1459609200","pretty": "11:00 PM PHT on April 02, 2016","civil": "11:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "80", "metric": "27"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "9",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "69"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "81",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "85", "metric": "30"},
        "feelslike": {"english": "80", "metric": "27"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "4",
        "mslp": {"english": "29.96", "metric": "1015"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "3","mday_padded": "03","yday": "93","isdst": "0","epoch": "1459612800","pretty": "12:00 AM PHT on April 03, 2016","civil": "12:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "80", "metric": "27"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "9",
        "wspd": {"english": "3", "metric": "5"},
        "wdir": {"dir": "ENE", "degrees": "71"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "83",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "86", "metric": "30"},
        "feelslike": {"english": "80", "metric": "27"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "5",
        "mslp": {"english": "29.95", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "3","mday_padded": "03","yday": "93","isdst": "0","epoch": "1459616400","pretty": "1:00 AM PHT on April 03, 2016","civil": "1:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "78", "metric": "26"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "11",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "67"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "84",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "78", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "5",
        "mslp": {"english": "29.93", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "3","mday_padded": "03","yday": "93","isdst": "0","epoch": "1459620000","pretty": "2:00 AM PHT on April 03, 2016","civil": "2:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "77", "metric": "25"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "11",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "66"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "86",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "77", "metric": "25"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "5",
        "mslp": {"english": "29.93", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "3","mday_padded": "03","yday": "93","isdst": "0","epoch": "1459623600","pretty": "3:00 AM PHT on April 03, 2016","civil": "3:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "78", "metric": "26"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "14",
        "wspd": {"english": "4", "metric": "6"},
        "wdir": {"dir": "ENE", "degrees": "63"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "85",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "78", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "5",
        "mslp": {"english": "29.93", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "3","mday_padded": "03","yday": "93","isdst": "0","epoch": "1459627200","pretty": "4:00 AM PHT on April 03, 2016","civil": "4:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "77", "metric": "25"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "18",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "ENE", "degrees": "65"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "88",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "77", "metric": "25"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "5",
        "mslp": {"english": "29.94", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "3","mday_padded": "03","yday": "93","isdst": "0","epoch": "1459630800","pretty": "5:00 AM PHT on April 03, 2016","civil": "5:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "77", "metric": "25"},
        "dewpoint": {"english": "72", "metric": "22"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "19",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "65"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "87",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "77", "metric": "25"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "5",
        "mslp": {"english": "29.95", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "3","mday_padded": "03","yday": "93","isdst": "0","epoch": "1459634400","pretty": "6:00 AM PHT on April 03, 2016","civil": "6:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "77", "metric": "25"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "21",
        "wspd": {"english": "2", "metric": "3"},
        "wdir": {"dir": "ENE", "degrees": "68"},
        "wx": "Mostly Sunny",
        "uvi": "0",
        "humidity": "88",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "77", "metric": "25"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "5",
        "mslp": {"english": "29.96", "metric": "1015"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "3","mday_padded": "03","yday": "93","isdst": "0","epoch": "1459638000","pretty": "7:00 AM PHT on April 03, 2016","civil": "7:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "79", "metric": "26"},
        "dewpoint": {"english": "72", "metric": "22"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "23",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "67"},
        "wx": "Mostly Sunny",
        "uvi": "1",
        "humidity": "81",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "79", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "5",
        "mslp": {"english": "29.98", "metric": "1015"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "3","mday_padded": "03","yday": "93","isdst": "0","epoch": "1459641600","pretty": "8:00 AM PHT on April 03, 2016","civil": "8:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "82", "metric": "28"},
        "dewpoint": {"english": "72", "metric": "22"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "29",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "67"},
        "wx": "Mostly Sunny",
        "uvi": "3",
        "humidity": "73",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "87", "metric": "31"},
        "feelslike": {"english": "87", "metric": "31"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "4",
        "mslp": {"english": "30.0", "metric": "1016"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "3","mday_padded": "03","yday": "93","isdst": "0","epoch": "1459645200","pretty": "9:00 AM PHT on April 03, 2016","civil": "9:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "84", "metric": "29"},
        "dewpoint": {"english": "72", "metric": "22"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "27",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "69"},
        "wx": "Mostly Sunny",
        "uvi": "6",
        "humidity": "69",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "90", "metric": "32"},
        "feelslike": {"english": "90", "metric": "32"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "3",
        "mslp": {"english": "30.0", "metric": "1016"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "3","mday_padded": "03","yday": "93","isdst": "0","epoch": "1459648800","pretty": "10:00 AM PHT on April 03, 2016","civil": "10:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "87", "metric": "31"},
        "dewpoint": {"english": "71", "metric": "22"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "21",
        "wspd": {"english": "9", "metric": "14"},
        "wdir": {"dir": "ENE", "degrees": "71"},
        "wx": "Mostly Sunny",
        "uvi": "10",
        "humidity": "60",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "94", "metric": "34"},
        "feelslike": {"english": "94", "metric": "34"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "1",
        "mslp": {"english": "29.99", "metric": "1016"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "3","mday_padded": "03","yday": "93","isdst": "0","epoch": "1459652400","pretty": "11:00 AM PHT on April 03, 2016","civil": "11:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "89", "metric": "32"},
        "dewpoint": {"english": "70", "metric": "21"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "24",
        "wspd": {"english": "10", "metric": "16"},
        "wdir": {"dir": "ENE", "degrees": "72"},
        "wx": "Mostly Sunny",
        "uvi": "11",
        "humidity": "55",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "95", "metric": "35"},
        "feelslike": {"english": "95", "metric": "35"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "0",
        "mslp": {"english": "29.97", "metric": "1015"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "3","mday_padded": "03","yday": "93","isdst": "0","epoch": "1459656000","pretty": "12:00 PM PHT on April 03, 2016","civil": "12:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "89", "metric": "32"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "26",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "E", "degrees": "90"},
        "wx": "Mostly Sunny",
        "uvi": "11",
        "humidity": "61",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "98", "metric": "37"},
        "feelslike": {"english": "98", "metric": "37"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "1",
        "mslp": {"english": "29.94", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "3","mday_padded": "03","yday": "93","isdst": "0","epoch": "1459659600","pretty": "1:00 PM PHT on April 03, 2016","civil": "1:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "90", "metric": "32"},
        "dewpoint": {"english": "70", "metric": "21"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "31",
        "wspd": {"english": "10", "metric": "16"},
        "wdir": {"dir": "ENE", "degrees": "73"},
        "wx": "Partly Cloudy",
        "uvi": "11",
        "humidity": "53",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "95", "metric": "35"},
        "feelslike": {"english": "95", "metric": "35"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "1",
        "mslp": {"english": "29.91", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "3","mday_padded": "03","yday": "93","isdst": "0","epoch": "1459663200","pretty": "2:00 PM PHT on April 03, 2016","civil": "2:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "89", "metric": "32"},
        "dewpoint": {"english": "70", "metric": "21"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "32",
        "wspd": {"english": "9", "metric": "14"},
        "wdir": {"dir": "ENE", "degrees": "72"},
        "wx": "Partly Cloudy",
        "uvi": "9",
        "humidity": "53",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "95", "metric": "35"},
        "feelslike": {"english": "95", "metric": "35"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "1",
        "mslp": {"english": "29.89", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "3","mday_padded": "03","yday": "93","isdst": "0","epoch": "1459666800","pretty": "3:00 PM PHT on April 03, 2016","civil": "3:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "90", "metric": "32"},
        "dewpoint": {"english": "71", "metric": "22"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "30",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "70"},
        "wx": "Partly Cloudy",
        "uvi": "6",
        "humidity": "54",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "96", "metric": "36"},
        "feelslike": {"english": "96", "metric": "36"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "0",
        "mslp": {"english": "29.88", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "3","mday_padded": "03","yday": "93","isdst": "0","epoch": "1459670400","pretty": "4:00 PM PHT on April 03, 2016","civil": "4:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "88", "metric": "31"},
        "dewpoint": {"english": "70", "metric": "21"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "20",
        "wspd": {"english": "10", "metric": "16"},
        "wdir": {"dir": "ENE", "degrees": "66"},
        "wx": "Mostly Sunny",
        "uvi": "2",
        "humidity": "57",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "93", "metric": "34"},
        "feelslike": {"english": "93", "metric": "34"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "0",
        "mslp": {"english": "29.88", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "3","mday_padded": "03","yday": "93","isdst": "0","epoch": "1459674000","pretty": "5:00 PM PHT on April 03, 2016","civil": "5:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "86", "metric": "30"},
        "dewpoint": {"english": "70", "metric": "21"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "11",
        "wspd": {"english": "9", "metric": "14"},
        "wdir": {"dir": "ENE", "degrees": "64"},
        "wx": "Sunny",
        "uvi": "1",
        "humidity": "60",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "90", "metric": "32"},
        "feelslike": {"english": "90", "metric": "32"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "0",
        "mslp": {"english": "29.88", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "3","mday_padded": "03","yday": "93","isdst": "0","epoch": "1459677600","pretty": "6:00 PM PHT on April 03, 2016","civil": "6:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "88", "metric": "31"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "9",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "61"},
        "wx": "Sunny",
        "uvi": "0",
        "humidity": "64",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "96", "metric": "35"},
        "feelslike": {"english": "96", "metric": "35"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "0",
        "mslp": {"english": "29.9", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "3","mday_padded": "03","yday": "93","isdst": "0","epoch": "1459681200","pretty": "7:00 PM PHT on April 03, 2016","civil": "7:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "82", "metric": "28"},
        "dewpoint": {"english": "72", "metric": "22"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "10",
        "wspd": {"english": "8", "metric": "13"},
        "wdir": {"dir": "ENE", "degrees": "71"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "72",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "87", "metric": "31"},
        "feelslike": {"english": "87", "metric": "31"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "2",
        "mslp": {"english": "29.91", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "3","mday_padded": "03","yday": "93","isdst": "0","epoch": "1459684800","pretty": "8:00 PM PHT on April 03, 2016","civil": "8:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "81", "metric": "27"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "8",
        "wspd": {"english": "8", "metric": "13"},
        "wdir": {"dir": "ENE", "degrees": "76"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "76",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "85", "metric": "30"},
        "feelslike": {"english": "85", "metric": "30"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "3",
        "mslp": {"english": "29.93", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "3","mday_padded": "03","yday": "93","isdst": "0","epoch": "1459688400","pretty": "9:00 PM PHT on April 03, 2016","civil": "9:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "82", "metric": "28"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "6",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "ENE", "degrees": "77"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "76",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "88", "metric": "31"},
        "feelslike": {"english": "88", "metric": "31"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "4",
        "mslp": {"english": "29.93", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "3","mday_padded": "03","yday": "93","isdst": "0","epoch": "1459692000","pretty": "10:00 PM PHT on April 03, 2016","civil": "10:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "80", "metric": "27"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "5",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "74"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "81",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "85", "metric": "30"},
        "feelslike": {"english": "80", "metric": "27"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "5",
        "mslp": {"english": "29.94", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "3","mday_padded": "03","yday": "93","isdst": "0","epoch": "1459695600","pretty": "11:00 PM PHT on April 03, 2016","civil": "11:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "79", "metric": "26"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "4",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "70"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "82",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "79", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "5",
        "mslp": {"english": "29.94", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "4","mday_padded": "04","yday": "94","isdst": "0","epoch": "1459699200","pretty": "12:00 AM PHT on April 04, 2016","civil": "12:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "80", "metric": "27"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "8",
        "wspd": {"english": "3", "metric": "5"},
        "wdir": {"dir": "ENE", "degrees": "71"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "84",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "86", "metric": "30"},
        "feelslike": {"english": "80", "metric": "27"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "5",
        "mslp": {"english": "29.93", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "4","mday_padded": "04","yday": "94","isdst": "0","epoch": "1459702800","pretty": "1:00 AM PHT on April 04, 2016","civil": "1:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "78", "metric": "26"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "13",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "68"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "84",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "78", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "5",
        "mslp": {"english": "29.91", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "4","mday_padded": "04","yday": "94","isdst": "0","epoch": "1459706400","pretty": "2:00 AM PHT on April 04, 2016","civil": "2:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "77", "metric": "25"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "17",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "ENE", "degrees": "70"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "86",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "77", "metric": "25"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "5",
        "mslp": {"english": "29.89", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "4","mday_padded": "04","yday": "94","isdst": "0","epoch": "1459710000","pretty": "3:00 AM PHT on April 04, 2016","civil": "3:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "77", "metric": "25"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "24",
        "wspd": {"english": "3", "metric": "5"},
        "wdir": {"dir": "ENE", "degrees": "71"},
        "wx": "Mostly Clear",
        "uvi": "0",
        "humidity": "86",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "77", "metric": "25"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "5",
        "mslp": {"english": "29.89", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "4","mday_padded": "04","yday": "94","isdst": "0","epoch": "1459713600","pretty": "4:00 AM PHT on April 04, 2016","civil": "4:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "76", "metric": "24"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "31",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "ENE", "degrees": "74"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "88",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "76", "metric": "24"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.89", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "4","mday_padded": "04","yday": "94","isdst": "0","epoch": "1459717200","pretty": "5:00 AM PHT on April 04, 2016","civil": "5:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "76", "metric": "24"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "34",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "ENE", "degrees": "75"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "88",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "76", "metric": "24"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.9", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "4","mday_padded": "04","yday": "94","isdst": "0","epoch": "1459720800","pretty": "6:00 AM PHT on April 04, 2016","civil": "6:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "77", "metric": "25"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "31",
        "wspd": {"english": "2", "metric": "3"},
        "wdir": {"dir": "ENE", "degrees": "73"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "89",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "77", "metric": "25"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "5",
        "mslp": {"english": "29.92", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "4","mday_padded": "04","yday": "94","isdst": "0","epoch": "1459724400","pretty": "7:00 AM PHT on April 04, 2016","civil": "7:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "79", "metric": "26"},
        "dewpoint": {"english": "72", "metric": "22"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "25",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "70"},
        "wx": "Mostly Sunny",
        "uvi": "1",
        "humidity": "80",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "79", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "4",
        "mslp": {"english": "29.95", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "4","mday_padded": "04","yday": "94","isdst": "0","epoch": "1459728000","pretty": "8:00 AM PHT on April 04, 2016","civil": "8:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "83", "metric": "28"},
        "dewpoint": {"english": "72", "metric": "22"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "31",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "68"},
        "wx": "Partly Cloudy",
        "uvi": "3",
        "humidity": "71",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "87", "metric": "31"},
        "feelslike": {"english": "87", "metric": "31"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "3",
        "mslp": {"english": "29.97", "metric": "1015"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "4","mday_padded": "04","yday": "94","isdst": "0","epoch": "1459731600","pretty": "9:00 AM PHT on April 04, 2016","civil": "9:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "84", "metric": "29"},
        "dewpoint": {"english": "72", "metric": "22"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "35",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "ENE", "degrees": "67"},
        "wx": "Partly Cloudy",
        "uvi": "6",
        "humidity": "69",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "90", "metric": "32"},
        "feelslike": {"english": "90", "metric": "32"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "14",
        "mslp": {"english": "29.97", "metric": "1015"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "4","mday_padded": "04","yday": "94","isdst": "0","epoch": "1459735200","pretty": "10:00 AM PHT on April 04, 2016","civil": "10:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "86", "metric": "30"},
        "dewpoint": {"english": "72", "metric": "22"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "39",
        "wspd": {"english": "8", "metric": "13"},
        "wdir": {"dir": "ENE", "degrees": "68"},
        "wx": "Partly Cloudy",
        "uvi": "10",
        "humidity": "63",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "92", "metric": "33"},
        "feelslike": {"english": "92", "metric": "33"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "11",
        "mslp": {"english": "29.96", "metric": "1015"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "4","mday_padded": "04","yday": "94","isdst": "0","epoch": "1459738800","pretty": "11:00 AM PHT on April 04, 2016","civil": "11:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "87", "metric": "31"},
        "dewpoint": {"english": "72", "metric": "22"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "48",
        "wspd": {"english": "9", "metric": "14"},
        "wdir": {"dir": "ENE", "degrees": "72"},
        "wx": "Partly Cloudy",
        "uvi": "11",
        "humidity": "60",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "94", "metric": "34"},
        "feelslike": {"english": "94", "metric": "34"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "10",
        "mslp": {"english": "29.94", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "4","mday_padded": "04","yday": "94","isdst": "0","epoch": "1459742400","pretty": "12:00 PM PHT on April 04, 2016","civil": "12:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "88", "metric": "31"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "52",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "SE", "degrees": "127"},
        "wx": "Partly Cloudy",
        "uvi": "11",
        "humidity": "67",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "98", "metric": "36"},
        "feelslike": {"english": "98", "metric": "36"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "9",
        "mslp": {"english": "29.92", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "4","mday_padded": "04","yday": "94","isdst": "0","epoch": "1459746000","pretty": "1:00 PM PHT on April 04, 2016","civil": "1:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "89", "metric": "32"},
        "dewpoint": {"english": "72", "metric": "22"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "58",
        "wspd": {"english": "8", "metric": "13"},
        "wdir": {"dir": "ENE", "degrees": "77"},
        "wx": "Partly Cloudy",
        "uvi": "11",
        "humidity": "58",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "96", "metric": "36"},
        "feelslike": {"english": "96", "metric": "36"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "8",
        "mslp": {"english": "29.88", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "4","mday_padded": "04","yday": "94","isdst": "0","epoch": "1459749600","pretty": "2:00 PM PHT on April 04, 2016","civil": "2:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "90", "metric": "32"},
        "dewpoint": {"english": "72", "metric": "22"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "59",
        "wspd": {"english": "8", "metric": "13"},
        "wdir": {"dir": "ENE", "degrees": "78"},
        "wx": "Partly Cloudy",
        "uvi": "9",
        "humidity": "56",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "96", "metric": "36"},
        "feelslike": {"english": "96", "metric": "36"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "9",
        "mslp": {"english": "29.86", "metric": "1011"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "4","mday_padded": "04","yday": "94","isdst": "0","epoch": "1459753200","pretty": "3:00 PM PHT on April 04, 2016","civil": "3:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "90", "metric": "32"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "59",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "75"},
        "wx": "Partly Cloudy",
        "uvi": "5",
        "humidity": "58",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "98", "metric": "37"},
        "feelslike": {"english": "98", "metric": "37"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "23",
        "mslp": {"english": "29.85", "metric": "1011"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "4","mday_padded": "04","yday": "94","isdst": "0","epoch": "1459756800","pretty": "4:00 PM PHT on April 04, 2016","civil": "4:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "88", "metric": "31"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "56",
        "wspd": {"english": "8", "metric": "13"},
        "wdir": {"dir": "ENE", "degrees": "71"},
        "wx": "Partly Cloudy",
        "uvi": "2",
        "humidity": "62",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "96", "metric": "35"},
        "feelslike": {"english": "96", "metric": "35"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "24",
        "mslp": {"english": "29.84", "metric": "1011"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "4","mday_padded": "04","yday": "94","isdst": "0","epoch": "1459760400","pretty": "5:00 PM PHT on April 04, 2016","civil": "5:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "86", "metric": "30"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "43",
        "wspd": {"english": "8", "metric": "13"},
        "wdir": {"dir": "ENE", "degrees": "66"},
        "wx": "Partly Cloudy",
        "uvi": "1",
        "humidity": "67",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "93", "metric": "34"},
        "feelslike": {"english": "93", "metric": "34"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "24",
        "mslp": {"english": "29.85", "metric": "1011"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "4","mday_padded": "04","yday": "94","isdst": "0","epoch": "1459764000","pretty": "6:00 PM PHT on April 04, 2016","civil": "6:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "88", "metric": "31"},
        "dewpoint": {"english": "76", "metric": "24"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "42",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "NE", "degrees": "56"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "69",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "98", "metric": "36"},
        "feelslike": {"english": "98", "metric": "36"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "7",
        "mslp": {"english": "29.86", "metric": "1011"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "4","mday_padded": "04","yday": "94","isdst": "0","epoch": "1459767600","pretty": "7:00 PM PHT on April 04, 2016","civil": "7:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "82", "metric": "28"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "35",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "70"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "76",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "88", "metric": "31"},
        "feelslike": {"english": "88", "metric": "31"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "7",
        "mslp": {"english": "29.89", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "4","mday_padded": "04","yday": "94","isdst": "0","epoch": "1459771200","pretty": "8:00 PM PHT on April 04, 2016","civil": "8:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "81", "metric": "27"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "33",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "73"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "78",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "85", "metric": "30"},
        "feelslike": {"english": "85", "metric": "30"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "8",
        "mslp": {"english": "29.9", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "4","mday_padded": "04","yday": "94","isdst": "0","epoch": "1459774800","pretty": "9:00 PM PHT on April 04, 2016","civil": "9:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "82", "metric": "28"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "29",
        "wspd": {"english": "4", "metric": "6"},
        "wdir": {"dir": "ENE", "degrees": "75"},
        "wx": "Mostly Clear",
        "uvi": "0",
        "humidity": "77",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "90", "metric": "32"},
        "feelslike": {"english": "90", "metric": "32"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "10",
        "mslp": {"english": "29.92", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "4","mday_padded": "04","yday": "94","isdst": "0","epoch": "1459778400","pretty": "10:00 PM PHT on April 04, 2016","civil": "10:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "80", "metric": "27"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "26",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "74"},
        "wx": "Mostly Clear",
        "uvi": "0",
        "humidity": "82",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "85", "metric": "30"},
        "feelslike": {"english": "80", "metric": "27"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "10",
        "mslp": {"english": "29.93", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "4","mday_padded": "04","yday": "94","isdst": "0","epoch": "1459782000","pretty": "11:00 PM PHT on April 04, 2016","civil": "11:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "80", "metric": "27"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "25",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "73"},
        "wx": "Mostly Clear",
        "uvi": "0",
        "humidity": "84",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "85", "metric": "30"},
        "feelslike": {"english": "80", "metric": "27"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "11",
        "mslp": {"english": "29.93", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "5","mday_padded": "05","yday": "95","isdst": "0","epoch": "1459785600","pretty": "12:00 AM PHT on April 05, 2016","civil": "12:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "80", "metric": "27"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "30",
        "wspd": {"english": "3", "metric": "5"},
        "wdir": {"dir": "ENE", "degrees": "78"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "84",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "86", "metric": "30"},
        "feelslike": {"english": "80", "metric": "27"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "12",
        "mslp": {"english": "29.92", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "5","mday_padded": "05","yday": "95","isdst": "0","epoch": "1459789200","pretty": "1:00 AM PHT on April 05, 2016","civil": "1:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "78", "metric": "26"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "29",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "73"},
        "wx": "Mostly Clear",
        "uvi": "0",
        "humidity": "86",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "78", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "12",
        "mslp": {"english": "29.9", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "5","mday_padded": "05","yday": "95","isdst": "0","epoch": "1459792800","pretty": "2:00 AM PHT on April 05, 2016","civil": "2:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "78", "metric": "26"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "29",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "ENE", "degrees": "71"},
        "wx": "Mostly Clear",
        "uvi": "0",
        "humidity": "87",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "78", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "12",
        "mslp": {"english": "29.89", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "5","mday_padded": "05","yday": "95","isdst": "0","epoch": "1459796400","pretty": "3:00 AM PHT on April 05, 2016","civil": "3:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "78", "metric": "26"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "38",
        "wspd": {"english": "3", "metric": "5"},
        "wdir": {"dir": "ENE", "degrees": "67"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "86",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "78", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.89", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "5","mday_padded": "05","yday": "95","isdst": "0","epoch": "1459800000","pretty": "4:00 AM PHT on April 05, 2016","civil": "4:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "77", "metric": "25"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "32",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "ENE", "degrees": "64"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "89",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "77", "metric": "25"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.9", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "5","mday_padded": "05","yday": "95","isdst": "0","epoch": "1459803600","pretty": "5:00 AM PHT on April 05, 2016","civil": "5:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "77", "metric": "25"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "36",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "ENE", "degrees": "63"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "88",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "77", "metric": "25"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.9", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "5","mday_padded": "05","yday": "95","isdst": "0","epoch": "1459807200","pretty": "6:00 AM PHT on April 05, 2016","civil": "6:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "78", "metric": "26"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "41",
        "wspd": {"english": "2", "metric": "3"},
        "wdir": {"dir": "ENE", "degrees": "61"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "89",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "78", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "5",
        "mslp": {"english": "29.92", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "5","mday_padded": "05","yday": "95","isdst": "0","epoch": "1459810800","pretty": "7:00 AM PHT on April 05, 2016","civil": "7:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "80", "metric": "27"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "55",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "64"},
        "wx": "Partly Cloudy",
        "uvi": "1",
        "humidity": "82",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "85", "metric": "30"},
        "feelslike": {"english": "80", "metric": "27"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "5",
        "mslp": {"english": "29.95", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "5","mday_padded": "05","yday": "95","isdst": "0","epoch": "1459814400","pretty": "8:00 AM PHT on April 05, 2016","civil": "8:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "83", "metric": "28"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "56",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "66"},
        "wx": "Partly Cloudy",
        "uvi": "2",
        "humidity": "74",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "88", "metric": "31"},
        "feelslike": {"english": "88", "metric": "31"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "4",
        "mslp": {"english": "29.96", "metric": "1015"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "5","mday_padded": "05","yday": "95","isdst": "0","epoch": "1459818000","pretty": "9:00 AM PHT on April 05, 2016","civil": "9:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "84", "metric": "29"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "53",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "ENE", "degrees": "64"},
        "wx": "Partly Cloudy",
        "uvi": "5",
        "humidity": "71",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "91", "metric": "33"},
        "feelslike": {"english": "91", "metric": "33"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "20",
        "mslp": {"english": "29.97", "metric": "1015"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "5","mday_padded": "05","yday": "95","isdst": "0","epoch": "1459821600","pretty": "10:00 AM PHT on April 05, 2016","civil": "10:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "87", "metric": "31"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "58",
        "wspd": {"english": "8", "metric": "13"},
        "wdir": {"dir": "ENE", "degrees": "64"},
        "wx": "Partly Cloudy",
        "uvi": "9",
        "humidity": "65",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "96", "metric": "35"},
        "feelslike": {"english": "96", "metric": "35"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "17",
        "mslp": {"english": "29.96", "metric": "1015"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "5","mday_padded": "05","yday": "95","isdst": "0","epoch": "1459825200","pretty": "11:00 AM PHT on April 05, 2016","civil": "11:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "87", "metric": "31"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Mostly Cloudy",
        "icon": "mostlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/mostlycloudy.gif",
        "fctcode": "3",
        "sky": "61",
        "wspd": {"english": "8", "metric": "13"},
        "wdir": {"dir": "ENE", "degrees": "66"},
        "wx": "Mostly Cloudy",
        "uvi": "11",
        "humidity": "64",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "96", "metric": "35"},
        "feelslike": {"english": "96", "metric": "35"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "15",
        "mslp": {"english": "29.95", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "5","mday_padded": "05","yday": "95","isdst": "0","epoch": "1459828800","pretty": "12:00 PM PHT on April 05, 2016","civil": "12:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "87", "metric": "31"},
        "dewpoint": {"english": "76", "metric": "24"},
        "condition": "Chance of Rain",
        "icon": "chancerain",
        "icon_url":"http://icons.wxug.com/i/c/k/chancerain.gif",
        "fctcode": "12",
        "sky": "62",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "E", "degrees": "84"},
        "wx": "Showers",
        "uvi": "11",
        "humidity": "70",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "98", "metric": "36"},
        "feelslike": {"english": "98", "metric": "36"},
        "qpf": {"english": "0.01", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "36",
        "mslp": {"english": "29.92", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "5","mday_padded": "05","yday": "95","isdst": "0","epoch": "1459832400","pretty": "1:00 PM PHT on April 05, 2016","civil": "1:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "87", "metric": "31"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Chance of Rain",
        "icon": "chancerain",
        "icon_url":"http://icons.wxug.com/i/c/k/chancerain.gif",
        "fctcode": "12",
        "sky": "63",
        "wspd": {"english": "9", "metric": "14"},
        "wdir": {"dir": "ENE", "degrees": "75"},
        "wx": "Showers",
        "uvi": "10",
        "humidity": "64",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "96", "metric": "35"},
        "feelslike": {"english": "96", "metric": "35"},
        "qpf": {"english": "0.01", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "36",
        "mslp": {"english": "29.89", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "5","mday_padded": "05","yday": "95","isdst": "0","epoch": "1459836000","pretty": "2:00 PM PHT on April 05, 2016","civil": "2:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "87", "metric": "31"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Chance of Rain",
        "icon": "chancerain",
        "icon_url":"http://icons.wxug.com/i/c/k/chancerain.gif",
        "fctcode": "12",
        "sky": "62",
        "wspd": {"english": "9", "metric": "14"},
        "wdir": {"dir": "ENE", "degrees": "77"},
        "wx": "Showers",
        "uvi": "9",
        "humidity": "63",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "96", "metric": "35"},
        "feelslike": {"english": "96", "metric": "35"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "36",
        "mslp": {"english": "29.87", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "5","mday_padded": "05","yday": "95","isdst": "0","epoch": "1459839600","pretty": "3:00 PM PHT on April 05, 2016","civil": "3:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "88", "metric": "31"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "57",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "78"},
        "wx": "Partly Cloudy",
        "uvi": "5",
        "humidity": "63",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "96", "metric": "35"},
        "feelslike": {"english": "96", "metric": "35"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "24",
        "mslp": {"english": "29.87", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "5","mday_padded": "05","yday": "95","isdst": "0","epoch": "1459843200","pretty": "4:00 PM PHT on April 05, 2016","civil": "4:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "87", "metric": "31"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "50",
        "wspd": {"english": "8", "metric": "13"},
        "wdir": {"dir": "ENE", "degrees": "73"},
        "wx": "Partly Cloudy",
        "uvi": "2",
        "humidity": "65",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "96", "metric": "35"},
        "feelslike": {"english": "96", "metric": "35"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "24",
        "mslp": {"english": "29.87", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "5","mday_padded": "05","yday": "95","isdst": "0","epoch": "1459846800","pretty": "5:00 PM PHT on April 05, 2016","civil": "5:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "86", "metric": "30"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "44",
        "wspd": {"english": "8", "metric": "13"},
        "wdir": {"dir": "ENE", "degrees": "70"},
        "wx": "Partly Cloudy",
        "uvi": "1",
        "humidity": "68",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "93", "metric": "34"},
        "feelslike": {"english": "93", "metric": "34"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "24",
        "mslp": {"english": "29.88", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "5","mday_padded": "05","yday": "95","isdst": "0","epoch": "1459850400","pretty": "6:00 PM PHT on April 05, 2016","civil": "6:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "88", "metric": "31"},
        "dewpoint": {"english": "76", "metric": "24"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "42",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "67"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "69",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "98", "metric": "36"},
        "feelslike": {"english": "98", "metric": "36"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "9",
        "mslp": {"english": "29.9", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "5","mday_padded": "05","yday": "95","isdst": "0","epoch": "1459854000","pretty": "7:00 PM PHT on April 05, 2016","civil": "7:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "83", "metric": "28"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "40",
        "wspd": {"english": "8", "metric": "13"},
        "wdir": {"dir": "ENE", "degrees": "71"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "75",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "88", "metric": "31"},
        "feelslike": {"english": "88", "metric": "31"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "11",
        "mslp": {"english": "29.91", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "5","mday_padded": "05","yday": "95","isdst": "0","epoch": "1459857600","pretty": "8:00 PM PHT on April 05, 2016","civil": "8:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "82", "metric": "28"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "38",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "72"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "78",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "88", "metric": "31"},
        "feelslike": {"english": "88", "metric": "31"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "13",
        "mslp": {"english": "29.93", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "5","mday_padded": "05","yday": "95","isdst": "0","epoch": "1459861200","pretty": "9:00 PM PHT on April 05, 2016","civil": "9:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "83", "metric": "28"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "34",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "ENE", "degrees": "72"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "77",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "90", "metric": "32"},
        "feelslike": {"english": "90", "metric": "32"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "5",
        "mslp": {"english": "29.94", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "5","mday_padded": "05","yday": "95","isdst": "0","epoch": "1459864800","pretty": "10:00 PM PHT on April 05, 2016","civil": "10:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "81", "metric": "27"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "32",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "73"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "82",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "86", "metric": "30"},
        "feelslike": {"english": "86", "metric": "30"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.94", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "5","mday_padded": "05","yday": "95","isdst": "0","epoch": "1459868400","pretty": "11:00 PM PHT on April 05, 2016","civil": "11:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "80", "metric": "27"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "32",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "71"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "84",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "86", "metric": "30"},
        "feelslike": {"english": "80", "metric": "27"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.94", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "6","mday_padded": "06","yday": "96","isdst": "0","epoch": "1459872000","pretty": "12:00 AM PHT on April 06, 2016","civil": "12:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "81", "metric": "27"},
        "dewpoint": {"english": "76", "metric": "24"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "38",
        "wspd": {"english": "4", "metric": "6"},
        "wdir": {"dir": "ENE", "degrees": "74"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "84",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "86", "metric": "30"},
        "feelslike": {"english": "86", "metric": "30"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.93", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "6","mday_padded": "06","yday": "96","isdst": "0","epoch": "1459875600","pretty": "1:00 AM PHT on April 06, 2016","civil": "1:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "79", "metric": "26"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "48",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "70"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "86",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "79", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "7",
        "mslp": {"english": "29.9", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "6","mday_padded": "06","yday": "96","isdst": "0","epoch": "1459879200","pretty": "2:00 AM PHT on April 06, 2016","civil": "2:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "79", "metric": "26"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "54",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "70"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "86",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "79", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "7",
        "mslp": {"english": "29.89", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "6","mday_padded": "06","yday": "96","isdst": "0","epoch": "1459882800","pretty": "3:00 AM PHT on April 06, 2016","civil": "3:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "79", "metric": "26"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "53",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "ENE", "degrees": "68"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "86",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "79", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "7",
        "mslp": {"english": "29.9", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "6","mday_padded": "06","yday": "96","isdst": "0","epoch": "1459886400","pretty": "4:00 AM PHT on April 06, 2016","civil": "4:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "78", "metric": "26"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "49",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "70"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "88",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "78", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "7",
        "mslp": {"english": "29.9", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "6","mday_padded": "06","yday": "96","isdst": "0","epoch": "1459890000","pretty": "5:00 AM PHT on April 06, 2016","civil": "5:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "78", "metric": "26"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "46",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "73"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "88",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "78", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "7",
        "mslp": {"english": "29.92", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "6","mday_padded": "06","yday": "96","isdst": "0","epoch": "1459893600","pretty": "6:00 AM PHT on April 06, 2016","civil": "6:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "78", "metric": "26"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "42",
        "wspd": {"english": "2", "metric": "3"},
        "wdir": {"dir": "E", "degrees": "83"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "89",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "78", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "7",
        "mslp": {"english": "29.94", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "6","mday_padded": "06","yday": "96","isdst": "0","epoch": "1459897200","pretty": "7:00 AM PHT on April 06, 2016","civil": "7:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "80", "metric": "27"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "38",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "E", "degrees": "85"},
        "wx": "Partly Cloudy",
        "uvi": "1",
        "humidity": "82",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "85", "metric": "30"},
        "feelslike": {"english": "80", "metric": "27"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.96", "metric": "1015"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "6","mday_padded": "06","yday": "96","isdst": "0","epoch": "1459900800","pretty": "8:00 AM PHT on April 06, 2016","civil": "8:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "83", "metric": "28"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "36",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "E", "degrees": "86"},
        "wx": "Partly Cloudy",
        "uvi": "3",
        "humidity": "73",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "88", "metric": "31"},
        "feelslike": {"english": "88", "metric": "31"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "5",
        "mslp": {"english": "29.97", "metric": "1015"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "6","mday_padded": "06","yday": "96","isdst": "0","epoch": "1459904400","pretty": "9:00 AM PHT on April 06, 2016","civil": "9:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "85", "metric": "29"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "36",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "E", "degrees": "83"},
        "wx": "Partly Cloudy",
        "uvi": "6",
        "humidity": "69",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "91", "metric": "33"},
        "feelslike": {"english": "91", "metric": "33"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "16",
        "mslp": {"english": "29.97", "metric": "1015"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "6","mday_padded": "06","yday": "96","isdst": "0","epoch": "1459908000","pretty": "10:00 AM PHT on April 06, 2016","civil": "10:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "88", "metric": "31"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "35",
        "wspd": {"english": "9", "metric": "14"},
        "wdir": {"dir": "E", "degrees": "80"},
        "wx": "Partly Cloudy",
        "uvi": "10",
        "humidity": "61",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "96", "metric": "35"},
        "feelslike": {"english": "96", "metric": "35"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "13",
        "mslp": {"english": "29.96", "metric": "1015"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "6","mday_padded": "06","yday": "96","isdst": "0","epoch": "1459911600","pretty": "11:00 AM PHT on April 06, 2016","civil": "11:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "89", "metric": "32"},
        "dewpoint": {"english": "72", "metric": "22"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "36",
        "wspd": {"english": "9", "metric": "14"},
        "wdir": {"dir": "ENE", "degrees": "76"},
        "wx": "Partly Cloudy",
        "uvi": "11",
        "humidity": "58",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "96", "metric": "36"},
        "feelslike": {"english": "96", "metric": "36"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "10",
        "mslp": {"english": "29.94", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "6","mday_padded": "06","yday": "96","isdst": "0","epoch": "1459915200","pretty": "12:00 PM PHT on April 06, 2016","civil": "12:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "89", "metric": "32"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "42",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "ESE", "degrees": "106"},
        "wx": "Partly Cloudy",
        "uvi": "11",
        "humidity": "64",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "100", "metric": "38"},
        "feelslike": {"english": "100", "metric": "38"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "20",
        "mslp": {"english": "29.92", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "6","mday_padded": "06","yday": "96","isdst": "0","epoch": "1459918800","pretty": "1:00 PM PHT on April 06, 2016","civil": "1:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "89", "metric": "32"},
        "dewpoint": {"english": "72", "metric": "22"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "50",
        "wspd": {"english": "9", "metric": "14"},
        "wdir": {"dir": "ENE", "degrees": "71"},
        "wx": "Partly Cloudy",
        "uvi": "11",
        "humidity": "58",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "96", "metric": "36"},
        "feelslike": {"english": "96", "metric": "36"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "21",
        "mslp": {"english": "29.9", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "6","mday_padded": "06","yday": "96","isdst": "0","epoch": "1459922400","pretty": "2:00 PM PHT on April 06, 2016","civil": "2:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "89", "metric": "32"},
        "dewpoint": {"english": "72", "metric": "22"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "53",
        "wspd": {"english": "9", "metric": "14"},
        "wdir": {"dir": "ENE", "degrees": "69"},
        "wx": "Partly Cloudy",
        "uvi": "9",
        "humidity": "59",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "96", "metric": "36"},
        "feelslike": {"english": "96", "metric": "36"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "22",
        "mslp": {"english": "29.88", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "6","mday_padded": "06","yday": "96","isdst": "0","epoch": "1459926000","pretty": "3:00 PM PHT on April 06, 2016","civil": "3:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "89", "metric": "32"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Chance of Rain",
        "icon": "chancerain",
        "icon_url":"http://icons.wxug.com/i/c/k/chancerain.gif",
        "fctcode": "12",
        "sky": "53",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "69"},
        "wx": "Showers",
        "uvi": "5",
        "humidity": "62",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "98", "metric": "37"},
        "feelslike": {"english": "98", "metric": "37"},
        "qpf": {"english": "0.01", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "40",
        "mslp": {"english": "29.88", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "6","mday_padded": "06","yday": "96","isdst": "0","epoch": "1459929600","pretty": "4:00 PM PHT on April 06, 2016","civil": "4:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "87", "metric": "31"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Chance of a Thunderstorm",
        "icon": "chancetstorms",
        "icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
        "fctcode": "14",
        "sky": "51",
        "wspd": {"english": "9", "metric": "14"},
        "wdir": {"dir": "ENE", "degrees": "68"},
        "wx": "Scattered Thunderstorms",
        "uvi": "2",
        "humidity": "66",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "96", "metric": "35"},
        "feelslike": {"english": "96", "metric": "35"},
        "qpf": {"english": "0.01", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "41",
        "mslp": {"english": "29.88", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "6","mday_padded": "06","yday": "96","isdst": "0","epoch": "1459933200","pretty": "5:00 PM PHT on April 06, 2016","civil": "5:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "85", "metric": "29"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Chance of a Thunderstorm",
        "icon": "chancetstorms",
        "icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
        "fctcode": "14",
        "sky": "50",
        "wspd": {"english": "8", "metric": "13"},
        "wdir": {"dir": "ENE", "degrees": "68"},
        "wx": "Scattered Thunderstorms",
        "uvi": "1",
        "humidity": "70",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "91", "metric": "33"},
        "feelslike": {"english": "91", "metric": "33"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "41",
        "mslp": {"english": "29.9", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "6","mday_padded": "06","yday": "96","isdst": "0","epoch": "1459936800","pretty": "6:00 PM PHT on April 06, 2016","civil": "6:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "87", "metric": "31"},
        "dewpoint": {"english": "77", "metric": "25"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "44",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "59"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "72",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "100", "metric": "38"},
        "feelslike": {"english": "100", "metric": "38"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "4",
        "mslp": {"english": "29.92", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "6","mday_padded": "06","yday": "96","isdst": "0","epoch": "1459940400","pretty": "7:00 PM PHT on April 06, 2016","civil": "7:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "82", "metric": "28"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "39",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "69"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "77",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "90", "metric": "32"},
        "feelslike": {"english": "90", "metric": "32"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "4",
        "mslp": {"english": "29.94", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "6","mday_padded": "06","yday": "96","isdst": "0","epoch": "1459944000","pretty": "8:00 PM PHT on April 06, 2016","civil": "8:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "82", "metric": "28"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "34",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "68"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "78",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "88", "metric": "31"},
        "feelslike": {"english": "88", "metric": "31"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "5",
        "mslp": {"english": "29.95", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "6","mday_padded": "06","yday": "96","isdst": "0","epoch": "1459947600","pretty": "9:00 PM PHT on April 06, 2016","civil": "9:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "82", "metric": "28"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "30",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "ENE", "degrees": "68"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "77",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "90", "metric": "32"},
        "feelslike": {"english": "90", "metric": "32"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.95", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "6","mday_padded": "06","yday": "96","isdst": "0","epoch": "1459951200","pretty": "10:00 PM PHT on April 06, 2016","civil": "10:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "81", "metric": "27"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "23",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "66"},
        "wx": "Mostly Clear",
        "uvi": "0",
        "humidity": "82",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "86", "metric": "30"},
        "feelslike": {"english": "86", "metric": "30"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.95", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "6","mday_padded": "06","yday": "96","isdst": "0","epoch": "1459954800","pretty": "11:00 PM PHT on April 06, 2016","civil": "11:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "80", "metric": "27"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "18",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "66"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "84",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "86", "metric": "30"},
        "feelslike": {"english": "80", "metric": "27"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.95", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "7","mday_padded": "07","yday": "97","isdst": "0","epoch": "1459958400","pretty": "12:00 AM PHT on April 07, 2016","civil": "12:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "81", "metric": "27"},
        "dewpoint": {"english": "76", "metric": "24"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "17",
        "wspd": {"english": "4", "metric": "6"},
        "wdir": {"dir": "ENE", "degrees": "67"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "84",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "86", "metric": "30"},
        "feelslike": {"english": "86", "metric": "30"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.93", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "7","mday_padded": "07","yday": "97","isdst": "0","epoch": "1459962000","pretty": "1:00 AM PHT on April 07, 2016","civil": "1:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "79", "metric": "26"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "16",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "70"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "85",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "79", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.92", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "7","mday_padded": "07","yday": "97","isdst": "0","epoch": "1459965600","pretty": "2:00 AM PHT on April 07, 2016","civil": "2:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "78", "metric": "26"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "17",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "73"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "87",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "78", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "7",
        "mslp": {"english": "29.91", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "7","mday_padded": "07","yday": "97","isdst": "0","epoch": "1459969200","pretty": "3:00 AM PHT on April 07, 2016","civil": "3:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "78", "metric": "26"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "20",
        "wspd": {"english": "3", "metric": "5"},
        "wdir": {"dir": "ENE", "degrees": "68"},
        "wx": "Mostly Clear",
        "uvi": "0",
        "humidity": "86",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "78", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "7",
        "mslp": {"english": "29.91", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "7","mday_padded": "07","yday": "97","isdst": "0","epoch": "1459972800","pretty": "4:00 AM PHT on April 07, 2016","civil": "4:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "77", "metric": "25"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "23",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "ENE", "degrees": "68"},
        "wx": "Mostly Clear",
        "uvi": "0",
        "humidity": "88",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "77", "metric": "25"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.92", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "7","mday_padded": "07","yday": "97","isdst": "0","epoch": "1459976400","pretty": "5:00 AM PHT on April 07, 2016","civil": "5:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "77", "metric": "25"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "26",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "ENE", "degrees": "68"},
        "wx": "Mostly Clear",
        "uvi": "0",
        "humidity": "87",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "77", "metric": "25"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.93", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "7","mday_padded": "07","yday": "97","isdst": "0","epoch": "1459980000","pretty": "6:00 AM PHT on April 07, 2016","civil": "6:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "78", "metric": "26"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "27",
        "wspd": {"english": "2", "metric": "3"},
        "wdir": {"dir": "ENE", "degrees": "68"},
        "wx": "Mostly Sunny",
        "uvi": "0",
        "humidity": "88",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "78", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.95", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "7","mday_padded": "07","yday": "97","isdst": "0","epoch": "1459983600","pretty": "7:00 AM PHT on April 07, 2016","civil": "7:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "80", "metric": "27"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "30",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "73"},
        "wx": "Partly Cloudy",
        "uvi": "1",
        "humidity": "81",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "85", "metric": "30"},
        "feelslike": {"english": "80", "metric": "27"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.98", "metric": "1015"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "7","mday_padded": "07","yday": "97","isdst": "0","epoch": "1459987200","pretty": "8:00 AM PHT on April 07, 2016","civil": "8:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "83", "metric": "28"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "33",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "74"},
        "wx": "Partly Cloudy",
        "uvi": "3",
        "humidity": "72",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "88", "metric": "31"},
        "feelslike": {"english": "88", "metric": "31"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "5",
        "mslp": {"english": "29.99", "metric": "1016"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "7","mday_padded": "07","yday": "97","isdst": "0","epoch": "1459990800","pretty": "9:00 AM PHT on April 07, 2016","civil": "9:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "85", "metric": "29"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "35",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "ENE", "degrees": "74"},
        "wx": "Partly Cloudy",
        "uvi": "6",
        "humidity": "69",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "91", "metric": "33"},
        "feelslike": {"english": "91", "metric": "33"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "18",
        "mslp": {"english": "29.99", "metric": "1016"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "7","mday_padded": "07","yday": "97","isdst": "0","epoch": "1459994400","pretty": "10:00 AM PHT on April 07, 2016","civil": "10:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "88", "metric": "31"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "39",
        "wspd": {"english": "8", "metric": "13"},
        "wdir": {"dir": "ENE", "degrees": "72"},
        "wx": "Partly Cloudy",
        "uvi": "10",
        "humidity": "61",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "96", "metric": "35"},
        "feelslike": {"english": "96", "metric": "35"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "13",
        "mslp": {"english": "29.98", "metric": "1015"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "7","mday_padded": "07","yday": "97","isdst": "0","epoch": "1459998000","pretty": "11:00 AM PHT on April 07, 2016","civil": "11:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "89", "metric": "32"},
        "dewpoint": {"english": "72", "metric": "22"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "41",
        "wspd": {"english": "8", "metric": "13"},
        "wdir": {"dir": "ENE", "degrees": "70"},
        "wx": "Partly Cloudy",
        "uvi": "11",
        "humidity": "58",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "96", "metric": "36"},
        "feelslike": {"english": "96", "metric": "36"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "10",
        "mslp": {"english": "29.96", "metric": "1015"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "7","mday_padded": "07","yday": "97","isdst": "0","epoch": "1460001600","pretty": "12:00 PM PHT on April 07, 2016","civil": "12:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "89", "metric": "32"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "40",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "ENE", "degrees": "75"},
        "wx": "Partly Cloudy",
        "uvi": "11",
        "humidity": "63",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "100", "metric": "38"},
        "feelslike": {"english": "100", "metric": "38"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "11",
        "mslp": {"english": "29.94", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "7","mday_padded": "07","yday": "97","isdst": "0","epoch": "1460005200","pretty": "1:00 PM PHT on April 07, 2016","civil": "1:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "90", "metric": "32"},
        "dewpoint": {"english": "72", "metric": "22"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "41",
        "wspd": {"english": "9", "metric": "14"},
        "wdir": {"dir": "ENE", "degrees": "66"},
        "wx": "Partly Cloudy",
        "uvi": "11",
        "humidity": "56",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "96", "metric": "36"},
        "feelslike": {"english": "96", "metric": "36"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "11",
        "mslp": {"english": "29.92", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "7","mday_padded": "07","yday": "97","isdst": "0","epoch": "1460008800","pretty": "2:00 PM PHT on April 07, 2016","civil": "2:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "90", "metric": "32"},
        "dewpoint": {"english": "72", "metric": "22"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "41",
        "wspd": {"english": "9", "metric": "14"},
        "wdir": {"dir": "ENE", "degrees": "65"},
        "wx": "Partly Cloudy",
        "uvi": "9",
        "humidity": "56",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "96", "metric": "36"},
        "feelslike": {"english": "96", "metric": "36"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "11",
        "mslp": {"english": "29.9", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "7","mday_padded": "07","yday": "97","isdst": "0","epoch": "1460012400","pretty": "3:00 PM PHT on April 07, 2016","civil": "3:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "91", "metric": "33"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "39",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "68"},
        "wx": "Partly Cloudy",
        "uvi": "6",
        "humidity": "58",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "100", "metric": "38"},
        "feelslike": {"english": "100", "metric": "38"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "11",
        "mslp": {"english": "29.9", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "7","mday_padded": "07","yday": "97","isdst": "0","epoch": "1460016000","pretty": "4:00 PM PHT on April 07, 2016","civil": "4:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "88", "metric": "31"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "37",
        "wspd": {"english": "9", "metric": "14"},
        "wdir": {"dir": "ENE", "degrees": "68"},
        "wx": "Partly Cloudy",
        "uvi": "2",
        "humidity": "62",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "96", "metric": "35"},
        "feelslike": {"english": "96", "metric": "35"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "12",
        "mslp": {"english": "29.9", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "7","mday_padded": "07","yday": "97","isdst": "0","epoch": "1460019600","pretty": "5:00 PM PHT on April 07, 2016","civil": "5:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "86", "metric": "30"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "35",
        "wspd": {"english": "8", "metric": "13"},
        "wdir": {"dir": "ENE", "degrees": "70"},
        "wx": "Partly Cloudy",
        "uvi": "1",
        "humidity": "66",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "93", "metric": "34"},
        "feelslike": {"english": "93", "metric": "34"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "14",
        "mslp": {"english": "29.92", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "7","mday_padded": "07","yday": "97","isdst": "0","epoch": "1460023200","pretty": "6:00 PM PHT on April 07, 2016","civil": "6:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "88", "metric": "31"},
        "dewpoint": {"english": "76", "metric": "24"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "30",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "76"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "68",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "98", "metric": "36"},
        "feelslike": {"english": "98", "metric": "36"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "3",
        "mslp": {"english": "29.93", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "7","mday_padded": "07","yday": "97","isdst": "0","epoch": "1460026800","pretty": "7:00 PM PHT on April 07, 2016","civil": "7:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "83", "metric": "28"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "21",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "72"},
        "wx": "Mostly Clear",
        "uvi": "0",
        "humidity": "75",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "88", "metric": "31"},
        "feelslike": {"english": "88", "metric": "31"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "4",
        "mslp": {"english": "29.95", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "7","mday_padded": "07","yday": "97","isdst": "0","epoch": "1460030400","pretty": "8:00 PM PHT on April 07, 2016","civil": "8:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "82", "metric": "28"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "15",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "73"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "78",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "88", "metric": "31"},
        "feelslike": {"english": "88", "metric": "31"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "5",
        "mslp": {"english": "29.96", "metric": "1015"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "7","mday_padded": "07","yday": "97","isdst": "0","epoch": "1460034000","pretty": "9:00 PM PHT on April 07, 2016","civil": "9:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "82", "metric": "28"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "14",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "ENE", "degrees": "75"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "78",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "90", "metric": "32"},
        "feelslike": {"english": "90", "metric": "32"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.97", "metric": "1015"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "7","mday_padded": "07","yday": "97","isdst": "0","epoch": "1460037600","pretty": "10:00 PM PHT on April 07, 2016","civil": "10:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "80", "metric": "27"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "14",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "72"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "83",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "85", "metric": "30"},
        "feelslike": {"english": "80", "metric": "27"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.97", "metric": "1015"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "7","mday_padded": "07","yday": "97","isdst": "0","epoch": "1460041200","pretty": "11:00 PM PHT on April 07, 2016","civil": "11:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "79", "metric": "26"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "14",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "72"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "84",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "79", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.97", "metric": "1015"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "8","mday_padded": "08","yday": "98","isdst": "0","epoch": "1460044800","pretty": "12:00 AM PHT on April 08, 2016","civil": "12:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "80", "metric": "27"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "16",
        "wspd": {"english": "4", "metric": "6"},
        "wdir": {"dir": "ENE", "degrees": "76"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "85",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "86", "metric": "30"},
        "feelslike": {"english": "80", "metric": "27"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "7",
        "mslp": {"english": "29.96", "metric": "1015"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "8","mday_padded": "08","yday": "98","isdst": "0","epoch": "1460048400","pretty": "1:00 AM PHT on April 08, 2016","civil": "1:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "78", "metric": "26"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "17",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "73"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "86",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "78", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "7",
        "mslp": {"english": "29.94", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "8","mday_padded": "08","yday": "98","isdst": "0","epoch": "1460052000","pretty": "2:00 AM PHT on April 08, 2016","civil": "2:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "78", "metric": "26"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "18",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "71"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "87",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "78", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "7",
        "mslp": {"english": "29.93", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "8","mday_padded": "08","yday": "98","isdst": "0","epoch": "1460055600","pretty": "3:00 AM PHT on April 08, 2016","civil": "3:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "78", "metric": "26"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "18",
        "wspd": {"english": "4", "metric": "6"},
        "wdir": {"dir": "ENE", "degrees": "70"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "86",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "78", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "7",
        "mslp": {"english": "29.93", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "8","mday_padded": "08","yday": "98","isdst": "0","epoch": "1460059200","pretty": "4:00 AM PHT on April 08, 2016","civil": "4:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "77", "metric": "25"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "17",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "ENE", "degrees": "68"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "88",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "77", "metric": "25"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "7",
        "mslp": {"english": "29.94", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "8","mday_padded": "08","yday": "98","isdst": "0","epoch": "1460062800","pretty": "5:00 AM PHT on April 08, 2016","civil": "5:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "77", "metric": "25"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "18",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "68"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "86",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "77", "metric": "25"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.95", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "8","mday_padded": "08","yday": "98","isdst": "0","epoch": "1460066400","pretty": "6:00 AM PHT on April 08, 2016","civil": "6:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "78", "metric": "26"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "16",
        "wspd": {"english": "3", "metric": "5"},
        "wdir": {"dir": "ENE", "degrees": "67"},
        "wx": "Sunny",
        "uvi": "0",
        "humidity": "87",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "78", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.96", "metric": "1015"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "8","mday_padded": "08","yday": "98","isdst": "0","epoch": "1460070000","pretty": "7:00 AM PHT on April 08, 2016","civil": "7:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "80", "metric": "27"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "16",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "68"},
        "wx": "Sunny",
        "uvi": "1",
        "humidity": "79",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "85", "metric": "30"},
        "feelslike": {"english": "80", "metric": "27"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "5",
        "mslp": {"english": "29.98", "metric": "1015"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "8","mday_padded": "08","yday": "98","isdst": "0","epoch": "1460073600","pretty": "8:00 AM PHT on April 08, 2016","civil": "8:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "84", "metric": "29"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "18",
        "wspd": {"english": "8", "metric": "13"},
        "wdir": {"dir": "ENE", "degrees": "66"},
        "wx": "Sunny",
        "uvi": "3",
        "humidity": "70",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "91", "metric": "33"},
        "feelslike": {"english": "91", "metric": "33"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "4",
        "mslp": {"english": "29.99", "metric": "1016"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "8","mday_padded": "08","yday": "98","isdst": "0","epoch": "1460077200","pretty": "9:00 AM PHT on April 08, 2016","civil": "9:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "85", "metric": "29"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "23",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "67"},
        "wx": "Mostly Sunny",
        "uvi": "6",
        "humidity": "68",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "91", "metric": "33"},
        "feelslike": {"english": "91", "metric": "33"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "19",
        "mslp": {"english": "29.97", "metric": "1015"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "8","mday_padded": "08","yday": "98","isdst": "0","epoch": "1460080800","pretty": "10:00 AM PHT on April 08, 2016","civil": "10:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "87", "metric": "31"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "25",
        "wspd": {"english": "9", "metric": "14"},
        "wdir": {"dir": "ENE", "degrees": "68"},
        "wx": "Mostly Sunny",
        "uvi": "10",
        "humidity": "63",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "96", "metric": "35"},
        "feelslike": {"english": "96", "metric": "35"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "17",
        "mslp": {"english": "29.95", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "8","mday_padded": "08","yday": "98","isdst": "0","epoch": "1460084400","pretty": "11:00 AM PHT on April 08, 2016","civil": "11:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "89", "metric": "32"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "28",
        "wspd": {"english": "9", "metric": "14"},
        "wdir": {"dir": "ENE", "degrees": "69"},
        "wx": "Mostly Sunny",
        "uvi": "11",
        "humidity": "60",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "98", "metric": "37"},
        "feelslike": {"english": "98", "metric": "37"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "15",
        "mslp": {"english": "29.93", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "8","mday_padded": "08","yday": "98","isdst": "0","epoch": "1460088000","pretty": "12:00 PM PHT on April 08, 2016","civil": "12:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "89", "metric": "32"},
        "dewpoint": {"english": "77", "metric": "25"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "31",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "72"},
        "wx": "Partly Cloudy",
        "uvi": "11",
        "humidity": "67",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "102", "metric": "39"},
        "feelslike": {"english": "102", "metric": "39"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "14",
        "mslp": {"english": "29.91", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "8","mday_padded": "08","yday": "98","isdst": "0","epoch": "1460091600","pretty": "1:00 PM PHT on April 08, 2016","civil": "1:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "90", "metric": "32"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "33",
        "wspd": {"english": "9", "metric": "14"},
        "wdir": {"dir": "ENE", "degrees": "71"},
        "wx": "Partly Cloudy",
        "uvi": "11",
        "humidity": "59",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "98", "metric": "37"},
        "feelslike": {"english": "98", "metric": "37"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "14",
        "mslp": {"english": "29.9", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "8","mday_padded": "08","yday": "98","isdst": "0","epoch": "1460095200","pretty": "2:00 PM PHT on April 08, 2016","civil": "2:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "90", "metric": "32"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "33",
        "wspd": {"english": "9", "metric": "14"},
        "wdir": {"dir": "ENE", "degrees": "72"},
        "wx": "Partly Cloudy",
        "uvi": "9",
        "humidity": "59",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "98", "metric": "37"},
        "feelslike": {"english": "98", "metric": "37"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "14",
        "mslp": {"english": "29.88", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "8","mday_padded": "08","yday": "98","isdst": "0","epoch": "1460098800","pretty": "3:00 PM PHT on April 08, 2016","civil": "3:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "90", "metric": "32"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "32",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "73"},
        "wx": "Partly Cloudy",
        "uvi": "6",
        "humidity": "61",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "100", "metric": "38"},
        "feelslike": {"english": "100", "metric": "38"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "16",
        "mslp": {"english": "29.88", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "8","mday_padded": "08","yday": "98","isdst": "0","epoch": "1460102400","pretty": "4:00 PM PHT on April 08, 2016","civil": "4:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "88", "metric": "31"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "28",
        "wspd": {"english": "9", "metric": "14"},
        "wdir": {"dir": "ENE", "degrees": "71"},
        "wx": "Mostly Sunny",
        "uvi": "2",
        "humidity": "65",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "96", "metric": "35"},
        "feelslike": {"english": "96", "metric": "35"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "17",
        "mslp": {"english": "29.89", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "8","mday_padded": "08","yday": "98","isdst": "0","epoch": "1460106000","pretty": "5:00 PM PHT on April 08, 2016","civil": "5:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "86", "metric": "30"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "22",
        "wspd": {"english": "8", "metric": "13"},
        "wdir": {"dir": "ENE", "degrees": "70"},
        "wx": "Mostly Sunny",
        "uvi": "1",
        "humidity": "68",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "93", "metric": "34"},
        "feelslike": {"english": "93", "metric": "34"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "20",
        "mslp": {"english": "29.9", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "8","mday_padded": "08","yday": "98","isdst": "0","epoch": "1460109600","pretty": "6:00 PM PHT on April 08, 2016","civil": "6:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "88", "metric": "31"},
        "dewpoint": {"english": "77", "metric": "25"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "17",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "65"},
        "wx": "Sunny",
        "uvi": "0",
        "humidity": "70",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "100", "metric": "38"},
        "feelslike": {"english": "100", "metric": "38"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "11",
        "mslp": {"english": "29.92", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "8","mday_padded": "08","yday": "98","isdst": "0","epoch": "1460113200","pretty": "7:00 PM PHT on April 08, 2016","civil": "7:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "83", "metric": "28"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "13",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "69"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "77",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "90", "metric": "32"},
        "feelslike": {"english": "90", "metric": "32"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "14",
        "mslp": {"english": "29.93", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "8","mday_padded": "08","yday": "98","isdst": "0","epoch": "1460116800","pretty": "8:00 PM PHT on April 08, 2016","civil": "8:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "82", "metric": "28"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "11",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "70"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "79",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "90", "metric": "32"},
        "feelslike": {"english": "90", "metric": "32"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "15",
        "mslp": {"english": "29.94", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "8","mday_padded": "08","yday": "98","isdst": "0","epoch": "1460120400","pretty": "9:00 PM PHT on April 08, 2016","civil": "9:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "83", "metric": "28"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "10",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "ENE", "degrees": "67"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "79",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "90", "metric": "32"},
        "feelslike": {"english": "90", "metric": "32"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "14",
        "mslp": {"english": "29.94", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "8","mday_padded": "08","yday": "98","isdst": "0","epoch": "1460124000","pretty": "10:00 PM PHT on April 08, 2016","civil": "10:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "81", "metric": "27"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "8",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "63"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "83",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "86", "metric": "30"},
        "feelslike": {"english": "86", "metric": "30"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "15",
        "mslp": {"english": "29.93", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "8","mday_padded": "08","yday": "98","isdst": "0","epoch": "1460127600","pretty": "11:00 PM PHT on April 08, 2016","civil": "11:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Friday","weekday_name_night": "Friday Night","weekday_name_abbrev": "Fri","weekday_name_unlang": "Friday","weekday_name_night_unlang": "Friday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "80", "metric": "27"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "7",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "63"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "84",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "86", "metric": "30"},
        "feelslike": {"english": "80", "metric": "27"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "15",
        "mslp": {"english": "29.92", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "9","mday_padded": "09","yday": "99","isdst": "0","epoch": "1460131200","pretty": "12:00 AM PHT on April 09, 2016","civil": "12:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "81", "metric": "27"},
        "dewpoint": {"english": "76", "metric": "24"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "7",
        "wspd": {"english": "3", "metric": "5"},
        "wdir": {"dir": "ENE", "degrees": "62"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "85",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "86", "metric": "30"},
        "feelslike": {"english": "86", "metric": "30"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "16",
        "mslp": {"english": "29.92", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "9","mday_padded": "09","yday": "99","isdst": "0","epoch": "1460134800","pretty": "1:00 AM PHT on April 09, 2016","civil": "1:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "79", "metric": "26"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "29",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "64"},
        "wx": "Mostly Clear",
        "uvi": "0",
        "humidity": "86",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "79", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "17",
        "mslp": {"english": "29.91", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "9","mday_padded": "09","yday": "99","isdst": "0","epoch": "1460138400","pretty": "2:00 AM PHT on April 09, 2016","civil": "2:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "79", "metric": "26"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "32",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "66"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "86",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "79", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "17",
        "mslp": {"english": "29.9", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "9","mday_padded": "09","yday": "99","isdst": "0","epoch": "1460142000","pretty": "3:00 AM PHT on April 09, 2016","civil": "3:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "79", "metric": "26"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "32",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "ENE", "degrees": "66"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "86",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "79", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "7",
        "mslp": {"english": "29.91", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "9","mday_padded": "09","yday": "99","isdst": "0","epoch": "1460145600","pretty": "4:00 AM PHT on April 09, 2016","civil": "4:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "78", "metric": "26"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "33",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "68"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "88",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "78", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "7",
        "mslp": {"english": "29.92", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "9","mday_padded": "09","yday": "99","isdst": "0","epoch": "1460149200","pretty": "5:00 AM PHT on April 09, 2016","civil": "5:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "78", "metric": "26"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "33",
        "wspd": {"english": "8", "metric": "13"},
        "wdir": {"dir": "ENE", "degrees": "68"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "87",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "78", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.93", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "9","mday_padded": "09","yday": "99","isdst": "0","epoch": "1460152800","pretty": "6:00 AM PHT on April 09, 2016","civil": "6:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "79", "metric": "26"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "34",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "ENE", "degrees": "68"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "87",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "79", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.95", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "9","mday_padded": "09","yday": "99","isdst": "0","epoch": "1460156400","pretty": "7:00 AM PHT on April 09, 2016","civil": "7:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "80", "metric": "27"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "34",
        "wspd": {"english": "9", "metric": "14"},
        "wdir": {"dir": "ENE", "degrees": "71"},
        "wx": "Partly Cloudy",
        "uvi": "1",
        "humidity": "81",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "85", "metric": "30"},
        "feelslike": {"english": "80", "metric": "27"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.96", "metric": "1015"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "9","mday_padded": "09","yday": "99","isdst": "0","epoch": "1460160000","pretty": "8:00 AM PHT on April 09, 2016","civil": "8:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "83", "metric": "28"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "34",
        "wspd": {"english": "10", "metric": "16"},
        "wdir": {"dir": "ENE", "degrees": "71"},
        "wx": "Partly Cloudy",
        "uvi": "3",
        "humidity": "73",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "88", "metric": "31"},
        "feelslike": {"english": "88", "metric": "31"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "5",
        "mslp": {"english": "29.97", "metric": "1015"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "9","mday_padded": "09","yday": "99","isdst": "0","epoch": "1460163600","pretty": "9:00 AM PHT on April 09, 2016","civil": "9:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "85", "metric": "29"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "34",
        "wspd": {"english": "8", "metric": "13"},
        "wdir": {"dir": "ENE", "degrees": "71"},
        "wx": "Partly Cloudy",
        "uvi": "6",
        "humidity": "71",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "91", "metric": "33"},
        "feelslike": {"english": "91", "metric": "33"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "19",
        "mslp": {"english": "29.96", "metric": "1015"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "9","mday_padded": "09","yday": "99","isdst": "0","epoch": "1460167200","pretty": "10:00 AM PHT on April 09, 2016","civil": "10:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "88", "metric": "31"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "34",
        "wspd": {"english": "11", "metric": "18"},
        "wdir": {"dir": "ENE", "degrees": "69"},
        "wx": "Partly Cloudy",
        "uvi": "10",
        "humidity": "64",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "96", "metric": "35"},
        "feelslike": {"english": "96", "metric": "35"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "16",
        "mslp": {"english": "29.94", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "9","mday_padded": "09","yday": "99","isdst": "0","epoch": "1460170800","pretty": "11:00 AM PHT on April 09, 2016","civil": "11:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "89", "metric": "32"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "35",
        "wspd": {"english": "11", "metric": "18"},
        "wdir": {"dir": "ENE", "degrees": "68"},
        "wx": "Partly Cloudy",
        "uvi": "11",
        "humidity": "61",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "98", "metric": "37"},
        "feelslike": {"english": "98", "metric": "37"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "14",
        "mslp": {"english": "29.92", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "9","mday_padded": "09","yday": "99","isdst": "0","epoch": "1460174400","pretty": "12:00 PM PHT on April 09, 2016","civil": "12:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "90", "metric": "32"},
        "dewpoint": {"english": "77", "metric": "25"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "36",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "57"},
        "wx": "Partly Cloudy",
        "uvi": "11",
        "humidity": "67",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "102", "metric": "39"},
        "feelslike": {"english": "102", "metric": "39"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "12",
        "mslp": {"english": "29.89", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "9","mday_padded": "09","yday": "99","isdst": "0","epoch": "1460178000","pretty": "1:00 PM PHT on April 09, 2016","civil": "1:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "90", "metric": "32"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "36",
        "wspd": {"english": "11", "metric": "18"},
        "wdir": {"dir": "ENE", "degrees": "68"},
        "wx": "Partly Cloudy",
        "uvi": "11",
        "humidity": "58",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "98", "metric": "37"},
        "feelslike": {"english": "98", "metric": "37"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "10",
        "mslp": {"english": "29.87", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "9","mday_padded": "09","yday": "99","isdst": "0","epoch": "1460181600","pretty": "2:00 PM PHT on April 09, 2016","civil": "2:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "90", "metric": "32"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "36",
        "wspd": {"english": "10", "metric": "16"},
        "wdir": {"dir": "ENE", "degrees": "68"},
        "wx": "Partly Cloudy",
        "uvi": "9",
        "humidity": "58",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "98", "metric": "37"},
        "feelslike": {"english": "98", "metric": "37"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "9",
        "mslp": {"english": "29.86", "metric": "1011"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "9","mday_padded": "09","yday": "99","isdst": "0","epoch": "1460185200","pretty": "3:00 PM PHT on April 09, 2016","civil": "3:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "91", "metric": "33"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "33",
        "wspd": {"english": "8", "metric": "13"},
        "wdir": {"dir": "ENE", "degrees": "68"},
        "wx": "Partly Cloudy",
        "uvi": "6",
        "humidity": "59",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "100", "metric": "38"},
        "feelslike": {"english": "100", "metric": "38"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "2",
        "mslp": {"english": "29.86", "metric": "1011"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "9","mday_padded": "09","yday": "99","isdst": "0","epoch": "1460188800","pretty": "4:00 PM PHT on April 09, 2016","civil": "4:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "88", "metric": "31"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "29",
        "wspd": {"english": "9", "metric": "14"},
        "wdir": {"dir": "ENE", "degrees": "67"},
        "wx": "Mostly Sunny",
        "uvi": "2",
        "humidity": "63",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "96", "metric": "35"},
        "feelslike": {"english": "96", "metric": "35"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "3",
        "mslp": {"english": "29.87", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "9","mday_padded": "09","yday": "99","isdst": "0","epoch": "1460192400","pretty": "5:00 PM PHT on April 09, 2016","civil": "5:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "87", "metric": "31"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "22",
        "wspd": {"english": "9", "metric": "14"},
        "wdir": {"dir": "ENE", "degrees": "66"},
        "wx": "Mostly Sunny",
        "uvi": "1",
        "humidity": "67",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "98", "metric": "36"},
        "feelslike": {"english": "98", "metric": "36"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "4",
        "mslp": {"english": "29.88", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "9","mday_padded": "09","yday": "99","isdst": "0","epoch": "1460196000","pretty": "6:00 PM PHT on April 09, 2016","civil": "6:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "89", "metric": "32"},
        "dewpoint": {"english": "77", "metric": "25"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "16",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "64"},
        "wx": "Sunny",
        "uvi": "0",
        "humidity": "68",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "102", "metric": "39"},
        "feelslike": {"english": "102", "metric": "39"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.89", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "9","mday_padded": "09","yday": "99","isdst": "0","epoch": "1460199600","pretty": "7:00 PM PHT on April 09, 2016","civil": "7:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "83", "metric": "28"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "10",
        "wspd": {"english": "8", "metric": "13"},
        "wdir": {"dir": "ENE", "degrees": "65"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "75",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "90", "metric": "32"},
        "feelslike": {"english": "90", "metric": "32"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "7",
        "mslp": {"english": "29.9", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "9","mday_padded": "09","yday": "99","isdst": "0","epoch": "1460203200","pretty": "8:00 PM PHT on April 09, 2016","civil": "8:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "82", "metric": "28"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "7",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "66"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "78",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "90", "metric": "32"},
        "feelslike": {"english": "90", "metric": "32"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "8",
        "mslp": {"english": "29.91", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "9","mday_padded": "09","yday": "99","isdst": "0","epoch": "1460206800","pretty": "9:00 PM PHT on April 09, 2016","civil": "9:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "83", "metric": "28"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "8",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "ENE", "degrees": "67"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "77",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "90", "metric": "32"},
        "feelslike": {"english": "90", "metric": "32"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "5",
        "mslp": {"english": "29.91", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "9","mday_padded": "09","yday": "99","isdst": "0","epoch": "1460210400","pretty": "10:00 PM PHT on April 09, 2016","civil": "10:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "81", "metric": "27"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "9",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "68"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "82",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "86", "metric": "30"},
        "feelslike": {"english": "86", "metric": "30"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.91", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "9","mday_padded": "09","yday": "99","isdst": "0","epoch": "1460214000","pretty": "11:00 PM PHT on April 09, 2016","civil": "11:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Saturday","weekday_name_night": "Saturday Night","weekday_name_abbrev": "Sat","weekday_name_unlang": "Saturday","weekday_name_night_unlang": "Saturday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "80", "metric": "27"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "9",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "70"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "84",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "86", "metric": "30"},
        "feelslike": {"english": "80", "metric": "27"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.9", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "10","mday_padded": "10","yday": "100","isdst": "0","epoch": "1460217600","pretty": "12:00 AM PHT on April 10, 2016","civil": "12:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "81", "metric": "27"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "9",
        "wspd": {"english": "4", "metric": "6"},
        "wdir": {"dir": "ENE", "degrees": "77"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "83",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "86", "metric": "30"},
        "feelslike": {"english": "86", "metric": "30"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.9", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "10","mday_padded": "10","yday": "100","isdst": "0","epoch": "1460221200","pretty": "1:00 AM PHT on April 10, 2016","civil": "1:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "79", "metric": "26"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "10",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "75"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "84",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "79", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.89", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "10","mday_padded": "10","yday": "100","isdst": "0","epoch": "1460224800","pretty": "2:00 AM PHT on April 10, 2016","civil": "2:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "78", "metric": "26"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "12",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "77"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "85",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "78", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.89", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "10","mday_padded": "10","yday": "100","isdst": "0","epoch": "1460228400","pretty": "3:00 AM PHT on April 10, 2016","civil": "3:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "79", "metric": "26"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "14",
        "wspd": {"english": "4", "metric": "6"},
        "wdir": {"dir": "ENE", "degrees": "76"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "83",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "79", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.89", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "10","mday_padded": "10","yday": "100","isdst": "0","epoch": "1460232000","pretty": "4:00 AM PHT on April 10, 2016","civil": "4:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "78", "metric": "26"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "17",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "79"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "85",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "78", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.9", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "10","mday_padded": "10","yday": "100","isdst": "0","epoch": "1460235600","pretty": "5:00 AM PHT on April 10, 2016","civil": "5:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "78", "metric": "26"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "20",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "E", "degrees": "79"},
        "wx": "Mostly Clear",
        "uvi": "0",
        "humidity": "85",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "78", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.91", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "10","mday_padded": "10","yday": "100","isdst": "0","epoch": "1460239200","pretty": "6:00 AM PHT on April 10, 2016","civil": "6:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "79", "metric": "26"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "23",
        "wspd": {"english": "2", "metric": "3"},
        "wdir": {"dir": "E", "degrees": "81"},
        "wx": "Mostly Sunny",
        "uvi": "0",
        "humidity": "86",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "79", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.92", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "10","mday_padded": "10","yday": "100","isdst": "0","epoch": "1460242800","pretty": "7:00 AM PHT on April 10, 2016","civil": "7:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "80", "metric": "27"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "25",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "77"},
        "wx": "Mostly Sunny",
        "uvi": "1",
        "humidity": "79",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "85", "metric": "30"},
        "feelslike": {"english": "80", "metric": "27"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "5",
        "mslp": {"english": "29.93", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "10","mday_padded": "10","yday": "100","isdst": "0","epoch": "1460246400","pretty": "8:00 AM PHT on April 10, 2016","civil": "8:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "83", "metric": "28"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "25",
        "wspd": {"english": "8", "metric": "13"},
        "wdir": {"dir": "ENE", "degrees": "74"},
        "wx": "Mostly Sunny",
        "uvi": "3",
        "humidity": "71",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "88", "metric": "31"},
        "feelslike": {"english": "88", "metric": "31"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "5",
        "mslp": {"english": "29.93", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "10","mday_padded": "10","yday": "100","isdst": "0","epoch": "1460250000","pretty": "9:00 AM PHT on April 10, 2016","civil": "9:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "84", "metric": "29"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "25",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "72"},
        "wx": "Mostly Sunny",
        "uvi": "6",
        "humidity": "69",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "91", "metric": "33"},
        "feelslike": {"english": "91", "metric": "33"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "4",
        "mslp": {"english": "29.93", "metric": "1014"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "10","mday_padded": "10","yday": "100","isdst": "0","epoch": "1460253600","pretty": "10:00 AM PHT on April 10, 2016","civil": "10:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "88", "metric": "31"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "24",
        "wspd": {"english": "9", "metric": "14"},
        "wdir": {"dir": "ENE", "degrees": "69"},
        "wx": "Mostly Sunny",
        "uvi": "10",
        "humidity": "62",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "96", "metric": "35"},
        "feelslike": {"english": "96", "metric": "35"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "3",
        "mslp": {"english": "29.91", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "10","mday_padded": "10","yday": "100","isdst": "0","epoch": "1460257200","pretty": "11:00 AM PHT on April 10, 2016","civil": "11:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "89", "metric": "32"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "23",
        "wspd": {"english": "10", "metric": "16"},
        "wdir": {"dir": "ENE", "degrees": "68"},
        "wx": "Mostly Sunny",
        "uvi": "11",
        "humidity": "59",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "98", "metric": "37"},
        "feelslike": {"english": "98", "metric": "37"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "1",
        "mslp": {"english": "29.88", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "10","mday_padded": "10","yday": "100","isdst": "0","epoch": "1460260800","pretty": "12:00 PM PHT on April 10, 2016","civil": "12:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "90", "metric": "32"},
        "dewpoint": {"english": "76", "metric": "24"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "21",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "NNE", "degrees": "27"},
        "wx": "Mostly Sunny",
        "uvi": "11",
        "humidity": "63",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "100", "metric": "38"},
        "feelslike": {"english": "100", "metric": "38"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "0",
        "mslp": {"english": "29.86", "metric": "1011"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "10","mday_padded": "10","yday": "100","isdst": "0","epoch": "1460264400","pretty": "1:00 PM PHT on April 10, 2016","civil": "1:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "90", "metric": "32"},
        "dewpoint": {"english": "72", "metric": "22"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "20",
        "wspd": {"english": "10", "metric": "16"},
        "wdir": {"dir": "ENE", "degrees": "65"},
        "wx": "Mostly Sunny",
        "uvi": "11",
        "humidity": "55",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "96", "metric": "36"},
        "feelslike": {"english": "96", "metric": "36"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "0",
        "mslp": {"english": "29.84", "metric": "1011"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "10","mday_padded": "10","yday": "100","isdst": "0","epoch": "1460268000","pretty": "2:00 PM PHT on April 10, 2016","civil": "2:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "91", "metric": "33"},
        "dewpoint": {"english": "72", "metric": "22"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "19",
        "wspd": {"english": "9", "metric": "14"},
        "wdir": {"dir": "ENE", "degrees": "65"},
        "wx": "Sunny",
        "uvi": "9",
        "humidity": "54",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "98", "metric": "37"},
        "feelslike": {"english": "98", "metric": "37"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "0",
        "mslp": {"english": "29.83", "metric": "1010"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "10","mday_padded": "10","yday": "100","isdst": "0","epoch": "1460271600","pretty": "3:00 PM PHT on April 10, 2016","civil": "3:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "91", "metric": "33"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "17",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "65"},
        "wx": "Sunny",
        "uvi": "6",
        "humidity": "55",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "100", "metric": "38"},
        "feelslike": {"english": "100", "metric": "38"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "0",
        "mslp": {"english": "29.83", "metric": "1010"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "10","mday_padded": "10","yday": "100","isdst": "0","epoch": "1460275200","pretty": "4:00 PM PHT on April 10, 2016","civil": "4:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "89", "metric": "32"},
        "dewpoint": {"english": "72", "metric": "22"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "13",
        "wspd": {"english": "9", "metric": "14"},
        "wdir": {"dir": "ENE", "degrees": "65"},
        "wx": "Sunny",
        "uvi": "2",
        "humidity": "59",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "96", "metric": "36"},
        "feelslike": {"english": "96", "metric": "36"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "0",
        "mslp": {"english": "29.84", "metric": "1011"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "10","mday_padded": "10","yday": "100","isdst": "0","epoch": "1460278800","pretty": "5:00 PM PHT on April 10, 2016","civil": "5:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "87", "metric": "31"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "11",
        "wspd": {"english": "8", "metric": "13"},
        "wdir": {"dir": "ENE", "degrees": "65"},
        "wx": "Sunny",
        "uvi": "1",
        "humidity": "62",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "96", "metric": "35"},
        "feelslike": {"english": "96", "metric": "35"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "1",
        "mslp": {"english": "29.85", "metric": "1011"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "10","mday_padded": "10","yday": "100","isdst": "0","epoch": "1460282400","pretty": "6:00 PM PHT on April 10, 2016","civil": "6:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "89", "metric": "32"},
        "dewpoint": {"english": "76", "metric": "24"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "10",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "ENE", "degrees": "60"},
        "wx": "Sunny",
        "uvi": "0",
        "humidity": "65",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "100", "metric": "38"},
        "feelslike": {"english": "100", "metric": "38"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "3",
        "mslp": {"english": "29.86", "metric": "1011"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "10","mday_padded": "10","yday": "100","isdst": "0","epoch": "1460286000","pretty": "7:00 PM PHT on April 10, 2016","civil": "7:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "83", "metric": "28"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "8",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "69"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "73",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "88", "metric": "31"},
        "feelslike": {"english": "88", "metric": "31"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "4",
        "mslp": {"english": "29.87", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "10","mday_padded": "10","yday": "100","isdst": "0","epoch": "1460289600","pretty": "8:00 PM PHT on April 10, 2016","civil": "8:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "82", "metric": "28"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "8",
        "wspd": {"english": "7", "metric": "11"},
        "wdir": {"dir": "ENE", "degrees": "70"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "76",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "88", "metric": "31"},
        "feelslike": {"english": "88", "metric": "31"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "5",
        "mslp": {"english": "29.88", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "10","mday_padded": "10","yday": "100","isdst": "0","epoch": "1460293200","pretty": "9:00 PM PHT on April 10, 2016","civil": "9:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "82", "metric": "28"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "10",
        "wspd": {"english": "4", "metric": "6"},
        "wdir": {"dir": "ENE", "degrees": "71"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "76",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "88", "metric": "31"},
        "feelslike": {"english": "88", "metric": "31"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "5",
        "mslp": {"english": "29.88", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "10","mday_padded": "10","yday": "100","isdst": "0","epoch": "1460296800","pretty": "10:00 PM PHT on April 10, 2016","civil": "10:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "80", "metric": "27"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "15",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "69"},
        "wx": "Clear",
        "uvi": "0",
        "humidity": "81",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "85", "metric": "30"},
        "feelslike": {"english": "80", "metric": "27"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.88", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "10","mday_padded": "10","yday": "100","isdst": "0","epoch": "1460300400","pretty": "11:00 PM PHT on April 10, 2016","civil": "11:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Sunday","weekday_name_night": "Sunday Night","weekday_name_abbrev": "Sun","weekday_name_unlang": "Sunday","weekday_name_night_unlang": "Sunday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "80", "metric": "27"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "23",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "68"},
        "wx": "Mostly Clear",
        "uvi": "0",
        "humidity": "83",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "85", "metric": "30"},
        "feelslike": {"english": "80", "metric": "27"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.88", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "11","mday_padded": "11","yday": "101","isdst": "0","epoch": "1460304000","pretty": "12:00 AM PHT on April 11, 2016","civil": "12:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "81", "metric": "27"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "30",
        "wspd": {"english": "2", "metric": "3"},
        "wdir": {"dir": "ENE", "degrees": "63"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "84",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "86", "metric": "30"},
        "feelslike": {"english": "86", "metric": "30"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "7",
        "mslp": {"english": "29.87", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "11","mday_padded": "11","yday": "101","isdst": "0","epoch": "1460307600","pretty": "1:00 AM PHT on April 11, 2016","civil": "1:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "79", "metric": "26"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "35",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "ENE", "degrees": "64"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "85",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "79", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "7",
        "mslp": {"english": "29.87", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "11","mday_padded": "11","yday": "101","isdst": "0","epoch": "1460311200","pretty": "2:00 AM PHT on April 11, 2016","civil": "2:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "78", "metric": "26"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "39",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "ENE", "degrees": "64"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "86",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "78", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "7",
        "mslp": {"english": "29.86", "metric": "1011"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "11","mday_padded": "11","yday": "101","isdst": "0","epoch": "1460314800","pretty": "3:00 AM PHT on April 11, 2016","civil": "3:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "79", "metric": "26"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "38",
        "wspd": {"english": "3", "metric": "5"},
        "wdir": {"dir": "ENE", "degrees": "62"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "85",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "79", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "7",
        "mslp": {"english": "29.87", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "11","mday_padded": "11","yday": "101","isdst": "0","epoch": "1460318400","pretty": "4:00 AM PHT on April 11, 2016","civil": "4:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "78", "metric": "26"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "35",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "ENE", "degrees": "64"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "86",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "78", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "7",
        "mslp": {"english": "29.88", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "11","mday_padded": "11","yday": "101","isdst": "0","epoch": "1460322000","pretty": "5:00 AM PHT on April 11, 2016","civil": "5:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "78", "metric": "26"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "30",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "ENE", "degrees": "67"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "85",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "78", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "7",
        "mslp": {"english": "29.88", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "11","mday_padded": "11","yday": "101","isdst": "0","epoch": "1460325600","pretty": "6:00 AM PHT on April 11, 2016","civil": "6:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "79", "metric": "26"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "24",
        "wspd": {"english": "1", "metric": "2"},
        "wdir": {"dir": "ENE", "degrees": "68"},
        "wx": "Mostly Sunny",
        "uvi": "0",
        "humidity": "87",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "79", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.9", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "11","mday_padded": "11","yday": "101","isdst": "0","epoch": "1460329200","pretty": "7:00 AM PHT on April 11, 2016","civil": "7:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "80", "metric": "27"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "19",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "ENE", "degrees": "70"},
        "wx": "Sunny",
        "uvi": "1",
        "humidity": "80",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "85", "metric": "30"},
        "feelslike": {"english": "80", "metric": "27"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.91", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "11","mday_padded": "11","yday": "101","isdst": "0","epoch": "1460332800","pretty": "8:00 AM PHT on April 11, 2016","civil": "8:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "83", "metric": "28"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "17",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "ENE", "degrees": "69"},
        "wx": "Sunny",
        "uvi": "3",
        "humidity": "71",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "88", "metric": "31"},
        "feelslike": {"english": "88", "metric": "31"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "5",
        "mslp": {"english": "29.92", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "11","mday_padded": "11","yday": "101","isdst": "0","epoch": "1460336400","pretty": "9:00 AM PHT on April 11, 2016","civil": "9:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "85", "metric": "29"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "18",
        "wspd": {"english": "3", "metric": "5"},
        "wdir": {"dir": "ENE", "degrees": "66"},
        "wx": "Sunny",
        "uvi": "6",
        "humidity": "69",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "91", "metric": "33"},
        "feelslike": {"english": "91", "metric": "33"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "20",
        "mslp": {"english": "29.91", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "11","mday_padded": "11","yday": "101","isdst": "0","epoch": "1460340000","pretty": "10:00 AM PHT on April 11, 2016","civil": "10:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "88", "metric": "31"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "22",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "65"},
        "wx": "Mostly Sunny",
        "uvi": "10",
        "humidity": "61",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "96", "metric": "35"},
        "feelslike": {"english": "96", "metric": "35"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "17",
        "mslp": {"english": "29.89", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "11","mday_padded": "11","yday": "101","isdst": "0","epoch": "1460343600","pretty": "11:00 AM PHT on April 11, 2016","civil": "11:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "90", "metric": "32"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "26",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "65"},
        "wx": "Mostly Sunny",
        "uvi": "11",
        "humidity": "58",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "98", "metric": "37"},
        "feelslike": {"english": "98", "metric": "37"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "14",
        "mslp": {"english": "29.88", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "11","mday_padded": "11","yday": "101","isdst": "0","epoch": "1460347200","pretty": "12:00 PM PHT on April 11, 2016","civil": "12:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "90", "metric": "32"},
        "dewpoint": {"english": "76", "metric": "24"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "31",
        "wspd": {"english": "2", "metric": "3"},
        "wdir": {"dir": "WSW", "degrees": "259"},
        "wx": "Partly Cloudy",
        "uvi": "11",
        "humidity": "64",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "100", "metric": "38"},
        "feelslike": {"english": "100", "metric": "38"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "12",
        "mslp": {"english": "29.85", "metric": "1011"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "11","mday_padded": "11","yday": "101","isdst": "0","epoch": "1460350800","pretty": "1:00 PM PHT on April 11, 2016","civil": "1:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "91", "metric": "33"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "34",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "65"},
        "wx": "Partly Cloudy",
        "uvi": "11",
        "humidity": "56",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "100", "metric": "38"},
        "feelslike": {"english": "100", "metric": "38"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "10",
        "mslp": {"english": "29.83", "metric": "1010"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "11","mday_padded": "11","yday": "101","isdst": "0","epoch": "1460354400","pretty": "2:00 PM PHT on April 11, 2016","civil": "2:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "91", "metric": "33"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "35",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "66"},
        "wx": "Partly Cloudy",
        "uvi": "9",
        "humidity": "56",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "100", "metric": "38"},
        "feelslike": {"english": "100", "metric": "38"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "9",
        "mslp": {"english": "29.82", "metric": "1010"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "11","mday_padded": "11","yday": "101","isdst": "0","epoch": "1460358000","pretty": "3:00 PM PHT on April 11, 2016","civil": "3:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "91", "metric": "33"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "34",
        "wspd": {"english": "4", "metric": "6"},
        "wdir": {"dir": "ENE", "degrees": "68"},
        "wx": "Partly Cloudy",
        "uvi": "6",
        "humidity": "57",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "100", "metric": "38"},
        "feelslike": {"english": "100", "metric": "38"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "10",
        "mslp": {"english": "29.82", "metric": "1010"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "11","mday_padded": "11","yday": "101","isdst": "0","epoch": "1460361600","pretty": "4:00 PM PHT on April 11, 2016","civil": "4:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "89", "metric": "32"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "33",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "69"},
        "wx": "Partly Cloudy",
        "uvi": "2",
        "humidity": "60",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "98", "metric": "37"},
        "feelslike": {"english": "98", "metric": "37"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "12",
        "mslp": {"english": "29.83", "metric": "1010"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "11","mday_padded": "11","yday": "101","isdst": "0","epoch": "1460365200","pretty": "5:00 PM PHT on April 11, 2016","civil": "5:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "87", "metric": "31"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "fctcode": "2",
        "sky": "31",
        "wspd": {"english": "6", "metric": "10"},
        "wdir": {"dir": "ENE", "degrees": "71"},
        "wx": "Partly Cloudy",
        "uvi": "1",
        "humidity": "64",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "96", "metric": "35"},
        "feelslike": {"english": "96", "metric": "35"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "14",
        "mslp": {"english": "29.84", "metric": "1011"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "11","mday_padded": "11","yday": "101","isdst": "0","epoch": "1460368800","pretty": "6:00 PM PHT on April 11, 2016","civil": "6:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "89", "metric": "32"},
        "dewpoint": {"english": "76", "metric": "24"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
        "fctcode": "1",
        "sky": "28",
        "wspd": {"english": "3", "metric": "5"},
        "wdir": {"dir": "WSW", "degrees": "247"},
        "wx": "Mostly Sunny",
        "uvi": "0",
        "humidity": "67",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "100", "metric": "38"},
        "feelslike": {"english": "100", "metric": "38"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "16",
        "mslp": {"english": "29.85", "metric": "1011"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "11","mday_padded": "11","yday": "101","isdst": "0","epoch": "1460372400","pretty": "7:00 PM PHT on April 11, 2016","civil": "7:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "83", "metric": "28"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "25",
        "wspd": {"english": "5", "metric": "8"},
        "wdir": {"dir": "ENE", "degrees": "77"},
        "wx": "Mostly Clear",
        "uvi": "0",
        "humidity": "74",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "88", "metric": "31"},
        "feelslike": {"english": "88", "metric": "31"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "19",
        "mslp": {"english": "29.86", "metric": "1011"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "11","mday_padded": "11","yday": "101","isdst": "0","epoch": "1460376000","pretty": "8:00 PM PHT on April 11, 2016","civil": "8:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "82", "metric": "28"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "23",
        "wspd": {"english": "4", "metric": "6"},
        "wdir": {"dir": "ENE", "degrees": "79"},
        "wx": "Mostly Clear",
        "uvi": "0",
        "humidity": "77",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "88", "metric": "31"},
        "feelslike": {"english": "88", "metric": "31"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "21",
        "mslp": {"english": "29.87", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "11","mday_padded": "11","yday": "101","isdst": "0","epoch": "1460379600","pretty": "9:00 PM PHT on April 11, 2016","civil": "9:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "82", "metric": "28"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "21",
        "wspd": {"english": "1", "metric": "2"},
        "wdir": {"dir": "E", "degrees": "80"},
        "wx": "Mostly Clear",
        "uvi": "0",
        "humidity": "76",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "88", "metric": "31"},
        "feelslike": {"english": "88", "metric": "31"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.86", "metric": "1011"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "11","mday_padded": "11","yday": "101","isdst": "0","epoch": "1460383200","pretty": "10:00 PM PHT on April 11, 2016","civil": "10:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "80", "metric": "27"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "20",
        "wspd": {"english": "3", "metric": "5"},
        "wdir": {"dir": "ENE", "degrees": "73"},
        "wx": "Mostly Clear",
        "uvi": "0",
        "humidity": "81",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "85", "metric": "30"},
        "feelslike": {"english": "80", "metric": "27"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.86", "metric": "1011"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "11","mday_padded": "11","yday": "101","isdst": "0","epoch": "1460386800","pretty": "11:00 PM PHT on April 11, 2016","civil": "11:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Monday","weekday_name_night": "Monday Night","weekday_name_abbrev": "Mon","weekday_name_unlang": "Monday","weekday_name_night_unlang": "Monday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "80", "metric": "27"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "20",
        "wspd": {"english": "3", "metric": "5"},
        "wdir": {"dir": "ENE", "degrees": "64"},
        "wx": "Mostly Clear",
        "uvi": "0",
        "humidity": "83",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "85", "metric": "30"},
        "feelslike": {"english": "80", "metric": "27"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "7",
        "mslp": {"english": "29.86", "metric": "1011"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "12","mday_padded": "12","yday": "102","isdst": "0","epoch": "1460390400","pretty": "12:00 AM PHT on April 12, 2016","civil": "12:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "81", "metric": "27"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "20",
        "wspd": {"english": "0", "metric": "0"},
        "wdir": {"dir": "WNW", "degrees": "294"},
        "wx": "Mostly Clear",
        "uvi": "0",
        "humidity": "84",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "86", "metric": "30"},
        "feelslike": {"english": "86", "metric": "30"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "7",
        "mslp": {"english": "29.85", "metric": "1011"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "12","mday_padded": "12","yday": "102","isdst": "0","epoch": "1460394000","pretty": "1:00 AM PHT on April 12, 2016","civil": "1:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "79", "metric": "26"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "21",
        "wspd": {"english": "3", "metric": "5"},
        "wdir": {"dir": "NE", "degrees": "53"},
        "wx": "Mostly Clear",
        "uvi": "0",
        "humidity": "85",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "79", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "7",
        "mslp": {"english": "29.85", "metric": "1011"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "12","mday_padded": "12","yday": "102","isdst": "0","epoch": "1460397600","pretty": "2:00 AM PHT on April 12, 2016","civil": "2:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "78", "metric": "26"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "22",
        "wspd": {"english": "2", "metric": "3"},
        "wdir": {"dir": "NE", "degrees": "46"},
        "wx": "Mostly Clear",
        "uvi": "0",
        "humidity": "85",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "78", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "7",
        "mslp": {"english": "29.85", "metric": "1011"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "12","mday_padded": "12","yday": "102","isdst": "0","epoch": "1460401200","pretty": "3:00 AM PHT on April 12, 2016","civil": "3:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "79", "metric": "26"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "24",
        "wspd": {"english": "0", "metric": "0"},
        "wdir": {"dir": "NE", "degrees": "39"},
        "wx": "Mostly Clear",
        "uvi": "0",
        "humidity": "83",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "79", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "8",
        "mslp": {"english": "29.85", "metric": "1011"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "12","mday_padded": "12","yday": "102","isdst": "0","epoch": "1460404800","pretty": "4:00 AM PHT on April 12, 2016","civil": "4:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "78", "metric": "26"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "27",
        "wspd": {"english": "2", "metric": "3"},
        "wdir": {"dir": "NE", "degrees": "41"},
        "wx": "Mostly Clear",
        "uvi": "0",
        "humidity": "85",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "78", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "8",
        "mslp": {"english": "29.85", "metric": "1011"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "12","mday_padded": "12","yday": "102","isdst": "0","epoch": "1460408400","pretty": "5:00 AM PHT on April 12, 2016","civil": "5:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "78", "metric": "26"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "30",
        "wspd": {"english": "2", "metric": "3"},
        "wdir": {"dir": "NE", "degrees": "49"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "84",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "78", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "7",
        "mslp": {"english": "29.87", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "12","mday_padded": "12","yday": "102","isdst": "0","epoch": "1460412000","pretty": "6:00 AM PHT on April 12, 2016","civil": "6:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "79", "metric": "26"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "33",
        "wspd": {"english": "0", "metric": "0"},
        "wdir": {"dir": "NE", "degrees": "51"},
        "wx": "Partly Cloudy",
        "uvi": "0",
        "humidity": "85",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "-9999", "metric": "-9999"},
        "feelslike": {"english": "79", "metric": "26"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "7",
        "mslp": {"english": "29.88", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "12","mday_padded": "12","yday": "102","isdst": "0","epoch": "1460415600","pretty": "7:00 AM PHT on April 12, 2016","civil": "7:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "80", "metric": "27"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "36",
        "wspd": {"english": "3", "metric": "5"},
        "wdir": {"dir": "ENE", "degrees": "60"},
        "wx": "Partly Cloudy",
        "uvi": "1",
        "humidity": "79",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "85", "metric": "30"},
        "feelslike": {"english": "80", "metric": "27"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.89", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "12","mday_padded": "12","yday": "102","isdst": "0","epoch": "1460419200","pretty": "8:00 AM PHT on April 12, 2016","civil": "8:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "83", "metric": "28"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "39",
        "wspd": {"english": "4", "metric": "6"},
        "wdir": {"dir": "ENE", "degrees": "63"},
        "wx": "Partly Cloudy",
        "uvi": "3",
        "humidity": "71",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "88", "metric": "31"},
        "feelslike": {"english": "88", "metric": "31"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "6",
        "mslp": {"english": "29.9", "metric": "1013"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "12","mday_padded": "12","yday": "102","isdst": "0","epoch": "1460422800","pretty": "9:00 AM PHT on April 12, 2016","civil": "9:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "85", "metric": "29"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Chance of a Thunderstorm",
        "icon": "chancetstorms",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
        "fctcode": "14",
        "sky": "35",
        "wspd": {"english": "2", "metric": "3"},
        "wdir": {"dir": "ENE", "degrees": "62"},
        "wx": "Isolated Thunderstorms",
        "uvi": "6",
        "humidity": "69",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "91", "metric": "33"},
        "feelslike": {"english": "91", "metric": "33"},
        "qpf": {"english": "0.01", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "30",
        "mslp": {"english": "29.88", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "12","mday_padded": "12","yday": "102","isdst": "0","epoch": "1460426400","pretty": "10:00 AM PHT on April 12, 2016","civil": "10:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "88", "metric": "31"},
        "dewpoint": {"english": "73", "metric": "23"},
        "condition": "Chance of a Thunderstorm",
        "icon": "chancetstorms",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
        "fctcode": "14",
        "sky": "35",
        "wspd": {"english": "4", "metric": "6"},
        "wdir": {"dir": "ENE", "degrees": "57"},
        "wx": "Isolated Thunderstorms",
        "uvi": "10",
        "humidity": "63",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "96", "metric": "35"},
        "feelslike": {"english": "96", "metric": "35"},
        "qpf": {"english": "0.01", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "30",
        "mslp": {"english": "29.87", "metric": "1012"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "12","mday_padded": "12","yday": "102","isdst": "0","epoch": "1460430000","pretty": "11:00 AM PHT on April 12, 2016","civil": "11:00 AM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "89", "metric": "32"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "28",
        "wspd": {"english": "4", "metric": "6"},
        "wdir": {"dir": "ENE", "degrees": "59"},
        "wx": "Mostly Sunny",
        "uvi": "11",
        "humidity": "61",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "98", "metric": "37"},
        "feelslike": {"english": "98", "metric": "37"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "24",
        "mslp": {"english": "29.85", "metric": "1011"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "12","mday_padded": "12","yday": "102","isdst": "0","epoch": "1460433600","pretty": "12:00 PM PHT on April 12, 2016","civil": "12:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "89", "metric": "32"},
        "dewpoint": {"english": "77", "metric": "25"},
        "condition": "Clear",
        "icon": "clear",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
        "fctcode": "1",
        "sky": "29",
        "wspd": {"english": "0", "metric": "0"},
        "wdir": {"dir": "WSW", "degrees": "254"},
        "wx": "Mostly Sunny",
        "uvi": "11",
        "humidity": "68",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "102", "metric": "39"},
        "feelslike": {"english": "102", "metric": "39"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "24",
        "mslp": {"english": "29.84", "metric": "1011"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "12","mday_padded": "12","yday": "102","isdst": "0","epoch": "1460437200","pretty": "1:00 PM PHT on April 12, 2016","civil": "1:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "90", "metric": "32"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "30",
        "wspd": {"english": "4", "metric": "6"},
        "wdir": {"dir": "ENE", "degrees": "58"},
        "wx": "Partly Cloudy",
        "uvi": "11",
        "humidity": "60",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "98", "metric": "37"},
        "feelslike": {"english": "98", "metric": "37"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "24",
        "mslp": {"english": "29.83", "metric": "1010"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "12","mday_padded": "12","yday": "102","isdst": "0","epoch": "1460440800","pretty": "2:00 PM PHT on April 12, 2016","civil": "2:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "90", "metric": "32"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "fctcode": "2",
        "sky": "32",
        "wspd": {"english": "4", "metric": "6"},
        "wdir": {"dir": "ENE", "degrees": "60"},
        "wx": "Partly Cloudy",
        "uvi": "9",
        "humidity": "60",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "98", "metric": "37"},
        "feelslike": {"english": "98", "metric": "37"},
        "qpf": {"english": "0.0", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "24",
        "mslp": {"english": "29.82", "metric": "1010"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "12","mday_padded": "12","yday": "102","isdst": "0","epoch": "1460444400","pretty": "3:00 PM PHT on April 12, 2016","civil": "3:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "91", "metric": "33"},
        "dewpoint": {"english": "75", "metric": "24"},
        "condition": "Chance of a Thunderstorm",
        "icon": "chancetstorms",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
        "fctcode": "14",
        "sky": "50",
        "wspd": {"english": "1", "metric": "2"},
        "wdir": {"dir": "ENE", "degrees": "61"},
        "wx": "Scattered Thunderstorms",
        "uvi": "6",
        "humidity": "60",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "102", "metric": "39"},
        "feelslike": {"english": "102", "metric": "39"},
        "qpf": {"english": "0.01", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "40",
        "mslp": {"english": "29.82", "metric": "1010"}
        }
        ,
        {
        "FCTTIME": {
        "hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2016","mon": "4","mon_padded": "04","mon_abbrev": "Apr","mday": "12","mday_padded": "12","yday": "102","isdst": "0","epoch": "1460448000","pretty": "4:00 PM PHT on April 12, 2016","civil": "4:00 PM","month_name": "April","month_name_abbrev": "Apr","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
        },
        "temp": {"english": "88", "metric": "31"},
        "dewpoint": {"english": "74", "metric": "23"},
        "condition": "Chance of a Thunderstorm",
        "icon": "chancetstorms",
        "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
        "fctcode": "14",
        "sky": "50",
        "wspd": {"english": "3", "metric": "5"},
        "wdir": {"dir": "ENE", "degrees": "62"},
        "wx": "Scattered Thunderstorms",
        "uvi": "2",
        "humidity": "63",
        "windchill": {"english": "-9999", "metric": "-9999"},
        "heatindex": {"english": "96", "metric": "35"},
        "feelslike": {"english": "96", "metric": "35"},
        "qpf": {"english": "0.01", "metric": "0"},
        "snow": {"english": "0.0", "metric": "0"},
        "pop": "41",
        "mslp": {"english": "29.83", "metric": "1010"}
        }
      ]
    }

    return data;
  }
}