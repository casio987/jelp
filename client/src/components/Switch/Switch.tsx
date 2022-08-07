import { useState } from "react";
import { Palette } from "../Palette";
import { OptionButton, SwitchContainer } from "./style";

type SwitchProps = {
  option1: string;
  option2: string;
  callBackFunc: (option: string) => void;
}

const Switch = ({ option1, option2, callBackFunc}: SwitchProps) => {
  const [selectedOption, setSelectedOption] = useState<string>(option1);

  const handleSwitchClick = (option: string) => {
    setSelectedOption(option);
    callBackFunc(option);    
  }

  return (
    <SwitchContainer>
      <OptionButton
        disabled={option1 === selectedOption}
        style={option1 === selectedOption ? { fontWeight: "bold", color: Palette.jelpBrightRed } : undefined}
        onClick={() => handleSwitchClick(option1)}
      >
        {option1}
      </OptionButton>
      <p>|</p>
      <OptionButton
        disabled={option2 === selectedOption}
        style={option2 === selectedOption ? { fontWeight: "bold", color: Palette.jelpBrightRed } : undefined}
        onClick={() => handleSwitchClick(option2)}
      >
        {option2}
      </OptionButton>
    </SwitchContainer>
  );
};

export default Switch;