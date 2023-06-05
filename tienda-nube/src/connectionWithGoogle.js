
export const GoogleSheets = {
    urlGoogle : "https://script.google.com/macros/s/AKfycbzqb5u1bXM75G_TLWu3C2ENZ9P9UCsYHadcRfImUUzzfAQyXvdP9rQojYEBJtX1gKYfYA/exec",
    enviarCompra : async (data) =>{
        let url = GoogleSheets.urlGoogle + "?action=crearCompra";
        const response = await fetch(url,{
            method: 'POST',
            body: JSON.stringify(data)
        })

        if(response.ok){
            const responseData = await response.json();
            console.log(responseData);
        }else
        console.error('Error', response.status);
    },
    borrarCompra: async(compra) => {
        let url = GoogleSheets.urlGoogle + "?action=borrarCompra";
        const response = await fetch(url,{
            method: 'POST',
            body: JSON.stringify(compra)
        })

        if(response.ok){
            const responseData = await response.json();
            console.log(responseData);
        }else
        console.error('Error', response.status);
    },
    obtenerHistorial : async (usuario) =>{
        let url = GoogleSheets.urlGoogle + "?action=obtenerHistorial";
        const response = await fetch(url,{
            method: 'POST',
            body: JSON.stringify(usuario)
        })

        if(response.ok){
            return await response.json();
        }
    }
}
