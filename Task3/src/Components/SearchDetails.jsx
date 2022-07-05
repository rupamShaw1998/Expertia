import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getJobById } from "../Redux/JobDescription/action";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    Input
  } from '@chakra-ui/react'

import styles from "../Styles/SearchDetails.module.css";
import {
  BsFillGeoAltFill,
  BsFillBagFill,
  BsFillWalletFill,
} from "react-icons/bs";
import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export const SearchDetails = () => {
  const details = useSelector((store) => store.jobDetails.jobs);
  console.log("details", details);
 
  const navigate=useNavigate()

  const { id } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobById(id));
  }, [dispatch, id]);

  return (
    <>
     
      <div className={styles.background}>
        <p
          style={{
            color: "grey",
            position: "relative",
            marginLeft: 80,
            padding: 20,
          }}
        >
          <Link to="/home">Home</Link>
          {`>${details.location}`}
        </p>
      </div>
      <Box display={"flex"} w={"100%"}>
        <Box w={"60%"} marginBottom={"2%"}>
          <div style={{ display: "flex" }}>
            <div className={styles.box1}>
              <div className={styles.container}>
                <h3 style={{ fontSize: "1rem", fontWeight: "bold" }}>
                  {details.companyName}
                </h3>
                <div className={styles.container1}>
                  <p> {details.skill}</p>
                  <p>{details.rating}</p>
                  
                  <p>{`(${details.reviews} Reviews)`}</p>
                </div>
                <div style={{ marginTop: 10 }}>
                  <Box display={"flex"}>
                    <Box>
                      <BsFillBagFill />
                    </Box>
                    <Box>{`0-${details.experience} months`}</Box>
                  </Box>
                </div>
                <div className={styles.container3}>
                  <Box display={"flex"}>
                    <Box>
                      <BsFillWalletFill />
                    </Box>
                    <Box>{`₹${details.salary} P.A.`}</Box>
                  </Box>

                  <Box display={"flex"}>
                    <Box>
                      <BsFillGeoAltFill />
                    </Box>
                    <Box>{details.location}</Box>
                  </Box>
                  <Button onClick={onOpen} style={{marginLeft:"5px"}} colorScheme='blue'>Apply</Button>
                </div>
                <Modal
          initialFocusRef={initialRef}
         
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input ref={initialRef} placeholder='Enter Name' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input placeholder='Enter Email' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={()=>navigate('/')}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
                <div className={styles.line}></div>
                <div className={styles.container4}>
                  <div>
                    <p>
                      Posted:{" "}
                      {Number(`${details.date}`) > 1
                        ? `${details.date} days ago`
                        : `${details.date} day ago`}
                    </p>
                  </div>
                  <div>
                    <p>Openings:{}</p>
                  </div>
                  <div>
                    <p>Job Applicants:{}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 26 }} className={styles.container5}>
            <h3>Job description</h3>
            <h4 style={{ marginTop: 8 }}>Roles and Responsibilities</h4>
            <ul
              style={{
                marginLeft: 30,
                fontSize: 14,
                marginTop: 27,
                lineHeight: 1.5,
               
              }}
            >
              <li>Hands on Experience in ADA Compliance - Must</li>
              <li>writing Copy decks, technical documents, including SOPs, </li>
              <li>
                User manuals for developed software, API documentations, Mobile
                Application Documentations,
              </li>
              <li>
                ITIL Documentations, Release notes, Research papers, White
                papers,{" "}
              </li>
              <li>
                Knowledge Management documentations & Social media,
                Presentations, Blogs and Web content.,{" "}
              </li>
              <li>
                Ensure brand creation and consistency across all content and
                communication,{" "}
              </li>
              <li>
                Strong communication skills for interacting with all the levels
                of Project organization.{" "}
              </li>
              <li>Ability to work as individual contributor,</li>
              <li>
                Ability to write in a variety of styles and formats for multiple
                audiences and for a variety of media including social, print,
                video, and online
              </li>
            </ul>
           
            <h4 style={{ marginTop: 20 }}>Key Skills</h4>
            <div className={styles.skills}>
              {details.techStack?.map((item) => {
                return (
                  <>
                    <div className={styles.content}>{item}</div>
                  </>
                );
              })}
            </div>
            <div className={styles.line}></div>
          </div>
        </Box>

        <Box w={"35%"} marginLeft={"4%"}>
          <Box
            margin={"auto"}
            w={"100%"}
            boxShadow={" rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            border={"1px solid black"}
            marginTop={"4%"}
          >
            <Box p={"5%"} borderBottom={"1px solid black"}>
              <h4 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Jobs you might be interested in
              </h4>
              <h3>Front-End Developer</h3>
              <Box display={"flex"}>
                <p>Moshi Moshi</p>
                <p>3.6</p>
                
              </Box>
              <Box display={"flex"} marginTop={"2%"} marginBottom={"2%"}>
                <BsFillGeoAltFill />
                <p>Bangalore/Bengaluru</p>
              </Box>
            </Box>

            <Box p={"5%"} borderBottom={"1px solid black"}>
              <h4>Senior React.js Developer | Lead Frontend Developer</h4>
              <h3>4bell Technology</h3>
              <Box display={"flex"} marginTop={"2%"} marginBottom={"2%"}>
                <BsFillGeoAltFill />
                <p>Mumbai</p>
              </Box>
            </Box>
            <Box p={"5%"}>
              <h4>Tracxn - SDE II - Front End - React.js (1-5 yrs)</h4>

              <Box display={"flex"} marginTop={"2%"} marginBottom={"2%"}>
                <p>Tracxn</p>
                <p>3.0</p>
               
              </Box>
              <Box display={"flex"}>
                <BsFillGeoAltFill />
                <p>Bangalore/Bengaluru</p>
              </Box>
            </Box>
          </Box>

          <Box
            margin={"auto"}
            w={"100%"}
            boxShadow={" rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            border={"1px solid black"}
            marginTop={"4%"}
          >
            
           
          </Box>
        </Box>
      </Box>

    
    </>
  );
};