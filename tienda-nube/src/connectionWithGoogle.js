
export const GoogleSheets = {
    urlGoogle : "https://script.google.com/macros/s/AKfycbzqb5u1bXM75G_TLWu3C2ENZ9P9UCsYHadcRfImUUzzfAQyXvdP9rQojYEBJtX1gKYfYA/exec",
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
