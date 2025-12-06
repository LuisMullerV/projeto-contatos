import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { ContactItem } from '../ContactItem'
import * as S from './styles'

export function ContactList() {
  const contacts = useSelector((s: RootState) => s.contacts.list)
  if (!contacts.length) return <S.Empty>Nenhum contato cadastrado.</S.Empty>

  return (
    <S.List>
      {contacts.map(c => <ContactItem key={c.id} contact={c} />)}
    </S.List>
  )
}
