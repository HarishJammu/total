import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux';
import { login } from "../actions/auth.action";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, } from 'react-bootstrap'



import { useNavigate } from 'react-router-dom';


const Login = () => {
  
 
  const [error, setError] = useState('');
  
  const [email,setEmail]=useState('')
	const [password,setPassword]=useState('');
	const auth=useSelector(state=>state.auth)
	const navigate =useNavigate()
	//const [error,setError]=useState('');
	//const naviagate=useNavigate()
	const dispatch=useDispatch();

  const userLogin = (e) => {
    e.preventDefault();
    const user={
			email,password
		}
		
		dispatch(login(user));
 
	}
	if(auth.authenticate){
		return navigate('/')
	}

  

 
  return (
    <div className="login-wrapper py-5 home-wrapper-2">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-8 col-sm-10">
          <div>
            <div className="card-body p-5">
              <h3 className="text-center">Login</h3>
              <p className="text-center mb-4">Welcome Back!</p>
              <Container  fluid>
			
			<Row >
				<Col >
        <Form onSubmit={userLogin}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control 
							type="email" 
							value={email} 
							placeholder="Enter email"
							onChange={(e)=>setEmail(e.target.value)}/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control 
							type="password" 
							placeholder="Password"
							value={password}
							onChange={(e)=>setPassword(e.target.value)}/>
						</Form.Group>
            <div>
                <div className="d-grid gap-2">
                <Button variant="primary" type="submit">
									LogIn
						</Button>
                    </div>
                </div>
					</Form>
				</Col>

			</Row>

		</Container>
                </div> {error && (
                      <div className="alert alert-danger">{error}</div>
                    )}
                    <div className="mb-3">
                      <Link to="/ForgotPassword" className="form-link">
                        Forgot password?
                      </Link>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                      <p className='m-0'>Dont have an account?</p>
                      <Link to="/register" className="form-link">
                        Sign up
                      </Link>
                    </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Login;
