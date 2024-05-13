const User = require("../api/models/user");
const { verifyJwt } = require("../config/jwt");


const isAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(400).json("No estás autorizado")
        }

        const parsedToken = token.replace("Bearer ", "");
        const { id } = verifyJwt(parsedToken);
        const user = await User.findById(id);

        user.password = null;
        req.user = user;
        next();

    } catch (error) {
        return res.status(400).json("No estás autorizado");
    }
}

const isNannita = async (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(400).json("No estás autorizado")
        }

        const parsedToken = token.replace("Bearer ", "");
        const { id } = verifyJwt(parsedToken);
        const user = await User.findById(id);

        if (user.userName === "Nannita") {
            user.password = null;
            req.user = user;
            next();
        } else {
            return res.status(400).json("No eres Nannita");
        }

    } catch (error) {
        return res.status(400).json("No estás autorizado");
    }
}

module.exports = { isAuth, isNannita }