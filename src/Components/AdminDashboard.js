import React, { useState } from "react";
/*import { Route } from "react-router-dom";*/
import { useNavigate } from "react-router-dom";
/* import { Route, Redirect } from "react-router-dom"; */
import { auth } from "../firebase";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    /* Your form data */
  });

  const handleFormSubmit = () => {
    // Replace this condition with your specific logic for form submission
    if (formData.name && formData.email) {
      navigate("/new-path");
    } else {
      alert("Form submission condition not met for redirection.");
    }
  };

  return (
    <div>
      {/* Your form elements here */}
      <button onClick={handleFormSubmit}>Submit Form</button>
    </div>
  );
};

/* const AdminDashboard = () => {
  const navigate = useNavigate();

  // Example: Redirect to "/new-path" after a certain condition is met
  const handleRedirect = () => {
    // Your logic to determine when to redirect
    navigate('/new-path');
  };

  return (
    <div>
      <p>Admin Dashboard content here.</p>
      <button onClick={handleRedirect}>Click to Redirect</button>
    </div>
  );
};

export default AdminDashboard; */

/*const AdminDashboard = ({ component: Component, ...rest }) => {
  const user = auth.currentUser;

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
}; */

export default AdminDashboard;
