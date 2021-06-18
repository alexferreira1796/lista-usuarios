import React from "react";
import * as S from "./styles/global";

import Header from "./components/Header";
import PersonList from "./components/PersonList";

function App() {
  return (
    <>
      <S.Global />
      <S.Container>
        <Header />
        <PersonList />
      </S.Container>
    </>
  );
}

export default App;
