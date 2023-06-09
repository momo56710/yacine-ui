import { Input, Button, Box } from "@chakra-ui/react";
import { useState } from "react";

export default function Search({ users, setSearchResults }) {
    const handleSearchChange = (e)=>{
        if(!e.target.value) return setSearchResults(users)
        const resultsArray = users.filter(user => user.firstName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) || user.lastName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
        setSearchResults(resultsArray)
    } 
    const handleSearchChange2 = (e)=>{
        if(!e.target.value) return setSearchResults(users)
        const resultsArray = users.filter(user => user.firstName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) || user.lastName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
        setSearchResults(resultsArray)
    } 
  return (
    <Box display={"flex"} gap={"3em"} padding={"2em 3em"} alignItems={"center"}>
      <Input type="text" placeholder="search on lower case" onChange={handleSearchChange}/>
    </Box>
  );
}
