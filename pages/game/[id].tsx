import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Game = () => {
  const router = useRouter();
  const query = router.query.id;

  console.log(query);

  return <section></section>;
};

export default Game;
