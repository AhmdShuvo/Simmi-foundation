import React from 'react';
import { Container } from 'react-bootstrap';

const Welcom = () => {
    return (
        <>
      <section className='d-flex justify-content-evenly bg-dark text-light p-5'>
      <div style={{width:'40%',padding:'0% 6% 0% 3%'}}  >
                <h1>Welcome to <span style={{color:'#f58634'}}>SIMMI</span></h1>
                <p className="mt-5">Smart India Multi Management Institute is a pan India NGO registered in Haryana, India; carrying out welfare projects on education, healthcare, livelihood and women empowerment. We believe that unless members of the civil society are involved proactively in the process of development, sustainable change will not happen. Based on this, Simmi Foundation sensitizes and engages the civil society, making it an active partner in all its welfare initiatives.</p>
            </div>
           <div>
           <img className='img-fluid' height="350px" width="350px" src="https://simmifoundation.org/home/images/home/map-dark.png" alt="" />
           </div>
      </section>
        </>
    );
};

export default Welcom;