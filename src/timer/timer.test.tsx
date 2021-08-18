import React from "react"
import { shallow, ShallowWrapper} from "enzyme"
import Timer from "./timer"

describe("Timer", () => {
  let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>

  beforeEach(() => (container = shallow(<Timer />)))

  it("should render a <div />", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1)
  })
  it("should render instances of the TimerButton component", () => {
    expect(container.find("TimerButton").length).toEqual(3)
  })
})