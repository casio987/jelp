import { InstructionCardContainer, InstructionImage, SubText, TextContainer } from "./style";

type InstructionCardProps = {
  imageURL: string;
  instructionNo: number;
  headingText: string;
  subText: string;
}

const InstructionCard = ({ imageURL, instructionNo, headingText, subText }: InstructionCardProps) => (
  <InstructionCardContainer>
    {instructionNo % 2 === 1 
      ?
        (
          <>
          <InstructionImage src={imageURL} alt="instructionalImage" />
          <h2>{instructionNo}</h2>
          <TextContainer>
            <h2>{headingText}</h2>
            <SubText>{subText}</SubText>
          </TextContainer>
          </>
        )
      : (
          <>
            <h2>{instructionNo}</h2>
            <TextContainer style={{ marginRight: "2rem" }}>
              <h2>{headingText}</h2>
              <SubText>{subText}</SubText>
            </TextContainer>
            <InstructionImage src={imageURL} alt="instructionalImage" />
          </>      
      )
    }
  </InstructionCardContainer>
);

export default InstructionCard;