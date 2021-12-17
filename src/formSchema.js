import * as yup from 'yup';

const formSchema = yup.object().shape({
    name:yup
        .string()
        .trim()
        .required('name is required')
        .min(2, 'name must be at least 2 characters'),
    email:yup
        .string()
        .trim()
        .required('email is required'),
    special:yup
        .string()
        .trim()
        .required('instructions are required'),
})

export default formSchema;