import { useState } from "react";
import { useForm } from "react-hook-form";

const AddMedication = () => {
  // const [inputs, setInputs] = useState([{ firstName: "", lastName: "" }]);

  // const handleAddInput = () => {
  //   setInputs([...inputs, { firstName: "", lastName: "" }]);
  // };

  // const handleChange = (event, index) => {
  //   let { name, value } = event.target;
  //   let onChangeValue = [...inputs];
  //   onChangeValue[index][name] = value;
  //   setInputs(onChangeValue);
  // };

  // const handleDeleteInput = (index) => {
  //   const newArray = [...inputs];
  //   newArray.splice(index, 1);
  //   setInputs(newArray);
  // };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  };

  return (
    // <div className="container">
    //   {inputs.map((item, index) => (
    //     <div className="input_container" key={index}>
    //       <input
    //         name="firstName"
    //         type="text"
    //         value={item.firstName}
    //         onChange={(event) => handleChange(event, index)}
    //       />
    //       <input
    //         name="lastName"
    //         type="text"
    //         value={item.lastName}
    //         onChange={(event) => handleChange(event, index)}
    //       />
    //       {inputs.length > 1 && (
    //         <button onClick={() => handleDeleteInput(index)}>Delete</button>
    //       )}
    //       {index === inputs.length - 1 && (
    //         <button onClick={() => handleAddInput()}>Add</button>
    //       )}
    //     </div>
    //   ))}

    //   <div className="body"> {JSON.stringify(inputs)} </div>
    // </div>
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        {/* name */}
        <div className="">
          <label className="label">
            <span className="">Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            name="name"
            // placeholder="Name"
            className="input-section"
          />
          {errors.name && <p className="error-message">Name is required</p>}
        </div>

        {/* photo url */}
        <div className="">
          <label className="label">
            <span className="">Photo Url</span>
          </label>
          <input
            type="text"
            {...register("photoUrl")}
            name="photoUrl"
            // placeholder="Name"
            className="input-section"
          />
          {/* {errors.photoUrl && <span className="error-message">Photo is required</span>} */}
        </div>

        {/* email */}
        <div className="">
          <label className="label">
            <span className="">Email</span>
          </label>
          <input
            type="email"
            {...register("email", {
              required: true,
              validate: {
                matchPattern: (v) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                  "Email address must be a valid address",
              },
            })}
            name="email"
            className="input-section"
          />
          {errors.email?.message && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>

        {/* password */}
        <div className="">
          <label className="label">
            <span className="">Password</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: true,

              validate: {
                maxLength: (v) =>
                  v.length >= 8 || "Password should be at least 8 character",
                // matchPattern: (v) =>
                //   /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/.test(v) ||
                //   "Password should contain at least one upper case latter, one lowercase latter and one special character",
              },
            })}
            name="password"
            // placeholder="Name"
            className="input-section"
          />
          <p className="error-message">{errors.password?.message}</p>
        </div>

        <div>
          <input className="btn btn-primary" type="submit" value="Sign Up" />
        </div>
      </form>
    </div>
  );
};

export default AddMedication;
