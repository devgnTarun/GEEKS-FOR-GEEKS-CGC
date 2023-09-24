import React, {useState} from 'react'
import axios from 'axios'

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [course, setCourse] = useState('')
    const [message, setMessage] = useState('')




    const handleContact = async (e) => {
        try {
            e.preventDefault()
          
            const myForm = {name , email , phoneNo , course, message}
            console.log(myForm)
            const config = {headers :{"Content-Type" : 'application/json'} }
            const {data} = await axios.post( '/api/contact' , myForm, config )

            console.log(data)


        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
    {/* contact css in team css  */}
        <div id="contact" className="contact_page relative">
            <form className="contact_form">
                <h1>Contact Form</h1>
                <input required type="text"  value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your Name...' />
                <input required type="email"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />
                <input required type="tel"  value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} placeholder='Enter Phone Number'  />
                <input required type="text"  value={course} onChange={(e) => setCourse(e.target.value)} placeholder='Enter your course' />
                <textarea required placeholder='Message...'  value={message} onChange={(e) => setMessage(e.target.value)}  cols="10" rows="4"></textarea>
                <button className="mainBtn" onClick={handleContact}>
                    Send Message
                </button>
            </form>
        </div>
    </>
  )
}

export default Contact