import Chart from "react-apexcharts";

export default function BarChart() {
  let options = {
    chart: {
      height: 350,
      type: 'line',
      toolbar: {
        show: false
      },
    },
    stroke: {
      width: [0, 4]
    },
    dataLabels: {
      enabled: false,
      enabledOnSeries: [1]
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    yaxis: [{
      show: true,  
      labels: {
        formatter: function (value) {
          return value;
        }
      },    
    }, {
      show: false,
    }],
    colors: ["#277ACC", "#002B55BD"],
    grid: {
      show: false
    },
    legend: {
      show: false
    }
  }

  let series = [{
    name: 'Website Blog',
    type: 'column',
    data: [1000, 2000, 3000, 4000, 1000, 2000, 3000, 4000, 1000, 2000, 3000, 4000,]
  }, {
    name: 'Social Media',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
  }]

  return (
    <Chart
        options={options}
        series={series}
        type="bar"
        width="100%"
        height="100%"
      />
  )
}
