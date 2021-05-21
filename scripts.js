const fetchBtn = document.querySelector('#fetchBtn');
const backupBtn = document.querySelector('#backupBtn');
const data = document.querySelector('.data');

fetchBtn.addEventListener('click', buttonFetchData);
// backupBtn.addEventListener('click', buttonPostData);


// function for fetch the data

function buttonFetchData() {
    // Initiate an XHR request
    const xhr = new XMLHttpRequest();

    // Open the XHR request
    xhr.open('GET', 'https://restcountries.eu/rest/v2/name/india', false);

    // what to do on progress, this is option
    xhr.onprogress = function () {
        console.log('On Progress');
    }

    // XHR on load (what to do when response is ready)
    xhr.onload = function () {
        if (this.status === 200) {
            let response = JSON.parse(this.responseText)[1];
            console.log(response);
            const html = `
                <div class="card" style="width: 18rem;">
                    <img src="${response.flag}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title"><strong>Country</strong>: ${response.name}</h5>
                        <p class="card-text"><strong>Population</strong>: ${+(response.population / 1000000).toFixed(1)}M</p>
                    </div>
                </div>
            `
            data.insertAdjacentHTML('afterend', html);
        }
    }

    // XHR send the request
    xhr.send();

    console.log('We are done');
}

// // function for POST the data
// function buttonPostData() {

//     const fetchData = new XMLHttpRequest;

//     fetchData.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
//     fetchData.getResponseHeader('Content-type', 'application/json');

//     fetchData.onprogress = function () {
//         console.log('Submitting Data');
//     }

//     fetchData.onload = function () {
//         if (fetchData.status === 200) {
//             console.log(this.responseText);

//             const [userData] = JSON.parse(this.responseText);

//             let appendHTML = `
//             <table class="table">
//                 <thead>
//                     <tr>
//                     <th scope="col"></th>
//                     <th scope="col">Salary</th>
//                     <th scope="col">Age</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                     <td></td>
//                     <td>Otto</td>
//                     <td>@mdo</td>
//                     </tr>
//                 </tbody>
//             </table>
//             `
//         } else {
//             console.error('Error');
//         }
//     }

//     params = ` 	{"name":"Deepak","salary":"12","age":"22"}`

//     fetchData.send(params);
// }