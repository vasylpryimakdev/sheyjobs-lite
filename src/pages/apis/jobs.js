import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import moment from "moment";
import { fireDB } from "../firebaseConfig";

export const addNewJobPost = async (payload) => {
  const user = JSON.parse(localStorage.getItem("user"));
  try {
    await addDoc(collection(fireDB, "jobs"), {
      ...payload,
      status: "pending",
      postedByUserId: user.id,
      postedByUserName: user.name,
      postedOn: moment().format("DD-MM-YYYY HH:mm A"),
    });

    // send notification to admin
    await addDoc(collection(fireDB, "users", "admin", "notifications"), {
      title: `New Job Post Request from ${user.name}`,
      onClick: `/admin/jobs`,
      createdAt: moment().format("DD-MM-YYYY HH:mm A"),
      status: "unread",
    });
    return {
      success: true,
      message: "Job posted successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};

export const getPostedJobsByUserId = async (userId) => {
  try {
    const jobs = [];
    const qry = query(collection(fireDB, "jobs"), orderBy("postedOn", "desc"));
    const querySnapshot = await getDocs(qry);
    querySnapshot.forEach((doc) => {
      if (doc.data().postedByUserId === userId) {
        jobs.push({ id: doc.id, ...doc.data() });
      }
    });
    return {
      success: true,
      data: jobs,
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};

export const getJobById = async (id) => {
  try {
    const docRef = doc(fireDB, "jobs", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return {
        success: true,
        data: docSnap.data(),
      };
    } else {
      return {
        success: false,
        message: "No such job!",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};

export const getAllJobs = async (filters) => {
  try {
    let whereConditions = [];
    if (filters) {
      Object.keys(filters).forEach((key) => {
        if (filters[key]) {
          whereConditions.push(where(key, "==", filters[key]));
        }
      });
    }
    console.log(filters);
    const jobs = [];
    const qry = query(collection(fireDB, "jobs"), ...whereConditions);
    const querySnapshot = await getDocs(qry);
    querySnapshot.forEach((doc) => {
      jobs.push({ id: doc.id, ...doc.data() });
    });
    const sortedPosts = jobs.sort((a, b) => {
      return moment(b.postedOn, "DD-MM-YYYY HH:mm A").diff(
        moment(a.postedOn, "DD-MM-YYYY HH:mm A"),
      );
    });
    return {
      success: true,
      data: sortedPosts,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};
