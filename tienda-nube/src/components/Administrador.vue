<template>
  <div>
    <Bar :data="data" :options="optionsPrincipal" />
    <Bar :data="dataMenosVendidos" :options="optionsMenosVendidos" />
    <Bar :data="dataMesMenosVentas" :options="optionsMesMenosVentas" />
    <Bar :data="dataMesMasVentas" :options="optionsMesMasVentas" />
  </div>
</template>
  
  <script setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";
import { products } from "../products";
import { onMounted, ref } from "vue";
import { GoogleSheets } from "../connectionWithGoogle";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const date = { date: { month: 5, year: 2023 } };
const data = ref({ labels: ["", "", ""], datasets: [{ data: [0, 0, 0] }] });
const dataMenosVendidos = ref({
  labels: ["", "", ""],
  datasets: [{ data: [0, 0, 0] }],
});

const dataMesMenosVentas = ref({
  labels: ["", "", ""],
  datasets: [{ data: [0, 0, 0] }],
});

const dataMesMasVentas = ref({
  labels: ["", "", ""],
  datasets: [{ data: [0, 0, 0] }],
});
const optionsPrincipal = ref({
  plugins: {
    title: {
      display: true,
      text: "Artículos más vendidos",
      fontSize: 18,
      fontColor: "#000",
      fontStyle: "bold",
    },
  },
});

const optionsMenosVendidos = ref({
  plugins: {
    title: {
      display: true,
      text: "Artículos menos vendidos",
      fontSize: 18,
      fontColor: "#000",
      fontStyle: "bold",
    },
  },
});

const optionsMesMenosVentas = ref({
  plugins: {
    title: {
      display: true,
      text: "Mes con menos ventas",
      fontSize: 18,
      fontColor: "#000",
      fontStyle: "bold",
    },
  },
});
const optionsMesMasVentas = ref({
  plugins: {
    title: {
      display: true,
      text: "Mes con más ventas",
      fontSize: 18,
      fontColor: "#000",
      fontStyle: "bold",
    },
  },
});

onMounted(async () => {
  let aux = await GoogleSheets.obtenerTopArticulos(date);
  console.log(aux);

  const articulos = aux.response.map((item) => {
    const producto = products.find((producto) => producto.id === item.art);
    return producto ? producto.name : null;
  });
  console.log(articulos);

  // Obtener cantidades por separado
  const cantidades = aux.response.map((item) => item.cant);
  console.log(cantidades);

  data.value = {
    labels: articulos,
    datasets: [
      {
        data: cantidades,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
        barThickness: 20,
        pointRadius: 3,
      },
    ],
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
  dataMenosVendidos.value = {
    labels: articulosMenosVendidos,
    datasets: [
      {
        data: cantidadesMenosVendidos,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
        barThickness: 20,
      },
    ],
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  dataMesMenosVentas.value = {
    labels: articulos,
    datasets: [
      {
        data: cantidades,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
        barThickness: 250,
      },
    ],
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  dataMesMasVentas.value = {
    labels: articulos,
    datasets: [
      {
        data: cantidades,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
        barThickness: 150,
      },
    ],
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
});
</script>