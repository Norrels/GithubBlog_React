import { SeachInputContainer, SeachInputContent } from "./style";

export function SearchInput() {
  return (
    <SeachInputContainer>
      <SeachInputContent>
        <span>
          <h2>Publicações</h2>
          <p>6 publicações</p>
        </span>

        <input type="text" name="" id="" placeholder="Buscar conteúdo" />
      </SeachInputContent>
    </SeachInputContainer>
  );
}
