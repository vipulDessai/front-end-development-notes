import { useForm, SubmitHandler } from "react-hook-form";

interface LoginInputs {
  userNameOrEmail: string;
  passwordOrOtp: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginInputs>();
  const onSubmit: SubmitHandler<LoginInputs> = (data) => console.log(data);

  console.log(watch("userNameOrEmail")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("userNameOrEmail")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("passwordOrOtp", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.passwordOrOtp && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
