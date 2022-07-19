import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase-init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    const handleNameBlur = event => {
        setName(event.target.value);
    }
    
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }

    const handlePhonedBlur = event => {
        setPhone(event.target.value);
    }

    /* form-submit mne hocche akta user k create kora tai handler er name handle Create user...  */
    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = {name, email, address, phone};
        console.log(shipping);
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping information</h2>
                <form onSubmit={handleCreateUser} action="">
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Your Email</label>
                        {/* amra already shipment route e ashar jonne login korse so amra aikhane email tah optional hisabe rakhse user k auto set kore dicchi and amra readOnly kore dise jno ai field e kicu type nh kora jay shudhu read kora jabe... */}
                        <input value={user?.email} type="email" name="email" id="" readOnly required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhonedBlur} type="text" name="phone" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>
            
            </div>
        </div>
    );
};

export default Shipment;