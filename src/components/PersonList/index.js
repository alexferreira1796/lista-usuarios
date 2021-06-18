import React from "react";
import * as S from "./styles";

import api from "../../services/api";
import PersonItem from "../PersonItem";

function PersonList() {
  const [loading, setLoading] = React.useState(true);
  const [listUsers, setListUsers] = React.useState([]);

  React.useEffect(() => {
    async function getAllUsers() {
      try {
        const res = await api.get("users");
        const users = res.data.sort(function (a, b) {
          return a.name.localeCompare(b.name);
        });
        setListUsers(users);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getAllUsers();
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm(
      "Você realmente deseja deletar esse usuário?"
    );
    if (confirm) {
      const newList = listUsers.filter((item) => item.id !== id);
      setListUsers(newList);
    }
  };

  if (loading) {
    return <S.Loader />;
  }

  if (listUsers.length <= 0) {
    return <S.H1>Lista vazia</S.H1>;
  }

  return (
    <>
      <S.Table>
        <S.Thead>
          <S.Tr>
            <S.Th scope="col">Nome</S.Th>
            <S.Th scope="col">E-mail</S.Th>
            <S.Th scope="col">Empresa</S.Th>
            <S.Th scope="col"></S.Th>
          </S.Tr>
        </S.Thead>
        <tbody>
          {listUsers.map((item) => {
            return (
              <PersonItem
                data={item}
                handleDelete={handleDelete}
                key={item.id}
              />
            );
          })}
        </tbody>
      </S.Table>
    </>
  );
}

export default PersonList;
