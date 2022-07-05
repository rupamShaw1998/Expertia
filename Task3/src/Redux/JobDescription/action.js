import axios from 'axios'

import { actions } from './actionTypes'
export const getJobRequestById = () => {
    return {
        type: actions.GET_JOB_REQUEST_BY_ID
    }
}

export const getJobSuccessById = (payload) => {
    return {
        type:actions.GET_JOB_SUCCESS_BY_ID,
        payload
    }
}

export const getJobFailureById = (payload) => {
    return {
        type: actions.GET_JOB_FAILURE_BY_ID,
        payload
    }
}

export const getJobById = (id,job) => (dispatch) => {
    dispatch(getJobRequestById());
    axios.get(`https://json-server-vedanshw.herokuapp.com/naukri/${id}`
    )
    
        .then(res => dispatch(getJobSuccessById(res.data)))
        .catch(err => dispatch(getJobFailureById(err)))

}
