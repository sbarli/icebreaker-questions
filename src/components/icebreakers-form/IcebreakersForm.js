import { useForm } from "react-hook-form";
import styled from "styled-components";

import { Input } from "./fields/Input";
import { SubmitButton } from "./fields/SubmitButton";

const FormWrapper = styled.div`
  max-width: 400px;
  padding: 2rem;
  background-color: white;
  border: 1px solid white;
  border-radius: 3px;
`;

export default function IcebreakersForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      questionsPerGroup: 5,
      selectOneGroup: true
    }
  });

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Questions Per Group"
          register={register}
          inputName="questionsPerGroup"
          type="number"
          error={errors.questionsPerGroup}
          required
        />
        <Input
          label="Select One Group"
          register={register}
          inputName="selectOneGroup"
          type="checkbox"
          error={errors.selectOneGroup}
          description="If checked, will only return one group of questions"
        />
        <Input
          label="Allow Less"
          register={register}
          inputName="allowLessThan"
          type="checkbox"
          error={errors.allowLessThan}
          description="Allow less per group if not an even number to split"
        />
        <Input
          label="Allow More"
          register={register}
          inputName="allowMoreThan"
          type="checkbox"
          error={errors.allowMoreThan}
          description="Allow more per group if not an even number to split"
        />
        <SubmitButton type="submit" />
      </form>
    </FormWrapper>
  );
}
