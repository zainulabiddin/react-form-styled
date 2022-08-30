import React,{useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import styled from 'styled-components';


const Wrapper = styled.div`
  padding: 2em;
  background: papayawhip;
`

const Wrapper1 = styled.div`
  padding: 2em;
  background: yellow;
`

const Title = styled.label`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  margin:1rem 0rem .2rem 0rem;
`

const Button = styled.button`
  font-size: 1.5em;
  text-align: center;
  color: white;
  background-color:black;
  border-radius:.2rem;
`

const Input = styled.input`
color:${props=>props.InputCol||"red"}
`
const P = styled.p`
 text-transform:uppercase;
`

const App = () => {
  const[data,setData]=useState({
    name:"",
    email:"",
    password:"",
    confirm_password:""
  });
  const[entry,setEntry]=useState([]);
  const inputHandler = (event)=>{
    event.preventDefault();
const name=event.target.name;
const value=event.target.value;
setData((prev)=>{
return {...prev,[name]:value};
})
  }

  const submitHandler=(e)=>{
    e.preventDefault();
    if(data.name&&data.email&&data.password&&data.confirm_password){
      const newEntry = {id:new Date().getTime().toString(),...data}
      setEntry([...entry,newEntry])
      console.log(entry);
      setData({
        name:"",
          email:"",
          password:"",
          confirm_password:""
      });
    }else{
      alert("please fill all data fields")
    }

  }
  return (
  
    <div className="container">
      <div className="mb-30">
      <Wrapper>
        <form onSubmit={submitHandler}>
  <Title htmlFor="exampleFormControlInput1" className="form-label">User Name</Title>
  <Input type="text" className="form-control" id="exampleFormControlInput1" autocomplete="off" value={data.name} placeholder="User Name" name="name" onChange={inputHandler}/>

  <Title htmlFor="exampleFormControlInput2" className="form-label">Email address</Title>
  <Input type="email" className="form-control" id="exampleFormControlInput2" autocomplete="off" value={data.email} placeholder="name@example.com" name="email" onChange={inputHandler}/>

  <Title htmlFor="exampleFormControlInput3" className="form-label">Password</Title>
  <Input InputCol="green" type="password" className="form-control" id="exampleFormControlInput3" autocomplete="off" value={data.password} placeholder="Password" name="password" onChange={inputHandler}/>

  <Title htmlFor="exampleFormControlInput4" className="form-label">Confirm Password</Title>
  <Input InputCol="green" type="password" className="form-control" id="exampleFormControlInput4" autocomplete="off" value={data.confirm_password} placeholder="Confirm Password" name="confirm_password" onChange={inputHandler}/><br/>
<Button type="submit">Submit</Button>
  </form>
  </Wrapper>
 
{
  entry.map((currElem)=>{
    const{id,name,email,password,confirm_password}=currElem;
    return(
      <Wrapper1>
      <div key={id}>
      <P>{name}</P>
      <P>{email}</P>
      <P>{password}</P>
      <P>{confirm_password}</P>
      <hr/>
      </div>
      </Wrapper1>
    )
  })
}

</div>
    </div>
    
  )
}

export default App