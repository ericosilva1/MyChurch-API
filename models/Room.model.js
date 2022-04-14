const { model, Schema } = require('mongoose');

const roomSchema = new Schema({
        name: {
            type: String,
            required: true,
        },
        desription: {
            type: String,
            required: true,
        },
        children: [
            {type: Schema.Types.ObjectId, ref: 'Child'}
        ],
    },
    {
        timestamps: true
    }
)


module.exports = model('Room', roomSchema);