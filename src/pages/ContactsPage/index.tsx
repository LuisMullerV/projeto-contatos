import { Link } from 'react-router-dom'
import { ContactList } from '../../components/ContactList'
import * as S from './styles'

export function ContactsListPage() {
  return (
    <S.Container>
      <S.Card>
        <S.HeaderRow>
          <S.Title>Meus contatos</S.Title>
          <S.AddButton to="/novo">Adicionar contato</S.AddButton>
        </S.HeaderRow>

        <ContactList />
      </S.Card>
    </S.Container>
  )
}
