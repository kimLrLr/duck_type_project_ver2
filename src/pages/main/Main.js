import { Box, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { Link } from "react-router-dom";
import { PageTitle } from "../../components/PageTitle";

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-weight: 600;
  font-size: 30px;
  line-height: 50px;

  h2 {
    font-size: 35px;
    font-weight: 900;
  }

  h5 {
    max-width: 330px;
    text-align: center;
  }
`;

const DuckImg = styled.div`
  width: 300px;
  height: 300px;
  background: url(${IMG_URL}/img/500w_main_duck.png) no-repeat center / contain;
`;

const WrapSet = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const BtnWrap = styled.button`
  padding: 5px;
  width: 80%;
  border: none;
  font-size: 22px;
  font-weight: 800;
  background-color: #ffd800;
  text-align: center;
  margin: 40px auto;
  transition: 0.5s;
  border-radius: 30px;

  a {
    color: #333;
    line-height: 50px;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const Main = () => {
  return (
    <>
      <PageTitle titleName="시작페이지" />
      <Box {...WrapSet}>
        <Flex
          maxW="480px"
          w="100%"
          h="100vh"
          bgColor="#fff"
          direction="column"
          {...WrapSet}
        >
          <MainBox>
            <h3>나의 성격과 닮은 오리는?</h3>
            <h2>오리 성격 테스트</h2>
            <DuckImg />
            <h5>물 위를 떠다니는 오리들과 나를 찾아 떠나는 여행!</h5>

            <BtnWrap>
              <Link to={`/choice`}>시작하기</Link>
            </BtnWrap>
          </MainBox>
        </Flex>
      </Box>
    </>
  );
};
