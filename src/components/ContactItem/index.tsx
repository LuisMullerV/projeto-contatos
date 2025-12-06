import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../app/store'
import { removeContact, startEditing } from '../../features/contacts/contactsSlice'
import { Contact } from '../../features/contacts/types'
import * as S from './styles'

export function ContactItem({ contact }: { contact: Contact }) {
  const dispatch = useDispatch<AppDispatch>()
  return (
    <S.Container>
      <S.Info>
        <strong>{contact.name}</strong>
        <span>{contact.email}</span>
        <span>{contact.phone}</span>
      </S.Info>
      <S.Actions>
        <S.Button onClick={() => dispatch(startEditing(contact.id))}>Editar</S.Button>
        <S.Button variant="danger" onClick={() => dispatch(removeContact(contact.id))}>Remover</S.Button>
      </S.Actions>
    </S.Container>
  )
}
