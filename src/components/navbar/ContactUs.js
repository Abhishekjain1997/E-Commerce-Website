import React,{useState,useRef} from 'react'
import "./ContactUs.css"

const ContactUs = () => {
    const [error, setError] = useState(null);

    const name= useRef("");
    const email= useRef("");
    const phone = useRef("");

    const onSubmitHandler= async (e)=>{
        e.preventDefault();
         const data={
            name:name.current.value,
            email:email.current.value,
            phone:phone.current.value
        }

        try{
            const response = await fetch("https://e-commerce-project-3bdcf-default-rtdb.firebaseio.com/contactUs_user_info.json/",{
                method: 'POST',
                body: JSON.stringify(data),
            })
            if(!response.ok){
                 throw new Error('User info not submitted...please try again!')
            }
        } catch(err){
            setError('User info not submitted...please try again! ')
        }  
        console.log(data) 
        name.current.value="";
        email.current.value="";
        phone.current.value="";
    }

    let content="";
    if(error){
        content=error;
    }

  return (
    <>
    <form onSubmit={onSubmitHandler}>
    <div className='container'>
    <div className="mb-3 formContainer" >
    <label htmlFor="name" className="form-label formName">Name: </label>
    <input type="text" ref={name} className="form-control" id="name" placeholder="Enter your name here..."/>
  </div>
    <div className="mb-3">
  <label htmlFor="email" className="form-label">Email: </label>
  <input type="email" ref={email} className="form-control" id="email" placeholder="Enter your Email Id..."/>
</div>
<div className="mb-3">
  <label htmlFor="phone" className="form-label">Phone Number: </label>
  <input type="number" ref={phone} className="form-control" id="phone" placeholder="Enter your phone number..."/>
</div>
<button type="submit" className="btn btn-success">Submit</button>
    </div>
    </form>
    {content}
    </>
    )
}

export default ContactUs