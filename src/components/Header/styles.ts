import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: #0F52BA;
  padding: 30px;
  color: #FFFFFF;
  height: 100px;

  span {
    font-weight: 300;
    font-size: 2rem;
  }
  `;

export const ChartBox = styled.div`
 display: flex;
 background-color: #FFFFFF;
 border-radius: 10px;
 color: #000000;
 padding: 10px;
 width: 60px;
 cursor: pointer;

 img {
  width: 18px;
  margin-right: 10px;
 }

 h2 {
  font-size: 2rem;
 }
  `;



