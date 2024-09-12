import client from "@/db";

const getData = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const user = await client.user.findFirst();
    return user;
  } catch (error) {
    console.log(error);
  }
  return {
    email: "gourav@gmail.com",
  };
};
export default async function Home() {
  const userDetail = await getData();
  return (
    <div className="flex flex-col items-center align-middle justify-center min-h-screen py-2">
      <p>email: {userDetail?.email}</p>
    </div>
  );
}
