import { databases } from "./appwrite";


export async function fetchBooks() {
  try {
    const response = await databases.listDocuments(
     "67a21c08002206b2296b", // Replace with your Database ID
          "67a3048e00158398961f",// Replace with your Collection ID
    );

    return response.documents; // Returns an array of documents
  } catch (error) {
    console.error("Error fetching documents:", error);
    return []; // Return an empty array in case of error
  }
}