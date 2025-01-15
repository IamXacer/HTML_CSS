    import React from 'react';
    import styled from "styled-components";
    import {ContactIconIconWrapper} from "../../../components/icon/Icon";
    import {FaEnvelope, FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa";


    export const Contacts = () => {
        return (
            <StyleContainer id="contact">
                <SectionTitle>Contact</SectionTitle>
                <ContentWrapper>
                    <FormWrapper>
                        <FormTitle>Get in Touch</FormTitle>
                        <StyledForm
                            as="form"
                            action="/submit"
                            method="POST"
                            onSubmit={(e:any) => {
                                e.preventDefault(); // Предотвращает стандартное поведение
                                const formData = new FormData(e.target); // Собираем данные из формы
                                fetch('/submit', {
                                    method: 'POST',
                                    body: formData,
                                })
                                    .then((response) => response.json())
                                    .then((data) => {
                                        console.log('Success:', data);
                                    })
                                    .catch((error) => {
                                        console.error('Error:', error);
                                    });
                            }}
                        >
                            <Field type="email" placeholder="E-Mail"/>
                            <Field type="tel" placeholder="Phone"/>
                            <Field as="textarea" placeholder="Message"/>
                            <SubmitButton>Send</SubmitButton>
                        </StyledForm>
                    </FormWrapper>
                    <InfoWrapper>
                        <InfoItem>
                            <IconWrapper>
                                <FaMapMarkerAlt size={24} color="#007bff" />
                            </IconWrapper>
                            <InfoText>Location: Deutschland, Neu-Ulm</InfoText>
                        </InfoItem>
                        <InfoItem>
                            <IconWrapper>
                                <FaPhoneAlt size={24} color="#007bff" />
                            </IconWrapper>
                            <InfoText>Phone: +38 (050) 997 8595</InfoText>
                        </InfoItem>
                        <InfoItem>
                            <IconWrapper>
                                <FaEnvelope size={24} color="#007bff" />
                            </IconWrapper>
                            <InfoText>Email: alexverlanov2020@gmail.com</InfoText>
                        </InfoItem>
                    </InfoWrapper>

                </ContentWrapper>
                <ContactIconWraper>
                    <ContactIconIconWrapper Iconid={'Telephone'}/>
                    <ContactIconIconWrapper Iconid={'Whatsapp'}/>
                    <ContactIconIconWrapper Iconid={'Telegram'}/>
                    <ContactIconIconWrapper Iconid={'GitHub '}/>
                </ContactIconWraper>
            </StyleContainer>
        );
    };
    const ContactIconWraper = styled.div`
        display: flex;
        align-items: center;
        margin: 40px;
        gap: 20px;
    `;

    const IconWrapper = styled.div`
        font-size: 1.8rem;
        color: #0073e6;
    `;

    const InfoText = styled.p`
        font-size: 1rem;
        color: #333;
        margin: 0;
    `;

    const InfoWrapper = styled.div`
        flex: 1;
        min-width: 350px;
        display: flex;
        flex-direction: column;
        gap: 25px;
    `;


    const InfoItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
    const StyleContainer = styled.section`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px 20px;
       
    `;
    const ContentWrapper = styled.div`
        display: flex;
        align-items: center; /* Центрирование элементов по вертикали */
        gap: 40px;
        justify-content: center;
        background: #ffffff;
        padding: 40px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        border-radius: 15px;
        max-width: 1200px;
        width: 100%;
    `;

    const FormWrapper = styled.div`
        flex: 1;
        min-width: 350px;
        display: flex;
        flex-direction: column;
        justify-content: center; /* Центрирует форму внутри контейнера */
    `;
    const StyledForm = styled.form`
        max-width: 500px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin: 0 auto;
    `;
    const Field = styled.input`
        padding: 15px 20px;
        font-size: 1rem;
        border: 1px solid #ddd;
        border-radius: 10px;
        background: #f8f8f8;
        outline: none;
        transition: box-shadow 0.3s ease;

        &:focus {
            border-color: #0073e6;
            background: #ffffff;
            box-shadow: 0 0 10px rgba(0, 115, 230, 0.3);
        }
    `;
    const FormTitle = styled.h4`
    font-size: 1.8rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
`;
    const SubmitButton = styled.button`
        padding: 15px 20px;
        font-size: 1.2rem;
        font-weight: bold;
        color: #ffffff;
        background: #0073e6;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: background 0.3s ease, transform 0.2s ease;

        &:hover {
            background: #005bb5;
            transform: translateY(-2px);
        }
    `;

    const SectionTitle = styled.h3`
        font-size: 2.5rem;
        font-weight: bold;
        color: #333;
        margin-bottom: 30px;
        text-align: center;
        position: relative;
        &:after {
            content: '';
            display: block;
            width: 50px;
            height: 3px;
            background: #0073e6;
            margin: 10px auto 0;
        }
    `;

