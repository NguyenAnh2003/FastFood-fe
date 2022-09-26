import React, { useState } from 'react';
import validator from 'validator';

export default function MailForm() {

  const [email, setEmail] = useState('');

  const mailHandler = () => {
    alert(validator.isEmail(email) ? 'Valid' : `Invalid email: ${email}`);
  }

  return (
    <React.Fragment>
      <form action="">
        <div className="grid md:grid-cols-3 gird-cols-1 gap-4 flex justify-center items-center">
          <div className="md:ml-auto md:mb-6">
            <p className="">
              <strong>Liên hệ qua email</strong>
            </p>
          </div>

          <div className="md:mb-6">
            <input
              type="email"
              className='mail-form'
              id="exampleFormControlInput1"
              onChange={e => setEmail(e.target.value)}
              placeholder="Email address" />
          </div>

          <div className="md:mr-auto mb-6">
            <button
              onClick={mailHandler}
              type="submit"
              className="subsribe-btn">
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  )
}
