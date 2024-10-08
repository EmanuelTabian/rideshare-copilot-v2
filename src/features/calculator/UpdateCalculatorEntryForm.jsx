import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { useUpdateCalculatorEntry } from "./useUpdateCalculatorEntry";
import { useTableCalculator } from "../../context/TableCalculatorContext";
import styled from "styled-components";

const StyledButton = styled.button`
  margin: 8px;
  padding: 0.44rem 0.8rem;
  border: none;
  border-radius: 10px 10px 10px 10px;
  font-size: 0.75rem;
  font-weight: 900;
  cursor: pointer;
  position: relative;
  display: inline;
  background-color: white;

  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-grey-400);
  }
  @media (min-width: 480px) {
    font-size: 1rem;
  }
`;
const StyledContainer = styled.div`
  padding: 16px;
  border-radius: 16px;
  background-color: rgba(10, 146, 69, 0.8);
  color: white;
  font-size: 0.8rem;
`;

const StyledForm = styled.form`
  div {
    padding: 0.5rem;
    display: grid;
    grid-template-columns: 5rem 1fr;
    gap: 1rem;
  }

  fieldset {
    border-radius: 10px;
    border: none;
    padding: 0;
    margin: 0;
  }
  legend {
    padding-bottom: 8px;
    text-align: center;
    font-size: 1rem;

    @media (max-width: 480px) {
      font-size: 0.75rem;
    }
  }
  input,
  textarea {
    border: none;
    border-radius: 4px;
  }
  input[type="submit"] {
    padding: 4px 32px;
    border-radius: 32px;
    font-weight: 900;
    transition: background-color 0.2s;
  }
  div:last-of-type {
    display: flex;
    justify-content: center;
  }
`;

function UpdateCalculatorEntryForm({ calcEntry, onCloseModal }) {
  const { id, app_income, commission, expenses, earnings } = calcEntry;

  const {
    income: calcIncome,
    commission: calcCommission,
    expenses: calcExpenses,
    earnings: calcEarnings,
    dispatch,
  } = useTableCalculator();

  const { updateCalculatorEntry, isLoading } = useUpdateCalculatorEntry();
  const { register, handleSubmit, reset, setValue, formState } = useForm();

  const { errors } = formState;

  function onSubmit(data) {
    const payload = { ...data, id };
    console.log(payload);

    updateCalculatorEntry(payload, {
      onSuccess: () => {
        reset();
        dispatch({ type: "resetState" });
        onCloseModal?.();
      },
    });
  }

  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Edit calculator entry</legend>
          <div>
            <label htmlFor="app_income">App income:</label>
            <input
              type="number"
              {...register("app_income", {
                required: "This field is required",
              })}
              value={calcIncome}
              onChange={(e) =>
                dispatch({
                  type: "setIncome",
                  payload: +e.target.value ? +e.target.value : "",
                })
              }
            />
          </div>
          <div>
            <label htmlFor="commission">Commission</label>
            <input
              type="number"
              {...register("commission")}
              value={calcCommission}
              onChange={(e) =>
                dispatch({
                  type: "setCommission",
                  payload: +e.target.value ? +e.target.value : "",
                })
              }
            />
          </div>
          <div>
            <label htmlFor="expenses">Expenses:</label>
            <input
              type="number"
              {...register("expenses")}
              value={calcExpenses}
              onChange={(e) =>
                dispatch({
                  type: "setExpenses",
                  payload: +e.target.value ? +e.target.value : "",
                })
              }
            />
          </div>
          <div>
            <label htmlFor="earnings">Earnings:</label>
            <input
              type="number"
              disabled={true}
              {...register("earnings")}
              value={calcEarnings}
              onChange={setValue("earnings", calcEarnings)}
            />
          </div>
          <div>
            <StyledButton>Save changes</StyledButton>
          </div>
        </fieldset>
      </StyledForm>
    </StyledContainer>
  );
}

export default UpdateCalculatorEntryForm;
