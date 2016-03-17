import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducer from './reducers';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';
import App from './components/App';
import {BasicContainer} from './components/Basic';

//Store Initialisation
const store = createStore(reducer);

store.dispatch({
    type: 'BASIC_ACTION',
    state: {
        name: 'Harry'
    }
});


// Route Initialisation
const routes = <Route component={App}>
    <Route path="/" component={BasicContainer}/>
</Route>;

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.querySelector('#app')
);