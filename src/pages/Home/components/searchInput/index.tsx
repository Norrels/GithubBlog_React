import { ChangeEvent } from "react";
import { api } from "../../../../lib/axios";
import { SeachInputContainer, SeachInputContent } from "./style";

interface SearchInput {
  PostAmount : number
  handleSearchInput: (Data: string) => void;
}

export function SearchInput({PostAmount, handleSearchInput} : SearchInput ) {

  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    handleSearchInput(event.target.value);
  }

  return (
    <SeachInputContainer>
      <SeachInputContent>
        <span>
          <h2>Publicações</h2>
          <p>{PostAmount} publicações</p>
        </span>

        <input type="text" name="" id="" placeholder="Buscar conteúdo" onChange={onChangeSearch} />
      </SeachInputContent>
    </SeachInputContainer>
  );
}
