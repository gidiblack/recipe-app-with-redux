import React from "react";
import Header from "./Header";
import { mount, shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { MemoryRouter } from "react-router";

configure({ adapter: new Adapter() }); // configure configures the Adapter

// with shallow render you can search for the React component tag because no DOM is rendered
it("Contains 3 NavLinks", () => {
  const numLinks = shallow(<Header />).find("NavLink").length;
  expect(numLinks).toEqual(3);
});

// with mount you have to search for the final HTML Element since it generates a DOM
// React's MemoryRouter beacuse testing headers expects to have React Router's props passed in

it("Contains 3 anchors via mount", () => {
  const numAnchors = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ).find("a").length;

  expect(numAnchors).toEqual(3);
});
