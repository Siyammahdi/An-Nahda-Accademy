
import loginBg from "../../assets/Others/login.jpg";
import texture from "../../assets/Others/bgSlice.b9d8c29c.svg";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const SignUpText = "Don't have an account?";
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        'Password must contain at least one uppercase letter, one lowercase letter, and one digit'
      ),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  const signUpTextLg = "_____________ Or Sign up using _____________"
  const signUpTextSm = "_______ Or Sign up using _______"

  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: `url(${loginBg})` }}>
        <div className="hero-content p-0 flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left md:w-1/2 m-5">
            <h1 className="text-2xl md:text-4xl font-bold ">Welcome Back</h1>
            <p className=" md:py-6 text-xs md:text-sm">Reconnect with seamless access. Your trusted login awaits. Embrace familiarity and dive into a world tailored just for you. Happy returning</p>
            <button onClick={handleBack} className="btn btn-primary hidden lg:block">Go Back</button>
          </div>
          <div className="space-y-3 w-4/5 md:w-1/3 md:mx-20 mx-5 my-10 md:my-0">
            <div className="card shrink-0 w-full shadow-2xl bg-black bg-opacity-40 backdrop-blur-lg ">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form className="md:card-body p-4 pb-0 ">
                  <h3 className="text-xl md:text-3xl font-semibold">Sign In</h3>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xs md:text-sm">Email</span>
                    </label>
                    <Field type="email" name="email" placeholder="email" className="input input-sm md:input-md input-bordered" required />
                    <ErrorMessage name="email" component="div" className="text-red-500" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xs md:text-sm">Password</span>
                    </label>
                    <Field type="password" name="password" placeholder="password" className="input input-sm md:input-md input-bordered" required />
                    <ErrorMessage name="password" component="div" className="text-red-500" />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover text-blue-500">Forgot password?</a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button type="submit" className="btn btn-sm md:btn-md btn-primary">Login</button>
                  </div>

                  <div className="py-6 space-y-4 text-center">
                    <h6 className="hidden md:block">{signUpTextLg}</h6>
                    <h6 className="md:hidden text-sm">{signUpTextSm}</h6>
                    <div className="flex space-x-3 justify-center">
                      <button className="btn btn-outline text-2xl  btn-primary"><FaGoogle /></button>
                      <button className="btn btn-outline text-2xl  btn-primary"><FaFacebook /></button>
                      <button className="btn btn-outline text-2xl  btn-primary"><FaTwitter /></button>
                    </div>
                    <p className="text-xs">{SignUpText} <Link to="/register"><button className="btn btn-link text-blue-500 px-0 md:text-base text-sm">SignUp</button></Link> </p>
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

export default Login;
