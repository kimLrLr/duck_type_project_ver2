import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { PageTitle } from "../../components/PageTitle";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { IMG_URL } from "../../constants";
import { useEffect } from "react";

const Rwrap = styled.div`
  background-color: #f1f1f1;
  font-family: "Noto Sans KR", sans-serif;
`;
const WrapSet = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const DuckImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 480px;
    width: 100%;
  }
`;

const MbtiDuckImg = styled.div`
  max-width: 450px;
  width: 100%;
  img {
    width: 100%;
  }
`;

const BottomWrap = styled.div`
  width: 80%;
  margin-bottom: 150px;
`;

const DownText = styled.h4`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  color: #333;
  margin: 20px 0px 10px 0;
  text-decoration: underline;
`;

const BottomBtn = styled.button`
  all: unset;
  width: 100%;
  padding: 12px;
  border-radius: 40px;
  font-size: 20px;
  font-weight: 800;
  text-align: center;
  background-color: #ffd800;
  transition: 0.5s;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  box-shadow: 5px 8px 10px rgba(0, 0, 0, 0.06);
  cursor: pointer;

  &:nth-child(3) {
    background-color: transparent;
    border: 2px solid #ffd800;
  }

  a {
    color: #333;
    width: 100%;
  }

  &:hover {
    opacity: 0.6;
  }
`;

const PopClose = {
  bgColor: "#ffd800",

  _hover: { opacity: "0.6" },
};

export const Result = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const mbtiDuck = useLocation();
  const mbtiResult = mbtiDuck.state.name;

  useEffect(() => {
    if (!localStorage.getItem("refreshed")) {
      localStorage.setItem("refreshed", true);
      window.location.reload();
    }
  }, []);

  return (
    <Rwrap>
      <PageTitle titleName="결과페이지" />
      <DuckImg>
        <img src={mbtiResult.img} alt="mbti오리" />
      </DuckImg>
      <Box {...WrapSet}>
        <Flex
          maxW="480px"
          w="100%"
          bgColor="#fff"
          direction="column"
          {...WrapSet}
        >
          <BottomWrap>
            <DownText>결과 이미지를 꾹 눌러 저장!</DownText>
            <BottomBtn>
              <Link to="/">테스트 다시하기</Link>
            </BottomBtn>
            <BottomBtn onClick={onOpen}>MBTI별 오리 모음집</BottomBtn>
            <ChakraProvider>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bgColor="#f1f1f1">
                  <ModalHeader>MBTI별 오리 모음집</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <MbtiDuckImg>
                      <img
                        src={IMG_URL + "/img/mbti_duck_img.png"}
                        alt="mbti별 오리"
                      />
                    </MbtiDuckImg>
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={onClose} {...PopClose}>
                      닫기
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </ChakraProvider>
          </BottomWrap>
        </Flex>
      </Box>
    </Rwrap>
  );
};
