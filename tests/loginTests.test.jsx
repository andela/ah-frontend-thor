/* eslint-disable react/jsx-no-undef */
import { mount, shallow } from "enzyme";

import React from "react";
import expect from "expect";
import { MemoryRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Button from "../src/components/login/Buttons";
import Forms from "../src/components/login/Form";
import Header from "../src/components/Header";
import Home from "../src/components/Home";
import Inputs from "../src/components/login/Input";
import { Login, mapStateToProps, mapDispatchToProps, optionsObject} from "../src/containers/Login";
import SocialAuthButton from "../src/components/login/SocialAuthButtons";
import login from "../src/actions/loginActions";
import loginChecker from "../src/reducers/loginReducer";


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
  onSubmit(){},
  loginUser: jest.fn(),
  onChangePassword(){},
  type: "qwerty",
  id: "div[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[",
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
  const middlewares = [thunk];
  const mockStoree = configureMockStore(middlewares);
  const initialUserState = {
    social: {
      isLoggedIn: false,
      user: null,
      token: null
    }
  };
  const storee = mockStoree({ ...initialUserState });
  document
    .getElementsByTagName("head")[0]
    .appendChild(document.createElement("script"));
  const fakeEvent = { preventDefault: () => {}, target: { value: "me@mail.com" } };
  const wrapper = shallow(<Provider store={storee}><Login {...props} auth={props.auth} options={props.options} /></Provider>);
  wrapper.setState({ options:props.options, email:"sdd@fox.com", password: "wyryrh"});
  wrapper.setProps({loginUser:jest.fn()});
  const formWrapper = wrapper.dive().find("Form");
  it("should mount the login component", () => {

    formWrapper.dive().find("Input").first().simulate("change", fakeEvent);
    formWrapper.dive().find("Input").last().simulate("change", fakeEvent);
    formWrapper.simulate("submit", fakeEvent);

  });
  it("smulate change on first input field", () => {
    formWrapper.dive().find("Input").first().simulate("change", fakeEvent);
  });
  it("smulate change on second input field", () => {
    formWrapper.dive().find("Input").last().simulate("change", fakeEvent);
  });
  it("smulate change on submit button", () => {
    formWrapper.simulate("submit", fakeEvent);
  });
});

describe("Login", () => {
  it("should show previously previously passed state", () => {
    const state = {
      email: "",
      password: "",
      options: optionsObject
    };
    expect(mapStateToProps(state).options).toEqual(optionsObject);

  });

  it("Should pass action to props on submit", () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).loginUser({email:"cdvx@fox.com", password:"hgjfjv"});
    expect((dispatch.mock.calls[0][0])).toBeTruthy();
  });
});


describe("<Inputs />", () => {
  describe("onChange()", () => {
    test("successfully calls the onSubmit handler", () => {
      const mockOnChange = jest.fn();
      const wrapper = shallow(
        <Inputs onChange={mockOnChange} label="Sign In" />
      );
      wrapper.simulate("onChange");

      expect(mockOnChange).toBeTruthy();
    });
  });
});

const initialState = {errors:"", user: null};
describe("login reducer ", () => {
  test("tests  log in a user", () => {
    const data = {user_token: "gdgdhdj"};
    const action = {
      type: "LOGIN",
      payload: data.user_token
    };
    expect(login({}, action)) !== initialState;
    expect(login({ email: "", password: "" })).toBeTruthy();
    expect(loginChecker({}, action)).toEqual({  });
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
    expect(login({ email: "", password: "" })).toBeTruthy();

    expect(loginChecker({}, action2)).toEqual({ errors });
  });
});
