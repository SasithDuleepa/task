import React from 'react';
import './register.css';

import main_bg from '../../components/main_bc.png';

export default function Register() {
  return (
    <div className='register'>
        <div>
                <a className='home_link'>Back To Home</a>
                
            </div>
        
        <div className='info'>
            
            
            <div className='frame'>
                

                
                

                <div className='get_input'>
                    <form>
                    <div className='logo'></div>
                    <p className='header1'>REGISTER FORM</p>
                    <p className='header2'>Join The Shopping Fun</p>


                        <label className='L_fullname'>Full Name</label><br/>
                        <input className='I_fullname' type='text'/><br/>

                        <label className='L_Phone'>Phone Number</label><br/>
                        <input className='I_phone' type='text'/><br/>

                        <label className='L_password'>Password</label><br/>
                        <input className='I_password' placeholder='********' type='text'/><br/>

                        <label className='L_confirm'>Confirm Password</label><br/>
                        <input className='I_confirm' type='text'/><br/>

                        <div className='chapther'></div>

                        <div>
                            <button className='sign_in'>Sign in</button>
                        </div>

                    </form>

                    <div className='or_login'>or Login with</div>
                    <div className='icons'>
                        <div className='google'></div>
                        <div className='fb'></div>

                    </div>
                    
                </div>
                <div className='have_acc'>
                        <p className='haveAcc'>Already Have An Account? <a href='./login'>Sign in</a></p>
                    </div>


            </div>

            
            
           
        </div>
        <div className='bottom'>
                <p className='privacy'>Privacy Policy</p>
                <p className='copy'>Copyright 2023</p>
            </div>

        <div className='main_bg'>
            {/* <img className='main_bg' src={main_bg} /> */}
            </div>




    </div>
  )
}
