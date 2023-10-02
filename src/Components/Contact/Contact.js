import React from 'react'
import "./Contact.css"
import Button from '../Common/Button/Button'
// import Modal from '../Common/Modal/Modal'
// import useModal from '../Common/Modal/useModal'
// import Form from '../Common/Form/Form'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMobile, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {

    // const { open, openModal, closeModal } = useModal()

    return (
        <div className="container">
            <div className="contact content">
                <div className="contact__box">
                    <section className="contact__section">
                        <h1>Contact</h1>
                        <a className="contact__anchor" href="mailto:jorge.rodriguez.r@gmail.com"><Button className={"ghost__btn"} onClick={{/*openModal*/}} text="Let's talk" /></a>
                        {/*
                            open ? (
                                <Modal
                                    close={closeModal}
                                    render={() => <Form />}
                                />
                            ) : null
                            */}
                        <div className="contact__data__box">
                            <div className="contact__data">
                                <h3>We can also speak for</h3>
                                <a className="contact__data__info" href="https://twitter.com/JorgeGWD" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /><h5>twitter.com/jorgegwd</h5></a>
                                <a className="contact__data__info" href="https://ve.linkedin.com/in/jorgegwd" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /><h5>linkedin.com/in/jorgegwd</h5></a>
                            </div>
                            <div className="contact__data">
                                <h3>Or maybe</h3>
                                <div className="contact__data__info">
                                    <FontAwesomeIcon icon={faMobile} /><h5 className="phone">(+57) 311 2766863</h5>
                                </div>
                                <div className="contact__data__info">
                                    <FontAwesomeIcon icon={faEnvelope} /><h5 className="email">jorge.rodriguez.r@gmail.com</h5>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Contact