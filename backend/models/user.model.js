import mongoose from "mongoose";


const UserSchema = mongoose.Schema({
      name:{
        type: String,
        require: true,
      },
      email:{
        type: String,
        require: true,
      },
      password:{
        type: String,
        require: true,
      },
      address:{
        type: String,
      },
      role:{
        type: String,
        default: 'User',
      },
      status:{
        type: Number,
        default: 0,
      }
},{
  timestamps: true,
})
const User = mongoose.Model('User', UserSchema);
export default User;