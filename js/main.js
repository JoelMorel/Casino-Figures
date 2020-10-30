const ctx = document.getElementById("testChart");

// Global Options
Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.animation.onComplete = () => {
  Chart.defaults;
};

createChart();

async function createChart() {
  const data = await getData();
  let myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: data.xLabels,
      datasets: [
        {
          label: "2018 Payout %",
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

  const response = await fetch("/AC Slot Machine Data 2018 - Sheet1.csv");
  const data = await response.text();

  const table = data.split("\n").slice(1);
  table.forEach((row) => {
    const column = row.split(",");
    const casino = column[0];
    const payoutPercentage = column[1];

    xLabels.push(casino);
    yLabels.push(100 - parseFloat(payoutPercentage));
  });
  return { xLabels, yLabels };
}

// const payoutSlotMachine1Cents = column[1];
// const payoutSlotMachine5Cents = column[2];
// const payoutSlotMachine25Cents = column[3];
// const payoutSlotMachine50Cents = column[4];
// const payoutSlotMachine1Dollar = column[5];
// const payoutSlotMachine5Dollar = column[6];
// const payoutSlotMachine25Dollar = column[7];
// const payoutSlotMachine50Dollar = column[8];
// const payoutSlotMachine100Dollar = column[9];
// const payoutSlotMachineMulti = column[10];
// const payoutSlotMachineOther = column[11];
