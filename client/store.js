

//create an object for the default data
const defaultState = { posts };

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
