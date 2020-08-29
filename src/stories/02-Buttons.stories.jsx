import React from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import Button from "../comp/Controls/Button";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default {
  title: "Buttons",
  component: Button,
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
  padding: 20px;
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;
const Container2 = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; */
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  justify-items: center;
  align-items: center;
  row-gap: 25px;
  /* gap: 20px; */
`;

export const ButtonStyles = () => {
  return (
    <Container>
      <h4 className="text-2xl text-secondaryText">Regular</h4>
      <br></br>
      <Container2>
        <Button>Continue</Button>
        <Button>Try Demo</Button>
        <Button>Add to Queue</Button>
        <Button>Create</Button>
        <Button>Confirm</Button>
        <Button>Create New</Button>
        <Button>Save</Button>
        <Button>Create</Button>
        <Button leftIcon="plus">New Room</Button>
        <Button background="cancel">Remove</Button>
        <Button leftIcon="user-plus">New Room</Button>
        <Button leftIcon="user-check" disabled={true}>
          Added
        </Button>
        <Button background="cancel">Delete</Button>
      </Container2>
      <br></br>
      <h4 className="text-2xl text-secondaryText">Round</h4>
      <br></br>
      <Container2>
        <Button icon="user-plus" />
        <Button icon="plus" />
        <Button icon="paper-plane" />
        <Button icon="share" />
        <Button icon="search" background="secondary" />
        <Button icon="times" background="cancel" />
      </Container2>
      <br></br>
      <h4 className="text-2xl text-secondaryText">Pill</h4>
      <br></br>
      <Container2>
        <Button size="sm" shape="pill">
          Log In
        </Button>
        <Button size="sm" shape="pill">
          Follow
        </Button>
        <Button size="sm" shape="pill">
          Reset
        </Button>
        <Button size="sm" shape="pill" background="cancel">
          Remove
        </Button>
        <Button size="sm" shape="pill">
          Create
        </Button>
        <Button size="sm" shape="pill">
          Invite
        </Button>
        <Button size="sm" shape="pill">
          Accept
        </Button>
        <Button size="sm" shape="pill" disabled={true}>
          Accepted
        </Button>
      </Container2>
    </Container>
  );
};
