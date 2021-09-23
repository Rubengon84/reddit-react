
import App from './app/App';
import {shallow} from 'enzyme';

it("renders correctly", () => {
  const wrapper = shallow(
    <App />
  );
  expect(wrapper).toMatchSnapshot();
});

