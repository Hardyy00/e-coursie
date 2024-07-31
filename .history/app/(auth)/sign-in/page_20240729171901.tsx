import { signIn } from "next-auth/react";

const SignInPage = () => {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      ></form>
    </div>
  );
};

export default SignInPage;
