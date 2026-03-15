{ pkgs, lib, config, inputs, ... }:
let
  env = {
    DB_HOST = "127.0.0.1";
    DB_PORT = "54400";
    DB_USER = "dev";
    DB_PASSWORD = "postgres";
    DB_NAME = "dev";
  };
  in
{
  env = env;
  packages = [pkgs.jq pkgs.tree pkgs.act ];
  languages.typescript.enable = true;
  languages.javascript.enable = true;
  languages.javascript.package = pkgs.nodejs_25;
  languages.javascript.pnpm.enable = true;
  dotenv.enable = true;

  services.postgres = {
    enable = true;
    package = pkgs.postgresql_18;
    listen_addresses = env.DB_HOST;
    port = lib.toInt env.DB_PORT;
    initialDatabases = [
      { name = env.DB_NAME; }
    ];
    initialScript = ''
      DO $$
      BEGIN
        IF NOT EXISTS
      END
      $$;

      ALTER DATABASE "${env.DB_NAME}"
        OWNER TO "${env.DB_USER}";
      \c "${env.DB_NAME}";
    '';
  };
}
