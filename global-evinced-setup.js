const { setCredentials } = require('@evinced/js-playwright-sdk');

async function globalEvincedSetup() {
    await setCredentials({
        // @ts-ignore
        serviceId: process.env.AUTH_SERVICE_ID,
        // @ts-ignore
        secret: process.env.AUTH_SECRET
      })
}

export default globalEvincedSetup;