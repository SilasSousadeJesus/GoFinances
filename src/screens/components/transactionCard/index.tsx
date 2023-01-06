import React from "react";

import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  CategoryName,
  Date,
  Icon,
} from "./styles";

export function TransactionCard() {
  return (
    <Container>
      <Title>Desenvolvimento de Site</Title>
      <Amount>R$ 12.000,00</Amount>
      <Footer>
        <Category>
          <Icon name="dollar-sign" />
          <CategoryName>Vendas</CategoryName>
        </Category>
        <Date>13/04/20223</Date>
      </Footer>
    </Container>
  );
}
