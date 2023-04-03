import * as yup from "yup";

const validations = yup.object().shape({
  email: yup
    .string()
    .email("Iltimos to'g'ri yozing.")
    .required("Required field."),
  name: yup
    .string()
    .min(3, "Ism kamida 5 harf bo'lishi kerak.")
    .required("Required field."),
  message: yup
    .string()
    .min(5, "Xabar kamida 5 harf bo'lishi kerak.")
    .required("Required field."),
});

export default validations;
