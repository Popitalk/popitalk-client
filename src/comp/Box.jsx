import styled from "styled-components";
import { color, space, layout, position, border, flexbox } from "styled-system";

const Box = styled.div(
  {
    boxSizing: "border-box",
    minWidth: 0
  },
  flexbox,
  space,
  layout,
  color,
  border,
  position
);

export default Box;
