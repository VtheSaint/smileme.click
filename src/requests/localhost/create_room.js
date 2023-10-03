const url = 'https://api.enablex.io/video/v2/rooms';
const apiKey = 'NjUxOTg1NGI5YzdkYzBhMTY4MDc5ZjUzOjJ5ZWVndUxlZHlOYVdhTXlyYVZ5SmFZeXZlYWF2dTd5NXU0eQ==';

const headers = {
  'accept': 'application/json',
  'Authorization': `Basic ${apiKey}`,
  'Content-Type': 'application/json',
};

const data = {
  "name": "EnablexRoom",
  "owner_ref": "xyz",
  "settings": {
    "description": "Descriptive text",
    "mode": "group",
    "scheduled": false,
    "adhoc": false,
    "duration": 30,
    "moderators": "1",
    "participants": "2",
    "auto_recording": true,
    "quality": "SD"
  },
  "sip": {
    "enabled": false
  },
  "data": {
    "custom_key": ""
  }
};


export async function createRoom() {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
      mode: "cors"
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    return responseData;
  } catch (err) {
    throw err;
  }
}
