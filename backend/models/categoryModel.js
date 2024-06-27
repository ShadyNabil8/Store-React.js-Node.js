import mongoose from "mongoose";

const CategoryScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    sub: [{ type: String }],
    count: { type: Number, default: 0 }
})

export default mongoose.models.Category || mongoose.model('Category', CategoryScheme)