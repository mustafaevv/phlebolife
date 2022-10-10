import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import Container from "../layout/Container";
import svg from "../static/images/servies.svg";

const Blocks = styled.section`
  padding-top: 100px;
`;

const Content = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3em;

  @media (max-width:992px) {
    flex-direction: column;
  }
`;

const Items = styled.div`
  max-width: 470px;
  width: 100%;
  background: #ebebeb;
  box-shadow: 5px 5px 10px rgba(138, 138, 138, 0.1);
  border-radius: 5px;
  padding: 40px 0;
  text-align: center;
`;
const Title = styled.h6`
  font-weight: 400;
  font-size: 18px;
  line-height: 170%;
  color: #0c1f41;
  margin-bottom: 3em;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
const Link = styled.a`
  font-weight: 400;
  font-size: 16px;
  text-decoration: none;
  line-height: 170%;
  text-align: center;
  color: #a5a5a5;

  & svg {
    margin-left: 15px;
  }
`;

const About = () => {
  return (
    <Blocks>
      <Content>
        <Items>
          <img src={svg} alt="" />
          <Title>Surunkali Kasalliklar</Title>
          <List>
            <li>
              <Link href="#!">
                Oyoq vena varikoz kasalliklar{" "}
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
            <li>
              <Link href="#!">
                Oyoq vena varikoz kasalliklar{" "}
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
            <li>
              <Link href="#!">
                Oyoq vena varikoz kasalliklar{" "}
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
            <li>
              <Link href="#!">
                Oyoq vena varikoz kasalliklar{" "}
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
            <li>
              <Link href="#!">
                Oyoq vena varikoz kasalliklar{" "}
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
            <li>
              <Link href="#!">
                Oyoq vena varikoz kasalliklar{" "}
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
            <li>
              <Link href="#!">
                Oyoq vena varikoz kasalliklar{" "}
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
            <li>
              <Link href="#!">
                Oyoq vena varikoz kasalliklar{" "}
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
          </List>
        </Items>
        <Items>
          <img src={svg} alt="" />
          <Title>Surunkali Kasalliklar</Title>
          <List>
            <li>
              <Link href="#!">
                Oyoq vena varikoz kasalliklar{" "}
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
            <li>
              <Link href="#!">
                Oyoq vena varikoz kasalliklar{" "}
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
            <li>
              <Link href="#!">
                Oyoq vena varikoz kasalliklar{" "}
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
            <li>
              <Link href="#!">
                Oyoq vena varikoz kasalliklar{" "}
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
            <li>
              <Link href="#!">
                Oyoq vena varikoz kasalliklar{" "}
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
            <li>
              <Link href="#!">
                Oyoq vena varikoz kasalliklar{" "}
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
            <li>
              <Link href="#!">
                Oyoq vena varikoz kasalliklar{" "}
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
            <li>
              <Link href="#!">
                Oyoq vena varikoz kasalliklar{" "}
                <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </li>
          </List>
        </Items>
      </Content>
    </Blocks>
  );
};

export default About;
