import { createClient } from 'redis';

const client = createClient();

client.on('error', err => console.log(`Redis client not connected to the server: ${err}`));
client.on('connect', () => console.log('Redis client connected to the server'));
client.connect();

const setNewSchool = async (schoolName, value) => {
  const reply = await client.set(schoolName, value);
  console.log(`Reply: ${reply}`);
};

const displaySchoolValue = async (schoolName) => {
  const school = await client.get(schoolName);
  console.log(school);
};

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
