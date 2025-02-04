import { Client, Databases, ID } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
    .setProject('67a21b9c0038493ed503'); // Replace with your actual Project ID

const databases = new Databases(client);

export { databases, ID };
