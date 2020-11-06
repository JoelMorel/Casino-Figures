const pennySlots = document.getElementById("pennySlots");
const nickleSlots = document.getElementById("nickleSlots");
const quaterSlots = document.getElementById("quaterSlots");

// Global Options
Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.animation.onComplete = () => {
  Chart.defaults;
};

createChart();

async function createChart() {
  const data = await getData();
  let myChart = new Chart(pennySlots, {
    type: "bar",
    data: {
      labels: data.xLabels,
      datasets: [
        {
          label: data.tempLabel,
          data: data.yLabels,
          borderWidth: 1,
        },
      ],
    },
    options: {
      animation: {
        // animateScale: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: false,
            },
          },
        ],
      },
    },
  });
}

async function getData() {
  const xLabels = [];
  const yLabels = [];
  var tempLabel;

  const response = await fetch(
    "../assets/data/AC Slot Machine Data 2018 - Sheet1.csv"
  );
  const data = await response.text();

  const table = data.split("\n").slice(1);
  table.forEach((row) => {
    const column = row.split(",");
    const casino = column[0];
    const payoutPercentage = column[1];

    tempLabel = "get title from chart!";
    xLabels.push(casino);
    yLabels.push(100 - parseFloat(payoutPercentage));
  });
  return { xLabels, yLabels, tempLabel };
}
