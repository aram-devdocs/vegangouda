import {
  Stack,
  TextField,
  Button,
  MenuItem,
  FormControlLabel,
  Radio,
  Checkbox,
} from '../../../';
import { useState } from 'react';
import { joiResolver } from '@hookform/resolvers/joi';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Joi from 'joi';
import { on } from 'events';

interface InputLine {
  label: string;
  type:
    | 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'tel'
    | 'date'
    | 'time'
    | 'multiline'
    | 'select'
    | 'radio'
    | 'checkbox';
  name: string;
  placeholder?: string;
  options?: string[];
  required?: boolean;
}

interface FormProps {
  schema: Joi.ObjectSchema<any>;
  defaultValues: object;
  questions: InputLine[];
  onSubmit: () => void;
  //   onSubmit: (data: any) => void;
}

export const Form = ({
  schema,
  defaultValues,
  questions,
  onSubmit,
}: FormProps) => {
  // get the type of defaultValues
  type DefaultValues = typeof defaultValues;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<DefaultValues>({
    defaultValues,
    resolver: joiResolver(schema),
  });

  const onSubmitLocal: SubmitHandler<DefaultValues> = (data) => {
    console.log(data);
    onSubmit();
  };

  const getComponent = (question: InputLine) => {
    switch (question.type) {
      case 'text':
        return (
          <Controller
            key={question.name + question.type + 'form_control'}
            name={question.name as keyof DefaultValues}
            control={control}
            render={({
              field: { onChange, value },
              fieldState: { error },
              formState,
            }) => (
              <TextField
                helperText={error ? error.message : null}
                size="small"
                error={!!error}
                onChange={onChange}
                value={value}
                fullWidth
                label={question.label}
                variant="outlined"
              />
            )}
          />
        );
      case 'password':
        return (
          <Controller
            key={question.name + question.type + 'form_control'}
            name={question.name as keyof DefaultValues}
            control={control}
            render={({
              field: { onChange, value },
              fieldState: { error },
              formState,
            }) => (
              <TextField
                helperText={error ? error.message : null}
                size="small"
                error={!!error}
                onChange={onChange}
                value={value}
                fullWidth
                label={question.label}
                variant="outlined"
              />
            )}
          />
        );
      case 'email':
        return (
          <Controller
            key={question.name + question.type + 'form_control'}
            name={question.name as keyof DefaultValues}
            control={control}
            render={({
              field: { onChange, value },
              fieldState: { error },
              formState,
            }) => (
              <TextField
                helperText={error ? error.message : null}
                size="small"
                error={!!error}
                onChange={onChange}
                value={value}
                fullWidth
                label={question.label}
                variant="outlined"
              />
            )}
          />
        );
      case 'number':
        return (
          <Controller
            key={question.name + question.type + 'form_control'}
            name={question.name as keyof DefaultValues}
            control={control}
            render={({
              field: { onChange, value },
              fieldState: { error },
              formState,
            }) => (
              <TextField
                helperText={error ? error.message : null}
                size="small"
                error={!!error}
                onChange={onChange}
                value={value}
                fullWidth
                label={question.label}
                variant="outlined"
              />
            )}
          />
        );
      case 'tel':
        return (
          <Controller
            key={question.name + question.type + 'form_control'}
            name={question.name as keyof DefaultValues}
            control={control}
            render={({
              field: { onChange, value },
              fieldState: { error },
              formState,
            }) => (
              <TextField
                helperText={error ? error.message : null}
                size="small"
                error={!!error}
                onChange={onChange}
                value={value}
                fullWidth
                label={question.label}
                variant="outlined"
              />
            )}
          />
        );
      case 'date':
        return (
          <Controller
            key={question.name + question.type + 'form_control'}
            name={question.name as keyof DefaultValues}
            control={control}
            render={({
              field: { onChange, value },
              fieldState: { error },
              formState,
            }) => (
              <TextField
                helperText={error ? error.message : null}
                size="small"
                error={!!error}
                onChange={onChange}
                value={value}
                fullWidth
                label={question.label}
                variant="outlined"
              />
            )}
          />
        );
      case 'time':
        return (
          <Controller
            key={question.name + question.type + 'form_control'}
            name={question.name as keyof DefaultValues}
            control={control}
            render={({
              field: { onChange, value },
              fieldState: { error },
              formState,
            }) => (
              <TextField
                helperText={error ? error.message : null}
                size="small"
                error={!!error}
                onChange={onChange}
                value={value}
                fullWidth
                label={question.label}
                variant="outlined"
              />
            )}
          />
        );
      case 'multiline':
        return (
          <Controller
            key={question.name + question.type + 'form_control'}
            name={question.name as keyof DefaultValues}
            control={control}
            render={({
              field: { onChange, value },
              fieldState: { error },
              formState,
            }) => (
              <TextField
                helperText={error ? error.message : null}
                size="small"
                error={!!error}
                onChange={onChange}
                value={value}
                multiline
                fullWidth
                label={question.label}
                variant="outlined"
              />
            )}
          />
        );
      case 'select':
        return (
          <Controller
            key={question.name + question.type + 'form_control'}
            name={question.name as keyof DefaultValues}
            control={control}
            render={({
              field: { onChange, value },
              fieldState: { error },
              formState,
            }) => {
              return (
                <TextField
                  helperText={error ? error.message : null}
                  size="small"
                  error={!!error}
                  onChange={onChange}
                  value={value}
                  fullWidth
                  label={question.label}
                  variant="outlined"
                  select
                >
                  {question.options?.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              );
            }}
          />
        );
      case 'radio':
        return (
          <Controller
            key={question.name + question.type + 'form_control'}
            name={question.name as keyof DefaultValues}
            control={control}
            render={({
              field: { onChange, value },
              fieldState: { error },
              formState,
            }) => (
              // TODO: fix this
              //   question.options?.map((option) => (
              //     <FormControlLabel
              //       key={option}
              //       value={option}
              //       control={<Radio />}
              //       label={option}
              //     />
              //   )) || <></>
              <></>
            )}
          />
        );
      case 'checkbox':
        return (
          <Controller
            key={question.name + question.type + 'form_control'}
            name={question.name as keyof DefaultValues}
            control={control}
            render={({
              field: { onChange, value },
              fieldState: { error },
              formState,
            }) => (
              // TODO: fix this
              //   question.options?.map((option) => (
              //     <FormControlLabel
              //       key={option}
              //       value={option}
              //       control={<Checkbox />}
              //       label={option}
              //     />
              //   ))
              <></>
            )}
          />
        );
      default:
        return (
          <Controller
            key={question.name + question.type + 'form_control'}
            name={question.name as keyof DefaultValues}
            control={control}
            render={({
              field: { onChange, value },
              fieldState: { error },
              formState,
            }) => (
              <TextField
                helperText={error ? error.message : null}
                size="small"
                error={!!error}
                onChange={onChange}
                value={value}
                fullWidth
                label={question.label}
                variant="outlined"
              />
            )}
          />
        );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitLocal)}>
      <Stack spacing={2}>
        {questions.map((question) => getComponent(question))}
        <Button type="submit" variant="contained" label="Register" />
      </Stack>
    </form>
  );
};
