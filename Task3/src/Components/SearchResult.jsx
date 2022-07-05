import React from "react";
import { MapResults } from "./MapResults";
import { useDispatch, useSelector } from "react-redux";

import { useLocation, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export const SearchResult = () => {
 const dispatch=useDispatch()
    const data = useSelector((store) => store.job.jobs)
    console.log("data",data)
  const { job } = useParams();

  const [searchParams]=useSearchParams()




  return (
    <>

           <MapResults />
       
    </>
  );
};