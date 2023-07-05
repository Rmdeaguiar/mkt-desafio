import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 50px;
  `;

export const ProductsList = styled.div`
gap: 20px;
display: flex;
flex-wrap: wrap;

  `;

  export const Product = styled.div`
  width: 218px;
  height: 285px;
  box-shadow: 0px 2px 8px 0px #00000022;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 1rem;
    line-height: 10px;
  }

  img { 
    width: 110px;
  }


  `;

  export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;


  h3 {
    font-size: 1.6rem;
  }

  h4 { 
    font-size: 1.4rem;
    color: #FFFFFF;
    background-color: #000000;
    height: 26px;
    padding: 2px;
    border-radius: 10px;
  }
  `

  export const AddBag = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0F52BA;
  color: #FFFFFF;
  cursor: pointer;
  border-radius: 0px 0px 10px 10px;
  height: 30px;

  span {
    margin-left: 10px;
  }

  img { 
    width: 12px
  }

  `
