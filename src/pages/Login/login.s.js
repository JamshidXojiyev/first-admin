import styled from "styled-components";

export const LoginContent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  background-color: #363740;
  `;
export const Form = styled.form`
  width: 380px;
  height: 580px;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding: 0px 28px;
  @media (max-width: 760px) {
    margin: 0 24px;
  }
`;
export const Brand = styled.img`
  background: #000;
  background: ${({ fon }) => fon};
`;
export const BrandName = styled.h2`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #bfc1ca;
  margin-bottom: 34px;
`;
export const FirstInfo = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #252733;
  margin-bottom: 12px;
`;
export const SecondInfo = styled.h3`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #9fa2b4;
  margin-bottom: 50px;
`;

export const InputBlock = styled.div`
  width: 100%;
  display: grid;
  grid: 6px;
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 32px;
  }
`;
export const InputLabel = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #9fa2b4;
  width: 100%;
  margin-bottom: 6px;
`;

export const DontAccount = styled.h2`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #9fa2b4;
`;
export const SignUpText = styled.a`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #3751ff;
  margin-left: 8px;
  cursor: pointer;
`;
