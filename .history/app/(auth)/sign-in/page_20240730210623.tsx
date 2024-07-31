import { signIn } from "@/auth";
import GoogleButton from "@/components/google-button";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="bg-white text-primary-foreground p-4 rounded-xl flex flex-col items-center justify-center space-y-4 bg-muted-foreground py-8 w-[48rem]">
      <h1 className="text-2xl font-extrabold">Sign In</h1>

      <div>
        <GoogleButton />
      </div>

      <Separator className="opacity-30 mt-8" />

      <div className="mt-4">
        <p className="text-sm">
          Don&apos;t have an account? <Link href={"/sign-up"}>Sign Up</Link>{" "}
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
