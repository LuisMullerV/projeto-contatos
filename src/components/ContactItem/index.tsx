import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { AppDispatch } from '../../app/store'
import {
  startEditing,
  removeContact
} from '../../features/contacts/contactsSlice'
import { Contact } from '../../features/contacts/types'
import * as S from './styles'

interface Props {
  contact: Contact
}

export function ContactItem({ contact }: Props) {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  function handleEdit() {
    // marca qual contato está sendo editado
    dispatch(startEditing(contact.id))
    // leva para a página de formulário
    navigate('/novo')
  }

  function handleRemove() {
    dispatch(removeContact(contact.id))
  }

  return (
    <S.Container>
      <S.Info>
        <strong>{contact.name}</strong>
        <span>{contact.email}</span>
        <span>{contact.phone}</span>
      </S.Info>

      <S.Actions>
        <S.Button onClick={handleEdit}>Editar</S.Button>
        <S.Button variant="danger" onClick={handleRemove}>
          Remover
        </S.Button>
      </S.Actions>
    </S.Container>
  )
}
