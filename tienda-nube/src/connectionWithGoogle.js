
export const GoogleSheets = {
    urlGoogle : "https://script.google.com/macros/s/AKfycbzLCTBs0NqwH2EgX1Jn2jF-Y1A42hbRBdx_6RKlIwYvwR8LLk0eR5_qzhKZPTw1om97NA/exec",
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
    }
}
