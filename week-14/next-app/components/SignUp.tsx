"use client";
import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signUp } from "@/app/actions/user";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handler = async () => {
    await signUp({ email, password });
    router.push("/");
  };
  return (
    <div className="flex flex-col items-center align-middle justify-center min-h-screen py-2 gap-4">
      <Input
        type="text"
        name="email"
        placeholder="enter email"
        value={email}
        onchange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="text"
        name="password"
        placeholder="enter password"
        value={password}
        onchange={(e) => setPassword(e.target.value)}
      />
      <Button text="Sign Up" onClick={handler} />
    </div>
  );
};

export default SignUp;
