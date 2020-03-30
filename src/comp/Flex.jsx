import React from "react";
import { useDispatch } from "react-redux";
import {
  NavLink,
  useRouteMatch,
  useLocation,
  useParams
} from "react-router-dom";
import scm from "styled-components/macro";
import styled from "styled-components";
import { color, space, layout, variant, flexbox } from "styled-system";
import cssTheme from "@styled-system/css";
import Text from "./Text";
import Box from "./Box";
import Button from "./Button";

const Flex = styled.div`


${space}
${layout}
${color}
${flexbox}
`;

export default Flex;
