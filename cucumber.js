
module.exports = {
  default: {
    paths: ["tests/features/**/*.feature"],

    requireModule: [
      "ts-node/register",
      "dotenv/config"
    ],

    require: [
      "tests/features/support/**/*.ts",
      "tests/step-definitions/**/*.ts"
    ],

    format: [
      "progress",
      "json:reports/cucumber-report.json"
    ],

    publishQuiet: true
  }
};
