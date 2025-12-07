import { ContactForm } from '../../components/ContactForm'
import * as S from '/Curso Ebac/Contatos-projeto/src/pages/NewContactPage/styles'

export function NewContactPage() {
    return (
        <S.Container>
            <S.Card>
                <S.Title>Novo contato</S.Title>
                <ContactForm />
            </S.Card>
        </S.Container>
    )
}
