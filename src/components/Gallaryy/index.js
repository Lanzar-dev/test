import React from "react";
import { SPphotoCards } from "../../data";
import CardThree from "../CardThree";
import { Container, Wrapper } from "./GallaryElement";

const Gallaryy = () => {
  return (
    <Container>
      <Wrapper>
        {SPphotoCards.map((item) => (
          <CardThree key={item.id} img={item.img} desc={item.desc} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Gallaryy;
