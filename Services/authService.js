const jwt = require("jsonwebtoken");
const { createToken, createRefreshToken } = require("../utils");

async function registerService(req, res) {
  const { email, password, name } = req.body;
  try {
    if (!email || !password || !name) {
      throw new Error("Missing required fields: email, password, or name");
    }
    console.log(email, password, name);
    const token = createToken(req.body);
    const refreshToken = createRefreshToken(req.body);
    res.status(200).json({
      message: "User registered successfully",
      user_name: name,
      user_email: email,
      token: token,
      refreshToken: refreshToken,
    });
  } catch (err) {
    console.error(err.message);
    res.status(400).json({
      error: err.message,
    });
  }
}

async function oauthService(req, res) {
  const { access_token, authuser, expires_in, prompt, scope, token_type } =
    req.body;
  try {
    if (
      !access_token ||
      !authuser ||
      !expires_in ||
      !prompt ||
      !scope ||
      !token_type
    ) {
      throw new Error(
        "Missing required fields: access_token, authuser, expires_in, prompt, scope, or token_type"
      );
    }
    const userInfoResponse = await fetch(process.env.GOOGLE_USER_INFO, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    const userInfo = await userInfoResponse.json();
    if (userInfo.error) {
      throw new Error(JSON.stringify(userInfo));
    }
    console.log(userInfo);
    const token = await createToken(userInfo);
    const refreshToken = await createRefreshToken(userInfo);
    res.status(200).json({
      message: "User logged in successfully",
      token: token,
      refreshToken: refreshToken,
    });
  } catch (err) {
    console.error(err.message);
    res.status(400).json(JSON.parse(err.message));
  }
}

async function loginService(req, res) {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      throw new Error("Missing required fields: email or password");
    }
    const token = await createToken(req.body);
    const refreshToken = await createRefreshToken(req.body);
    res.status(200).json({
      message: "User logged in successfully",
      token: token,
      refreshToken: refreshToken,
    });
  } catch (err) {
    console.error(err.message);
    res.status(400).json({
      error: err.message,
    });
  }
}

module.exports = {
  registerService,
  oauthService,
  loginService,
};
