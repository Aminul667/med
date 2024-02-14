import { useFieldArray, useForm } from "react-hook-form";

const AddMedication = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
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
      {medicationFields.map((medicationField, index) => (
        <div key={medicationField.id} className="mb-4">
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

          <button
            type="button"
            onClick={() => removeMedication(index)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => appendMedication({ name: "", dosage: "", duration: "" })}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Medication
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
