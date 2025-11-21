import styled from "styled-components";

const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  overflow: hidden;
`;

const ContentTrack = styled.div<{ transformOffset: string }>`
  display: flex;
  height: 100%;
  width: 100%;
  transition: transform 0.5s ease-in-out;
  transform: ${({ transformOffset }) => transformOffset};
`;

const PageContent = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
`;

export default { ContentWrapper, PageContent, ContentTrack };
