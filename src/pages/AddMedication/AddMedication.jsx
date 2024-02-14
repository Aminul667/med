import { useFieldArray, useForm } from "react-hook-form";

const AddMedication = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    // reset,
  } = useForm();

  const {
    fields: medicationFields,
    append: appendMedication,
    remove: removeMedication,
  } = useFieldArray({
    control: control,
    name: "medications",
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("Your Form has been submitted");
    // reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-[50%] mx-auto p-6 bg-white shadow-md rounded-md mb-5"
    >
      <div className="mb-4">
        <label
          htmlFor="firstName"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          {...register("firstName")}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="lastName"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          {...register("lastName")}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="age"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Age:
        </label>
        <input
          type="number"
          id="age"
          {...register("age")}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      {medicationFields.map((medicationField, index) => (
        <div key={medicationField.id} className="mb-4 flex gap-5">
          <div className="flex-grow">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor={`medications[${index}].name`}
            >
              Medication Name:
            </label>
            <input
              type="text"
              {...register(`medications[${index}].name`, {
                required: "Medication Name is required",
              })}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
            />
            {errors?.medications?.[index]?.name && (
              <p className="text-red-500 text-xs mt-1">
                {errors.medications[index].name.message}
              </p>
            )}
          </div>

          <div className="flex-grow">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor={`medications[${index}].dosage`}
            >
              Dosage:
            </label>
            <input
              type="text"
              {...register(`medications[${index}].dosage`, {
                required: "Dosage is required",
              })}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
            />
            {errors?.medications?.[index]?.dosage && (
              <p className="text-red-500 text-xs mt-1">
                {errors.medications[index].dosage.message}
              </p>
            )}
          </div>

          <div className="flex-grow">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor={`medications[${index}].duration`}
            >
              Duration:
            </label>
            <input
              type="text"
              {...register(`medications[${index}].duration`, {
                required: "Duration is required",
              })}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
            />
            {errors?.medications?.[index]?.duration && (
              <p className="text-red-500 text-xs mt-1">
                {errors.medications[index].duration.message}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={() => removeMedication(index)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      ))}
      <div className="mb-2">
        <button
          type="button"
          onClick={() =>
            appendMedication({ name: "", dosage: "", duration: "" })
          }
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Add Medication
        </button>
      </div>
      <div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddMedication;
