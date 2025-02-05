import mongoose, { Schema, Document, Model } from "mongoose";

// Define the user interface
export interface IAxuser extends Document {
  userId: string;
  password: string;
  role:string;
 
}

// Define the schema
const UserSchema: Schema<IAxuser> = new Schema(
  {
    userId: { type: String, required: true },
    password: { type: String, required: true },
    role:{type:String,required:true}
   
  },
  { timestamps: true }
);

// Check if the model already exists to prevent errors
const User: Model<IAxuser> = mongoose.models.Axuser || mongoose.model<IAxuser>("Axuser", UserSchema);

export default User;
