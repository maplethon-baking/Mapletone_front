import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../api";
import { RecipeCard } from '../components/RecipeCard'
import { Container, Contents } from "./Home";
export function Recipe() {
  const { isLoading, data } = useQuery(["recipe"], getRecipes);
  return <Container>
    <Contents>
      {data &&
        data.map((recipes) => <RecipeCard recipes={recipes} key={recipes.id} />)}
    </Contents>
  </Container>;
}
