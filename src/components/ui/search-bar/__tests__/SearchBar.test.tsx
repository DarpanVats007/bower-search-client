import { SearchBar, SearchBarProps } from '../SearchBar';
import { fireEvent, render, screen } from '@testing-library/react';

describe('SearchBar Component', () => {
  const mockOnSearch = jest.fn();
  const mockTextModel = {
    placeholderText: 'Search for a module...',
  };

  const defaultProps: SearchBarProps = {
    onSearch: mockOnSearch,
    textModel: mockTextModel,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders with the correct placeholder text', () => {
    render(<SearchBar {...defaultProps} />);
    
    const inputElement = screen.getByPlaceholderText(mockTextModel.placeholderText);
    expect(inputElement).toBeInTheDocument();
  });

  test('calls onSearch with the correct query when input changes', () => {
    render(<SearchBar {...defaultProps} />);
    
    const inputElement = screen.getByPlaceholderText(mockTextModel.placeholderText);
    
    fireEvent.change(inputElement, { target: { value: 'react' } });
    
    expect(mockOnSearch).toHaveBeenCalledWith('react');
  });

  test('updates the input value as the user types', () => {
    render(<SearchBar {...defaultProps} />);
    
    const inputElement = screen.getByPlaceholderText(mockTextModel.placeholderText);
    
    fireEvent.change(inputElement, { target: { value: 'react' } });
    
    expect(inputElement).toHaveValue('react');
  });
});
