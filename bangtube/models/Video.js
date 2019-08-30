import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    requried: "File URL is Required"
  },
  title: {
    type: String,
    requried: "Title is Required"
  },
  description: String,
  views: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

const model = mongoose.model("Video", VideoSchema);

export default model;
