import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`

export const Card = styled.div`
  width: 500px;
  background: #fff;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
`

export const Title = styled.h1`
  font-size: 22px;
  margin-bottom: 24px;
  color: #333;
`

export const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 18px;
  border-radius: 8px;
  border: none;
  background: #888;
  color: white;
  cursor: pointer;
  font-size: 15px;
  transition: 0.2s;

  &:hover {
    background: #666;
  }
`
