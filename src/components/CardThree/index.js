import React from "react";
// import imageCards from '../../data'
// import FirstImg from '../../images/Rectangle 5 (1).svg'
import {
  CardDate,
  CardDesc,
  CardImage,
  CardInfo,
  CardSubTitle,
  Container,
  Wrapper,
} from "./CThreeElement";
import DOMPurify from "dompurify";

const CardThree = ({ img, subtitle, desc, date }) => {
  // dangerouslySetInnerHTML={{
  //               __html: DOMPurify.sanitize(coin.description?.en),
  //             }}
  return (
    <Container>
      <Wrapper>
        <CardImage src={img} alt="" />
        <CardInfo>
          <CardSubTitle>{subtitle}</CardSubTitle>
          <CardDesc
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(desc),
            }}
          ></CardDesc>
          <CardDate>{date}</CardDate>
        </CardInfo>
      </Wrapper>
    </Container>
  );
};

export default CardThree;
