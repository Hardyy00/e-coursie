import { signIn } from "next-auth/react";

const SignInPage = () => {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button>Sign IN</button>
      </form>
    </div>
  );
};

export default SignInPage;
