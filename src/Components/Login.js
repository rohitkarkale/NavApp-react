import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [formData, setFormData] = useState({})
  const navigate=useNavigate()
  const handleData = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value
      })
      console.log(formData);

  }
  const addUser = (e) => {
    e.preventDefault()
    const userData = localStorage.getItem('gfg')
   
    const data = JSON.parse(userData)
    console.log(data);
   if(data!=null && data.uname === formData.uname && data.uemail === formData.uemail){
        localStorage.setItem('token', true)
        navigate('/UserDetails')
    }
    else{
      console.log("Account doesnt exist , please register")
      navigate('/registration')
    }
   
}

  return (
    <div>

          
    <form onSubmit={addUser}>
      <div className='card'>
      <div className='card-body'>
        
              <h4>Login</h4>
          
        <input className="form-control form-control-lg " required type='text' placeholder='Enter Username' name='uname'
            onChange={handleData}/>
            
            <br/>
        <input className="form-control form-control-lg"type='email' required placeholder='Enter Email' name='uemail'
            onChange={handleData}/>
            <br/>
        <button  class="btn btn-primary">Login</button>
        </div>
        </div>
    </form>
</div>
  );
}
