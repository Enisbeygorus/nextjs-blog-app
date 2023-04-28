"use client";

import { FC, useState } from "react";
import { Button } from "./Button";

/**
 * NextJS does not allow to pass function from server -> client components,
 * hence this unreusable component.
 */

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return <Button isLoading={isLoading}>Sign in</Button>;
};

export default SignInButton;
