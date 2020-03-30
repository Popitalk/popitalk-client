import React, { useState } from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import styled from "styled-components";
import { Switch, Route } from "react-router";
import Button from "../comp/Button";
import Text from "../comp/Text";
import Input from "../comp/Input";
import ChannelSettingsSidebar from "../comp/ChannelSettingsSidebar";

export default {
  title: "Components",
  decorators: [withKnobs]
};

const Container = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  /* display: grid; */
  /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; */
  /* justify-items: center; */
  /* justify-items: center; */
  /* align-items: center; */
  /* row-gap: 25px; */
  height: 100%;
  padding: 20px;
  background-color: #fff;
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;
const Container2 = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; */
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  justify-items: center;
  justify-items: center;
  align-items: center;
  row-gap: 25px;
  /* gap: 20px; */
`;

// const Container = styled.div`
//   /* display: flex; */
//   /* flex-direction: column; */
//   /* justify-content: center; */
//   /* align-items: center; */
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
//   justify-items: center;
//   align-items: center;
//   row-gap: 25px;
//   padding: 20px;
//   background-color: #fff;
//   /* & > *:not(:last-child) {
//     margin-bottom: 20px;
//   } */
// `;

export const First = () => {
  const [input, setInput] = useState("");

  return (
    <Container>
      <Input size="sm" />
    </Container>
  );
};

export const ChannelSettingsSidebar123 = () => {
  const [input, setInput] = useState("");

  return (
    <Container>
      <Switch>
        <Route path="/">
          <ChannelSettingsSidebar
            tabs={[
              { name: "Channel Settings", link: "/general" },
              { name: "Manage Admins", link: "/admins" },
              { name: "Manage Banned Users", link: "/banned" },
              { name: "Manage Members", link: "/members" }
            ]}
          />
        </Route>
      </Switch>
    </Container>
  );
};
