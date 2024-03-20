import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import dataLists from "../data/data.json";

ChartJS.register(CategoryScale, LinearScale, BarElement);

export const options = {
  responsive: true,
  plugins: {
    legend: false,
    border: false,
    tooltip: {
      callbacks: {
        title: (data) => "$" + data[0].formattedValue,
        label: () => "",
      },
      backgroundColor: "hsl(25, 47%, 15%)",
      yAlign: "bottom",
    },
  },
};

const labels = dataLists.map((data) => {
  return data.day;
});

export const data = {
  labels,
  datasets: [
    {
      data: dataLists.map(({ amount }) => {
        return amount;
      }),
      backgroundColor: "hsl(10, 79%, 65%)",
      hoverBackgroundColor: "hsl(186, 34%, 60%)",
      borderRadius: "5",
    },
  ],
};

export default function Chart() {
  return <Bar options={options} data={data} />;
}
