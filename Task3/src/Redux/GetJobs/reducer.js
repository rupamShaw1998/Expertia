import {GET_JOBS } from "./action"

const init = {
    allJobs : []
}
export const getAllJobsReducer = (store=init,{type,payload})=>{
      switch(type){
        case GET_JOBS :{
         // console.log("payload",payload)
           return {...store,allJobs:payload}}
        default: return {...store}
      }
}