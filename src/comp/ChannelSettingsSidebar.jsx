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
import { color, space, typography, variant } from "styled-system";
import cssTheme from "@styled-system/css";
import Text from "./Text";
import Box from "./Box";
import Button from "./Button";

// const Box = styled('div')(
//   {
//     boxSizing: 'border-box',
//   },
//   space,
//   layout,
//   color
// )

// const Container = styled.div`
//   display: inline-flex;
//   flex-direction: column;
//   align-items: center;
//   height: 100%;
//   ${cssTheme({
//     backgroundColor: "tertiaryBackground",
//     paddingX: [3, 4],
//     paddingY: [8, 9],
//     borderRadius: "rounded"
//   })}
// `;

// const Tabs = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

const activeLinkClassName = "nav-item-active";

const NavItem = styled(NavLink).attrs({
  activeClassName: activeLinkClassName
})`
  text-decoration: none;

  ${cssTheme({
    display: "flex",
    userSelect: "none",
    userDrag: "none",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    color: "secondaryText",
    borderRadius: "rounded",
    paddingY: 3,
    paddingX: [5, 6],
    "&:hover": {
      color: "primaryText",
      backgroundColor: "quaternaryBackground"
    },
    [`&.${activeLinkClassName}`]: {
      color: "primaryText",
      backgroundColor: "quaternaryBackground"
    }
  })}
  ${space}
`;

export default function ChannelSettingsSidebar({ tabs }) {
  return (
    <Box
      display="inline-flex"
      flexDirection="column"
      alignItems="center"
      backgroundColor="tertiaryBackground"
      paddingX={[3, 4]}
      paddingY={[8, 9]}
      borderRadius="rounded"
      height="100%"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        paddingBottom={8}
        css={cssTheme({
          "& > *:not(:last-child)": {
            marginBottom: "2px"
          }
        })}
      >
        {tabs.map(tab => (
          <NavItem to={tab.link} key={tab.link}>
            <Text variant="text1">{tab.name}</Text>
          </NavItem>
        ))}
      </Box>
      <Button variant="flat" color="errorText" mt="auto">
        Delete Channel
      </Button>
    </Box>
    // <Container>
    //   <Tabs>
    //     {tabs.map(tab => (
    //       <NavItem to={tab.link} key={tab.link}>
    //         <Text variant="text1">{tab.name}</Text>
    //       </NavItem>
    //     ))}
    //   </Tabs>
    // </Container>
  );
}
