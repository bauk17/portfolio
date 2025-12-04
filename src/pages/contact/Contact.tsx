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
          <FaGithub size={100} />
        </Styled.ContactCards>
        <Styled.ContactCards href="mailto:maledasher06@gmail.com">
          <CiMail size={100} />
        </Styled.ContactCards>
        <Styled.ContactCards
          href="https://www.linkedin.com/in/cauã-pereira-s"
          target="_blank"
        >
          <CiLinkedin size={100} />
        </Styled.ContactCards>
        <Styled.ContactCards href="https://wa.me/5522997447888" target="_blank">
          <FaWhatsapp size={100} />
        </Styled.ContactCards>
      </Styled.ContactCardsWrapper>
    </div>
  );
}

export default Contact;
