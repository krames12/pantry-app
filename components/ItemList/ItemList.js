import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption
} from "@chakra-ui/react";

const ItemList = ({products}) => (
  <Table variant="simple">
    <TableCaption>A list of currently available items in your pantry</TableCaption>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th># Available</Th>
        <Th>Re-stock soon?</Th>
      </Tr>
    </Thead>
    <Tbody>
      {products.map( ({id, name, inStock, unit, restockSoon}) => (
        <Tr key={id}>
          <Td>{name}</Td>
          <Td>{inStock} - {unit}</Td>
          <Td>{`${restockSoon ? "Restock!" : "You can wait"}`}</Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
);

export default ItemList;