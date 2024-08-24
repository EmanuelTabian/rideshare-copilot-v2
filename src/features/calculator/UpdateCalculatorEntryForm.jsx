import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { useUpdateCalculatorEntry } from "./useUpdateCalculatorEntry";
import { UseCalculator } from "../../context/CalculatorContext";

function UpdateCalculatorEntryForm({ calcEntry }) {
  const {
    income,
    setIncome,
    rideCom,
    setRideCom,
    otherExp,
    setOtherExp,
    netIncome,
  } = UseCalculator();
  const { updateCalculatorEntry, isLoading } = useUpdateCalculatorEntry();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(calcEntry);

    // const payload = { ...data, calcEntry.id };

    // updateCalculatorEntry(payload);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>Edit calculator entry</legend>
        <label htmlFor="app_income">App income:</label>
        <input
          type="number"
          {...register("app_income", { required: "This field is required" })}
          // value={income}
          // onChange={(e) => setIncome(e.target.value)}
        />
        <label htmlFor="commission">Commission</label>
        <input
          type="number"
          {...register("commission")}
          // value={rideCom}
          // onChange={(e) => setRideCom(e.target.value)}
        />
        <label htmlFor="expenses">Expenses:</label>
        <input
          type="number"
          {...register("expenses")}
          // value={otherExp}
          // onChange={(e) => setOtherExp(e.target.value)}
        />
        <label htmlFor="earnings">Earnings:</label>
        <input
          type="number"
          disabled={true}
          // value={netIncome}
          {...register("earnings")}
        />
        <div>
          <Button>Save changes</Button>
        </div>
      </fieldset>
    </form>
  );
}

export default UpdateCalculatorEntryForm;
