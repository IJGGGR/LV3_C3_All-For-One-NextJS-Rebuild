import Link from "next/link";

export function NavigationSidebar() {
  return (
    <>
      <nav className="flex flex-col gap-1 **:hover:underline">
        <Link href={"/"}>Home</Link>
        <Link href={"/say-hello"}>Say Hello</Link>
        <Link href={"/adding-numbers"}>Adding Numbers</Link>
        <Link href={"/asking-questions"}>Asking Questions</Link>
        <Link href={"/greater-or-less"}>Greater or Less</Link>
        <Link href={"/mad-lib"}>Mad Lib</Link>
        <Link href={"/odd-or-even"}>Odd or Even</Link>
        <Link href={"/reverse-it-alphanumeric"}>Reverse It - Alphanumeric</Link>
        <Link href={"/reverse-it-numeric"}>Reverse It - Numeric</Link>
        <Link href={"/magic-8-ball"}>Magic 8 Ball</Link>
        <Link href={"/restaurant-picker"}>Restaurant Picker</Link>
      </nav>
    </>
  );
}
