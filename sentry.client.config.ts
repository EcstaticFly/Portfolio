// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://702d1318527204b856458a432cfe1d95@o4508952326897664.ingest.us.sentry.io/4508953948651520",

  integrations: [
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({ //{Not visible currently, will look into it later}
      colorScheme: "dark",
      isNameRequired: true,
      isEmailRequired: true,
    }),
  ],

  tracesSampleRate: 1,

  replaysSessionSampleRate: 0.1,

  replaysOnErrorSampleRate: 1.0,

  debug: false,
});
