import { ContactForm } from '../../components/ContactForm'
import { ContactList } from '../../components/ContactList'
import * as S from './styles'

export function ContactsPage() {
  return (
    <S.Container>
      <S.Card>
        <S.Title>Novo contato</S.Title>
        <ContactForm />
      </S.Card>
      <S.Card>
        <S.Title>Meus contatos</S.Title>
        <ContactList />
      </S.Card>
    </S.Container>
  )
}
