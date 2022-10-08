import mongoose from "mongoose";
const newsSchema = new mongoose.Schema(
  {
    title: {type: String, required: true, unique:true},
    description: {type: String, required: true},
    likes: {type: Number, required: true},
    image: {type: String, required: true},
    content: {type: String, required: true}
  },
  {
    timestamps:true
  }
)

const News = mongoose.model('News', newsSchema);
export default News;