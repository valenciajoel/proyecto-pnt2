
export const GoogleSheets = {
    urlGoogle : "https://script.google.com/macros/s/AKfycbw31X-MAaZjMoKZUkopXw8FZeEyg7Nkrf1x0hnFYrsoSJffjPAeHM1mWwb7Mwm1zcXGiQ/exec",
    enviarCompra : async (data) =>{
        let url = GoogleSheets.urlGoogle + "?action=crearCompra";
        const response = await fetch(url,{
            method: 'POST',
            body: JSON.stringify(data)
        })

        if (response.ok) {
            const responseData = await response.json();
            console.log(responseData);
        } else
            console.error('Error', response.status);
    },
    getDataProducts : async () =>{
        const response = await fetch(GoogleSheets.urlGoogle,{
            method: 'GET'
        })

        if (response.ok) {
            return await response.json();
        }
    },
    obtenerProductos : async (idCompra) =>{
        let url = GoogleSheets.urlGoogle + "?action=obtenerProductos" ;
        const response = await fetch(url,{
            method: 'POST',
            body: JSON.stringify(idCompra)
        })
        if (response.ok) {
            const responseData = await response.json();
            console.log(responseData);
        } else
            console.error('Error', response.status);
    },
    obtenerTopArticulos: async (date)=>{
        let url = GoogleSheets.urlGoogle + "?action=obtenerArtMasVendidoEnMes" ;
        const response = await fetch(url,{
            method: 'POST',
            body: JSON.stringify(date)
        })
        if (response.ok) {
            return await response.json();
        }
    },
    obtenerTopMeses: async (date)=>{
        let url = GoogleSheets.urlGoogle + "?action=obtenerMesesConMasVentas" ;
        const response = await fetch(url,{
            method: 'POST',
            body: JSON.stringify(date)
        })
        if (response.ok) {
            return await response.json();
        }
    
    }
}
