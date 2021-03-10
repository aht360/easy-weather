import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    
`;


export const DashboardContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const DashboardContent = styled.div`
    width: 1180px;
    height: 550px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const DashboardMap = styled.div`
    width: 73%;
    height: 270px;
    border-radius: 8px;
    background-color: red;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

`;





export const DashboardLine = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
