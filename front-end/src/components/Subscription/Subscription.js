import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import $ from "jquery";
import "./subscription.css"

// class Subscription extends Component {
//   render() {
//     return <div>Subscription</div>;
//   }
// }

const Subscription = () => {
  const [subscribe, setSubscribe] = useState({});
  let navigate = useNavigate();
  // ['id', 'name', 'email', 'cc_number', 'cc_code', 'cc_expiry', 'studioId', 'studioName', occurrence']
  let studioNameChange =(event)=>{
      if(event.target.value===''){$("#name").html("Studio name should not be empty")}
      else{$("#name").html("")}
  }

  let AddSubscription =(event)=> {
      let rName = document.getElementById("name")
      if(rName.value===''){$("#name").html("Studio name should not be empty")}
      
      if(rName.value===''){return}

      const formData = new FormData();
      formData.append('name', rName.value);

      // Require Login
      // const requestOption = {
      //     method: 'POST',
      //     headers: {'Content-Type': 'application/json'},
      //     body: JSON.stringify({username: localStorage.getItem("username"), password: localStorage.getItem("password")})
      // };

      // fetch("http://127.0.0.1:8000/accounts/api/token/", requestOption)
      //     .then(response => response.json())
      //     .then(jason => {
      //         localStorage.setItem("access", jason.access)
      //     })
      //     .catch()

      // Require Authorization
  //     const requestOptions = {
  //         method: 'POST',
  //         headers: {'Authorization': 'Bearer ' + localStorage.getItem("access")},
  //         body:formData
  //     };
  //     fetch("http://127.0.0.1:8000/restaurant/add/", requestOptions)
  //         .then(response => response.json())
  //         .then(jason => {
  //             console.log(jason)
  //             if(jason.detail && jason.detail.includes("already")){navigate('/')}
  //             else{navigate("/navbar/restaurant/")}})


  }

  // Go back to profile
  // let toBack = (event) =>{
  //     return navigate("/")
  // }

      return<>
          <div id = "body3">
                <br/><br/><br/>
          <div className="container contact">
              <div className="row">
                  <div className="col-md-3">

                  <h2>Add New Subscription.</h2>
              </div>
          </div>
          <div className="col-md-9">
              <div className="contact-form">
                  <div className="form-group">
                      <label className="control-label col-sm-10" htmlFor="name">Studio Name: <span id="name" style={{color:"red"}}/></label>
                      <div className="col-sm-10">
                          <input type="text" className="form-control" id="name" placeholder="Enter Studio Name"
                                 name="name" onChange={nameCheck}/>
                      </div>
                  </div>


                  <div className="form-group">
                      <div className="col-sm-offset-2 col-sm-10">
                          <button type="submit" className="btn btn-default" onClick={AddSubscription}>Submit</button>
                      </div>
                  </div>

              </div>

              <br/>

          </div>

      </div>
        </div>
    </>

}

export default Subscription
