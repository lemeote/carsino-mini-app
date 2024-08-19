import { doc, getDoc } from "firebase/firestore";
import { db } from "./config";

export default async function getUser(id: string) {
  const docRef = doc(db, "joinUserList", id);
  const result:any = await getDoc(docRef);
  return result.data();
}
