import { VFC, useEffect } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { fetchDataActions } from "~store/fetchDataSlice";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "~store/configureStore";
import * as process from "process";

const StyledMain = styled.section`
  ${tw`flex justify-center items-center h-full flex-col`}
`;

const Main: VFC = () => {
  const dispatch = useAppDispatch();
  const state = useSelector((state: RootState) => {
    return state.data;
  });

  useEffect(() => {
    dispatch(fetchDataActions.getData());
  }, []);

  console.log("데이터 최종 확인", state);
  console.log(process.env.NEXT_PUBLIC_API_KEY);

  return (
    <StyledMain>
      <h1>개발자 임수현의 블로그에 오신 것을 환영합니다.</h1>
      <article>
        <p>이곳은 제가 개발하면서 배우고 익힌 것들을 연습하는 공간입니다.</p>
        <p>{state.isLoading ? "로딩 중" : "로딩 완료"}</p>
        {state.data.map((element, idx) => {
          return <p key={idx}>{element.title}</p>;
        })}
      </article>
    </StyledMain>
  );
};

export default Main;
