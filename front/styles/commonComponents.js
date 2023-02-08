import styled from "styled-components";

export const RsWrapper = styled.section`
  width: ${(props) => props.width || "100%"};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
