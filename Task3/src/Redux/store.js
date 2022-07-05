import { legacy_createStore as createStore } from "redux";

import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { compose } from "redux";
import thunk from "redux-thunk";
import {getAllJobsReducer} from './GetJobs/reducer'
import { reducerJobDes } from "./JobDescription/reducer";
import { jobReducer } from "./JobSearching/reducer";

const rootReducer=combineReducers({
    
    allJobs:getAllJobsReducer,
    job:jobReducer,
    jobDetails:reducerJobDes
})

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store =createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)
//console.log(store.getState())