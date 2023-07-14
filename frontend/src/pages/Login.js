import LoginForm from "../components/LoginForm";

const Login = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen">
          <div className="w-full md:w-1/2 bg-white p-4 justify-center items-center flex text-center">
            {/* Content for the left column */}
            <div>
            <h1 className="bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text text-6xl font-extrabold  p-8 mb-4">Social media app</h1>
            <p className="mb-4">This app is currently under construction. Please check back later.</p>
            </div>  
          </div>
          <div className="w-full md:w-1/2 bg-gray-300 p-4 justify-center items-center flex">
            {/* Content for the right column */}
            <LoginForm />
          </div>
        </div>
      );
};

export default Login;
