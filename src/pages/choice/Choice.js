import { Box, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { PageTitle } from "../../components/PageTitle";
import { questions } from "../../components/questions";
import { Loading } from "../../components/Loading";

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 330px;
  font-weight: 600;
  font-size: 30px;
  line-height: 30px;
`;

const GaugeBar = styled.div`
  width: 90%;
  height: 5px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 30px;
`;

const Gauge = styled.div`
  width: ${(props) => props.$width}%;
  height: 100%;
  background-color: #ffd800;
`;
const GaugeNum = styled.h3`
  color: #333;
  font-weight: 600;
  margin-bottom: 20px;
`;
const Qwrap = styled.div`
  width: 100%;
`;

const Question = styled.h3`
  width: 100%;
  font-size: 22px;
  text-align: center;
`;

const Iwrap = styled.div``;

const DuckImg = styled.div`
  width: 300px;
  height: 300px;
  background: url(${(props) => props.$qduck}) no-repeat center / cover;
`;

const WrapSet = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Awrap = styled.div`
  width: 100%;
`;

const Answer = styled.button`
  all: unset;
  padding: 14px;
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  border: 2px solid #ffd800;
  background-color: #fff;
  /* background-color: #ffd800; */
  text-align: center;
  transition: 0.5s;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  box-shadow: 5px 8px 10px rgba(0, 0, 0, 0.06);
  border-radius: 30px;
  cursor: pointer;

  a {
    color: #333;
  }

  &:hover {
    background-color: #ffd800;
  }
`;

export const Choice = () => {
  const [page, setPage] = useState(1);

  const [mbtiValue, setMbtiValue] = useState([
    { name: "I", count: 0 },
    { name: "E", count: 0 },
    { name: "S", count: 0 },
    { name: "N", count: 0 },
    { name: "F", count: 0 },
    { name: "T", count: 0 },
    { name: "P", count: 0 },
    { name: "J", count: 0 },
  ]);

  const [gauge, setGauge] = useState();

  useEffect(() => {
    const progress = (page / questions.length) * 100;
    setGauge(progress);
    // console.log(progress);
  }, [page]);
  const handleAnswer = (type) => {
    const progress = ((page + 1) / questions.length) * 100;
    setGauge(progress);
    // console.log(progress);

    let mbtiList = mbtiValue;
    for (let i = 0; i < mbtiList.length; i++) {
      if (mbtiList[i].name === type) {
        mbtiList[i].count = mbtiList[i].count + 1;
      }
    }

    setMbtiValue(mbtiList);
    // console.log(mbtiValue);
    setPage(page + 1);
  };

  return (
    <>
      <PageTitle titleName="유형테스트 페이지" />
      {page <= questions.length ? (
        <Box {...WrapSet}>
          <Flex
            maxW="480px"
            w="100%"
            h="100vh"
            bgColor="#fff"
            direction="column"
            {...WrapSet}
          >
            <GaugeBar>
              <Gauge $width={gauge}></Gauge>
            </GaugeBar>
            <GaugeNum>{`${page} / ${questions.length}`}</GaugeNum>

            {questions.map((data, index) => (
              <MainBox
                key={index}
                style={{ display: page === index + 1 ? "flex" : "none" }}
              >
                {/* {console.log(mbtiValue)} */}

                <Qwrap>
                  {data.q.map((qdata, qindex) => (
                    <Question key={qindex}>{qdata}</Question>
                  ))}
                </Qwrap>

                <Iwrap>
                  {data.img.map((idata, iindex) => (
                    <DuckImg key={iindex} $qduck={idata}></DuckImg>
                  ))}
                </Iwrap>

                <Awrap>
                  {data.a.map((adata, aindex) => (
                    <Answer
                      key={aindex}
                      onClick={() => handleAnswer(adata.type, index)}
                    >
                      {adata.text}
                    </Answer>
                  ))}
                </Awrap>
              </MainBox>
            ))}
          </Flex>
        </Box>
      ) : (
        <Loading mbtiValue={mbtiValue} />
      )}
    </>
  );
};
