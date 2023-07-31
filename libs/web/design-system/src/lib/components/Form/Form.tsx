import {
  Stack,
  TextField,
  Button,
  MenuItem,
  FormControlLabel,
  Radio,
  Checkbox,
} from '../../../';
import { joiResolver } from '@hookform/resolvers/joi';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Joi from 'joi';

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
  onSubmit: (data: any) => void;
}

const controllerGlobalSx = {
  // global styles for all rendered inputs
};

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
    onSubmit(data);
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
                sx={{
                  ...controllerGlobalSx,
                }}
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
                sx={{
                  ...controllerGlobalSx,
                }}
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
                sx={{
                  ...controllerGlobalSx,
                }}
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
                sx={{
                  ...controllerGlobalSx,
                }}
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
                sx={{
                  ...controllerGlobalSx,
                }}
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
                sx={{
                  ...controllerGlobalSx,
                }}
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
                sx={{
                  ...controllerGlobalSx,
                }}
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
                sx={{
                  ...controllerGlobalSx,
                }}
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
                  sx={{
                    ...controllerGlobalSx,
                  }}
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
                sx={{
                  ...controllerGlobalSx,
                }}
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
