import * as Yup from 'yup';

export const validationSchema = Yup.object({
  title: Yup.string()
    .max(20, 'Darf maximal 20 Zeichen lang sein')
    .required('Pflichfeld!'),
});
