let output = document.getElementsByClassName("output");

let statusCode;
let objData;
let putData = '';
async function getProductDetails() {
     const response = await fetch('https://nftbaazarapi.rawheatg.repl.co/product');
     const data = await response.json();
     statusCode = response.status;
     objData = data;
     if (statusCode === 200) {
          for (let i = 0; i < objData.data.length; i++) {
               putData += `
               <tr>
               <td>${objData.data[i].id}</td>
               <td>${objData.data[i].name}</td>
               <tr>
               `;
          }
          output[0].innerHTML = putData;
     }
}
getProductDetails();
