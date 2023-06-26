// Objeto GoogleSheets para interactuar con la hoja de cálculo de Google
export const GoogleSheets = {
    urlGoogle: "https://script.google.com/macros/s/AKfycbwdUhSzK6NNs5bIcxXZCNpScXpUzqF5CeHSdQRNYMhLqtVMPFa3btlH-R6NIXD5yEqMwg/exec",
    // Método para enviar una compra a la hoja de cálculo
    enviarCompra: async (data) => {
        // Construir la URL de la API para crear una compra
        let url = GoogleSheets.urlGoogle + "?action=crearCompra";
        // Enviar una solicitud POST a la API
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        })
        // Verificar si la respuesta fue exitosa
        if (response.ok) {
            const responseData = await response.json();
            console.log(responseData);
        } else {
            console.error('Error', response.status);
        }

    },
    // Método para obtener los productos de una compra en la hoja de cálculo
    obtenerProductos: async (idCompra) => {
        // Construir la URL de la API para obtener los productos de una compra
        let url = GoogleSheets.urlGoogle + "?action=obtenerProductos";
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(idCompra)
        })
        if (response.ok) {
            const responseData = await response.json();
            console.log(responseData);
        } else {
            console.error('Error', response.status);
        }


    },
    // Método para obtener los artículos más vendidos en un mes en la hoja de cálculo
    obtenerTopArticulos: async (date) => {
        let url = GoogleSheets.urlGoogle + "?action=obtenerArtMasVendidoEnMes";
        // Enviar una solicitud POST a la API
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(date)
        })
        if (response.ok) {
            return await response.json();
        } else {
            console.error('Error', response.status);
        }

    },
    // Método para obtener los meses con más ventas en la hoja de cálculo
    obtenerTopMeses: async (date) => {
        let url = GoogleSheets.urlGoogle + "?action=obtenerMesesConMasVentas";
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(date)
        })
        if (response.ok) {
            return await response.json();
        } else {
            console.error('Error', response.status);
        }


    }
}
