import { z } from "zod";

const signUser = z.object({
  username: z.string().email(),
  password: z.string().min(6),
});
export { signUser };
