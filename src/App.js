import { useCallback, useState } from "react";
import { getIcebreakers } from "./utils/get-icebreakers";
import IcebreakersForm from "./components/icebreakers-form/IcebreakersForm";
import IcebreakersDisplay from "./components/icebreakers-display/IcebreakersDisplay";
import { AppHeader, AppWrapper, ContentWrapper } from "./App.styled";

export default function App() {
  const [icebreakers, setIcebreakers] = useState(null);

  const onSubmit = useCallback((data) => {
    const selectedIcebreakers = getIcebreakers({
      questionsPerGroup: data.questionsPerGroup,
      allowLessThan: data.allowLessThan,
      allowMoreThan: data.allowMoreThan,
      selectOneGroup: data.selectOneGroup
    });
    setIcebreakers(selectedIcebreakers);
  }, []);

  const resetIcebreakers = useCallback(() => setIcebreakers(null), []);

  return (
    <AppWrapper>
      <AppHeader>Icebreakers</AppHeader>
      <ContentWrapper>
        {icebreakers ? (
          <IcebreakersDisplay
            icebreakers={icebreakers}
            startOver={resetIcebreakers}
          />
        ) : (
          <IcebreakersForm onSubmit={onSubmit} />
        )}
      </ContentWrapper>
    </AppWrapper>
  );
}
