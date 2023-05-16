import React from 'react'
import './login.css'
import eye from './../../components/eye.png'

export default function Login() {
  return (
    <div className='register'>
        <div>
                <a className='home_link_'>Back To Home</a>
                
            </div>
            <div className='main_bg'>
           
            </div>
        
        <div className='info'>
            
            
            <div className='frame'>
                

                
                

                <div className='get_input'>
                    <form>
                    <div className='logo'></div>
                    <p className='header1'>LOGIN FORM</p>
                    <p className='header2'>We're Glad To Have Back!</p>


                        <label className='L_fullname'>Phone number</label><br/>
                        <input className='I_fullname' type='text'/><br/>

                        
                        <label className='L_password'>Password</label><br/>
                        <input className='I_password' placeholder='*******' type='text'/><br/>
                        <a className='fogot_pwd'>Forgot Password?</a><br/>
                        <div className='check'>
                        <p><input type='checkbox'/>Remember Me</p>
                        </div>

                        

                        

                        <div>
                            <button className='log_in'>Log in</button>
                        </div>

                    </form>

                    <div className='or_login_'>or Login with</div>
                    <div className='icons_'>
                        <div className='google_'></div>
                        <div className='fb_'></div>

                    </div>
                    
                </div>
                <div className='have_acc_'>
                        <p className='haveAcc'>Don't Have An Account? <a href='./'>Sign up</a></p>
                    </div>


            </div>

            
            
           
        </div>
        <div className='bottom'>
                <p className='privacy_'>Privacy Policy</p>
                <p className='copy_'>Copyright 2023</p>
            </div>

        




    </div>
  )
}
