import Headers from "../components/Headers";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form() {
  const notify = () => {
    toast("User Created!");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      age: "",
      role: "",
      address1: "",
      address2: "",
    },
  });
  const onSubmit = (data) => {
    notify();
    console.log(data);
  };
  return (
    <>
      <Headers title={"CREATE USER"} subtitle={"Create a New User Profile"} />
      <div className="m-7 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="m-auto w-4/5">
            <div className="flex justify-center space-x-4 my-4">
              <input
                required
                placeholder="First name"
                className={`input input-bordered w-full ${
                  errors.firstName ? "input-error bg-red-500/10" : ""
                }`}
                {...register("firstName", {
                  required: "The name please...",
                  maxLength: 20,
                })}
              />
              <input
                required
                placeholder="Last name"
                className={`input input-bordered w-full ${
                  errors.lastName ? "input-error bg-red-500/10" : ""
                }`}
                {...register("lastName", {
                  required: "The last name please...",
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
            </div>
            <div className="flex justify-center space-x-4 my-4">
              <input
                required
                placeholder="E-mail"
                className={`input input-bordered w-full ${
                  errors.email ? "input-error bg-red-500/10" : ""
                }`}
                type="email"
                {...register("email", {
                  required: "The e-mail address please...",
                })}
              />
              <input
                required
                placeholder="Contact number"
                className={`input input-bordered w-full ${
                  errors.phone ? "input-error bg-red-500/10" : ""
                }`}
                type="number"
                {...register("phone", { required: true })}
              />
            </div>
            <div className="flex justify-center space-x-4 my-4">
              <input
                required
                placeholder={errors.age ? errors.age.message : "Age"}
                className={`input input-bordered w-1/2 ${
                  errors.age ? "input-error bg-red-500/10" : ""
                }`}
                type="number"
                {...register("age", {
                  required: "Age must be between 18 and 99",
                  max: 99,
                  min: 18,
                })}
              />
              <select
                required
                {...register("role")}
                className="select select-bordered w-1/2"
              >
                <option value="" disabled>
                  Select role
                </option>
                <option value={"manager"}>Manager</option>
                <option value={"admin"}>Admin</option>
                <option value={"user"}>User</option>
              </select>
            </div>
            <input
              required
              placeholder={
                errors.address1 ? errors.address1.message : "Address line - 1"
              }
              className={`input input-bordered w-full mb-4 ${
                errors.address1 ? "input-error bg-red-500/10" : ""
              }`}
              type="text"
              {...register("address1", {
                required: "Address value must be greater than 15 characters",
                minLength: 15,
              })}
            />
            <input
              placeholder="Address line - 2"
              className="input input-bordered w-full"
              type="text"
              {...register("address2")}
            />
            <div className="flex justify-center mt-6 space-x-4">
              <input
                className="btn btn-primary w-40"
                type="submit"
                value="Complete"
              />
              <input className="btn w-40" type="reset" value="Clear" />
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default Form;
