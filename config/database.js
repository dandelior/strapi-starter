module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "stra_db_vRk39lTB"),
      user: env("DATABASE_USERNAME", "stra_user_ENbgMeSf"),
      password: env("DATABASE_PASSWORD", "dgIo5bwztyZSMG61wfXaP"),
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
      },
    },
    debug: false,
  },
});
