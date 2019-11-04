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

var data_in = JSON.parse("{\"customerDetail\":{\"customer_id\":1,\"address\":\"101 Main St, MainTown, NC, 12345\",\"phone_number\":\"111-101-4567\",\"email_address\":\"meter0.customer1@domain.com\",\"contact_preference\":\"email\"},\"billingHistory\":{\"bill_last_month\":94.540,\"bill_last_month_date\":\"2019-09-14\",\"consumption_last_month\":6030.000,\"predicted_bill\":161.9888013399999999715335863001616,\"predicted_consumption\":9777.1556299999999984185325722312,\"rate_tier\":2},\"consumptionHistoryList\":[{\"consumption_date\":\"2019-08-16\",\"consumption\":0,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-08-17\",\"consumption\":0,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-08-18\",\"consumption\":740,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-08-19\",\"consumption\":0,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-08-20\",\"consumption\":730,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-08-21\",\"consumption\":0,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-08-22\",\"consumption\":0,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-08-23\",\"consumption\":0,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-08-24\",\"consumption\":0,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-08-25\",\"consumption\":740,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-08-26\",\"consumption\":0,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-08-27\",\"consumption\":790,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-08-28\",\"consumption\":0,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-08-29\",\"consumption\":70,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-08-30\",\"consumption\":0,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-08-31\",\"consumption\":0,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-01\",\"consumption\":730,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-02\",\"consumption\":0,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-03\",\"consumption\":0,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-04\",\"consumption\":0,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-05\",\"consumption\":0,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-06\",\"consumption\":0,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-07\",\"consumption\":0,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-08\",\"consumption\":740,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-09\",\"consumption\":0,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-10\",\"consumption\":750,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-11\",\"consumption\":0,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-12\",\"consumption\":740,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-13\",\"consumption\":0,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-14\",\"consumption\":0,\"is_Predicted\":false,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-15\",\"consumption\":486.833679999999999949498278836,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-16\",\"consumption\":279.8547399999999999478470603182,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-17\",\"consumption\":298.254529999999999945590334212,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-18\",\"consumption\":364.4484799999999999486744779759,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-19\",\"consumption\":286.4279899999999999463296663798,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-20\",\"consumption\":341.974389999999999947545601055,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-21\",\"consumption\":315.2292799999999999472239716375,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-22\",\"consumption\":320.656699999999999947062112394,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-23\",\"consumption\":325.9665599999999999473675725129,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-24\",\"consumption\":318.0707299999999999471097234803,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-25\",\"consumption\":324.2676999999999999472573000409,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-26\",\"consumption\":320.9489299999999999472071159092,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-27\",\"consumption\":321.9106899999999999471993702543,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-28\",\"consumption\":322.2630099999999999472284135714,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-29\",\"consumption\":321.4898099999999999472008760995,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-09-30\",\"consumption\":322.1661099999999999472181557719,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-10-01\",\"consumption\":321.7672599999999999472111897224,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-10-02\",\"consumption\":321.9112199999999999472114410032,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-10-03\",\"consumption\":321.9233799999999999472140610604,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-10-04\",\"consumption\":321.850789999999999947211168913,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-10-05\",\"consumption\":321.9229499999999999472131674493,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-10-06\",\"consumption\":321.8762899999999999472122010873,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-10-07\",\"consumption\":321.8960099999999999472123846813,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-10-08\",\"consumption\":321.8943599999999999472125672746,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-10-09\",\"consumption\":321.8879499999999999472123431859,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-10-10\",\"consumption\":321.8954699999999999472124980466,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-10-11\",\"consumption\":321.8901199999999999472123550631,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-10-12\",\"consumption\":321.8926799999999999472124100770,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-10-13\",\"consumption\":321.8921699999999999472124327649,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null},{\"consumption_date\":\"2019-10-14\",\"consumption\":321.8916499999999999472123214534,\"is_Predicted\":true,\"usage_error_high\":null,\"usage_error_lo\":null}]}");


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
