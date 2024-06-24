import { selector } from "recoil";
import { atom } from "recoil";

const jobAtom = atom({
  key: "jobAtom",
  default: 12,
});
const notificationAtom = atom({
  key: "notificationAtom",
  default: 6,
});
const messageAtom = atom({
  key: "messageAtom",
  default: 12,
});

const totalCount = selector({
  key: "totalCount",
  get: ({ get }) => {
    const jobs = get(jobAtom),
      message = get(messageAtom),
      notification = get(notificationAtom);
    return jobs + message + notification;
  },
});

export { jobAtom, notificationAtom, messageAtom, totalCount };
