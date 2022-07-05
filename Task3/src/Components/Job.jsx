import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { Icon } from '@chakra-ui/react'
import  {FcRating} from "react-icons/Fc"
import {  Box,Text } from "@chakra-ui/react";
export const Jobs = ({ id, companyName, skill, rating, experience, salary, location, description, date }) => {


    return (
        <>
            <Link to={`/search/${skill}/${id}`}>  
                <Box style={{padding:'10px'}}>
                    <Text style={{fontSize: "20px", fontWeight: "bold"}}>{companyName}</Text>
                    <Text>{skill}</Text>
                    <span>{rating}</span> <Icon as={FcRating} />
                    <Text>{`Require Experience ${experience} months`} </Text>
                    <Text>{`CTC : ${salary}`}</Text>
                    <Text>{`Location ${location}`}</Text>
                    <Text>{description}</Text>
                    <Text>{date}</Text>
                </Box>
            </Link>      
         </>

    )
}