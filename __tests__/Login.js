import React from "react";
import Login from "../components/Login";
import renderer from "react-test-renderer";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { MockedProvider } from '@apollo/react-testing';

test('renders correctly', () => {
  const tree = renderer.create(
    <MockedProvider mocks={[]} addTypename={false}>
      <Login/>
      </MockedProvider>).toJSON();
  expect(tree).toMatchSnapshot();
});
const component = renderer.create(
  <MockedProvider mocks={[]} addTypename={false}>
    <Login />
  </MockedProvider>,
);

// describe("<Login />", () => {
//   context("when new users opens app", () => {
//     it("displays the new user signup", ()=> component.expect());
//   });
//   context("when prev users opens app", () => {
//     it("displays the existing user login");
//   });
//   context("when new user submits sign up", () => {
//     it("returns JSON token and updates login success");
//   });
// });
