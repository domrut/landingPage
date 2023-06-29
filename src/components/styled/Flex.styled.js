import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: ${({justifyContent}) => justifyContent || "normal"};
  flex-direction: ${({flexDirection}) => flexDirection || "row"};
`;