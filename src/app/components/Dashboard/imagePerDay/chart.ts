import theme from "../../../theme";
import { ChartData as ChartJsData, ChartOptions } from "chart.js";
import { ChartData } from "react-chartjs-2";
import moment from "moment";

let current_date = moment().format("DD-MM-YYYY")



export const data = {
  labels: [moment().subtract(6, 'days').format("DD-MM-YYYY"),moment().subtract(5, 'days').format("DD-MM-YYYY"), moment().subtract(4, 'days').format("DD-MM-YYYY"), moment().subtract(3, 'days').format("DD-MM-YYYY"), moment().subtract(2, 'days').format("DD-MM-YYYY"),moment().subtract(1, 'days').format("DD-MM-YYYY") , current_date],
  datasets: [
    {
      label: "Images",
      backgroundColor: theme.palette.primary.main,
      data: [18, 5, 19, 27, 29, 19, 20],
      barThickness: 12,
      maxBarThickness: 10,
      barPercentage: 0.5,
      categoryPercentage: 0.5,
    },
 
  ]
} as ChartData<ChartJsData>;

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  legend: { display: false },
  cornerRadius: 20,
  tooltips: {
    enabled: true,
    mode: "index",
    intersect: false,
    borderWidth: 1,
    borderColor: theme.palette.divider,
    backgroundColor: theme.palette.white,
    titleFontColor: theme.palette.text.primary,
    bodyFontColor: theme.palette.text.secondary,
    footerFontColor: theme.palette.text.secondary
  },
  layout: { padding: 0 },
  scales: {
    xAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary,
          beginAtZero: true,
          min: 0
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: 2,
          color: theme.palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: 2,
          zeroLineColor: theme.palette.divider
        }
      }
    ]
  }
} as ChartOptions;
