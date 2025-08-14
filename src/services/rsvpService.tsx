import { collection, addDoc, Timestamp, orderBy, query, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import type { RSVPMessage } from "../types/rsvp";

export async function saveRSVP(data: RSVPMessage) {
  const docRef = await addDoc(collection(db, "rsvpMessages"), {
    ...data,
    createdAt: Timestamp.now()
  });
  return docRef.id;
}

// export async function getAllRSVP() {
//   const q = query(collection(db, "rsvpMessages"), orderBy("createdAt", "desc"));
//   const snapshot = await getDocs(q);
//   return snapshot.docs.map(doc => ({
//     id: doc.id,
//     ...doc.data()
//   })) as RSVPMessage[];
// }

export function subscribeRSVPs(callback: (items: any[]) => void) {
  const q = query(collection(db, "rsvpMessages"), orderBy("createdAt", "desc"));
  return onSnapshot(q, (snapshot) => {
    const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    callback(items);
  });
}