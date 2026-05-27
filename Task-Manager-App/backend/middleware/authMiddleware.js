const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "secret123"
    );

    req.user = decoded;

    next();
  } catch (error) {
    console.log(error.message);

    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

module.exports = protect;