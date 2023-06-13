<template>
  <div>
    <div>
    <Bar :data="data" />
  </div>

  <div>
    <Bar :data="dataMenosVendidos" />
  </div>

  <div>
    <Bar :data="dataMesMenosVentas" />
  </div>

  <div>
    <Bar :data="dataMesMasVentas" />
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
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import { products } from '../products'
import { onMounted, ref } from "vue";
import { GoogleSheets } from '../connectionWithGoogle';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)


const data = ref({ labels: ["", "", ""], datasets: [{ data: [0, 0, 0] }] })
const date = { date: { month: 5, year: 2023 } }
const dataMenosVendidos = ref({ labels: ["", "", ""], datasets: [{ data: [0, 0, 0] }] })
const dataMesMenosVentas = ref({ labels: ["", "", ""], datasets: [{ data: [0, 0, 0] }] })
const dataMesMasVentas = ref({ labels: ["", "", ""], datasets: [{ data: [0, 0, 0] }] })

onMounted(async () => {

  let topArticulos = await GoogleSheets.obtenerTopArticulos(date)
  let topMeses = await GoogleSheets.obtenerTopArticulos({date: {year:2023}});
  //trae los nombres de los productos
  const articulos = topArticulos.response.map(item => {
    const producto = products.find(producto => producto.id === item.art);
    return producto ? producto.name : null;
  });

  // Obtener cantidades por separado
  const cantidades = topArticulos.response.map(item => item.cant);

  data.value = {
    labels: articulos, datasets: [{
      data: cantidades, backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ], borderWidth: 1, barThickness: 250,
    }], options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  }

  const topArticulosMenosVendidios = topArticulos.sort((a, b) => a.cant - b.cant);
  const cantidadesMenosVendidos = topArticulosMenosVendidios.response.map(item => item.cant);
  const articulosMenosVendidos = topArticulosMenosVendidios.response.map(item => {
    const producto = products.find(producto => producto.id === item.art);
    return producto ? producto.name : null;
  });

  dataMenosVendidos.value = {
    labels: articulosMenosVendidos, datasets: [{
      data: cantidadesMenosVendidos, backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ], borderWidth: 1, barThickness: 250,
    }], options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  }

  dataMesMenosVentas.value = {
    labels: articulos, datasets: [{
      data: cantidades, backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ], borderWidth: 1, barThickness: 250,
    }], options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  }

  dataMesMasVentas.value = {
    labels: articulos, datasets: [{
      data: cantidades, backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ], borderWidth: 1, barThickness: 150,
    }], options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  }


})


</script>