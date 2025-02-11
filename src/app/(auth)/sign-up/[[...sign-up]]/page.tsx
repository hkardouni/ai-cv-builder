import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex items-center justify-center p-3 h-screen">
      <SignUp />
    </main>
  );
}
