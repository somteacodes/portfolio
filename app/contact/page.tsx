import React from 'react'

const page = () => {
  return (
    <div>
     
        <div className="title-container">
          <p className="title-text">Send A Message</p>
        </div>
        <div className="bg-surface rounded-xl p-4 w-full">
          <p className="text-sm text-tertiary py-4">Fill all the fields</p>
            <form id="contact-form" className='flex flex-col gap-4'>
                <input type="text"  required placeholder="Name" className="input-field"/>
                <input type="text" required  placeholder="Subject" className="input-field"/>
                <input type="email" required  placeholder="Email" className="input-field"/>
                <textarea name="message" id="contact-message" className="input-field" placeholder="Message"  cols={30} rows={10}></textarea>
                <div id="counter-display" className='flex w-full text-xs text-on-surface-variant justify-end' >
                0/500
                </div>
              
               <button className="button" type="submit" id="submit-button">Send message</button>
            </form>
        </div>
        <div className="success-container hidden">
          I have got your message, expect a response soon.
        </div>
      </div>
  )
}

export default page