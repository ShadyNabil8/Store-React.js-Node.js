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
    category: {
        type: [String],
        require: true
    }
})

export default mongoose.models.Component || mongoose.model('Component', ComponentScheme)