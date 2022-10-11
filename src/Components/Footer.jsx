import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import Container from "../layout/Container";
import { connection, socialMediaLinks } from "./FooterItems";

const Footers = styled.footer`
  background: #000;
  padding: 40px 0;
`;

const Content = styled(Container)`
  display: flex;
  flex-direction: column;

  & div {
    @media (max-width: 1200px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
`;

const ContentTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & ul {
    display: flex;
    align-items: flex-start;
    list-style: none;
    gap: 1.5em;
    @media (max-width: 1200px) {
      text-align: center;
    }
  }
`;

const Location = styled.div`
  & p {
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
    text-transform: capitalize;
    margin-top: 1em;
    text-align: right;
    @media (max-width: 1200px) {
      text-align: center;
    }
  }
`;

const SocialLink = styled.a`
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  text-decoration: none;
`;
const ContentBottom = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const ContentBottomList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const ContentBottomLink = styled.a`
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
`;

const ContentBottomInfo = styled.div`
  text-align: center;

  & button {
    border: 1px solid #ffffff;
    border-radius: 23.5px;
    background: none;
    line-height: 50px;
    padding: 0 20px;
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
    cursor: pointer;
    margin-bottom: 4em;
    @media (max-width: 1200px) {
      margin-top: 40px;
    }
  }

  & p {
    font-weight: 400;
    font-size: 16px;
    color: #a5a5a5;
  }
`;
const ContentBottomWorkTime = styled.div`
  text-align: right;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #ffffff;
`;

const Footer = () => {
  return (
    <Footers>
      <Content>
        <div>
          <ContentTop>
            <ul>
              {socialMediaLinks.map((item) => (
                <li key={item.link}>
                  <SocialLink href={item.link}>{item.name}</SocialLink>
                </li>
              ))}
            </ul>
            <Location>
              <p>
                toshkent <FontAwesomeIcon icon={faLocationDot} />
              </p>
              <p>
                samarqand <FontAwesomeIcon icon={faLocationDot} />
              </p>
            </Location>
          </ContentTop>
          <ContentBottom>
            <ContentBottomList>
              {connection.map((items) => (
                <li key={items.name}>
                  <ContentBottomLink href={items.link}>
                    {items.name}
                  </ContentBottomLink>
                </li>
              ))}
            </ContentBottomList>
            <ContentBottomInfo>
              <button>Telegram guruhimizga qo‘shilish</button>
              <p>
                © 2018-2022. Tibbiy litsenziya № 27989012, yangilangan kuni
                09.03.2021g.
              </p>
            </ContentBottomInfo>
            <ContentBottomWorkTime>
              <p>Ish vaqtimiz: dushanba juma 9:00 - 18:00</p>
              <p>shanba 9:00 - 16:00</p>
            </ContentBottomWorkTime>
          </ContentBottom>
        </div>
      </Content>
    </Footers>
  );
};

export default Footer;
