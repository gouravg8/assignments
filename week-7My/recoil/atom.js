import axios from "axios";
import { selector, atom } from "recoil";
import { TODOS } from "./src/todos";
import { atomFamily } from "recoil";
import { selectorFamily } from "recoil";

// console.log(TODOS.find((x) => x.id == id));
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

// const todosFaimily = atomFamily({
//   key: "todoFaimily",
//   default: (id) => TODOS.find((x) => x.id === id),
// });

const todosFaimily = atomFamily({
  key: "todoFaimily",
  default: selectorFamily({
    key: "todoFaimilySelector",
    get:
      (id) =>
      async ({ get }) => {
        const req = await axios.get(
          `https://sum-server.100xdevs.com/todo?id=${id}`
        );
        return req.data.todo;
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

export { notifications, totalCount, todosFaimily };
