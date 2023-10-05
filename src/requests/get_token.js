// export async function getToken(room_id) {
//     var raw = JSON.stringify({
//         "name": "User",
//         "role": "moderator",
//         "user_ref": "xyz",
//         "roomId": room_id
//     });
//     const options = {
//         method: 'POST',
//         headers: {
//           accept: 'application/json',
//         },
//         data: raw
//       };
//     fetch('https://localhost:8080/api/create-token/')
//         .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//         })
//         .then(data => {
//         return data; // Возвращает данные вместо их вывода в консоль
//         })
//         .catch(err => {
//         console.error(err);
//         throw err; // Передает ошибку дальше, если есть
//         });
// }


export async function createToken(details) {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) {
          const response = JSON.parse(this.responseText);
          if (response.error) {
            console.log(response.error);
            reject(response.error);
          } else {
            // console.log(response);
            resolve(response.token);
          }
        } else {
          console.log('Ошибка запроса:', this.status);
          reject('Ошибка запроса: ' + this.status);
        }
      }
    };
    xhttp.open('POST', '/api/create-token/', true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(JSON.stringify(details));
  });
}

