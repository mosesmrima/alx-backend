import { createClient, print } from 'redis'

const client = createClient();

client.on("error", err => console.log(`Redis client not connected to the server: ${err}`));
client.on("connect", () => console.log('Redis client connected to the server'));

client.connect();

client.hSet('HolbertonSchools', {'Portland':  50, 'Seattle': 80, 'New York': 20, 'Bogota': 20, 'Cali': 40, 'Paris': 2});

client.hGetAll('HolbertonSchools')
    .then(data => {
	Object.entries(data).forEach(([key, val]) => {
	    console.log(`${key}: ${val}`);
	});
    });
