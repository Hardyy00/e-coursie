import { sign_in } from "@/actions/sign-in";
import { signIn } from "@/auth";
import GoogleButton from "@/components/google-button";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const SignInPage = () => {
  const signInWithType = sign_in.bind("google");
  return (
    <div className="bg-white text-primary-foreground p-4 rounded-xl flex flex-col items-center justify-center space-y-4 bg-muted-foreground py-8 lg:w-[28rem] md:w-[24rem]">
      <h1 className="text-2xl font-extrabold mb-6">Sign In</h1>

      <div className="w-full">
        <form action={signInWithType}>
          <GoogleButton />
        </form>
      </div>

      <Separator className="opacity-30 mt-8" />

      <div className="mt-4">
        <p className="text-sm">
          Don&apos;t have an account?{" "}
          <Link href={"/sign-up"} className="font-semibold">
            Sign Up
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

{
  /* <form
        className="p-6"
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/" });
        }}
      >
        <GoogleButton />
      </form> */
}

export default SignInPage;
