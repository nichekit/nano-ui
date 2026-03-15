import {Link} from "@tanstack/react-router";

export function NotFound({children}: {children?: React.ReactNode }) {
  return (
    <>
      <p>The page you are looking for does not exist.</p>
      <br />
      <Link to={"/"} >Go Home</Link>
    </>
  )
}
