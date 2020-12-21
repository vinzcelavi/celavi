import styled from "styled-components";
import { flexDirection, width } from "styled-system";

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${flexDirection};
`;

const GridCell = styled.div`
  display: block;
  ${width};
`;

export { GridCell };
export default Grid;
