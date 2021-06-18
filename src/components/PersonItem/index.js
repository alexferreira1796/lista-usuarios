import React from "react";
import * as S from "./styles";

function PersonItem({ data, handleDelete }) {
  return (
    <>
      <S.Tr>
        <S.Td data-label="Nome">{data.name}</S.Td>
        <S.Td data-label="E-mail">{data.email}</S.Td>
        <S.Td data-label="Empresa">{data.company.name}</S.Td>
        <S.Td data-label="#">
          <S.Button onClick={() => handleDelete(data.id)}>Excluir</S.Button>
        </S.Td>
      </S.Tr>
    </>
  );
}

export default PersonItem;
