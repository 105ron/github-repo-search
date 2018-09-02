import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Autocomplete from 'react-autocomplete';
import SearchInput from './SearchInput';

configure({ adapter: new Adapter() });

describe('<SearchInput />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchInput />);
  });

  it('should render an <Autocomplete /> component', () => {
    expect(wrapper.find(Autocomplete)).toHaveLength(1);
  });

  it('should initiate will an empty searchTerm', () => {
    expect(wrapper.state('searchTerm')).toEqual('');
  });

  it('should render a disabled button when first loaded', () => {
    expect(wrapper.find('.button').prop('disabled')).toBe(true);
  });

  it('should enable the button when user changes input field', () => {
    wrapper.setState({ searchTerm: 'bar' });
    expect(wrapper.find('.button').prop('disabled')).toBe(false);
  });
});