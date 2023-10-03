// const axios = require('axios');

const apiKey = 'NjUxOTg1NGI5YzdkYzBhMTY4MDc5ZjUzOjJ5ZWVndUxlZHlOYVdhTXlyYVZ5SmFZeXZlYWF2dTd5NXU0eQ==';

const headers = {
  'accept': 'application/json',
  'Authorization': `Basic ${apiKey}`,
  'Content-Type': 'application/json',
};

const data = {
  "name": "User",
  "role": "moderator",
  "user_ref": "xyz"
};

export async function createToken(room_id) {
  const url = `https://api.enablex.io/video/v2/rooms/${room_id}/tokens`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
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
