import React from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import Button from "../comp/Button";
import Text from "../comp/Text";
import styled from "styled-components";

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

export const Button123 = () => {
  return (
    <Container>
      <Button size="sm">Hello123</Button>
      <Button size="md">Hello123</Button>
      <Button size="lg">Hello123</Button>
      <Button size="sm" shape="pill">
        Hello123
      </Button>
      <Button size="md" shape="pill">
        Hello123
      </Button>
      <Button size="lg" shape="pill">
        Hello123
      </Button>
      <Button variant="flat" size="sm">
        Hello123
      </Button>
      <Button variant="flat" size="md">
        Hello123
      </Button>
      <Button variant="flat" size="lg">
        Hello123
      </Button>
      <Button icon="globe-americas" variant="icon" size="xs" />
      <Button icon="globe-americas" variant="icon" size="sm" />
      <Button icon="globe-americas" variant="icon" size="md" />
      <Button icon="globe-americas" variant="icon" size="lg" />

      <Button leftIcon="globe-americas" size="sm">
        Hello123
      </Button>
      <Button leftIcon="globe-americas" size="md">
        Hello123
      </Button>
      <Button leftIcon="globe-americas" size="lg">
        Hello123
      </Button>
      <Button rightIcon="globe-americas" size="sm">
        Hello123
      </Button>
      <Button rightIcon="globe-americas" size="md">
        Hello123
      </Button>
      <Button rightIcon="globe-americas" size="lg">
        Hello123
      </Button>

      <Button leftIcon="globe-americas" shape="pill" size="sm">
        Hello123
      </Button>
      <Button leftIcon="globe-americas" shape="pill" size="md">
        Hello123
      </Button>
      <Button leftIcon="globe-americas" shape="pill" size="lg">
        Hello123
      </Button>
      <Button rightIcon="globe-americas" shape="pill" size="sm">
        Hello123
      </Button>
      <Button rightIcon="globe-americas" shape="pill" size="md">
        Hello123
      </Button>
      <Button rightIcon="globe-americas" shape="pill" size="lg">
        Hello123
      </Button>

      <Button variant="flat" leftIcon="globe-americas" shape="pill" size="sm">
        Hello123
      </Button>
      <Button variant="flat" leftIcon="globe-americas" shape="pill" size="md">
        Hello123
      </Button>
      <Button variant="flat" leftIcon="globe-americas" shape="pill" size="lg">
        Hello123
      </Button>
      <Button variant="flat" rightIcon="globe-americas" shape="pill" size="sm">
        Hello123
      </Button>
      <Button variant="flat" rightIcon="globe-americas" shape="pill" size="md">
        Hello123
      </Button>
      <Button variant="flat" rightIcon="globe-americas" shape="pill" size="lg">
        Hello123
      </Button>

      <Button disabled>Hello123</Button>
    </Container>
  );
};

export const Button321 = () => {
  return (
    <Container>
      <Text variant="title1">XL</Text>
      <Container2>
        <Button size="xl" variant="icon" icon="search" background="secondary" />
        <Button size="xl" variant="icon" icon="plus" />
      </Container2>

      {/* -------------------------------------------------------------------------- */
      /*                                     LG                                     */
      /* -------------------------------------------------------------------------- */}

      <Text variant="title1">LG</Text>
      <Container2>
        <Button size="lg">Continue</Button>
        <Button size="lg">Try Demo</Button>
        <Button size="lg">Add to Queue</Button>
        <Button size="lg">Create</Button>
        <Button size="lg">Confirm</Button>
        <Button size="lg">Create New</Button>
        <Button size="lg">Save</Button>
      </Container2>

      {/* -------------------------------------------------------------------------- */
      /*                                     MD                                     */
      /* -------------------------------------------------------------------------- */}

      <Text variant="title1">MD</Text>
      <Container2>
        <Button size="md">Create</Button>
        <Button size="md" leftIcon="plus">
          New Room
        </Button>
        <Button size="md" background="cancel">
          Remove
        </Button>
        <Button size="md" leftIcon="user-plus">
          Add
        </Button>
        <Button size="md" leftIcon="user-check" variant="label">
          Added
        </Button>
        <Button size="md" background="cancel">
          Delete
        </Button>
        <Button size="md" variant="icon" icon="user-plus" />
        <Button size="md" variant="icon" icon="plus" />
        <Button size="md" variant="icon" icon="paper-plane" />
        <Button size="md" variant="icon" icon="share" />
        <Button size="md" variant="icon" icon="search" background="secondary" />
      </Container2>

      {/* -------------------------------------------------------------------------- */
      /*                                     SM                                     */
      /* -------------------------------------------------------------------------- */}

      <Text variant="title1">SM</Text>
      <Container2>
        <Button size="sm">Log In</Button>
        <Button size="sm" shape="pill">
          Follow
        </Button>
        <Button size="sm" shape="pill">
          Reset
        </Button>
        <Button size="sm" background="cancel" shape="pill">
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
        <Button size="sm" variant="label" shape="pill">
          Accepted
        </Button>
        <Button size="sm" variant="icon" icon="search" background="secondary" />
        <Button size="sm" variant="icon" icon="times" background="cancel" />
      </Container2>

      {/* -------------------------------------------------------------------------- */
      /*                                     XS                                     */
      /* -------------------------------------------------------------------------- */}

      {/* <Text variant="title1">XS</Text>
      <Container2>
        <Button size="xs" variant="icon" icon="times" background="cancel" />
      </Container2>

      <Button size="md" variant="flat" color="primaryText">
        Edit
      </Button>
      <Button size="md" variant="flat" color="secondaryText">
        Cancel
      </Button>
      <Button size="sm" variant="flat" color="secondaryText">
        Reset
      </Button>
      <Button size="sm" variant="flat" color="errorText">
        Delete Channel
      </Button> */}
    </Container>
  );
};

// Sizes: xs, sm, md, lg, xl
