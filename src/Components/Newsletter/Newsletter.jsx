import React from "react";
import './Newsletter.css'
import { useForm, ValidationError } from '@formspree/react';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Newsletter = () => {
    const [state, handleSubmit] = useForm("mnqyveja");
    if (state.succeeded) {
        console.log('visitor subscribed to newsletter')
        return <ToastContainer
            theme="dark"
        />;
    }

    const notify = () => toast("you have successfully subscribed to our newsletter");
    return (
        <React.Fragment>
            
            <div className="bg-img text-center parentNewsletter">
                <div className="container">
                    <h2 className="toast1">
                        <strong>Get Newsletter</strong>
                    </h2>
                    <h6 className="font-alt toast1">Get latest updates about our new solutions</h6>
                    <br />
                    <form onSubmit={handleSubmit} className="form-subscribe">
                        <div className="input-group">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="form-control input-lg"
                                placeholder="Your eamil address"
                                required
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                            <span className="input-group-btn">
                                <button onClick={notify} className="btn btn-success btn-lg" type="submit" >Subscribe</button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Newsletter