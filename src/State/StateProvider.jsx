import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const questionStore = createContext();

const QuestionStoreProvider = ({ children }) => {
  const [questionData, setQuestionData] = useState([]);
  const [userDataDB, setUserDataDB] = useState({});
  const [user, setUser] = useState({});
  const [reFetch, setReFetch] = useState(true);

  // google user status
  const [googleUser] = useAuthState(auth);
  useEffect(() => {
    setUser(googleUser);
  }, [googleUser]);

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

  // get user information
  useEffect(() => {
    axios
      .get(`http://localhost:5000/userInfo/${user?.email}`)
      .then((res) => {
        setUserDataDB(res.data);
      })
      .catch((err) => toast.error("Something Wrong"));
  }, [user]);

  //this state stored user data  //==> Don't move this one !
  const userData = { questionData, onSubmit, deletedQ, user, userDataDB };
  //user context provider component //==> Don't move this one !
  return (
    <questionStore.Provider value={userData}>{children}</questionStore.Provider>
  );
};

export { questionStore, QuestionStoreProvider };
