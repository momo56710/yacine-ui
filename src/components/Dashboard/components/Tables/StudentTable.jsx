import React, { useEffect, useState } from "react";

import { Box, Table, Text } from "@chakra-ui/react";
export default function StudentTable({ searchResults }) {
  useEffect(()=>{
    console.log(searchResults.users.map(e=> e.id))
  },[searchResults])
       


  

  // const results = searchResults.users.map(user => <Student key={user.id} user={user}/>)
  // const content = results?.length ? results : <Text>no match</Text>

  return (
    <Box>
      <Table>{/* {results} */}</Table>
    </Box>
  );
}
