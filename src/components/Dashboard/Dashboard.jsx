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
} from "@chakra-ui/react";
import Search from "./Search";

import axios from "axios";
export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => {
        setUsers(res.data.users);
        setSearchResults(res.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(searchResults);
  return (
    <Box w={"80%"} margin={"auto"} py={"5em"}>
      <Search users={users} setSearchResults={setSearchResults} />
      <TableContainer maxH={'20em'} overflowY={'scroll'}>
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
  );
}
