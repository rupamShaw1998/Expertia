
import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { SingleMapDiv } from "./SingleMapDiv"
import styled from "../Styles/MapResults.module.css"
import { useParams, useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import {  getJobsByLocation } from '../Redux/JobSearching/action'


 export const MapResults = () => {

    const dispatch=useDispatch()

     const data = useSelector((store) => store.job.jobs)
     console.log("data",data)
     const loading = useSelector((store) => store.job.isLoading)
     const [searchParams]=useSearchParams()

     const {job} =useParams()

      useEffect(()=>{
    if(data?.length===0){
      let params={
        location:searchParams.getAll("location"),
        
      }
      dispatch(getJobsByLocation(job,params))

    }
  },[dispatch,data?.length,searchParams])

  
 

 
    if (data?.length === 0 && !loading) {
        return (
            <div className={styled.container}>
                <div className={styled.box}>
                    <h4 style={{ color: '#091e42', textAlign: 'center', fontSize: '22px' }}>No Such Jobs</h4>
                </div>
            </div>
        )
    }

    return !loading && (
      <>
        <div className={styled.container}>
            {
                  data?.map(el => <SingleMapDiv key={el.id} {...el} />)
            }
        </div>
      
        </>
    )
   
}

