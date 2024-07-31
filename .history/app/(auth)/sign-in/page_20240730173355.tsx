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
        <div className="w-24 h-18"></div>
      </form>
    </div>
  );
};

export default SignInPage;
