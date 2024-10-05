import forgot_password from '../Styling/forgot_password.css'
function Forgotpw(){

    return(
        <div id='divid'>
        <div className='forgotpw01'>
            <div>
           <h2>Restore Your Account</h2>
           </div>
           <div id='div_line_forgot'></div>
           <div>
           <p id="pw_restore_p">Please provide us with your email or your phone number so we can restore your account right away.</p>
           </div>
           <div id='div_line_forgot'></div><br></br>
           <div>
           <input type="email" placeholder="Email or Phone Number" required/>
           </div>
           <div>
            <p id='go_back_forgot'>Somehow remembered?<a href="http://localhost:3000/login"> Go Back !</a></p>
           </div>
           
           <button id="search_button_forgot">Restore</button>
           <button id="button_forgot_pw"><a href="http://localhost:3000/login" id="cancel_link">Cancel</a></button>
           
        </div>
        </div>

    )

}

export default Forgotpw