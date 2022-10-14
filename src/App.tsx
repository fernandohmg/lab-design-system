import { Envelope, Lock } from "phosphor-react";
import "../src/styles/global.css";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";
import { Heading } from "./components/Heading";
import { TextInput } from "./components/Input";
import { Text } from "./components/Text";
import { Logo } from "./Logo";

export function App() {
  return (
    <div className="w-screen h-screen bg-grey-900 flex flex-col items-center justify-center text-grey-100">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-grey-400 mt-1">
          Log in and start using!
        </Text>
      </header>
      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="font-semibold flex flex-col gap-3">
          <Text>E-mail address</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input id="email" placeholder="johndoe@example.com" />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className="font-semibold flex flex-col gap-3">
          <Text>Password</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              type="password"
              id="password"
              placeholder="******"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-grey-200">
            Remember me for 30 days
          </Text>
        </label>
        <Button type="submit" className="mt-4">
          Login
        </Button>
      </form>
      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text size="sm" asChild>
          <a href="" className="text-grey-400 underline hover:text-grey-200">
            Forgot your password?
          </a>
        </Text>
        <Text size="sm" asChild>
          <a href="" className="text-grey-400 underline hover:text-grey-200">
            Don't have an account? Create one now!
          </a>
        </Text>
      </footer>
    </div>
  );
}
