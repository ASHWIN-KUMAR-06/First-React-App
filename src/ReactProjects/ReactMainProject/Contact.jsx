import React, { useState } from 'react';


function Contact() {
  const [data, setData] = useState({
    fullname : "",
    phone : "",
    email : "",
    message : "",
  });


  function formSubmit(e){
    e.preventDefault();
    alert(`My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what i want to say ${data.message} `)
    setData({
      fullname : "",
      phone : "",
      email : "",
      message : "",
    })
  }

  function inputEvent(event) {
    const {name, value} = event.target;
    setData((prevValue)=>{
      return {
        ...prevValue,
        [name] : value,
      }
    })
  }


  return (
    <>
      <div className='contact'>
        <h2>Contact Us</h2>
        <form onSubmit={formSubmit}>

          <div class="mb-3">
            <label for="fullname" class="fullname-label">FullName</label>
            <input type="text" autoComplete='off' required class="form-control" id="fullname" placeholder="your full name..." name='fullname' value={data.fullname} onChange={inputEvent} />
          </div>

          <div class="mb-3">
            <label for="phone" class="phone-label">Phone</label>
            <input type="phone" autoComplete='off' required class="form-control" id="phone" placeholder="your phone no..." name='phone' value={data.phone} onChange={inputEvent} />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" autoComplete='off' required class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name='email' value={data.email} onChange={inputEvent} />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" required rows="3" name='message' value={data.message} onChange={inputEvent}></textarea>
          </div>

          <div class="col-12">
            <button class="btn btn-primary" type="submit">Submit form</button>
          </div>

        </form>
      </div>
    </>
  )
}

export default Contact;