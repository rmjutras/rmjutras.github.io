// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

var data_in = JSON.parse("{\"customerDetail\":{\"customer_id\":6,\"address\":\"576 Main St, MainTown, NC, 12345\",\"phone_number\":\"111-576-4567\",\"email_address\":\"meter7.customer1@domain.com\",\"contact_preference\":\"email\"},\"billingHistory\":{\"bill_last_month\":\"$151.96\",\"bill_last_month_date\":\"2019-09-16\",\"last_bill_rate_tier\":\"Rate Tier 2\",\"consumption_last_month\":9220.00,\"predicted_bill\":\"$23.10\",\"predicted_consumption\":1221.13,\"predicted_bill_rate_tier\":\"Rate Tier 1\"},\"consumptionHistoryList\":[{\"consumption_date\":\"2019-08-21\",\"consumption\":360.00,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-08-22\",\"consumption\":360.00,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-08-23\",\"consumption\":360.00,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-08-24\",\"consumption\":340.00,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-08-25\",\"consumption\":350.00,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-08-26\",\"consumption\":340.00,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-08-27\",\"consumption\":340.00,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-08-28\",\"consumption\":340.00,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-08-29\",\"consumption\":330.00,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-08-30\",\"consumption\":320.00,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-08-31\",\"consumption\":330.00,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-01\",\"consumption\":320.00,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-02\",\"consumption\":320.00,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-03\",\"consumption\":320.00,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-04\",\"consumption\":320.00,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-05\",\"consumption\":320.00,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-06\",\"consumption\":310.00,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-07\",\"consumption\":310.00,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-08\",\"consumption\":310.00,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-09\",\"consumption\":300.00,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-10\",\"consumption\":310.00,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-11\",\"consumption\":340.00,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-12\",\"consumption\":400.00,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-13\",\"consumption\":370.00,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-14\",\"consumption\":350.00,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-15\",\"consumption\":360.00,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-16\",\"consumption\":380.00,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-17\",\"consumption\":35.20,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-18\",\"consumption\":37.33,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-19\",\"consumption\":40.29,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-20\",\"consumption\":35.72,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-21\",\"consumption\":34.18,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-22\",\"consumption\":30.44,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-23\",\"consumption\":41.85,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-24\",\"consumption\":41.21,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-25\",\"consumption\":37.89,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-26\",\"consumption\":32.73,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-27\",\"consumption\":37.08,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-28\",\"consumption\":32.73,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-29\",\"consumption\":41.88,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-30\",\"consumption\":46.41,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-10-01\",\"consumption\":42.40,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-10-02\",\"consumption\":36.22,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-10-03\",\"consumption\":30.41,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-10-04\",\"consumption\":36.24,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-10-05\",\"consumption\":42.29,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-10-06\",\"consumption\":55.45,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-10-07\",\"consumption\":44.18,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-10-08\",\"consumption\":39.33,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-10-09\",\"consumption\":45.66,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-10-10\",\"consumption\":45.01,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-10-11\",\"consumption\":51.05,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-10-12\",\"consumption\":37.99,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-10-13\",\"consumption\":46.30,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-10-14\",\"consumption\":62.10,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-10-15\",\"consumption\":35.61,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-10-16\",\"consumption\":46.10,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null}]}");

document.getElementById("customer_id").innerHTML = data_in.customerDetail.customer_id;
document.getElementById("street_address").innerHTML = data_in.customerDetail.address;
document.getElementById("phone_number").innerHTML = data_in.customerDetail.phone_number;
document.getElementById("email_address").innerHTML = data_in.customerDetail.email_address;

document.getElementById("bill_last_month").innerHTML = data_in.billingHistory.bill_last_month;
document.getElementById("predicted_bill").innerHTML = data_in.billingHistory.predicted_bill;
document.getElementById("last_bill_rate_tier").innerHTML = data_in.billingHistory.last_bill_rate_tier;
document.getElementById("predicted_bill_rate_tier").innerHTML = data_in.billingHistory.predicted_bill_rate_tier;

function getDatesJSON(json) {
  var dateLabels = [];
  for (var i = 0; i < json.consumptionHistoryList.length; i++) { 
      dateLabels.push(json.consumptionHistoryList[i].consumption_date);
  }
  return dateLabels;
}

function getConsumptionJSON(json) {
  var consumption = [];
  for (var i = 0; i < json.consumptionHistoryList.length; i++) { 
      consumption.push(json.consumptionHistoryList[i].consumption);
  }
  return consumption;
}

function getPredictedJSON(json) {
  var predicted = [];
  for (var i = 0; i < json.consumptionHistoryList.length; i++) { 
      predicted.push(json.consumptionHistoryList[i].is_Predicted);
  }
  return predicted;
}

function getErrorLoJSON(json) {
  var consumption = [];
  for (var i = 0; i < json.consumptionHistoryList.length; i++) { 
      consumption.push(json.consumptionHistoryList[i].usage_error_lo);
  }
  return consumption;
}

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var pointBackgroundColors = [];
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: getDatesJSON(data_in),
    datasets: [{
      label: "Consumption",
      lineTension: 0.3,
      backgroundColor: "rgba(78, 115, 223, 0.1)",
      borderColor: "rgba(211, 211, 211, 0.8)",
      pointRadius: 5,
      pointBackgroundColor: pointBackgroundColors,
      pointBorderColor: pointBackgroundColors,
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: getConsumptionJSON(data_in),
    },
    {
      label: "Consumption",
      lineTension: 0.3,
      backgroundColor: "rgba(78, 115, 223, 0.1)",
      borderColor: "rgba(211, 211, 211, 0.8)",
      pointRadius: 5,
      pointBackgroundColor: pointBackgroundColors,
      pointBorderColor: pointBackgroundColors,
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: getErrorLoJSON(data_in), 
    }
  ],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include gal in the ticks
          callback: function(value, index, values) {
            return number_format(value) + ' gal';
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': $' + number_format(tooltipItem.yLabel);
        }
      }
    }
  }
});


for (i = 0; i < myLineChart.data.datasets[0].data.length; i++) {
  var predicted = getPredictedJSON(data_in);
  if (predicted[i]) {
      pointBackgroundColors.push("#1cc88a");
  } else {
      pointBackgroundColors.push("#4e73df");
  }
}

myLineChart.update();
