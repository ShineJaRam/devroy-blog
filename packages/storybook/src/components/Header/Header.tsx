import React, { VFC } from "react";
import styled from "@emotion/styled";

interface HeaderProps {}

const StyledHeader = styled.header``;

export const Header: VFC<HeaderProps> = ({}: HeaderProps) => {
  return <StyledHeader></StyledHeader>;
};
