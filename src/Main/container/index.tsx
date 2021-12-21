import { VFC, useEffect } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { fetchNewsActions } from "~store/news/newsSlice";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "~store/rootStore";

const Main: VFC = () => {
  const dispatch = useAppDispatch();
  const state = useSelector((state: RootState) => {
    return state.news;
  });

  useEffect(() => {
    // dispatch(fetchNewsActions.getNews());
  }, []);

  return (
    <StyledMain>
      <h1>개발자 임수현의 블로그에 오신 것을 환영합니다.</h1>
      <article style={{ backgroundColor: "#000" }}>
        <p className="text-stroke">about</p>
        <p>{state.isLoading ? "로딩 중" : "로딩 완료"}</p>
        {/* {state.data.map((element, idx) => {
          return <p key={idx}>{element.title}</p>;
        })} */}
      </article>
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.section`
  ${tw`flex justify-center items-center h-full flex-col`}

  .text-stroke {
    font-size: 2rem;
    text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
      1px 1px 0 #fff;

    &:hover {
      color: #fff;
      text-shadow: none;
    }
  }
`;
