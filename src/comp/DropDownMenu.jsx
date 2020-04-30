import React from "react";
import styled from "styled-components";
import cssTheme from "@styled-system/css";
import Text from "./Text";
import DropDownContainer from "./DropDownContainer";
import ModalHeader from "./ModalHeader";

const activeLinkClassName = "nav-item-active";

const NavItem = styled.div.attrs({
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
    borderRadius: "rounded",
    paddingY: 3,
    paddingX: [5, 6],
    "&:hover": {
      backgroundColor: "#D3ECFF"
    },
    [`&.${activeLinkClassName}`]: {
      backgroundColor: "#D3ECFF"
    }
  })}
`;

export default function DropDownMenu({ title, handleBack, buttons }) {
  return (
    <DropDownContainer>
      <ModalHeader title={title} handleBack={handleBack} />
      <div className="p-2">
        {buttons.map((b, i) => {
          return (
            <NavItem role="button" onClick={b.onClick} key={i}>
              <Text
                variant="text2"
                className={b.danger ? "text-errorText" : ""}
              >
                {b.text}
              </Text>
            </NavItem>
          );
        })}
      </div>
    </DropDownContainer>
  );
}
