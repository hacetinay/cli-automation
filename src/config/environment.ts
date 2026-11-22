
export const environment = {
  baseUrl: process.env.BASE_URL || "https://zinctm.cydeo.io",

  headless: process.env.HEADLESS !== "false",

  timeout: Number(process.env.DEFAULT_TIMEOUT || 30000)
};
