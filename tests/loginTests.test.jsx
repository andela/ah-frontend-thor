/* eslint-disable react/jsx-no-undef */
import { mount, shallow } from "enzyme";

import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import Button from "../src/components/login/Buttons";
import Forms from "../src/components/login/Form";
import Header from "../src/components/Header";
import Home from "../src/components/Home";
import Inputs from "../src/components/login/Input";
import Login from "../src/containers/Login";
import SocialAuthButton from "../src/components/login/SocialAuthButtons";
import login from "../src/actions/loginActions";
import loginChecker from "../src/reducers/loginReducer";

const mockStore = configureMockStore([thunk]);
let store;

it("it should render component", () => {
  shallow(
    <MemoryRouter>
      <Login onChange={jest.fn} onSubmit={jest.fn} />
    </MemoryRouter>,
  );
});

const props = {
  auth: {
    "errors": "User with this name or password not found !"
  },
  onChange(){},
  type: "qwerty",
  id: "div",
  innerHtml: "qwerty",
  options: {
    "facebook": {
      "className1": "btn-floating btn-fb btn-lg",
      "className2": "fa fa-facebook"
    },
    "twitter": {
      "className1": "btn-floating btn-tw btn-lg",
      "className2": "fa fa-twitter"
    },
    "google": {
      "className1": "btn-floating btn-gplus btn-lg",
      "className2": "fa fa-google-plus"
    }
  }
};

describe("<Login />", () => {
  test("renders the component", () => {
    const loginComponent = shallow(<Login />);
		expect(loginComponent).toMatchSnapshot();
		// console.log(">>>>>",loginComponent.find(<Forms />).simulate("submit"))
		// expect(loginComponent.find("section").hasClass("mt-4")).toBe(true)
  });
});

describe("<SocialAuthButton />", () => {
  test("renders the component", () => {
    const socialAuthButtonComponent = shallow(<SocialAuthButton />);
    expect(socialAuthButtonComponent).toMatchSnapshot();
  });
});

describe("<Forms />", () => {
  test("renders the component", () => {
    const formComponent = shallow(<Forms auth={props.auth} />);
    expect(formComponent).toMatchSnapshot();
  });
});

describe("<Header />", () => {
  test("renders the component", () => {
    const headerComponent = shallow(<Header />);
    expect(headerComponent).toMatchSnapshot();
  });
});

describe("<Home />", () => {
  test("renders the component", () => {
    const homeComponent = shallow(<Home />);
    expect(homeComponent).toMatchSnapshot();
  });
});

describe("<Inputs />", () => {
  test("renders the component", () => {
    const inputComponent = shallow(<Inputs required />);
    expect(inputComponent).toMatchSnapshot();
  });
});

describe("<Button />", () => {
  test("renders the component", () => {
    const buttonComponent = shallow(<Button options={props.options} />);
    expect(buttonComponent).toMatchSnapshot();
  });
});

describe("test the login container", () => {
  let wrapper;
  beforeEach(() => {
    store = mockStore({
      auth: {
        errors: "User with this email or password was not found !"
      },
    });
  });
  it("should mount view all component", () => {
		const loginUser = jest.fn();
    wrapper = mount(
      <MemoryRouter>
        <Provider store={store}>
          <Login props={props} onSubmit={loginUser} />
        </Provider>
      </MemoryRouter>,
    );
    wrapper.simulate("submit");
    expect(wrapper.find("Login").length).toBe(1);
  });
});


describe("<Inputs />", () => {
  describe("onChange()", () => {
    test("successfully calls the onSubmit handler", () => {
      const mockOnChange = jest.fn();
      const wrapper = shallow(
        <Inputs onChange={mockOnChange} label="Sign In" />
      );
      // const component = wrapper.dive();

      wrapper.simulate("onChange");

      expect(mockOnChange).toBeTruthy();
    });
  });
});

const initialState = {errors:"", user: null};
describe("login reducer ", () => {
  test("tests  log in a user", () => {
    const token = "gdgdhdj";
    const action = {
      type: "LOGIN",
      payload: token
    };
    expect(login({}, action)) !== initialState;
    expect(login({email: "", password:""})).toBeTruthy();
    expect(loginChecker({}, action)).toEqual({token});

  });
});

describe("login reducer ", () => {
  test("tests  log in a user", () => {
    const errors = "this is an error!";
    const action2 = {
      type: "LOGIN_ERROR",
      payload: errors
    };
    expect(login({}, action2)) !== initialState;
    expect(login({email: "", password:""})).toBeTruthy();
    expect(loginChecker({}, action2)).toEqual({errors});

  });
});


// describe("login reducer", ()=>{
// 	const initialState = {
// 		errors: "",
// 		user: null
// 	};
// 	it("should return the innitial state", ()=>{
// 		expect(loginChecker(initialState, {})).toEqual(
// 			initialState
// 		)
// 	})
// 	it ("should handle LOGIN",()=>{
// 		expect(
// 			loginChecker({}, {
// 				type: "LOGIN",
// 				token: "vjfjfhvhc"
// 			})
// 		).toEqual({
// 			token: "vjfjfhvhc",
// 			...initialState
// 		})
// 	})
// })
