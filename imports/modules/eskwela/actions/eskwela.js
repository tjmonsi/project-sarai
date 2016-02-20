export default {

  getPreferredMediaData() {
    return {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Preferred Media'
      },
      subtitle: {
        text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
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
          text: 'Population (millions)'
        }
      },
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: 'Population in 2008: <b>{point.y:.1f} millions</b>'
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
    };
  },

  getLessons() {
    return [
      {
        img: '/images/lessons/stages-of-corn-plant-development.jpg',
        title: 'Stages of Corn Plant Development',
        text: 'Corn/Crop',
        link: ''
      },
      {
        img: '/images/lessons/irrigation.jpg',
        title: 'Irrigated Farming Practices',
        text: 'Corn/Crop',
        link: ''
      },
      {
        img: '/images/lessons/Banded-Leaf-and-Sheath-Blight.png',
        title: 'Disease Identification in Perennials',
        text: 'Corn/Crop',
        link: ''
      }
    ];
  }
};
