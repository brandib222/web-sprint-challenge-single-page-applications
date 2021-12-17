import * as yup from 'yup';

const formSchema = yup.object().shape({
    name:yup
        .string()
        .trim()
        .required('name is required')
        .min(3, 'name has to be at least 2 characters'),
    email:yup
        .string()
        .trim()
        .required('email is required'),
})

export default formSchema;