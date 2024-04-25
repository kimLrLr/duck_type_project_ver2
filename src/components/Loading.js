import { Box, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import { IMG_URL } from "../constants";
import { Link } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { mbtiName } from "./mbtiName";
import { useEffect, useState } from "react";

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h5 {
    font-size: 25px;
    font-weight: 700;
    text-align: center;
    max-width: 350px;
    line-height: 40px;
  }
`;

const LoadWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20% 0;
`;

const TxtBox = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #808080;
  margin-bottom: 10px;
`;

const WrapSet = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const DuckImg = styled.div`
  width: 85px;
  height: 85px;
  margin-right: 20px;
  background: url(${IMG_URL}/img/load_img.png) no-repeat center / contain;
`;

const BtnWrap = styled.button`
  width: 80%;
  padding: 14px;
  border: none;
  border-radius: 40px;
  font-size: 22px;
  font-weight: 700;
  background-color: #ffd800;
  text-align: center;
  transition: 0.5s;
  font-family: "Noto Sans KR", sans-serif;

  a {
    color: #333;
    width: 100%;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const Loading = ({ mbtiValue }) => {
  let IorE =
    mbtiValue.find(function (data) {
      return data.name === "I";
    }).count >
    mbtiValue.find(function (data) {
      return data.name === "E";
    }).count
      ? "I"
      : "E";

  let SorN =
    mbtiValue.find(function (data) {
      return data.name === "S";
    }).count >
    mbtiValue.find(function (data) {
      return data.name === "N";
    }).count
      ? "S"
      : "N";

  let ForT =
    mbtiValue.find(function (data) {
      return data.name === "F";
    }).count >
    mbtiValue.find(function (data) {
      return data.name === "T";
    }).count
      ? "F"
      : "T";

  let PorJ =
    mbtiValue.find(function (data) {
      return data.name === "P";
    }).count >
    mbtiValue.find(function (data) {
      return data.name === "J";
    }).count
      ? "P"
      : "J";

  let mbti = IorE + SorN + ForT + PorJ;

  const [mbtiDuck, setMbtiDuck] = useState([]);
  useEffect(() => {
    setMbtiDuck(mbtiName.filter((val) => val.mbti === mbti)[0]);
  }, [mbti]);

  // console.log(mbtiDuck); //mbti 결과값(mbtiName에 있는 배열)

  return (
    <>
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
            <h5>
              오리 한 마리가
              <br /> 여행을 떠날 채비를 끝마쳤습니다!
            </h5>

            <LoadWrap>
              <DuckImg />
              <SyncLoader color="#fffc00" size={30} margin={13} />
            </LoadWrap>

            <TxtBox>눌러서 결과보기 &darr;</TxtBox>
            <BtnWrap>
              <Link to={"/result"} state={{ name: mbtiDuck }}>
                당신의 오리는...?
              </Link>
            </BtnWrap>
          </MainBox>
        </Flex>
      </Box>
    </>
  );
};
