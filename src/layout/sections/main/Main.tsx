import React from "react";
import photo from '../../../icons/image.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";


export const Main = () => {
  return(

          <FlexWrapper align={"center"} justify={"space-around"} direction={"row"}>
              <TextBlock>
                  <span>Hello, I’m</span>
                  <h2>Oleksander Verlanov</h2>
                  <h1>I am a front-end developer from Ukraine ua. I love designing, programming, creating and creating
                      things.</h1>

              </TextBlock>
              <StyledImage src={photo}/>
          </FlexWrapper>


  )
}

const TextBlock = styled.div`
    max-width: 50%; /* Обмежує ширину текстового блоку */
    display: flex;
    flex-direction: column;
    gap: 10px; /* Відступ між елементами */
`;

const StyledImage = styled.img`
    width: 400px; /* Ширина зображення */
    height: auto; /* Пропорційна висота */
    border-radius: 10px; /* Округлення кутів */
`;