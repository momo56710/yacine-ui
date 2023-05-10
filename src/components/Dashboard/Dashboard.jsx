import React, { useState, useEffect } from "react";
import {
  Box,
  Table,
  TableContainer,
  Th,
  Tr,
  Td,
  Thead,
  Tbody,
  Heading,
} from "@chakra-ui/react";
import Search from "./Search";
import { getUsers } from "../api";
export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
useEffect(()=>{
     getUsers().then(json =>{
      setUsers(json.users)
      console.log(json)
      return json
     }).then(json=>{
        setSearchResults(json.users)
      }
     )
},[])

  return (
    <>
      <Box w={"90%"} margin={"auto"} py={"5em"}>
        <Heading>Students Table</Heading>
        <Search users={users} setSearchResults={setSearchResults} />
        <TableContainer maxH={"20em"} overflowY={"scroll"}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Number</Th>
                <Th>Father Full Name</Th>
                <Th>Full Name</Th>
                <Th>ID Card Number</Th>
                <Th>Parents Email Address</Th>
                <Th>Address</Th>
              </Tr>
            </Thead>
            <Tbody>
              {searchResults.map((e) => {
                return (
                  <Tr key={e.id}>
                    <Td>{e.id}</Td>
                    <Td>{e.firstName}</Td>
                    <Td>{e.lastName} </Td>
                    <Td>{e.password} </Td>
                    <Td>{e.email} </Td>
                    <Td>{e.phone} </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Box w={"90%"} margin={"auto"} py={"5em"}>
        <Heading>Staff Table</Heading>
        <Search users={users} setSearchResults={setSearchResults} />
        <TableContainer maxH={"20em"} overflowY={"scroll"}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Number</Th>
                <Th>Full Name</Th>
                <Th>ID Card Number</Th>
                <Th>Email Address</Th>
                <Th>Address</Th>
                <Th>Gender</Th>
              </Tr>
            </Thead>
            <Tbody>
              {searchResults.map((e) => {
                return (
                  <Tr key={e.id}>
                    <Td>{e.id}</Td>
                    <Td>{e.lastName} </Td>
                    <Td>{e.password} </Td>
                    <Td>{e.email} </Td>
                    <Td>{e.phone} </Td>
                    <Td>{e.gender} </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
