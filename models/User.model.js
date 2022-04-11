const { model, Schema } = require('mongoose');

const userSchema = new Schema(
    {
       name: {
           type: String,
           required: true
       },
       email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+/,
      },
       passwordHash: {
           type: String,
           required: true,
       },
       imageUrl: {
           type: String
       },
       children: [{ type: Schema.Types.ObjectId, ref: 'Child'}]

    },
    {
        timestamps: true
    }
);

module.exports = model('User', userSchema);
