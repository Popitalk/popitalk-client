import React from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import Button from "../comp/Button";
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
  align-items: center;
  row-gap: 25px;
  /* gap: 20px; */
`;

export const Button321 = () => {
  return (
    <Container>
      <h4 className="text-2xl">SM</h4>

      <Container2>
        <Button size="xl" icon="search" background="secondary" />
        <Button size="xl" icon="plus" />
      </Container2>

      <h4 className="text-2xl">SM</h4>

      <Container2>
        <Button size="lg">Continue</Button>
        <Button size="lg">Try Demo</Button>
        <Button size="lg">Add to Queue</Button>
        <Button size="lg">Create</Button>
        <Button size="lg">Confirm</Button>
        <Button size="lg">Create New</Button>
        <Button size="lg">Save</Button>
      </Container2>

      <h4 className="text-2xl">SM</h4>

      <Container2>
        <Button>Create</Button>
        <Button leftIcon="plus">New Room</Button>
        <Button background="cancel">Remove</Button>
        <Button leftIcon="user-plus">New Room</Button>
        <Button leftIcon="user-check" disabled={true}>
          Added
        </Button>
        <Button background="cancel">Delete</Button>
        <Button icon="user-plus" />
        <Button icon="plus" />
        <Button icon="paper-plane" />
        <Button icon="share" />
        <Button icon="search" background="secondary" />
      </Container2>

      <h4 className="text-2xl">SM</h4>

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
        <Button size="sm" icon="search" background="secondary" />
        <Button size="sm" icon="times" background="cancel" />
      </Container2>
    </Container>
  );
};
