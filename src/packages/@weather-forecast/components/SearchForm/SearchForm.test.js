import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../store';
import { reset, setLocations } from '../../actions';
import Com from './index';
import { locations } from '../../mock';

const App = () => {
  return (
    <Provider store={store}>
      <Com />
    </Provider>
  );
};

test('renders SearchForm', () => {
  store.dispatch(reset());
  render(<App />);
});

test('enters location SearchForm', () => {
  store.dispatch(reset());
  render(<App />);
  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'test' } });
});

test('submits SearchForm', () => {
  store.dispatch(reset());
  store.dispatch(setLocations(locations));
  render(<App />);
  fireEvent.mouseDown(screen.getByRole('combobox'));
  fireEvent.click(screen.getByText(locations[0].title));
});
