require('dotenv').config()

module.exports = {
  env: {
    googleMapKey: process.env.GOOGLE_API_KEY,
    authDomain: process.env.AUTH_0_CLIENT_DOMAIN,
    authClientId: process.env.AUTH_0_CLIENT_ID,
    authClientSecret: process.env.AUTH_0_CLIENT_SECRET,
  },
}
