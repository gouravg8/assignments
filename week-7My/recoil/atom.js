import axios from "axios";
import { selector, atom } from "recoil";

const notifications = atom({
  key: "notifications",
  default: selector({
    key: "notificationSelector",
    get: async () => {
      const res = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      );
      return res.data;
    },
  }),
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
