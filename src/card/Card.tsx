import {Button} from "../components/ButtonCard.styled";
import styled from 'styled-components';

type CardPropsType = {
    src?: string;
    title?: string;
    text?: string;
    textColor?: string;
    textColor2?: string;
    bgColor?: string;
    hoverText?: string;
    hover?: string;
    border?: string;
};

export const Card = (props: CardPropsType) => {
    return (
        <StyledCard>
            <Image src={props.src} />
            <Title> {props.title}</Title>
            <Text>{props.text}</Text>
            <BtnBox>
                <Button
                    textColor={props.textColor}
                    bgColor={props.bgColor}
                    hoverText={props.hoverText}
                    border={props.border}>
                    See more
                </Button>
                <Button hover={props.hover} textColor={props.textColor2} border={props.border}>
                    Save
                </Button>
            </BtnBox>
        </StyledCard>
    );
};


const StyledCard = styled.div`
    padding: 10px 10px 10px 10px;
    background-color: #fff;
    max-width: 280px;
    box-shadow: 0px 4px 20px 5px #0000001a;
    border-radius: 15px;
`;

const BtnBox = styled.div`
    padding: 2px 0 10px 10px;
    display: flex;
    gap: 12px;
`;


export const Image = styled.img`
    width: 100%;
    height: 170px; /* Предположим, что исходная высота была 200px */
    border-radius: 10px;
    object-fit: cover;
`;


export const Title = styled.h2`
   padding: 1px 0px 11px 10px;
   font-size: 16px;
   font-weight: 700;
   //  line-height: 19.36px;
   text-align: left;
`;
export const Text = styled.p`
   font-size: 12px;
   padding-left: 10px;

   color: #abb3ba;

   font-size: 12px;
   font-weight: 500;
   line-height: 22px;
   text-align: left;
`;
