const { model, Schema } = require('mongoose');

const childSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        image: {
            type: String
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: true
    }
)

module.exports = model('Child', childSchema);