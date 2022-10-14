import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../firebase.init";
import { useNavigate } from "react-router-dom";

const questionStore = createContext();

const QuestionStoreProvider = ({ children }) => {
  const navigate = useNavigate();

  const [questionData, setQuestionData] = useState([]);
  const [user, setUser] = useState({});
  const [reFetch, setReFetch] = useState(true);

  // google user status
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    }
  });

  // check user login or not
  useEffect(() => {
    user?.email ? navigate("/home") : navigate("/login");
    console.log(user);
  }, [user]);

  // post question Data
  const onSubmit = async (data) => {
    await axios
      .post("http://localhost:5000/question", data)
      .then((res) => {
        toast.success("Saved");
        setReFetch(!reFetch);
      })
      .catch(function (error) {
        toast.error("Something Wrong");
      });
  };

  // get all questionData
  useEffect(() => {
    axios
      .get("http://localhost:5000/question")
      .then((res) => {
        setQuestionData(res.data);
      })
      .catch((err) => toast.error("Something Wrong"));
  }, [reFetch]);

  // get single question Data by _id
  const deletedQ = async (id) => {
    axios
      .delete(`http://localhost:5000/question/delete/${id}`)
      .then((res) => {
        toast.success(res?.data);
        setReFetch(!reFetch);
      })
      .catch((err) => toast.error("Not Deleted"));
  };

  //this state stored user data  //==> Don't move this one !
  const userData = { questionData, onSubmit, deletedQ, userEmail: user };
  //user context provider component //==> Don't move this one !
  return (
    <questionStore.Provider value={userData}>{children}</questionStore.Provider>
  );
};

export { questionStore, QuestionStoreProvider };
