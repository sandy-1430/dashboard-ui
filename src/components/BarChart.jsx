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
    <div className="card">
      <div className="card-header d-flex">
        <div className='card-header-left d-flex align_center'>
          <h4 className='card-title'>Application’s  Info</h4>
          <div className="legend d-flex align_center">
            <div className="d-flex legend-item align_center">
              <div className="bar-legend"></div>
              <p>Received</p>
            </div>
            <div className="d-flex align_center legend-item align_center">
              <div className="line-legend"></div>
              <p>Processed</p>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <select>
            <option value="month">Month</option>
            <option value="year">Year</option>
          </select>
        </div>
      </div>
      <div className="card-body">
        <Chart
          options={options}
          series={series}
          type="bar"
          width="100%"
          height="100%"
        />
      </div>
    </div>

  )
}
