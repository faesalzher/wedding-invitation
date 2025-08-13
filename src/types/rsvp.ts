import { Timestamp } from "firebase/firestore";

export interface RSVPMessage {
  id?: string;
  name: string;
  message: string;
  attending: boolean;
  createdAt?: Timestamp;
}
