import styled from 'styled-components'

export const Container = styled.li`
  list-style: none;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex; justify-content: space-between;
`
export const Info = styled.div` span { display: block; color: #666; } `
export const Actions = styled.div` display: flex; gap: 8px; `
export const Button = styled.button<{variant?: string}>`
  padding: 6px 10px; border-radius: 6px; border: none;
  background: ${({ variant }) => variant === 'danger' ? '#ff4d4f' : '#4b1ba6'};
  color: #fff;
`
