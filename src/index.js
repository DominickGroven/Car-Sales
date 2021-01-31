import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MainReducer } from "./Reducers/MainReducer";
import 'bulma/css/bulma.css';
import './styles.scss';
const store = createStore(MainReducer);
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);


export const addFeature = (featureName) => {
    return {
        type: ADD_FEATURE,
        payload: featureName,
    };
};

export const subtractFeature = (featureName) => {
    return {
        type: SUBTRACT_FEATURE,
        payload: featureName,
    };
};