import mongoose from "mongoose";
const newsSchema = new mongoose.Schema(
  {
    title: {type: String, require: true, unique:true},
    description: {type:String, require: true, unique: true},
    likes: {type: Number, require: true},
    image: {type: String, require: true}
  },
  {
    timestamps:true
  }
)

const News = mongoose.model('News', newsSchema);
export default News;