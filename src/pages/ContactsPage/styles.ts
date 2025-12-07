import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.main`
  max-width: 1100px;
  margin: 32px auto;
  padding: 0 24px;
`

export const Card = styled.section`
  background: #fff;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  padding: 24px;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.06);
`

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const Title = styled.h2`
  font-size: 1.25rem;
`

export const AddButton = styled(Link)`
  padding: 8px 16px;
  border-radius: 999px;
  text-decoration: none;
  border: none;
  font-weight: 600;
  font-size: 0.9rem;
  color: #fff;
  background: #7c3aed;
  transition: background 0.15s ease, transform 0.08s ease;

  &:hover {
    background: #5b21b6;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`
