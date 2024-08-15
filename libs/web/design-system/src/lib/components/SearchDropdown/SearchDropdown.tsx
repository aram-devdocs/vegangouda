import { forwardRef, useRef } from 'react';
import { mergeRefs } from 'react-merge-refs';
import {
  Autocomplete,
  AutocompleteProps,
} from '../../core/Autocomplete/Autocomplete';
import { TextField } from '../../core/TextField/TextField';
import { InputAdornment } from '../../core/Input/Input';
import { MagnifyingGlassIcon } from '../../icons';
import { Button } from '../../core/Button/Button';

export interface SearchDropdownProps
  extends Omit<
    AutocompleteProps<string, false, false, true>,
    'onChange' | 'renderInput' | 'onInputChange' | 'options' | 'value'
  > {
  label?: string;
  maxLength?: number;
  /** @default 2 */
  minimumCharacters?: number;
  /** @default false */
  required?: boolean;
  /** @default false */
  autoFocus?: boolean;
  error?: boolean;
  helperText?: string;
  onChange?: (value: string) => void;
  onInputChange?: (value: string) => void;
  options?: Array<{
    value: string;
    label: string;
  }>;
  value?: string | null;
}

export const SearchDropdown = forwardRef<HTMLInputElement, SearchDropdownProps>(
  (
    {
      label,
      maxLength,
      minimumCharacters = 2,
      required,
      autoFocus = false,
      onChange,
      onInputChange,
      placeholder,
      options = [],
      error,
      helperText,
      value = '',
      noOptionsText,
      ...restProps
    },
    ref
  ) => {
    const searchRef = useRef<HTMLInputElement>(null);

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
      if (event.code === 'Escape') {
        searchRef.current?.blur();
      }
    }

    return (
      <Autocomplete
        sx={{
          '.MuiFormControl-root > .MuiAutocomplete-inputRoot': {
            padding: 0,
            '> input': {
              paddingY: '15px',
              paddingX: 2,
              minHeight: 26,
            },
            '> .MuiInputAdornment-positionEnd': {
              marginBottom: 0,
              marginRight: 2,
            },
          },
        }}
        options={options}
        disableClearable
        filterOptions={(options, { inputValue }) => {
          if (inputValue.length >= minimumCharacters) {
            return options.filter((option) =>
              option.label.toLowerCase().includes(inputValue.toLowerCase())
            );
          }
          return options;
        }}
        onChange={(_event, newValue) => {
          onChange?.(newValue?.value || '');
        }}
        getOptionLabel={(value) => {
          return options.find((opt) => opt.value === value.value)?.label || '';
        }}
        // onKeyDown={handleKeyDown} TODO: Fix
        onKeyDown={() => {
          console.log('TODO: Fix search dropdown onKeyDown');
        }}
        noOptionsText={noOptionsText}
        value={
          options.find((opt) => opt.value === value) || { value: '', label: '' }
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            placeholder={placeholder}
            inputRef={mergeRefs([searchRef, ref])}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    icon={<MagnifyingGlassIcon />}
                    tooltip="Search"
                    variant="text"
                    size="small"
                    type="button"
                    label="search"
                  />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    );
  }
);
