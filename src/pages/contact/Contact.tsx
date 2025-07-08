import * as Styled from "./ContactCss";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { CiMail, CiLinkedin } from "react-icons/ci";

function Contact() {
  return (
    <div>
      <Styled.ContactWrapper>
        <Styled.ContactPresentation>
          For project inquiries, collaboration opportunities, or any
          professional correspondence, please contact me. I will respond
          promptly.
        </Styled.ContactPresentation>
      </Styled.ContactWrapper>
      <Styled.ContactCardsWrapper>
        <Styled.ContactCards href="https://github.com/bauk17" target="_blank">
          <Styled.ContactCardIcon>
            <FaGithub />
          </Styled.ContactCardIcon>
        </Styled.ContactCards>
        <Styled.ContactCards href="mailto:maledasher06@gmail.com">
          <Styled.ContactCardIcon>
            <CiMail />
          </Styled.ContactCardIcon>
        </Styled.ContactCards>
        <Styled.ContactCards
          href="https://www.linkedin.com/in/cauã-pereira-s"
          target="_blank"
        >
          <Styled.ContactCardIcon>
            <CiLinkedin />
          </Styled.ContactCardIcon>
        </Styled.ContactCards>
        <Styled.ContactCards href="https://wa.me/5522997447888" target="_blank">
          <Styled.ContactCardIcon>
            <FaWhatsapp />
          </Styled.ContactCardIcon>
        </Styled.ContactCards>
      </Styled.ContactCardsWrapper>
    </div>
  );
}

export default Contact;
