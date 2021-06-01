const initialAppState = {
  // braveState:{}, // ui temp state
  skinState: {}, // ui ctrl state,Do not participate in logical calculations
  appState: {}, // core state
  localeMessages: {}, // i18n state
  taskState: {
    tasks: [
      {
        id: 1,
        title: 'Initial Task One',
        status: 'incomplete',
        created: new Date().getTime(),
      },
    ],
  }, // notify task
};

export default initialAppState;
