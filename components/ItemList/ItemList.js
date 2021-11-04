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

const ItemList = ({items}) => (
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
      {items?.map( ({item: {id, name, in_stock, unit, restock_soon}}) => (
        <Tr key={id}>
          <Td>{name}</Td>
          <Td>{in_stock} - {unit}</Td>
          <Td>{`${restock_soon ? "Restock!" : "You can wait"}`}</Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
);

export default ItemList;