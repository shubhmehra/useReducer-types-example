import { HeaderProps } from "./Header.types";

export default function Header({ username, score }: HeaderProps) {
  return (
    <>
      <h1> 🤯 Quiz Master </h1>
      <div style={{ fontSize: "1.2rem" }}>
        <div> Welcome, {username}! </div>
        <div> Score: {score} </div>
      </div>
    </>
  );
}
