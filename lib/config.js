// App configuration.
module.exports = {
  // The session locks after this many minutes of inactivity.
  // feature-a: extended timeout for regular sessions.
  SESSION_TIMEOUT_MINUTES: 30,
  // feature-b: short timeout for sensitive sessions.
  SENSITIVE_SESSION_TIMEOUT_MINUTES: 5,
};
