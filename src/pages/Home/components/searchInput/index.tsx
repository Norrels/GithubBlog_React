import { SeachInputContainer, SeachInputContent } from "./style";

interface SearchInput {
  PostAmount : number
}

export function SearchInput({PostAmount} : SearchInput ) {
  return (
    <SeachInputContainer>
      <SeachInputContent>
        <span>
          <h2>Publicações</h2>
          <p>{PostAmount} publicações</p>
        </span>

        <input type="text" name="" id="" placeholder="Buscar conteúdo" />
      </SeachInputContent>
    </SeachInputContainer>
  );
}
