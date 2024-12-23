import React from 'react';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";



const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Title = styled.h1`
    font-size: 24px;
    color: #d90429;
    margin-bottom: 20px;
`;
const InputField = styled.input.attrs(props => ({
    type: 'text',
    placeholder: 'Введите текст...',
}))`
  width: 300px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #007BFF;
  }
`;
const Headline = styled.h2`
  font-size: 16px;
  font-weight: 700;
  margin: 16px 20px 0;
  line-height: 19.36px;
  color: #333;
`;
const Button = styled.input.attrs({
    placeholder: 'See More...',
})`
    width: 86px;
    height: 30px;
    border-radius: 6px 6px 6px 6px;
    background: #4E71FE;
    opacity: 1;
    ::placeholder {
        color: white; /* Цвет текста в placeholder */
    }
`;

const ButtonSave = styled.input.attrs({
    placeholder: 'Save_-',
})`   
    width: 86px;
    height: 30px;
    border-radius: 5px 5px 5px 5px;
    background: white;
    opacity: 1;
    ::placeholder {
        color: #4E71FE;; /* Цвет текста в placeholder */
    }`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px; /* Расстояние между кнопками */
  margin-top: 20px;
`;
const Image = styled.img.attrs(props => ({
    src:'https://s3-alpha-sig.figma.com/img/295b/9b3e/0cbd17e4381497547009ce81acc4eee3?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iNyqvZdTis1QJzNntCJ3hJeylhH1K4fvC2fYQxWu4x1uGyU9MazikVt8MGKobySkkA06k1A5BxpnU8NasNrhztiKxFYm31YizeZeQgn5tHdGTvlDgdwdY7H1373Cf1qtB6SkJxAeSZP3dNOlhmW2PzELbOm~LRIRvMfduxOLHxNACxAFoVQ9E1bvWOQmJDl32l0Nba2y9RQ93sda9x6AgasXaCladA0YXs7pMgTYjLOKP~7C12qtpXCRmnEJGnJWuuML1TDNbWheHtbbc5u5khaSJWCldbsJY8~jhroaxwvaaDy0q5CFLTeSOej2fFoXnTTL6ceOGI~5QSMGY2UbSQ__ '
}))`
    width: 280px;
    height: 170px;
    top: 10px;
    left: 10px;
    gap: 0px;
    border-radius: 10px 10px 10px 10px;
    opacity: 0px;

`

const App = () => {
    return (
        <Container>
            <Header/>
            <Image/>
            <Headline>Headline</Headline>
            <Title>Styled-components .attrs method</Title>
            <ButtonContainer>
                <Button />
                <ButtonSave />
            </ButtonContainer>
            <InputField />
            <InputField />
            <InputField />
        </Container>
    );
};

export default App;
