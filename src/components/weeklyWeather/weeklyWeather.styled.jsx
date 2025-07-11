import styled from 'styled-components';



export const Wrapper = styled.div`
  background-color: #e5e5e5;
  padding: 24px;
  border-radius: 20px;
  max-width: 720px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    border-radius: 16px;
  }

`;

// export const Btn = styled.button`
//   padding: '10px 20px';
//   font-size: '16px';
//   background-color: '#147adf';
//   color: 'white';
//   border: 'none';
//   border-radius: '8px';
//   /* cursor: "pointer"; */
//   margin-bottom: '20px';
// `;

export const Tittle = styled.h2`
    font-size: "18px";
    font-weight: 600;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    font-size: 16px;
    text-align: center;
  }
`
export const List = styled.ul`

   display: flex;
  flex-direction: column;
  gap: 12px;


`

export const Card = styled.li`
   display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #d3d3d3;
    padding: 12px 16px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 500;
    color: #222;
span {
      font-size: 14px;
      color: #333;
      flex: 1;
      text-align: center;
      word-break: keep-all;
    }

    img {
      width: 36px;
      height: 36px;
      object-fit: contain;
      flex: 0 0 auto;
    }

    span:first-child {
      text-align: left;
      font-weight: 500;
    }

    span:last-child {
      text-align: right;
      font-size: 13px;
      color: #666;
    }

    @media (max-width: 768px) {
      padding: 10px 14px;

      img {
        width: 32px;
        height: 32px;
      }

      span {
        font-size: 13px;
      }
    }

    @media (max-width: 480px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;

      span {
        text-align: left;
        width: 100%;
        font-size: 14px;
      }

      img {
        align-self: center;
      }
    }
`;

