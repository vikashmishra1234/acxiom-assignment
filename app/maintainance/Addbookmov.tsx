"use client"
import { databases, ID } from "@/lib/appwrite";
import { useState } from "react";

export default function MaintenancePage() {
 

  const [formState, setFormState] = useState({
    type: "Book",
    name: "",
    author: "",
    quantity: 1,
    code:""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: name === "quantity" ? parseInt(value, 10) : value,
    });
  };
  const handleSubmit = async(e:any)=>{
    e.preventDefault()
    console.log(formState)
    try {
        const response = await databases.createDocument(
          "67a21c08002206b2296b", // Replace with your Database ID
          "67a21c19000b9fa708ef", // Replace with your Collection ID
          ID.unique(), // Auto-generate a unique document ID
          formState
        );
  
        console.log("Data added:", response);
        alert("Data successfully saved!");
        // setFormData({ name: "", email: "" }); // Clear formcls
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to save data.");
      }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        
    
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-medium mb-2">Type</label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="type"
                      value="Book"
                      checked={formState.type === "Book"}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Book
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="type"
                      value="Movie"
                      checked={formState.type === "Movie"}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Movie
                  </label>
                </div>
              </div>
              <div>
                <label className="block font-medium mb-2">Name Of the Book</label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
              <div>
              <label className="block font-medium mb-2">Name Of the Author</label>
                <input
                  type="text"
                  name="author"
                  value={formState.author}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
              <div>
              <label className="block font-medium mb-2">Code of the book</label>
                <input
                  type="text"
                  name="code"
                  value={formState.code}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Quantity/Copies</label>
                <input
                  type="number"
                  name="quantity"
                  value={formState.quantity}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  min={1}
                />
              </div>
              <div className="flex space-x-4">
                <button
                  type="button"
                  className="bg-gray-300 text-black px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
     
  );
}
