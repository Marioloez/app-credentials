module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 4000),
  url: env("", "https://app-credential.herokuapp.com"),
  /*   url: env("", "https://e0f9-177-227-166-41.ngrok.io"), */
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "b79e0cbbcdc04f9a21c0d2a571b5e6c2"),
    },
  },
});

/* module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("", "https://e0f9-177-227-166-41.ngrok.io"),
});
 */
