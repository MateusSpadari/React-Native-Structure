import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um endereço de e-mail válido')
    .required('Favor inserir um endereço de e-mail'),
  password: Yup.string()
    .required('Favor inserir o seu password')
    .min(6, 'A senha deve possuir pelo mínino 6 caracteres'),
  name: Yup.string()
    .required('Favor inserir seu nome completo')
    .max(20, 'No máximo 20 caracteres são permitidos')
});