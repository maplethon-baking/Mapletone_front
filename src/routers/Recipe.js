import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../api";
import { RecipeCard } from '../components/RecipeCard'
import { Container, Contents } from "./Home";
export function Recipe() {
  const { isLoading, data } = useQuery(["recipe"], getRecipes);
  console.log(data);
  return <Container>
    <Contents>
      {data &&
        data.map((recipe) => <RecipeCard recipe={recipe} key={recipe.id} />)}
    </Contents>
  </Container>;
}
