const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      AccessKey: 'f12fbdc6-e2fb-4d60-bc3f7432e661-32c7-4923'
    }
  };
  
 export function listVideos() {
    return fetch('https://video.bunnycdn.com/library/152986/videos', options)
        .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
        })
        .then(data => {
        return data; // Возвращает данные вместо их вывода в консоль
        })
        .catch(err => {
        console.error(err);
        throw err; // Передает ошибку дальше, если есть
        });
}
  
