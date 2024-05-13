const mongoose = require("mongoose");
const bcrypt = require ("bcrypt");

const userSchema = new mongoose.Schema( {
    userName: {type: String, required: true},
    password:  {type: String, required: true},
    email: { type: String, trim: true, required: true, unique: true },
    yearBorn: { type: Number, trim: true, required: true },
    rol: { type: String, trim: true, required: false },
    imagenProfile: { type: String, trim: true, required: true }
},
{
    timestamps: true,
    collection: "users"
});

//ante que el estema se guarde (antes que haga save): ejecutamos una funcion:
userSchema.pre("save", function() {
    // hashSync son los altos, y se encripta la cantidad de veces que le pongo ej 10
    this.password = bcrypt.hashSync(this.password, 10);
});

const User = mongoose.model("users", userSchema, "users");
module.exports = User;