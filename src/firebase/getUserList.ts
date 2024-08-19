import { getDocs, collection, query, orderBy } from "firebase/firestore";
import { db } from "./config";

export default async function getJoinUserDocument() {
  const postId: string[] = [];
  const collectionRef = collection(db, "joinUserList");
  const q = query(collectionRef, orderBy("amount", "desc"));
  const result = getDocs(q);

  (await result).forEach((post) => postId.push(post.id));

  return postId;
}
