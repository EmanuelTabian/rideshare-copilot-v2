import { useForm } from "react-hook-form";

function UpdateCalculatorEntryForm({ calculatorEntry, onClose }) {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  return (
    <form>
      <fieldset>
        <legend>Edit calculator entry</legend>
        <label htmlFor="app_income">App income:</label>
        <input
          type="number"
          {...register("app_income", { required: "This field is required" })}
        />
        <label htmlFor="commission">Commission</label>
        <input type="number" {...register("commission")} />
        <label htmlFor="expenses">Expenses:</label>
        <input type="number" {...register("expenses")} />
        <label htmlFor="earnings">Earnings</label>
        {/* This field will compute the new values and perform a new calculation for the expenses */}
        <input disabled={true} type="number" {...register("earnings")} />
      </fieldset>
    </form>
  );
}

export default UpdateCalculatorEntryForm;
