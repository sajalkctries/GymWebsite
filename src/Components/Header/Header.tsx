import NavBar from "./NavBar";

function Header({ token }: { token: string }) {
  return (
    <header className="">
      <NavBar token={token} />
    </header>
  );
}

export default Header;
