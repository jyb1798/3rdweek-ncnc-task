import style from "Components/QuestionContainer/QuestionContainer.module.css";
import { useState } from "react";

interface QuestionProps {
  id: number;
  question: string;
  answer: string;
}

const data = {
  qas: [
    {
      id: 59,
      question: "현금영수증(또는 세금계산서)을 발급 받고 싶어요!",
      answer:
        "니콘머니, 모바일 쿠폰은 현금성 유가증권에 해당되므로, 현금영수증이 별도로 발행되지 않습니다.  매장에서 구매하신 쿠폰으로 결제시 직원에게 요청하시면 발급이 가능합니다. 단, 일부 이벤트 쿠폰의 경우 현금 영수증 발행이 불가할 수 있으며 해당 사유로는 환불이 불가한 점 양해 부탁드립니다.",
    },
    {
      id: 58,
      question: "영수증에 기재된 가격이 달라요!",
      answer:
        "영수증에 기재된 금액은 사용처의 소비자 가격이 아니며 해당 쿠폰의 판매자가 구매한 금액이 표시 되는 경우입니다. 니콘내콘의 모든 쿠폰은 리셀링 쿠폰으로 이벤트, 프로모션 상품일 수 있습니다. 따라서 실제로 쿠폰을 구매한 금액은 확인이 불가하여 쿠폰 매입시 소비자 가격으로 쿠폰을 매입하고 있습니다.",
    },
  ],
};

const QuestionContainer = () => {
  return (
    <div className={style.container}>
      {data.qas.map((item) => {
        return <Question QuestionsData={item} />;
      })}
    </div>
  );
};

const setDefaultHeight = { height: `52.39px` };
const setHeight = { height: `unset` };

const Question = ({ QuestionsData }: { QuestionsData: QuestionProps }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      style={isOpen ? setHeight : setDefaultHeight}
      className={style.innerContainer}
      key={QuestionsData.id}
    >
      <div className={style.header}>
        <h3>
          <span className={style.q}>Q</span>
          {QuestionsData.question}
        </h3>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={style.seeMoreBtn}
        >
          <img
            className={style.seeMoreImg}
            alt="seeMore"
            src="images/arrowback.png"
          />
        </button>
      </div>
      <div className={style.body}>
        <p className={style.bodyContent}>{QuestionsData.answer}</p>
      </div>
    </div>
  );
};

export default QuestionContainer;
