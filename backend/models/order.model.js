import mongoose from "mongoose";


const OrderSchema = mongoose.Schema({
      name:{
        type: String,
        require: true,
      },
      userId:{
        type: String,
        require: true,
      },
      product:{
        type: String,
        require: true,
      },
      total:{
        type: Number,
        require: true,
      },
      phone:{
        type: String,
      },
      address:{
        type: String,
      },
      phone:{
        type: String,
      },
      status:{
        type: Number,
        default: 0,
      }
},{
  timestamps: true,
})
const Order = mongoose.Model('Order', OrderSchema);
export default Order;