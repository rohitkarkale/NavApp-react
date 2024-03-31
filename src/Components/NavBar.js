import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function NavBar() {
	const token = Boolean(localStorage.getItem("token"))
	const navigate = useNavigate()
	return (
		<div className='container'>


			<ul className="nav">
				{
					token === true ?

						<>
							<h1>Welcome user</h1>
							<li className="nav-item">

								<Link to="/UserDetails" className="nav-link active" aria-current="page">UserDetails</Link>


							</li>
							<li className="nav-item">


								<Link to="/Portfolio" className="nav-link active" aria-current="page">Portfolio</Link>

							</li>
							<li><button className="red btn" onClick={() => {
								localStorage.removeItem("token")
								navigate('/login')
							}}>Logout</button></li>

						</> :
						<>

							<li className="nav-item">


								<Link to="/login" className="nav-link active" aria-current="page">Login</Link>

							</li>
							<li className="nav-item">


								<Link to="/Registration" className="nav-link active" aria-current="page">Registration</Link>

							</li>
						</>
				}
			</ul>





		</div>
	)
}
