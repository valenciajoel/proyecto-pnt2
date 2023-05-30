
const GoogleSheets = {

    urlGoogle : "https://script.google.com/macros/s/AKfycbyBHkBdDujBG3Pq2tVnvjeEC5mnaOYQ98_xJPWIPUwAchReqDcJWGsqyDRLx1cvZStB8w/exec",

    sendData : async (data) =>{
        const response = await fetch(GoogleSheets.urlGoogle,{
            method: 'POST',
            body: JSON.stringify(data)
        })

        if(response.ok){
            const responseData = await response.json();
            console.log(responseData);
        }else
        console.error('Error', response.status);
    },
    getDataProducts : async () =>{
        const response = await fetch(GoogleSheets.urlGoogle,{
            method: 'GET'
        })

        if(response.ok){
            return await response.json();
        }
    }
}
module.exports = GoogleSheets;