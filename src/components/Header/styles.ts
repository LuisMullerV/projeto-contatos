import styled from 'styled-components'

export const Container = styled.header`
  padding: 24px 32px;
  background: ${({ theme }) => theme.colors.card};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
`

export const Title = styled.h1` margin: 0; font-size: 1.5rem; `
export const Subtitle = styled.p` margin: 0; color: ${({ theme }) => theme.colors.textLight}; `
