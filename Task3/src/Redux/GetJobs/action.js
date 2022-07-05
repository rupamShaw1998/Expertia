import axios from 'axios'
export const GET_JOBS = 'GET_JOBS'

export const Jobs = (jobs)=>{
    return {
        type : GET_JOBS,
        payload:jobs
    }
}

export const getAllJobsData = ()=>async(dispatch)=>{
   axios.get('https://json-server-vedanshw.herokuapp.com/naukri').then(({data})=>{
    dispatch(Jobs(data))
    //console.log("data",data)
})
}