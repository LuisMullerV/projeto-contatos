import {
  FormEvent,
  useEffect,
  useState,
  ChangeEvent
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootState, AppDispatch } from '../../app/store'
import {
  addContact,
  updateContact,
  cancelEditing
} from '../../features/contacts/contactsSlice'
import { ContactsState } from '../../features/contacts/types'
import * as S from './styles'

// --------- helpers ---------

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 11)

  const ddd = digits.slice(0, 2)
  const first = digits.slice(2, 7)
  const last = digits.slice(7, 11)

  if (digits.length <= 2) {
    return `(${ddd}`
  }

  if (digits.length <= 7) {
    return `(${ddd})${first}`
  }

  return `(${ddd})${first}-${last}`
}

const isValidEmail = (value: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(value)
}

// --------- componente ---------

export function ContactForm(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const { list, editingId } = useSelector<RootState, ContactsState>(
    (state) => state.contacts
  )

  const editing = list.find((c) => c.id === editingId) || null

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [emailError, setEmailError] = useState('')

  useEffect(() => {
    if (editing) {
      setName(editing.name)
      setEmail(editing.email)
      setPhone(editing.phone)
    } else {
      setName('')
      setEmail('')
      setPhone('')
      setEmailError('')
    }
  }, [editing])

  function handlePhoneChange(e: ChangeEvent<HTMLInputElement>) {
    const formatted = formatPhone(e.target.value)
    setPhone(formatted)
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.trim()
    setEmail(value.toLowerCase())
    if (emailError) setEmailError('')
  }

  function submit(e: FormEvent) {
    e.preventDefault()
    if (!name || !email || !phone) return

    if (!isValidEmail(email)) {
      setEmailError('E-mail inválido')
      return
    }

    if (editing) {
      dispatch(
        updateContact({
          id: editing.id,
          name,
          email,
          phone
        })
      )
    } else {
      dispatch(addContact({ name, email, phone }))
    }

    // depois de salvar, volta pra lista
    navigate('/')
  }

  return (
    <S.Form onSubmit={submit}>
      <S.Field>
        <label htmlFor="name">Nome completo</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </S.Field>

      <S.Field>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="seuemail@exemplo.com"
        />
        {emailError && (
          <span style={{ color: 'red', fontSize: '0.8rem' }}>
            {emailError}
          </span>
        )}
      </S.Field>

      <S.Field>
        <label htmlFor="phone">Telefone</label>
        <input
          id="phone"
          type="tel"
          placeholder="(11)98722-8712"
          value={phone}
          onChange={handlePhoneChange}
          maxLength={15}
        />
      </S.Field>

      <S.Actions>
        <S.Button type="submit">
          {editing ? 'Salvar' : 'Adicionar'}
        </S.Button>

        {editing && (
          <S.Button
            type="button"
            variant="secondary"
            onClick={() => dispatch(cancelEditing())}
          >
            Cancelar
          </S.Button>
        )}
      </S.Actions>
    </S.Form>
  )
}
