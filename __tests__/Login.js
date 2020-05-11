import React from "react";
import Login from "../components/Login";
import Adapter from 'enzyme-adapter-react-16';
import renderer from "react-test-renderer";
import { configure, shallow } from 'enzyme';

configure({ adapter: new Adapter() });

describe("component testing for <login>", () => {
  test("<Login> renders", () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('input email fields updates state', ()=> {
	const instanceOf = renderer.create(<Login/>).getInstance()
	instanceOf.changeEmailField('someEmail');
	expect(instanceOf.state.email).toEqual('someEmail');
  })
  test('input password fields updates state', ()=> {
	const instanceOf = renderer.create(<Login/>).getInstance()
	instanceOf.changePassField('somePass');
	expect(instanceOf.state.password).toEqual('somePass');
  })

  
});
