import mongoose from "mongoose";

const ComponentScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    MajorCategory: {
        type: String,
        require: true
    },
    MinorCategory: {
        type: String,
        require: true
    }
})

export default mongoose.models.Component || mongoose.model('Component', ComponentScheme)