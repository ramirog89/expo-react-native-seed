const { readFileSync, writeFileSync } = require("fs"); // tslint:disable-line
const { join } = require("path"); // tslint:disable-line

const packageJSON = require("./package.json");

const env = process.env.NODE_ENV;
const isProd = env === "production";

console.log('env', env);
const config = readFileSync(join(__dirname, `app/config/${env}.config.json`));
writeFileSync(join(__dirname, "app/config/config.json"), config);

const app = JSON.parse(readFileSync(join(__dirname, "app.json")));
app.expo.name = isProd ? "Nexton" : `${env} Nexton`;
app.expo.slug = isProd ? "nexton-app" : `${env}-nexton-app`;
app.expo.version = packageJSON.version;
app.expo.ios.bundleIdentifier = app.expo.android.package = isProd ? "com.nexton.seed" : `com.nexton.seed.${env}`;
writeFileSync(join(__dirname, "app.json"), JSON.stringify(app, null, 2));
