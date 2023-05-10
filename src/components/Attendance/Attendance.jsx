import {
  Box,
  Heading,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getUsers } from "../api";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
export default function Attendance() {
    const navigate = useNavigate()
  const [users, setUsers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    getUsers()
      .then((json) => {
        setUsers(json.users);
        console.log(json);
        return json;
      })
      .then((json) => {
        setSearchResults(json.users);
      });
  }, []);
  return (
    <Box w={"90%"} margin={"auto"} py={"5em"}>
      <Heading padding={'1em'}>Live Attendance Table Table</Heading>
      <Button margin={'0 2em'} padding={"2em 2em"}>submit Attendence</Button>
      <Search users={users} setSearchResults={setSearchResults} />

      <TableContainer maxH={"20em"} overflowY={"scroll"}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Number</Th>
              <Th>Student Name</Th>
              <Th>ID Card Number</Th>
              <Th>Time Out</Th>
              <Th>Time In</Th>
              <Th>Role</Th>
              
            </Tr>
          </Thead>
          <Tbody>
            {searchResults.map((e) => {
              return (
                <Tr key={e.id}>
                  <Td>{e.id}</Td>
                  <Td>{e.firstName} {e.lastName} </Td>
                  <Td>{e.password} </Td>
                  <Td>{e.phone} </Td>
                  <Td>{e.phone} </Td>
                  <Td>{e.gender} </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
