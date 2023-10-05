// export async function createRoom() {
//     var requestOptions = {
//         method: 'POST',
//         mode: 'no-cors',
//         headers: {
//           "Access-Control-Allow-Origin": "https://localhost:8080"
//         }
//       };
      
//       fetch("https://localhost:8080/api/create-room", requestOptions)
//         .then(response => response.json())
//         .catch(error => console.log('error', error));
// }


export async function createRoom() {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status == 200) {
          const response = JSON.parse(this.responseText);
          if (response.error) {
            console.log(response);
            reject(response.error); // Если есть ошибка, отклоняем Promise
          } else {
            // console.log(response);
            resolve(response.room.room_id); // В случае успеха, разрешаем Promise с результатом
          }
        } else {
          reject(new Error(`Request failed with status ${this.status}`));
        }
      }
    };
    xhttp.open('POST', '/api/create-room/', true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.setRequestHeader(
      'Authorization',
      'Basic NjUxZGNhNmE5M2NmNWFjZTAxMDE4N2M1OmVUeVR5TmVNeWJ5cXlzYVVhWmFUdTZhenVWeVZ5NmFkZVR1Ug==',
    );
    xhttp.send();
  });
}

