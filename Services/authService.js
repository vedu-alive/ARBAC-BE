//* need to change token creation logic (as what data needs to be stored in refresh-token and token)
const jwt = require("jsonwebtoken");
const { createToken, createRefreshToken } = require("../utils");

async function registerService(req, res) {
  const { email, password, name } = req.body;
  try {
    if (!email || !password || !name) {
      throw new Error("Missing required fields: email, password, or name");
    }
    const token = await createToken(req.body);
    const refreshToken = await createRefreshToken(req.body);
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "none",
      maxAge: 24 * 7 * 60 * 60 * 1000,
    });
    return res.status(200).json({
      message: "User registered successfully",
      user_name: name,
      user_email: email,
      token: token,
    });
  } catch (err) {
    console.error(err.message);
    return res.status(400).json({
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
    const token = await createToken(userInfo);
    const refreshToken = await createRefreshToken(userInfo);
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "none",
      maxAge: 24 * 7 * 60 * 60 * 1000,
    });
    return res.status(200).json({
      message: "User logged in successfully",
      token: token,
    });
  } catch (err) {
    console.error(err.message);
    return res.status(400).json(JSON.parse(err.message));
  }
}

async function loginService(req, res) {
  const { email, password } = req.body;
  console.log(req.body,"login service");
  try {
    if (!email) {
      throw new Error("user email is required!");
    }
    if (!password) {
      throw new Error("user password is required!");
    }
    const token = await createToken(req.body);
    const refreshToken = await createRefreshToken(req.body);
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "none",
      maxAge: 24 * 7 * 60 * 60 * 1000,
    });
    return res.status(200).json({
      message: "User logged in successfully",
      token: token,
    });
  } catch (err) {
    console.error(err.message);
    return res.status(400).json({
      error: err.message,
    });
  }
}

async function refreshTokenService(req, res) {
  const refreshToken = req.cookies.refreshToken;
  try {
    if (!refreshToken) {
      throw new Error("Unauthorized user! \n Token not found!");
    }

    jwt.verify(refreshToken, process.env.JWT_SECRET, async (err, user) => {
      if (err) {
        throw new Error("Invalid refresh token!");
      }
      const token = await createToken(user);
      return res.status(200).json({
        message: "Token refreshed successfully",
        token: token,
      });
    });
    
  } catch (err) {
    console.error(err.message);
    return res.status(401).json({
      error: err.message,
    });
  }
}

module.exports = {
  registerService,
  oauthService,
  loginService,
  refreshTokenService,
};
