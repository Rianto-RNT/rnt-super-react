import React from 'react'
import {Modal, BG, Close} from './modal.style'

const ModalComponent = ({toggleModal}) => (
  <>
    <Modal>
      <Close onClick={toggleModal} />
    </Modal>
    <BG onClick={toggleModal} />
  </>
)

export default ModalComponent
