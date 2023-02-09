import React from "react";
import { Button } from "../../components/Forms/Button";
import { Input } from "../../components/Forms/Input";
import {
  Container,
  Title,
  Header,
  Form,
  Fields,
  TransactionsTypes,
} from "./styles";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";
import { CategorySelect } from "../../components/Forms/CategorySelect";

export function Register() {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <TransactionsTypes>
            <TransactionTypeButton type="up" title="Income" />
            <TransactionTypeButton type="down" title="Outcome" />
          </TransactionsTypes>
        <CategorySelect title="Categoria"/>
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
