const jwt = require("jsonwebtoken");
const { encryptData } = require("./encryption");

require("dotenv").config();

const GenerateToken = async (id) => {
  console.log(process.env.JWT_SCRECT);
  let token = jwt.sign(
    {
      data: id,
    },
    process.env.JWT_SCRECT,
    { expiresIn: "2400h" }
  );
  let encrypttoken = await encryptData(token);
  return encrypttoken;
};

module.exports = GenerateToken;