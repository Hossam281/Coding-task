import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const [toasst,setToasst]=useState(false)
  const [page,setPage]=useState(false)
  const [user,setUser]=useState({email:'' , password:'',phone:''})
  const navigate =useNavigate()
  const [users, setUsers] = useState([
    {
      email: "hosam@mail.com",
      password: "12345",
      phone: "",
    },
  ]);

  const handleSignUp = (user) => {
    setUsers((old) => [
      {
        ...user,
        email: user.email,
        password: user.password,
        phone: user.phone,
      },
      ...old,
    ]);
   return(
    toast.success('Account created !', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      })
   );
  };

 
  

  const handleLogin = (user) => {
    users.map((u) => {
      if(u.email === user.email && u.password === user.password){
         navigate("/home")
         setToasst(false)
      }
      else{setToasst(true)}
         
    });
    toasst&&toast.error('incorrect Email or Password', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
  };

   const handlSubmitLogin=(e)=>{
    e.preventDefault()
    handleLogin(user)

   }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((old) => ({ ...old, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp(user)
    setUser({email:'',password:''})
    setPage(false)
  };

  return (
    <div className=" min-h-screen w-full flex flex-col justify-center align-middle  bg-[#0082cb]">
      <div className="flex w-full justify-center  gap-4">
      <button onClick={()=>setPage(false)} className="btn btn-wide  btn-square btn-d rounded-md">Login</button>
      <ToastContainer/>
      <button onClick={()=>setPage(true)} className="btn btn-wide   btn-square btn-d rounded-md">Sign Up</button>
      <ToastContainer/>
      </div>
      

     {page && <div className=" bg-white shadow-lg rounded-lg ml-auto mr-auto mt-6 h-[27rem] w-[40%]  ">
        
        <form
          onSubmit={handleSubmit}
          className=" form-control w-full text-left items-center text-lg font-bold pt-5"
        >
          <h2 className=" text-2xl font-extrabold pb-7">Sign Up</h2>
          <label className=" label " htmlFor="email">
            E-mail
          </label>
          <input
            className="input input-ghost input-bordered input-sm w-[70%] rounded-sm"
            type="email"
            name="email"
            required
            value={user.email}
            onChange={handleChange}
          />
          <label className=" label " htmlFor="password">
            Password
          </label>
          <input
            className="input input-ghost input-bordered input-sm w-[70%] rounded-sm"
            type="password"
            required
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <label className=" label " htmlFor="phone">
            Phone
          </label>
          <input
            className="input input-ghost input-bordered input-sm w-[70%] rounded-sm"
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="relative inline-block px-4 py-2 font-medium group mt-10"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#0082cb] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#0082cb]"></span>
            <span className="relative text-black group-hover:text-white">
              Sign Up
            </span>
          </button>
        </form>
      </div>}

      {!page && <div className=" bg-white shadow-lg rounded-lg ml-auto mr-auto mt-6 h-[27rem] w-[40%]  ">
        
        <form
          on onSubmit={handlSubmitLogin}
          className=" form-control w-full text-left items-center text-lg font-bold pt-5"
        >
          <h2 className=" text-2xl font-extrabold pb-7">Login</h2>
          <label className=" label " htmlFor="email">
            E-mail
          </label>
          <input
            className="input input-ghost input-bordered input-sm w-[70%] rounded-sm"
            type="email"
            name="email"
            required
            value={users.email}
            onChange={handleChange}
          />
          <label className=" label " htmlFor="password">
            Password
          </label>
          <input
            className="input input-ghost input-bordered input-sm w-[70%] rounded-sm"
            type="password"
            name="password"
            required
            value={users.password}
            onChange={handleChange}
          />
          
          <button
            type="submit"
            className="relative inline-block px-4 py-2 font-medium group mt-10"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#0082cb] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#0082cb]"></span>
            <span className="relative text-black group-hover:text-white">
              Login
            </span>
          </button>
        </form>
      </div>}



    </div>
  );
};

export default Login;
