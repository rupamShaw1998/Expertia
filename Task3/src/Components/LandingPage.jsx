import React, { useState, useEffect } from "react";
// import { Navbar2 } from "./Navbar2";
import styles from "../Styles/LandingPage.module.css";
import {  Box, Button, Heading, Input,Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Jobs} from "./Job"
import { Link, useNavigate, useParams } from "react-router-dom";
import { getJobs } from "../Redux/JobSearching/action";
import { getAllJobsData } from "../Redux/GetJobs/action";

export const LandingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allJobsData = useSelector((store) => store.allJobs.allJobs);
  console.log(allJobsData);

  useEffect(() => {
    dispatch(getAllJobsData());
  }, []);

  const [skill, setSkill] = useState("");

  const [search, setSearch] = useState(false);

  const handleSkill = () => {
    dispatch(getJobs(skill));
    setSearch(true);
  };
  if (search) {
    navigate(`/search/${skill}`);
  }

  return (
    <>
      <Box
        width={"100%"}
        height={"250px"}
        display={"flex"}
        style={{
          backgroundImage: `url("https://static.naukimg.com/s/5/105/i/dashboardbg.png")`,
        }}
      >
        <Box marginLeft={"10%"} w={"60%"} paddingTop={"3%"}>
          <Heading as="h5" className={styles.head}>
            Search Jobs
          </Heading>
          <input
            type="text"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            placeholder="Search jobs by Skills, Designation, Companies"
            style={{ padding: "1.2%", width: "80%" }}
          ></input>
          <button className={styles.searchBtn} onClick={handleSkill}>
            Search
          </button>
        </Box>
        <Box className={styles.profileBox}>
          <Box display={"flex"} margin={"auto"} marginTop={"2%"} >
            <img
              style={{borderRadius: "7px  7px 0 0"}}
              src="https://www.nme.com/wp-content/uploads/2021/09/lee-min-ho-gettyimage-585329996@2000x1270.jpg"
              alt="logo"
            />
          </Box>
          
          <Box w={"80%"} h={"50px"} margin={"auto"} display={"flex"}>
            <Box className={styles.appearences}>
              <h3 style={{ color: "blue" }}>10</h3>
              <p style={{ color: "blue", fontSize: "10px" }}>
                Search Appearances
              </p>
            </Box>
            <Box className={styles.appearences}>
              <h3 style={{ color: "blue" }}>8</h3>
              <p style={{ color: "blue", fontSize: "10px" }}>
                Recruiter Actions
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
       <div className={styles.container}>
        {allJobsData.length>0 && allJobsData.map((jobs)=>{
          return <Box className={styles.containerBox}>
            <Jobs key={jobs.id} {...jobs}></Jobs> 
          </Box>
        })}
       </div>
    </>
  );
};
