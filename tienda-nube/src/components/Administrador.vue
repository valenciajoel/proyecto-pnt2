<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <div class="chart-container">
          <h3 class="chart-title text-center">Productos mas vendidos</h3>
          <div class="chart-wrapper">
            <Bar :data="data" class="custom-chart" />
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="chart-container">
          <h3 class="chart-title text-center">Productos menos vendidos</h3>
          <div class="chart-wrapper">
            <Bar :data="dataMenosVendidos" class="custom-chart" />
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="chart-container">
          <h3 class="chart-title text-center">Mes con mas ventas</h3>
          <div class="chart-wrapper">
            <Bar :data="dataMesMasVentas" class="custom-chart" />
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="chart-container">
          <h3 class="chart-title text-center">Mes con menos ventas</h3>
          <div class="chart-wrapper">
            <Bar :data="dataMesMenosVentas" class="custom-chart" />
          </div>
        </div>
      </div>
    </div>
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
// Registra los elementos y escalas necesarios para el gráfico de barras
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const year = { date: { year: 2023 } };
const data = ref({ labels: ["", "", ""], datasets: [{ data: [0, 0, 0] }] });
const date = { date: { month: 5, year: 2023 } };
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

// Grafico de Barras mes con mas y menos ventas
onMounted(async () => {
  //Obtiene los datos de GoogleSheets
  let topMeses = await GoogleSheets.obtenerTopMeses(year);
  const mesesMasVentas = topMeses.response.map((item) => item.mes);
  const cantidadesMesMasVentas = topMeses.response.map((item) => item.total);

  // Actualiza los datos del gráfico del mes con más ventas
  dataMesMasVentas.value = {
    labels: mesesMasVentas,
    datasets: [
      {
        data: cantidadesMesMasVentas,
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
        barThickness: 25,
      },
    ],
  };
  // Ordena los meses por cantidad de ventas de menor a mayor
  const mesMenosVentas = topMeses.response.sort((a, b) => a.total - b.total);
  const labelMesMenosVentas = mesMenosVentas.map((item) => {
    return item.mes;
  });
  const cantidadesMesMenosVentas = mesMenosVentas.map((item) => {
    return item.total;
  });
  // Actualiza los datos del gráfico del mes con menos ventas
  dataMesMenosVentas.value = {
    labels: labelMesMenosVentas,
    datasets: [
      {
        data: cantidadesMesMenosVentas,
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
        barThickness: 25,
      },
    ],
  };
});

// Grafico de Barras productos mas y menos vendidos
onMounted(async () => {
  //Obtiene los datos de GoogleSheets
  let topArticulos = await GoogleSheets.obtenerTopArticulos(date);
  const articulos = topArticulos.response.map((item) => {
    const producto = products.find((producto) => producto.id === item.art);
    return producto ? producto.name : null;
  });
  const cantidades = topArticulos.response.map((item) => item.cant);

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
        barThickness: 25,
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
  // Obtiene los datos de Google Sheets para los productos menos vendidos
  const topArticulosMenosVendidos = topArticulos.response.sort(
    (a, b) => a.cant - b.cant
  );
  const articulosMenosVendidos = topArticulosMenosVendidos.map((item) => {
    const producto = products.find((producto) => producto.id === item.art);
    return producto ? producto.name : null;
  });
  const cantidadesMenosVendidos = topArticulosMenosVendidos.map(
    (item) => item.cant
  );

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
        barThickness: 25,
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

<style scoped>
.chart-container {
  margin-bottom: 20px;
  margin-block: 20px;
  margin-left: 20px;
  margin-right: 20px;
}

.chart-title {
  margin-bottom: 10px;
}

.chart-wrapper {
  border: 1px solid #ccc;
  padding: 10px;
}

.custom-chart {
  width: 100%;
}
</style>