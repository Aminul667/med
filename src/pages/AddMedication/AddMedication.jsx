import { useFieldArray, useForm } from "react-hook-form";

const AddMedication = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    control: control,
    name: "inputFields",
  });

  const onSubmit = (data) => {
    console.log(data);
    // Here you can handle form submission, like sending data to a server
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md"
    >
      <div className="mb-4">
        <label
          htmlFor="additionalField"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Additional Field:
        </label>
        <input
          type="text"
          id="additionalField"
          {...register("additionalField")}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      {fields.map((field, index) => (
        <div key={field.id} className="mb-4 flex items-center">
          <label
            htmlFor={`firstName${index}`}
            className="block text-gray-700 text-sm font-bold mb-2 mr-2"
          >
            First Name:
          </label>
          <input
            type="text"
            {...register(`inputFields.${index}.firstName`, {
              required: "First Name is required",
            })}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
          />
          {errors?.inputFields?.[index]?.firstName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.inputFields[index].firstName.message}
            </p>
          )}
          <button
            type="button"
            onClick={() => remove(index)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => append({ firstName: "" })}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add
      </button>
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
      >
        Submit
      </button>
    </form>
  );
};

export default AddMedication;
