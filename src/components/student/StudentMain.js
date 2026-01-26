import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Outlet, Link, useNavigate} from "react-router-dom";


import { Navigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";


const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

// Why replace? -> Prevents user from clicking Back to access protected page.
// export default ProtectedRoute;

export default function StudentMain() {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  // useEffect(() => {
  //   checkLoginStatus();
  // });

  // const checkLoginStatus = () => {
  //   if (!(Cookies.get('spy'))) {
  //     // navigate('/account')
  //     console.log("You are not loged in!")
  //   }
  //   console.log("AuthContext.auth: ", auth)
  // };
  useEffect(() => {
    if (!auth) {
      console.log("User not authenticated");
      // navigate("/account"); // optional
    }
  }, [auth]);

  function open(e) {
    e = e.currentTarget;
    var lsb = document.querySelector(".lsidebar");
    if (e.classList.value.match("active-icon")) {
      e.classList.remove("active-icon");
      lsb.classList.remove("lsidebar-show");
    } else {
      e.classList.toggle("active-icon");
      lsb.classList.toggle("lsidebar-show");
    }
  }
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(username, password);
    axios
      .get("http://localhost:8081/account/login", {
        params: { username, password },
      })
      .then((response) => {
        Cookies.set("loggedIn", response.data.id, { expires: 1 }); // Expires in 1 day
        console.log(Cookies.get("loggedIn"));
      })
      .catch((error) => {
        console.error("Invalid Login credentials: ", error);
      });
  };
  return (
    <>
      <div className="dashboard">
        <div className="lsidebar">
          <div className="lsb-head">
            <div className="lsb-title">
              <div>
                {/* <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="100" cy="100" r="90" fill="#FF0000"></circle>
                      <circle cx="100" cy="100" r="70" fill="#FFFFFF"></circle>
                      <circle cx="100" cy="100" r="60" fill="#ff0000"></circle>
                      <circle cx="100" cy="100" r="40" fill="#FFFFff"></circle>
                      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="32" fill="#000000">
                        StudyCircle
                      </text>
                    </svg> */}
              </div>
              <div></div>
            </div>
            <div
              className="icon"
              onClick={function (e) {
                open(e);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="lsb-body">
            <Link to='/student'>
              <div>
                <div className="stdlsb-li">
                  <div className="stdlsb-li-icon">
                    <svg width="24px" height="24px" viewBox="0 0 16.00 16.00" xmlns="http://www.w3.org/2000/svg" fill="white" stroke="#000000" stroke-width="0.00016">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.032" ></g>
                      <g id="SVGRepo_iconCarrier">
                        <g fill="#fff" fill-rule="evenodd" clip-rule="evenodd">
                          <path d="M8.302 3.288A3.633 3.633 0 002.756 7.76c.124.237.112.49.102.61a2.984 2.984 0 01-.084.468 7.853 7.853 0 01-.2.655c.26-.09.52-.17.75-.223a.7.7 0 11.312 1.365c-.34.078-.837.258-1.278.434a23.211 23.211 0 00-.701.295l-.042.018-.01.005-.003.001a.7.7 0 01-.925-.927v-.001l.002-.004.008-.018.03-.07a21.252 21.252 0 00.43-1.047c.113-.3.211-.592.27-.822.021-.09.034-.157.041-.205a5.033 5.033 0 017.74-6.082.7.7 0 01-.896 1.076zM1.463 8.226v0z"></path>{" "}
                          <path d="M4.75 9.333a5.083 5.083 0 119.657 2.221c.006.033.015.077.029.133.05.197.14.453.248.734.087.223.178.443.262.646l.06.146c.049.118.094.23.131.326.03.082.074.2.097.306a.75.75 0 01-.734.905c-.169 0-.332-.04-.447-.072a4.867 4.867 0 01-.394-.134c-.188-.072-.402-.162-.606-.248l-.216-.09a7.634 7.634 0 00-.705-.265 1.739 1.739 0 00-.095-.026A5.083 5.083 0 014.75 9.333zm1.5 0a3.583 3.583 0 116.763 1.654c-.124.239-.12.485-.11.614.01.155.043.313.08.456.054.214.132.448.216.676a7.37 7.37 0 00-.643-.231 2.456 2.456 0 00-.443-.093 1.113 1.113 0 00-.626.104 3.583 3.583 0 01-5.237-3.18zm8.15 2.16l-.001-.012v.013z"></path>{" "}
                        </g>
                      </g>
                    </svg>
                  </div>
                  <span>HOME</span>
                </div>
              </div>
            </Link>
            <Link to='/student/discussion'>
              <div>
                <div className="stdlsb-li">
                  <div className="stdlsb-li-icon">
                    <svg width="24px" height="24px" viewBox="0 0 16.00 16.00" xmlns="http://www.w3.org/2000/svg" fill="white" stroke="#000000" stroke-width="0.00016">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.032" ></g>
                      <g id="SVGRepo_iconCarrier">
                        <g fill="#fff" fill-rule="evenodd" clip-rule="evenodd">
                          <path d="M8.302 3.288A3.633 3.633 0 002.756 7.76c.124.237.112.49.102.61a2.984 2.984 0 01-.084.468 7.853 7.853 0 01-.2.655c.26-.09.52-.17.75-.223a.7.7 0 11.312 1.365c-.34.078-.837.258-1.278.434a23.211 23.211 0 00-.701.295l-.042.018-.01.005-.003.001a.7.7 0 01-.925-.927v-.001l.002-.004.008-.018.03-.07a21.252 21.252 0 00.43-1.047c.113-.3.211-.592.27-.822.021-.09.034-.157.041-.205a5.033 5.033 0 017.74-6.082.7.7 0 01-.896 1.076zM1.463 8.226v0z"></path>{" "}
                          <path d="M4.75 9.333a5.083 5.083 0 119.657 2.221c.006.033.015.077.029.133.05.197.14.453.248.734.087.223.178.443.262.646l.06.146c.049.118.094.23.131.326.03.082.074.2.097.306a.75.75 0 01-.734.905c-.169 0-.332-.04-.447-.072a4.867 4.867 0 01-.394-.134c-.188-.072-.402-.162-.606-.248l-.216-.09a7.634 7.634 0 00-.705-.265 1.739 1.739 0 00-.095-.026A5.083 5.083 0 014.75 9.333zm1.5 0a3.583 3.583 0 116.763 1.654c-.124.239-.12.485-.11.614.01.155.043.313.08.456.054.214.132.448.216.676a7.37 7.37 0 00-.643-.231 2.456 2.456 0 00-.443-.093 1.113 1.113 0 00-.626.104 3.583 3.583 0 01-5.237-3.18zm8.15 2.16l-.001-.012v.013z"></path>{" "}
                        </g>
                      </g>
                    </svg>
                  </div>
                  <span>DISCUSS</span>
                </div>
              </div>
            </Link>
            <Link to='/student/assignment'>
              <div>
                <div className="stdlsb-li">
                  <div className="stdlsb-li-icon">
                    <svg fill="#ffffff" width="24px" height="24px" viewBox="0 0 1920.00 1920.00" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)" stroke="#ffffff">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M1468.214 0v564.698h-112.94V112.94H112.94v1694.092h1242.334v-225.879h112.94v338.819H0V0h1468.214Zm129.428 581.311c22.137-22.136 57.825-22.136 79.962 0l225.879 225.879c22.023 22.023 22.023 57.712 0 79.848l-677.638 677.637c-10.616 10.504-24.96 16.49-39.98 16.49h-225.88c-31.17 0-56.469-25.299-56.469-56.47v-225.88c0-15.02 5.986-29.364 16.49-39.867Zm-155.291 314.988-425.895 425.895v146.031h146.03l425.895-425.895-146.03-146.03Zm-764.714 346.047v112.94H338.82v-112.94h338.818Zm225.88-225.88v112.94H338.818v-112.94h564.697Zm734.106-315.44-115.424 115.425 146.03 146.03 115.425-115.423-146.031-146.031ZM1129.395 338.83v451.758H338.82V338.83h790.576Zm-112.94 112.94H451.759v225.878h564.698V451.77Z" fill-rule="evenodd"></path>
                      </g>
                    </svg>
                  </div>
                  <span>ASSIGNMENTS</span>
                </div>
              </div>
            </Link>
            <Link to='/student/notice'>
              <div>
                <div className="stdlsb-li">
                  <div className="stdlsb-li-icon">

                  <svg
                viewBox="0 0 1024 1024"
                class="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M183 146.2h585.15v402.28h73.14V73.06H109.86v877.71h402.16v-73.14H183z"
                    fill="#ffffff"
                  ></path>
                  <path
                    d="M256.14 219.34H695v73.14H256.14zM256.14 365.63h365.71v73.14H256.14zM256.14 511.91h219.43v73.14H256.14zM731.57 585.06c-100.99 0-182.86 81.87-182.86 182.86s81.87 182.86 182.86 182.86 182.86-81.87 182.86-182.86-81.87-182.86-182.86-182.86z m0 292.57c-60.5 0-109.71-49.22-109.71-109.71 0-60.5 49.22-109.71 109.71-109.71 60.5 0 109.71 49.22 109.71 109.71 0 60.49-49.21 109.71-109.71 109.71z"
                    fill="#ffffff"
                  ></path>
                  <path
                    d="M658.16 740.48h146.29v54.86H658.16z"
                    fill="#ffffff"
                  ></path>
                </g>
              </svg>
                  </div>
                  <span>NOTICE</span>
                </div>
              </div>
            </Link>
            <Link to='/student/progress'>
              <div>
                <div className="stdlsb-li">
                  <div className="stdlsb-li-icon">

                  <svg height="24px" width="24px" version="1.1" id="Capa_1" viewBox="0 0 363.868 363.868" fill="#fff" >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path d="M92.723,274.945c-3.178,3.178-5.747,9.388-5.747,13.875v58.444h33.929v-92.373 c0-4.487-2.569-5.56-5.747-2.382L92.723,274.945z"></path>
                    <path d="M241.752,219.573c-3.17,3.178-5.747,9.389-5.747,13.884v113.816h33.929V199.487 c0-4.487-2.569-5.552-5.747-2.374L241.752,219.573z"></path>
                    <path d="M291.418,169.834c-3.178,3.17-5.755,9.38-5.755,13.867v163.563h31.547V152.212 c0-4.487-2.577-5.56-5.755-2.382L291.418,169.834z" ></path>
                    <path d="M193.078,268.239c0,0-1.512,1.52-3.381,3.39c-1.861,1.87-3.373,7.031-3.373,11.518v64.118h33.929 v-98.047c0-4.487-2.577-5.56-5.755-2.382L193.078,268.239z" ></path>
                    <path d="M142.405,250.998c-3.178-3.17-5.755-2.105-5.755,2.382v93.885h33.929v-60.03 c0-4.487-2.439-10.559-5.454-13.558l-5.454-5.43L142.405,250.998z" ></path>
                    <path d="M50.023,317.669l-10.957,10.974c-3.17,3.178-5.739,8.633-5.739,12.193v6.438h37.871V304.59 c0-4.487-2.569-5.552-5.747-2.374L50.023,317.669z" ></path>
                    <path d="M358.121,150.724c3.17,3.178,5.747,2.105,5.747-2.382V32.193c0-8.316-7.966-15.599-16.233-15.599 H232.16c-4.487,0-5.56,2.577-2.382,5.755l41.074,41.106l-16.753,16.68l-77.701,77.774L135.3,116.82 c-3.178-3.178-8.316-3.17-11.494,0L9.519,231.189C-3.178,243.894-3.17,264.484,9.527,277.18l0.797,0.805 c12.697,12.697,33.287,12.697,45.975-0.008l73.247-73.287l41.098,41.057c3.178,3.17,8.324,3.17,11.502,0l135.479-135.503 L358.121,150.724z" ></path>
                  </g>
                </g>
              </svg>
                  </div>
                  <span>PROGRESS</span>
                </div>
              </div>
            </Link>
            <Link to='/student/result'>
              <div>
                <div className="stdlsb-li">
                  <div className="stdlsb-li-icon">

                  </div>
                  <span>RESULT</span>
                </div>
              </div>
            </Link>
            <Link to='/student/todo'>
              <div>
                <div className="stdlsb-li">
                  <div className="stlsb-li-icon">

                  </div>
                  <span>TO DO</span>
                </div>
              </div>
            </Link>
            <Link to='/logout'>
              <div>
                <div className="stdlsb-li">
                  <div className="stlsb-li-icon">

                  </div>
                  <span>LOGOUT</span>
                </div>
              </div>
            </Link>
            <Link to='/discussion'>
              <div>
                <div className="stdlsb-li">
                  <div className="stlsb-li-icon">

                  </div>
                  <span>DISCUSSION</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="body">
          <div className="main">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
}
