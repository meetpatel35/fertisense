import React from 'react'
import './Css/support.css'
function Support() {
    
  return (
    <div className='support-main'>
    <iframe className='form' title='SupportForm' src="https://docs.google.com/forms/d/e/1FAIpQLScl0iSOjCG6J8K0_mxnKq4bx3MbHGrJCn8s9y0PrkUbEdz2OQ/viewform?embedded=true" width="640" height="857" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
  )
}

export default Support























// const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     query: '',
    //     phone: '',
    //     message: ''
    //   });
    
    //   const handleChange = (e) => {
    //     setFormData({
    //       ...formData,
    //       [e.target.name]: e.target.value
    //     });
    //   };
    
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Here you can add form validation and submission logic
    //     console.log(formData);
    //   };


// <div className='support-main'>
    //     <div className="form-container">
    //   <h2 className="form-heading">Support Form</h2>
    //   <form onSubmit={handleSubmit}>
    //     <div className="form-group">
    //       <label htmlFor="name">Name</label>
    //       <input
    //         type="text"
    //         id="name"
    //         name="name"
    //         placeholder="Enter your name"
    //         value={formData.name}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>

    //     <div className="form-group">
    //       <label htmlFor="email">Email</label>
    //       <input
    //         type="email"
    //         id="email"
    //         name="email"
    //         placeholder="Enter your email"
    //         value={formData.email}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>

    //     <div className="form-group">
    //       <label htmlFor="query">Query</label>
    //       <select
    //         id="query"
    //         name="query"
    //         value={formData.query}
    //         onChange={handleChange}
    //         required
    //       >
    //         <option value="">Select a query</option>
    //         <option value="general">General</option>
    //         <option value="technical">Technical</option>
    //         <option value="billing">Billing</option>
    //       </select>
    //     </div>

    //     <div className="form-group">
    //       <label htmlFor="phone">Phone Number</label>
    //       <input
    //         type="tel"
    //         id="phone"
    //         name="phone"
    //         placeholder="Enter your phone number"
    //         value={formData.phone}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>

    //     <div className="form-group">
    //       <label htmlFor="message">Additional Message</label>
    //       <textarea
    //         id="message"
    //         name="message"
    //         placeholder="Enter any additional message"
    //         value={formData.message}
    //         onChange={handleChange}
    //         rows="5"
    //       ></textarea>
    //     </div>

    //     <button type="submit" className="submit-btn">Submit</button>
    //   </form>
    // </div>
    // </div>