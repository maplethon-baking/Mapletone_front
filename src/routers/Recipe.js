import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../api";
import { Recipes } from '../components/Recipes'
import { Container, Contents } from "./Home";
export function Recipe() {
  const { isLoading, data } = useQuery(["recipe"], getRecipes);
  console.log(data);
  return <Container>
    <Contents>
      {data &&
        data.map((recipe) => <Recipes recipe={recipe} key={recipe.id} />)}
    </Contents>
  </Container>;
}
