import { redirect } from "next/navigation";
// The learning environment is public. Keep legacy links usable without a nonfunctional sign-in form.
export default function LoginPage() { redirect("/dashboard"); }
