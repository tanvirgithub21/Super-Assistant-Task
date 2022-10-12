import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

const questionStore = createContext();

const QuestionStoreProvider = ({ children }) => {
  const [questionData, setQuestionData] = useState([]);
  const [reFatch, setReFatch] = useState(true);

  // post question Data
  const onSubmit = async (data) => {
    await axios
      .post("http://localhost:5000/question", data)
      .then((res) => {
        toast.success("Saved");
        setReFatch(!reFatch);
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
  }, [reFatch]);

  // get single question Data by _id
  const deletedQ = async (id) => {
    axios
      .delete(`http://localhost:5000/question/delete/${id}`)
      .then((res) => {
        toast.success(res?.data);
        setReFatch(!reFatch);
      })
      .catch((err) => toast.error("Not Deleted"));
  };

  //this state stored user data  //==> Don't move this one !
  const userData = { questionData, onSubmit, deletedQ };
  //user context provider component //==> Don't move this one !
  return (
    <questionStore.Provider value={userData}>{children}</questionStore.Provider>
  );
};

export { questionStore, QuestionStoreProvider };