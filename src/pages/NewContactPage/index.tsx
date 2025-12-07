import { ContactForm } from '../../components/ContactForm'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'

export function NewContactPage() {
    const navigate = useNavigate()

    return (
        <S.Container>
            <S.Card>
                <S.Title>Novo contato</S.Title>

                <ContactForm />

                <S.BackButton onClick={() => navigate('/')}>
                    Voltar
                </S.BackButton>
            </S.Card>
        </S.Container>
    )
}
