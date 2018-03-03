import React from 'react';
import { NavLink, Link } from 'react-router-dom'

const Navbar = (props) => {
    console.log(props)
	return (
		<div>
            <div style={{margin: '30px'}}>
            <NavLink to="/">Home</NavLink>
			{props.currentUser
				? (
					<span style={{margin: '30px'}}>
                    <NavLink to="/browseparks">Browse Parks</NavLink>

                    <span style={{margin: '30px'}}> <Link to="/users/:id">Hi!    {props.currentUser.name}</Link></span>
                    <NavLink to="/signout">Sign Out</NavLink>
                    
					</span >
                    
				)
				: (
					<span style={{margin: '30px'}}>
						 <NavLink to="/signin">Sign In</NavLink>
                         <NavLink to="/signup">Sign Up</NavLink>
					</span>
				)
            }
            </div>
		</div>
	)
}

export default Navbar


