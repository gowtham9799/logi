import React, { useState} from "react";
import { Button } from "react-bootstrap";
import Tables from "./Tables";


function Loginpg() {
   const[use,setUse]=useState()
   const [pass,setPass]=useState()
    const [vlog, setVlog] = useState(false)

    const user = (u) => {
        let userinput = u.target.value;
        setUse(userinput)
    }
    const passw = (e) => {
        let passinput = e.target.value;
        setPass(passinput)
    }


    const submit = () => {
    

        if (use == "gowtham" && pass == "1234") {
            setVlog(true)
        }
        else {if(use="gowtham"){
            console.log("valid")

        }
        else{
            console.log("invalid")
        }
        if(pass="1234"){
            console.valid("valid")
        }
        else{
            console.log("invalid")
        }
            
        }

    }
    return (
    
        <>
            {vlog ? <Tables/> :
                <div className='admin'>
                    <input typeof='text' id="username" placeholder="enter" onKeyUp={user}></input>
                
                    <input type='password' id="pass" placeholder="password" onKeyUp={passw}></input>
          

                    <Button id="submit" onClick={submit}>submit</Button>
                </div>
            }
     </>
    )
}

export default Loginpg