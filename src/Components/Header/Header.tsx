import NavBar from "./NavBar";

function Header({ token }: { token: string }) {
  console.log(token);
  return (
    <header className="">
      <NavBar token={token} />
    </header>
  );
}

export default Header;
