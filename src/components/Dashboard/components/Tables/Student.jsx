import { Td, Tr } from "@chakra-ui/react";
import React from "react";

export default function Student({ user }) {
  return (
    <Tr>
      <Td>{user.firstName}</Td>
    </Tr>
  );
}
