import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #0F52BA;
  height: 100vh;
  width: 400px;
  color: #FFFFFF;
  position: absolute;
  right: 0;
  bottom: 0;
  box-shadow: -5px 0px 6px 0px #00000021;
  padding-top: 25px;
  position: fixed;
  `

  export const TitleContent = styled.div`
  display: flex;
  padding: 25px;

  align-items: center;
  justify-content: space-between;
  font-size: 1.4rem;
  margin-bottom: 50px;


  img {
    cursor: pointer;
    width: 30px;
  }
  `

  export const AllProducts = styled.div`
  display: flex;
  flex-direction: column
  justify-content: center;
  align-items: flex-start;
  padding: 0px 25px;
  `
  ;

  export const Products = styled.div`
  width: 95%;
  height: 100px;
  background-color: #FFFFFF;
  border-radius: 8px;
  position: relative;
  margin-bottom: 10px;
  
  img {
    width: 15px;
    position: absolute;
    right: -5px;
    top: -5px;
    cursor: pointer;
  }
  `
  
  export const Product = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #000000;
  gap: 10px;

  span {
    font-size: 1.3rem;
    line-height: 17px;
    max-width: 105px;
    display: flex;
    flex-wrap: wrap;
  }

  h3{
    font-size: 14px;
  }
  `

  export const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;


  p {
    position: absolute;
    font-size: 0.5rem;
    top:-5px;
    left: 0px;
  }
  `

  export const SumNumber = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 0.3px solid #BFBFBF;
  border-radius: 8px;
  margin: 8px;
  position: relative;
  width: 50px;


  div {
    border: 0.3px solid #BFBFBF;
    height: 10px;
  }

  span:first-child, span:last-child {
    cursor: pointer;
  }
  `

  export const Total = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  `
  export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 0px 25px;

  `

  export const Finish = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  height: 55px;
  cursor: pointer;
  `
  