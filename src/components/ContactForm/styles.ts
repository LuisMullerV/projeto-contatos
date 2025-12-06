import styled from 'styled-components'

export const Form = styled.form` display: flex; flex-direction: column; gap: 12px; `
export const Field = styled.div`
  display: flex; flex-direction: column; gap: 4px;
  input { padding: 10px; border-radius: 8px; border: 1px solid #ccc; }
`
export const Actions = styled.div` display: flex; gap: 8px; `
export const Button = styled.button<{variant?: string}>`
  padding: 10px 16px; border-radius: 8px; border: none;
  background: ${({ variant }) => variant === 'secondary' ? '#ddd' : '#7b2ff7'};
  color: #fff;
`
