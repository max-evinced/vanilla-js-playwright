const { setCredentials } = require('@evinced/js-playwright-sdk');

async function globalEvincedSetup() {
  await setCredentials({
    // @ts-ignore
    serviceId: process.env.EVINCED_SERVICE_ID,
    // @ts-ignore
    secret: process.env.EVINCED_API_KEY
  })
}

export default globalEvincedSetup;