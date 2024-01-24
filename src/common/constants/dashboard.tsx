// ################### Graph options for Tax Claims Stats ###################
export const optionsForTaxClainmsChart = {
  title: {
    text: "66%",
    subtext: "Total",
    left: "center",
    top: "45%",
    padding: 0,

    textStyle: {
      fontFamily: "Source Sans Pro",
      fontWeight: 700,
      fontSize: 20,
      padding: 0,
      minMargin: 0,
      color: "#044348",
    },
    subtextStyle: {
      fontFamily: "Source Sans Pro",
      //   fontStyle: "normal",
      fontWeight: 600,
      fontSize: 14,
      padding: 0,
      minMargin: 0,
      color: "#828282",
    },
  },
  angleAxis: {
    max: 100,
    startAngle: -270,
    show: false,
  },
  radiusAxis: {
    type: "category",
    data: ["1"],
    z: 10,
    show: false,
  },
  polar: {},
  series: [
    {
      type: "bar",
      data: [100],
      coordinateSystem: "polar",
      name: "Qualification",
      roundCap: true,
      barWidth: 7,
      color: "#17884D",
      showBackground: true,
      backgroundStyle: {
        color: "#343a4014",
      },
    },
    {
      type: "bar",
      data: [100],
      coordinateSystem: "polar",
      name: "Company",
      roundCap: true,
      barWidth: 7,
      barGap: 1.2,
      color: "#FF8A43",
      showBackground: true,
      backgroundStyle: {
        color: "#343a4014",
      },
    },
    {
      type: "bar",
      data: [40],
      coordinateSystem: "polar",
      name: "Project",
      roundCap: true,
      barWidth: 7,
      color: "#00A9BE",
      showBackground: true,
      backgroundStyle: {
        color: "#343a4014",
      },
    },
    {
      type: "bar",
      data: [5],
      coordinateSystem: "polar",
      name: "Cost",
      roundCap: true,
      barWidth: 7,
      color: "#6A346C",
      showBackground: true,
      backgroundStyle: {
        color: "#343a4014",
      },
    },
  ],
};

export const optionsForAdminDevices = {
  tooltip: {
    show: false,
  },
  legend: {
    show: false,
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["45%", "60%"],
      data: [
        { value: 1200, name: "4.261" },
        { value: 200, name: "" },
        { value: 800, name: "" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
      label: {
        show: true,
        position: "center",
        fontSize: 36,
        fontWeight: 700,
        color: "#464E5F",
      },
      color: ["#FF8A43", "#00A9BE", "#6A346C"],
    },
  ],
};

export const gaugeDataForAdminAvailableSpace = [
  {
    value: 60,
    name: "1 Tb",
    title: {
      offsetCenter: ["0%", "0%"],
    },
  },
];
export const optionsForAdminAvailableSpace = {
  series: [
    {
      type: "gauge",
      startAngle: 90,
      endAngle: -270,
      pointer: {
        show: false,
      },
      progress: {
        show: true,
        overlap: false,
        roundCap: true,
        clip: false,
        itemStyle: {
          borderWidth: 1,
          borderColor: "#34BC85",
        },
      },
      color: ["#34BC85"],
      axisLine: {
        lineStyle: {
          width: 20,
        },
      },
      splitLine: {
        show: false,
        distance: 0,
        length: 10,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
        distance: 50,
      },
      data: gaugeDataForAdminAvailableSpace,
      title: {
        fontSize: 36,
        fontWeight: 700,
        color: "#464E5F",
      },
      detail: {
        show: false,
      },
    },
  ],
};
