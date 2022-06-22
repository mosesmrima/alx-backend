import { createClient } from 'redis';
const client = createClient();

client.on('error', err => console.log(`Redis client not connected to the server: ${err}`));
client.on('ready', () => console.log('Redis client connected to the server'));

client.connect();

const setNewSchool = (schoolName, value) => {
  client.set(schoolName, value)
    .then((reply) => console.log(`Reply: ${reply}`))
    .catch(err => console.log(err));
};

const displaySchoolValue = (schoolName) => {
  client.get(schoolName)
    .then(data => console.log(data))
    .catch(err => console.log(err));
};

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
