import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notification component tests", () => {
  it("Notification component renders without crashing", () => {
    const notification = shallow(<Notifications />);
    expect(notification).toBeDefined();
  });

  it("Notification renders ul", () => {
    const notification = shallow(<Notifications />);
    expect(notification.find("ul")).toBeDefined();
  });

  it("Notification renders three list items", () => {
    const notification = shallow(<Notifications />);
    expect(notification.find("li")).toHaveLength(3);
  });

  it("Notification renders correct text", () => {
    const notification = shallow(<Notifications />);
    expect(notification.find("p").text()).toBe("Here is the list of notifications");
  });
});