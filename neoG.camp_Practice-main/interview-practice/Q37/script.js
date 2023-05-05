let output = document.getElementsByClassName("output");

const url = "https://stock-api.desaihetav.repl.co/list";         // API url
let statisCode;                              // variable to store the status code of the response
let jsonData;                                // variable to store the data
let putData = "";                            // variable to set the data in the html   
// function to fetch data from the API
async function getData() {                   // async function to fetch data from the API
     const response = await fetch(url);      // fetch data from the API
     jsonData = await response.json();       // convert the data into JSON format
     statisCode = response.status;           // get the status code of the response
     if (statisCode === 200) {               // if the status code is 200
          for (let i = 0; i < jsonData.data.length; i++) {
               console.log(jsonData.data[i].id);       // print the id of the stock
               console.log(jsonData.data[i].name);     // print the name of the stock
               putData += `                            
               <tr>
               <td>${jsonData.data[i].id}</td>
               <td>${jsonData.data[i].name}</td>
               </tr>
               `;
          }
          output[0].innerHTML = putData;
     } else {
          output.innerHTML = `<p>Something went wrong</p>`;
          console.log("Something went wrong");
     }
}

getData();

//  fetch() - fetch data from the API and return a promise object
//  await - wait for the promise to be resolved
// async - function that returns a promise object
//  response.json() - convert the data into JSON format
//  response.status - get the status code of the response