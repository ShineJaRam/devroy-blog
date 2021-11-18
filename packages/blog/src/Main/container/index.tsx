import styled from "@emotion/styled";
import tw from "twin.macro";

const StyledMain = styled.section`
  ${tw`flex justify-center items-center h-full flex-col`}
`;

const Main = () => {
  return (
    <StyledMain>
      <h1>개발자 임수현의 블로그에 오신 것을 환영합니다.</h1>
      <article>
        <p>이곳은 제가 개발하면서 배우고 익힌 것들을 연습하는 공간입니다.</p>
      </article>
    </StyledMain>
  );
};

export default Main;
