const crypto = require("crypto");
const { getSecretFromDB } = require("./mockDb");

const generateToken = async (email) => {
  const secret = await getSecretFromDB();

  return crypto
    .createHmac("sha256", secret)
    .update(email)
    .digest("base64");
};

module.exports = { generateToken };
