const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

const requireAuth = async (req, res, next) => {
  if (req.headers.cookie) {
    const token = req.headers.cookie.split("=")[1];
    if (!token) {
      return res.status(401).send({ error: "Unauthorized" });
    }
    let decodedToken;
    try {
      decodedToken = await jwt.verify(token, JWT_SECRET);
    } catch (err) {
      return res.status(401).send({ error: err });
    }

    req.userId = decodedToken._id;

    next();
  } else {
    return res.status(401).send({ error: "Unauthorized" });
  }
};

module.exports = { requireAuth };
