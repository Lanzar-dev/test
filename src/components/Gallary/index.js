import React from "react";
import { photoCards } from "../../data";
import CardThree from "../CardThree";
import { Container, Wrapper } from "./GallaryElement";

const Gallary = () => {
  return (
    <Container>
      <Wrapper>
        {photoCards.map((item) => (
          <CardThree
            key={item.id}
            img={item.img}
            subtitle={item.subtitle}
            desc={item.desc}
          />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Gallary;
