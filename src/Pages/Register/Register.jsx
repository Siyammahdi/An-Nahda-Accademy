
import loginBg from "../../assets/Others/login.jpg";
import texture from "../../assets/Others/bgSlice.b9d8c29c.svg";
import logo from "../../assets/Logo/logo.png";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Register = () => {
  const LoginText = "Already have an account?";
  const [showPass, setShowPass] = useState(false);
  const [showCPass, setShowCPass] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    dateOfBirth: Yup.date().required('Date of Birth is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        'Password must contain at least one uppercase letter, one lowercase letter, and one digit'
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div>
      <div className="hero w-full p-0 min-h-screen" style={{ backgroundImage: `url(${loginBg})`, placeItems: "normal" }}>
        <div className="hero-content items-stretch p-0 flex-col lg:flex-row-reverse">
          <div className="text-center flex space-y-5 flex-col justify-center px-20 lg:text-left w-2/5">
            <h1 className="text-4xl font-bold z-10"><span className="text-[#ffba73]">Register </span><br /> An-Nahda Academy</h1>
            <img className="" src={logo} alt="" />
            
          </div>
          <div className="space-y-3 w-3/5 shadow-2xl bg-black bg-opacity-40 backdrop-blur-lg">
            <div className="pt-">
              <h2 className="text-3xl font-semibold p-4 pl-8">Sign Up</h2>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form className="card-body py-0">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <Field type="text" name="name" placeholder="name" className="input input-bordered" required />
                      <ErrorMessage name="name" component="div" className="text-red-500" />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <Field type="email" name="email" placeholder="email" className="input input-bordered" required />
                      <ErrorMessage name="email" component="div" className="text-red-500" />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Phone</span>
                      </label>
                      <Field type="number" name="phone" placeholder="phone" className="input input-bordered" required />
                      <ErrorMessage name="phone" component="div" className="text-red-500" />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Date of Birth</span>
                      </label>
                      <Field type="date" name="dateOfBirth" placeholder="date of birth" className="input input-bordered" required />
                      <ErrorMessage name="dateOfBirth" component="div" className="text-red-500" />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <Field type={showPass ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                      <button onClick={() => setShowPass(!showPass)} className="relative text-lg bottom-8 left-[310px]">{showPass ? <VscEye /> : <VscEyeClosed />}</button>
                      <ErrorMessage name="password" component="div" className="text-red-500" />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Confirm Password</span>
                      </label>
                      <Field type={showCPass ? "text" : "password"} name="confirmPassword" placeholder="confirm" className="input input-bordered" required />
                      <button onClick={() => setShowCPass(!showCPass)} className="relative text-lg bottom-8 left-[310px]">{showCPass ? <VscEye /> : <VscEyeClosed />}</button>
                      <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />
                    </div>
                  </div>
                  <div className="form-control mt-6 ">
                    <button type="submit" className="btn btn-primary text-base">Sign Up</button>
                  </div>
                  <div className="pt-6 space-y-4 text-center">
                    <h6 className="">_____________ Or Sign up using _____________</h6>
                    <div className="flex space-x-3 justify-center">
                      <button className="btn btn-outline text-2xl  btn-primary"><FaGoogle /></button>
                      <button className="btn btn-outline text-2xl  btn-primary"><FaFacebook /></button>
                      <button className="btn btn-outline text-2xl  btn-primary"><FaTwitter /></button>
                    </div>
                    <p className="m-0">{LoginText} <Link to="/login"><button className="btn btn-link text-blue-500 px-0 text-base">Login</button></Link> </p>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
        <img className="bottom-6 absolute right-0 pointer-events-none" src={texture} alt="" />
      </div>
    </div>
  );
};

export default Register;
