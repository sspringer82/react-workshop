import { ReactElement } from 'react';
import { InputRecipe } from '../shared/Recipe';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import useForm from './useForm';
import { validationSchema } from './schema';
import './Form.css';

const initialRecipe: InputRecipe = {
  title: '',
  steps: [],
  ingredients: [],
};

const Form = (): ReactElement => {
  const handleSubmit = useForm();

  return (
    <Formik
      initialValues={initialRecipe}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, touched }) => {
        return (
          <FormikForm>
            <label>
              Titel:
              <Field type="text" name="title" />
              <ErrorMessage
                name="title"
                render={(error: string) => <div className="error">{error}</div>}
              />
            </label>

            <div>
              <button>speichern</button>
            </div>
          </FormikForm>
        );
      }}
    </Formik>
  );
};

export default Form;
