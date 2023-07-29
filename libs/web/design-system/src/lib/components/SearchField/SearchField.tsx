import { forwardRef, useEffect, useRef, useState } from 'react'
import { mergeRefs } from 'react-merge-refs'
import { Autocomplete, AutocompleteProps } from '../../core/Autocomplete/Autocomplete'
import { Button } from '../../core/Button/Button'
import { TextField } from '../../core/TextField/TextField'
import { InputAdornment } from '../../core/Input/Input'
import { MagnifyingGlassIcon } from '../../icons'

export interface SearchFieldProps
  extends Omit<
    AutocompleteProps<string, false, false, true>,
    'onChange' | 'renderInput' | 'onInputChange'
  > {
  label?: string
  maxLength?: number
  /** @default 2 */
  minimumCharacters?: number
  /** @default false */
  required?: boolean
  /** @default false */
  autoFocus?: boolean
  error?: boolean
  helperText?: string
  onChange?: (value: string) => void
  onInputChange?: (value: string) => void
  /** @default 'standard' */
  variant?: 'standard' | 'outlined'
  disablePadding?: boolean
}

export const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
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
      options,
      error,
      helperText,
      value,
      variant = 'standard',
      disablePadding,
      ...restProps
    },
    ref,
  ) => {
    const searchRef = useRef<HTMLInputElement>(null)
    const [showOptions, setShowOptions] = useState(false)
    const [valueOnChange, setValueOnChange] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [filteredOptions, setFilteredOptions] = useState(options)

    useEffect(() => {
      if (searchRef && autoFocus) {
        searchRef.current?.querySelector('input')?.focus()
      }
    }, [])

    function handleShowOptions(value: string) {
      setShowOptions(value.length >= minimumCharacters)
    }

    const handleOnChangeAutocomplete = (
      e: React.SyntheticEvent<Element, Event>,
      value: string | null,
    ) => {
      if (e.type === 'click') handleChange(value || '')
    }

    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.code === 'Enter') {
        const { value } = e.target as HTMLInputElement
        handleChange(value)
      }
    }

    const handleChange = (value: string) => {
      setIsOpen(!isOpen)

      if (value !== valueOnChange) {
        onChange?.(value)
        setValueOnChange(value)
        handleShowOptions(value)
      }
    }

    const filterOptions = (value: string) => {
      const newFilteredOptions = options.filter(option =>
        option.toLowerCase().includes(value.toLowerCase()),
      )

      setFilteredOptions(newFilteredOptions)
    }

    return (
      <Autocomplete
        freeSolo
        {...restProps}
        options={showOptions ? filteredOptions : []}
        onInputChange={(e, value) => {
          onInputChange?.(value)
          handleShowOptions(value)
          filterOptions(value)
        }}
        open={isOpen}
        onChange={(e, value) => {
          handleOnChangeAutocomplete(e, value)
          handleShowOptions(value || '')
        }}
        sx={{
          '&.MuiAutocomplete-hasClearIcon .MuiAutocomplete-inputRoot': {
            paddingRight: 0,
            paddingBottom: disablePadding || label ? undefined : 1.75,
          },
        }}
        value={value}
        renderInput={params => (
          <TextField
            {...params}
            defaultValue={restProps.defaultValue}
            label={label}
            maxLength={maxLength}
            ref={searchRef}
            placeholder={placeholder}
            error={error}
            helperText={helperText}
            value={value}
            variant={variant}
            sx={{
              '.MuiInput-root': {
                paddingBottom: label ? undefined : 1.75,
              },
            }}
            required={required}
            onKeyDown={handleOnKeyDown}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <InputAdornment position="end" sx={{ paddingRight: 2 }}>
                  <Button
                    icon={<MagnifyingGlassIcon fontSize="inherit" />}
                    tooltip="Search"
                    variant="outlined"
                    type="button"
                    corners="rounded"
                    label="search"
                    disabled={!showOptions || filteredOptions.length === 0}
                    onClick={() => handleChange(searchRef.current?.value || '')}
                    onMouseDown={e => e.preventDefault()}
                  />
                </InputAdornment>
              ),
            }}
            inputRef={mergeRefs([searchRef, ref])}
          />
        )}
      />
    )
  },
)
