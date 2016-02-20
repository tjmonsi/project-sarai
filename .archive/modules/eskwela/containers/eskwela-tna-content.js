import React from 'react';
import {SectionList} from '/client/modules/ui-components';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';
import EskwelaRootBanner from './eskwela-root-banner';
import HighChart from './../components/high-chart.jsx';
import EskwelaHeader from './../components/eskwela-header.jsx';
import EskwelaList from './../components/eskwela-list.jsx';

const composerLandingPage = ({context, action}, onData) => {
  const sections = [];
  const spacing = false;

  sections.push(React.createElement(EskwelaRootBanner, {
    banner: '/images/eskwela/eskwela_banner.jpg'
  }));


  sections.push(React.createElement(EskwelaHeader, {
    headerText: 'Diagnosis of the communities\' learning needs and development of leaning framework (TNA)'
  }));

  sections.push(React.createElement(HighChart, {
    id: 'training-needs-by-location',
    chartData: {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Training Needs'
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: 'Respondents'
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y}'
          }
        }
      },

      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>'
      },

      series: [{
        name: 'Crops',
        colorByPoint: true,
        tooltip: {
          pointFormat: '{point.y} respondents need training for {point.name}',
        },
        data: [{
          name: 'Rice',
          y: 487,
          drilldown: 'rice'
        }, {
          name: 'Corn',
          y: 273,
          drilldown: 'corn'
        }, {
          name: 'Banana',
          y: 166,
          drilldown: 'banana'
        }, {
          name: 'Coconut',
          y: 183,
          drilldown: 'coconut'
        }, {
          name: 'Coffee',
          y: 99,
          drilldown: 'coffee'
        }]
      }],
      drilldown: {
        series: [{
          name: 'Rice',
          id: 'rice',
          tooltip: {
            pointFormat: '{point.y} respondents in {point.name} need training for Rice',
          },
          data: [
            [
              'CLSU',
              118
            ],
            [
              'ISU',
              118
            ],
            [
              'BUCAF',
              70
            ],
            [
              'MinSCAT',
              70
            ],
            [
              'WPU',
              0
            ],
            [
              'Bataan',
              0
            ],
            [
              'Tiaong',
              0
            ],
            [
              'UEP',
              35
            ],
            [
              'Cebu',
              0
            ],
            [
              'WVSU',
              76
            ]
          ]
        }, {
          name: 'Corn',
          id: 'corn',
          tooltip: {
            pointFormat: '{point.y} respondents in {point.name} need training for Corn',
          },
          data: [
            [
              'CLSU',
              76
            ],
            [
              'ISU',
              47
            ],
            [
              'BUCAF',
              73
            ],
            [
              'MinSCAT',
              0
            ],
            [
              'WPU',
              0
            ],
            [
              'Bataan',
              0
            ],
            [
              'Tiaong',
              0
            ],
            [
              'UEP',
              0
            ],
            [
              'Cebu',
              77
            ],
            [
              'WVSU',
              0
            ]
          ]
        }, {
          name: 'Banana',
          id: 'banana',
          tooltip: {
            pointFormat: '{point.y} respondents in {point.name} need training for Banana',
          },
          data: [
            [
              'CLSU',
              0
            ],
            [
              'ISU',
              56
            ],
            [
              'BUCAF',
              0
            ],
            [
              'MinSCAT',
              40
            ],
            [
              'WPU',
              70
            ],
            [
              'Bataan',
              0
            ],
            [
              'Tiaong',
              0
            ],
            [
              'UEP',
              0
            ],
            [
              'Cebu',
              0
            ],
            [
              'WVSU',
              0
            ]
          ]
        }, {
          name: 'Coconut',
          id: 'coconut',
          tooltip: {
            pointFormat: '{point.y} respondents in {point.name} need training for Coconut',
          },
          data: [
            [
              'CLSU',
              0
            ],
            [
              'ISU',
              0
            ],
            [
              'BUCAF',
              0
            ],
            [
              'MinSCAT',
              0
            ],
            [
              'WPU',
              110
            ],
            [
              'Bataan',
              0
            ],
            [
              'Tiaong',
              0
            ],
            [
              'UEP',
              73
            ],
            [
              'Cebu',
              0
            ],
            [
              'WVSU',
              0
            ]
          ]
        }, {
          name: 'Coffee',
          id: 'coffee',
          tooltip: {
            pointFormat: '{point.y} respondents in {point.name} need training for Coffee',
          },
          data: [
            [
              'CLSU',
              0
            ],
            [
              'ISU',
              0
            ],
            [
              'BUCAF',
              0
            ],
            [
              'MinSCAT',
              0
            ],
            [
              'WPU',
              0
            ],
            [
              'Bataan',
              18
            ],
            [
              'Tiaong',
              81
            ],
            [
              'UEP',
              0
            ],
            [
              'Cebu',
              0
            ],
            [
              'WVSU',
              0
            ]
          ]
        }]
      }
    }
  }));

  sections.push(React.createElement(EskwelaList, {
    listItems: [
      'A total of 1,208 farmers  and 50 partners were surveyed with regard to their training needs.'
    ]
  }));

  sections.push(React.createElement(EskwelaHeader, {
    headerText: 'Communication and Media Sources'
  }));

  sections.push(React.createElement(HighChart, {
    id: 'available-media',
    chartData: {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Available Communications Media'
      },
      xAxis: {
        type: 'category',
        labels: {
          rotation: -45,
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Percentage of Respondents'
        },
        labels: {
          formatter: () => {
            return `${this.value} %`;
          }
        }
      },
      legend: {
        enabled: false
      },
      tooltip: {
        formatter: () => {
          return `${this.y}% of respondents have access to ${this.key}`;
        }
      },
      series: [{
        name: 'Population',
        data: [
          ['TV', 51],
          ['Radio', 30],
          ['Internet', 7],
          ['Newspapers', 4],
          ['Leaflets', 4],
          ['Posters', 3]
        ],
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: '#FFFFFF',
          align: 'right',
          format: '{point.y:.1f}', // one decimal
          y: 10, // 10 pixels down from the top
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      }]
    }
  }));

  sections.push(React.createElement(HighChart, {
    id: 'current-avenues',
    chartData: {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Preferred Media'
      },
      xAxis: {
        type: 'category',
        labels: {
          rotation: -45,
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Percentage of Respondents'
        },
        labels: {
          formatter: () => {
            return `${this.value} %`;
          }
        }
      },
      legend: {
        enabled: false
      },
      tooltip: {
        formatter: () => {
          return `${this.y}% of respondents prefer ${this.key}`;
        }
      },
      series: [{
        name: 'Population',
        data: [
          ['TV', 29],
          ['', 12],
          ['Internet', 5],
          ['', 1],
          ['Leaflet', 2],
          ['', 1],
          ['On-site Training', 51]
        ],
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: '#FFFFFF',
          align: 'right',
          format: '{point.y:.1f}', // one decimal
          y: 10, // 10 pixels down from the top
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      }]
    }
  }));

  sections.push(React.createElement(HighChart, {
    id: 'preferred-media',
    chartData: {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Current Avenues for Agri-Related Information'
      },
      xAxis: {
        type: 'category',
        labels: {
          rotation: -45,
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Percentage of Respondents'
        },
        labels: {
          formatter: () => {
            return `${this.value} %`;
          }
        }
      },
      legend: {
        enabled: false
      },
      tooltip: {
        formatter: () => {
          return `${this.y}% of respondents rely on ${this.key} for other agri-related information`;
        }
      },
      series: [{
        name: 'Population',
        data: [
          ['TV', 29],
          ['Radio', 14],
          ['Internet', 3],
          ['Government', 11],
          ['Commercial Seed and Fertilizer Company', 13],
          ['Other Farmers', 29],
          ['Relatives', 2]
        ],
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: '#FFFFFF',
          align: 'right',
          format: '{point.y:.1f}', // one decimal
          y: 10, // 10 pixels down from the top
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      }]
    }
  }));

  sections.push(React.createElement(EskwelaHeader, {
    headerText: 'Knowledge on Climate Change'
  }));

  sections.push(React.createElement(HighChart, {
    id: 'perceived-effects',
    chartData: {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Effect of Climate Change as Perceieved By Farmers'
      },
      xAxis: {
        type: 'category',
        labels: {
          rotation: -45,
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Percentage of Respondents'
        },
        labels: {
          formatter: () => {
            return `${this.value} %`;
          }
        }
      },
      legend: {
        enabled: false
      },
      tooltip: {
        // formatter:() => {
        //     return `${this.y}% of respondents have access to ${this.key}` ;
        // }
      },
      series: [{
        name: 'Population',
        data: [
          ['sobrang init', 33],
          ['', 4],
          ['', 9],
          ['biglaang ulan/bagyo', 9],
          ['', 4],
          ['', 6],
          ['nakaksira ng pananim', 27],
          ['', 4],
          ['', 4]

        ],
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: '#FFFFFF',
          align: 'right',
          format: '{point.y:.1f}', // one decimal
          y: 10, // 10 pixels down from the top
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      }]
    }
  }));

  sections.push(React.createElement(HighChart, {
    id: 'adaptation',
    chartData: {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Adaptation of Farmers to Climate Change'
      },
      tooltip: {
        formatter: () => {
          return `${this.y}% ng mga magsasakay ay ${this.key}`;
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true
          },
          showInLegend: true
        }
      },
      series: [{
        colorByPoint: true,
        data: [{
          name: 'Nagtutulungan',
          y: 7
        }, {
          name: 'Nagpupulong',
          y: 9,
          sliced: true,
          selected: true
        }, {
          name: 'Gumagawa ng kanal',
          y: 5
        }, {
          name: 'Walang ginagawa',
          y: 81
        }]
      }]
    }
  }));

  sections.push(React.createElement(EskwelaHeader, {
    headerText: 'Pest and Diseases'
  }));


  sections.push(React.createElement(HighChart, {
    id: 'pest-control',
    chartData: {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Controls'
      },
      tooltip: {
        formatter: () => {
          return `${this.y}% of respondents rely on ${this.key}`;
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true
          },
          showInLegend: true
        }
      },
      series: [{
        colorByPoint: true,
        data: [{
          name: 'Chemical Sprays',
          y: 74
        }, {
          name: 'Nothing',
          y: 25,
          sliced: true,
          selected: true
        }, {
          name: 'Catching and Killing the Pests',
          y: 0.5
        }, {
          name: 'Integrated Pest Management',
          y: 0.5
        }]
      }]
    }
  }));

  sections.push(React.createElement(EskwelaList, {
    listItems: [
      'Almost 64% of farmers are aware of what climate change is.',
      'Other answers (remaining 46%) are: Climate change is \"Pag-aabono\", \"Proyekto ng gobyerno.\"',
      '81% of farmers reported doing nothing to counteract climate change.'
    ]
  }));

  sections.push(React.createElement(HighChart, {
    id: 'mindoro',
    chartData: {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Mindoro'
      },
      xAxis: {
        type: 'category',
        labels: {
          rotation: -45,
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Percentage of Respondents'
        },
        labels: {
          formatter: () => {
            return `${this.value} %`;
          }
        }
      },
      legend: {
        enabled: false
      },
      tooltip: {
        formatter: () => {
          return `${this.y}% of respondents in Mindoro experience problems with ${this.key}`;
        }
      },
      series: [{
        name: 'Population',
        data: [
          ['Blackbug', 29],
          ['', 17],
          ['Tungro', 13],
          ['', 15],
          ['Rodents', 10],
          ['', 8],
          ['Kuhol', 4],
          ['', 2],
          ['Harabas', 2]
        ],
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: '#FFFFFF',
          align: 'right',
          format: '{point.y:.1f}', // one decimal
          y: 10, // 10 pixels down from the top
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      }]
    }
  }));

  sections.push(React.createElement(HighChart, {
    id: 'nueva-ecija',
    chartData: {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Nueva Ecija'
      },
      xAxis: {
        type: 'category',
        labels: {
          rotation: -45,
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Percentage of Respondents'
        },
        labels: {
          formatter: () => {
            return `${this.value} %`;
          }
        }
      },
      legend: {
        enabled: false
      },
      tooltip: {
        formatter: () => {
          return `${this.y}% of respondents in Nueva Ecija experience problems with ${this.key}`;
        }
      },
      series: [{
        data: [
          ['Rice Black Bug', 4],
          ['', 1],
          ['Stem Borer', 43],
          ['', 5],
          ['Bukaw', 19],
          ['', 1],
          ['Rodents', 4],
          ['', 12],
          ['Kuhol', 5],
          ['', 2],
          ['Hanip', 1],
          ['', 3]
        ],
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: '#FFFFFF',
          align: 'right',
          format: '{point.y:.1f}', // one decimal
          y: 10, // 10 pixels down from the top
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      }]
    }
  }));

  sections.push(React.createElement(EskwelaList, {
    listItems: [
      'Black bugs are the top pest in Mindoro',
      'Stem borers are the top pest in Nueva Ecija',
      'The use of chemical pesticides is the primary pest control measure in these areas.'
    ]
  }));

  sections.push(React.createElement(EskwelaHeader, {
    headerText: 'Training Needs'
  }));

  sections.push(React.createElement(HighChart, {
    id: 'training-needs',
    chartData: {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Priorities in Training Needs'
      },
      xAxis: {
        type: 'category',
        labels: {
          rotation: -45,
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Percentage of Respondents'
        },
        labels: {
          formatter: () => {
            return `${this.value} %`;
          }
        }
      },
      legend: {
        enabled: false
      },
      tooltip: {
        // formatter:() => {
        //     return `${this.y}% of respondents in Nueva Ecija experience
        // problems with ${this.key}`;
        // }
      },
      series: [{
        data: [
          ['Technology-based Smarter Agriculture', 20],
          ['Effective Agri Practice', 23],
          ['Pest and Disease Management', 32],
          ['Nutrient Management', 18],
          ['Water Management', 7]
        ],
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: '#FFFFFF',
          align: 'right',
          format: '{point.y:.1f}', // one decimal
          y: 10, // 10 pixels down from the top
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      }]
    }
  }));

  sections.push(React.createElement(EskwelaList, {
    listItems: [
      'Pest and Diseases, Smarter Agriculture, and Effective Agricultural Practices are the priority areas for training.',
      'The preferred language is local/Filipino'
    ]
  }));

  onData(null, {sections, spacing});
};

export default composeAll(
  composeWithTracker(composerLandingPage),
  useDeps()
)(SectionList);
