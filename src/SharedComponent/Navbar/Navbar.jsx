import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { questionStore } from "../../State/StateProvider";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPlusLg } from "react-icons/bs";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  // sing out function
  const logout = () => {
    signOut(auth);
  };

  const { userDataDB, user } = useContext(questionStore);
  const userType = userDataDB?.userType;

  //navbar active or deActive color style
  const active =
    " font-semibold text-violet-600 dark:text-white dark:bg-[#1F2937] text-[17px]  flex items-center mr-5 my-1 md:my-0 ";
  const deActive =
    " dark:text-[#8C9BB6]  font-semibold text-[#273272] flex items-center text-[17px]  mr-5  my-1 md:my-0";

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white shadow-2 shadow-black border-b-2">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a href="#pablo">
              <span className="self-center leading-relaxed inline-block text-xl uppercase font-bold whitespace-nowrap dark:text-[#38BDF8] text-violet-600">
                Super-<span className="text-gray-900">Assistant</span>
              </span>
            </a>
            <button
              className="mr-2 text-2xl lg:hidden ease-out duration-200 px-3 py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {!navbarOpen ? (
                <GiHamburgerMenu />
              ) : (
                <BsPlusLg className="rotate-45" />
              )}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center " +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col md:items-center lg:flex-row list-none lg:ml-auto">
              {user ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/home"
                      className={({ isActive }) =>
                        isActive ? active : deActive
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  {userType === "student" && (
                    <li className="nav-item">
                      <NavLink
                        to="/test"
                        className={({ isActive }) =>
                          isActive ? active : deActive
                        }
                      >
                        Test
                      </NavLink>
                    </li>
                  )}

                  {userType === "teacher" && (
                    <li className="nav-item">
                      <NavLink
                        to="/create-test"
                        className={({ isActive }) =>
                          isActive ? active : deActive
                        }
                      >
                        Create Test
                      </NavLink>
                    </li>
                  )}

                  <li className="nav-item">
                    <button
                      onClick={logout}
                      className="btn bg-red-500 hover:bg-red-600 text-white mt-2 md:mt-0"
                    >
                      LOGOUT
                    </button>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link to="/login">
                    <button className="btn bg-green-500 hover:bg-green-600 text-white mt-2 md:mt-0">
                      SING IN
                    </button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
