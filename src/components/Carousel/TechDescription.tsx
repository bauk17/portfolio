import * as Styled from "./StyledTechDescription";

type Props = {
  description?: string;
};

const TechDescription: React.FC<Props> = ({ description }) => {
  return (
    <div>
      <Styled.TechDescriptionContainer>
        <Styled.TechDescriptionText>{description}</Styled.TechDescriptionText>
      </Styled.TechDescriptionContainer>
    </div>
  );
};

export default TechDescription;
