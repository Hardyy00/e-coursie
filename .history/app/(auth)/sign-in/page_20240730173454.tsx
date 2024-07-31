import { signIn } from "@/auth";

import { Button } from "@/components/ui/button";

const SignInPage = () => {
  return (
    <div className="">
      <form
        className=""
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/" });
        }}
      >
        <div className=""></div>
      </form>
    </div>
  );
};

export default SignInPage;
