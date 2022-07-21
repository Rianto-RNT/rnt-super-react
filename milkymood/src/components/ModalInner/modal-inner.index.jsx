import React, {useState} from 'react'
import {Container} from './modal-inner.style'
import Form from '../Form/form.index'

const ModalInnerComponent = () => {
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSuccess = () => {
    setShowSuccess(true)
  }

  return (
    <Container>
      {showSuccess ? (
        <>
          <h4>Yay! we're so excited!</h4>
          <p>
            We hope you are too. In the meantime you can follow us on social media to keep up to do
            date:
          </p>
        </>
      ) : (
        <>
          <h3>Sign Up</h3>
          <p>
            Join our newsletter to be notified of when pre-release tickets for our first ever world
            tour go on sale.
          </p>
          <Form handleSuccess={handleSuccess} />
        </>
      )}
    </Container>
  )
}

export default ModalInnerComponent
