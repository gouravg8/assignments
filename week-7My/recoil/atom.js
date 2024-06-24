import { selector } from "recoil";
import { atom } from "recoil";

const notifications = atom({
  key: "notifications",
  default: { network: 0, jobs: 0, notifications: 0, messaging: 0 },
});

const totalCount = selector({
  key: "totalCount",
  get: ({ get }) => {
    const notification = get(notifications);
    return (
      notification.jobs +
      notification.notifications +
      notification.messaging +
      notification.notifications
    );
  },
});

export { notifications, totalCount };
