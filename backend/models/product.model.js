import mongoose from "mongoose";


const ProductSchema = mongoose.Schema({
      title:{
        type: String,
        require: true,
      },
      Description:{
        type: String,
        require: true,
      },
      whatInBox:{
        type: String,        
      },
      img:{
        type: String,
        require: true,
      },
      video:{
        type: String,
      },
      wholeSalePrice:{
        type: Number,
      },
      wholeSaleMinimumQuantity:{
        type: Number,
      },
      categories:{
        type: Array,
      },
      concern:{
        type: Array,
      },
      brand:{
        type: String,
      },
      skinType:{
        type: Array,
      },
      originalPrice:{
        type: Number,
      },
      discountedPrice:{
        type: Number,
      },
      inStock:{
        type: Boolean,
        default: true
      },
      ratings:[
        {
            star: {type : Number},
            name: {type: String},
            comment: {type: String},
            postedBy: {type: String}
        }
      ]
},{
  timestamps: true,
})
const Product = mongoose.Model('Product', ProductSchema);
export default Product;