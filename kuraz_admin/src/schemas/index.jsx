import * as Yup from "yup";
const Passreg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{4,}$");
export const signinSchema = Yup.object({
  email: Yup.string()
    .email("Please Enter valid Email")
    .required("Please enter your Email"),
  //   password: Yup.string().min(4).required("Please enter password"),
  password: Yup.string()
    .matches(Passreg, "please enter valid password")
    .min(4)
    .required("Please enter your password"),
});
