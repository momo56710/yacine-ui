import { Input, Button, Box } from "@chakra-ui/react";

export default function Search({ users, setSearchResults }) {
    const handleSearchChange = (e)=>{
        if(!e.target.value) return setSearchResults(users)
        const resultsArray = users.filter(user => user.firstName.toLocaleLowerCase().includes(e.target.value))
        setSearchResults(resultsArray)
    } 
  return (
    <Box display={"flex"} gap={"3em"} padding={"2em 3em"} alignItems={"center"}>
      <Input type="text" placeholder="search on lower case" onChange={handleSearchChange}/>
    </Box>
  );
}
