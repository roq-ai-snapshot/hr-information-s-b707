import * as yup from 'yup';

export const applicationValidationSchema = yup.object().shape({
  status: yup.string().required(),
  candidate_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
