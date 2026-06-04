import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { fireDB } from "../firebaseConfig";
import CryptoJS from "crypto-js";

export const LoginUser = async (payload) => {};

export const RegisterUser = async (payload) => {
  try {
    // check if email already exists
    const qry = query(
      collection(fireDB, "users"),
      where("email", "==", payload.email),
    );
    const querySnapshot = await getDocs(qry);
    if (querySnapshot.size > 0) {
      return {
        success: false,
        message: "Email already exists",
      };
    }

    // encrypt password
    const encryptedPassword = CryptoJS.AES.encrypt(
      payload.password,
      "sheyjobs-lite",
    ).toString();
    payload.password = encryptedPassword;

    // add user to db
    const response = await addDoc(collection(fireDB, "users"), payload);
    return {
      success: true,
      message: "User Registered Successfully",
      data: response,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
      data: null,
    };
  }
};
