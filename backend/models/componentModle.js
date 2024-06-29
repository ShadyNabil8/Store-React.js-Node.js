import mongoose from "mongoose";

const ComponentScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    subCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: false
    },
})

export default mongoose.models.Component || mongoose.model('Component', ComponentScheme)