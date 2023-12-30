import {
  ContainerModal,
  ContainerOverlay,
  Excluir,
  ModalCloseButton,
  ModalContent,
  ModalDescription,
  ModalImage,
  ModalText,
  ModalTitle
} from './styles'
import modalPizza from '../../assets/images/modal_pizza.png'
import excluir from '../../assets/images/excluir.png'

export interface ModalProps {
  onClose: () => void
  showSidebar: () => void
}

const Modal = ({ showSidebar, onClose }: ModalProps) => (
  <>
    <ContainerOverlay />
    <ContainerModal>
      <ModalContent>
        <ModalImage src={modalPizza} alt="Pizza" />
        <ModalText>
          <ModalTitle>
            <b>Pizza Marguerita</b>
          </ModalTitle>
          <Excluir src={excluir} alt="" onClick={onClose} />{' '}
          <ModalDescription>
            A pizza Margherita é uma pizza clássica da culinária italiana,
            reconhecida por sua simplicidade e sabor inigualável. Ela é feita
            com uma base de massa fina e crocante, coberta com molho de tomate
            fresco, queijo mussarela de alta qualidade, manjericão fresco e
            azeite de oliva extra-virgem. A combinação de sabores é perfeita,
            com o molho de tomate suculento e ligeiramente ácido, o queijo
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que
            agrada a todos os paladares e é uma ótima opção para qualquer
            ocasião.
            <br /> <br /> Serve: de 2 a 3 pessoas
          </ModalDescription>
          <ModalCloseButton
            onClick={() => {
              onClose()
              showSidebar()
            }}
          >
            Adicionar ao carrinho - R$ 60,90
          </ModalCloseButton>
        </ModalText>
      </ModalContent>
    </ContainerModal>
  </>
)

export default Modal
