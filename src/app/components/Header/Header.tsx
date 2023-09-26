import { HamburgerMenuIcon, SunIcon } from '@radix-ui/react-icons';

function Header() {
  return (
    <header className="flex h-[60px] w-full flex-row items-center justify-between rounded-full border px-6">
      <SunIcon />
      <span>WONSE</span>
      <button type="button">
        <HamburgerMenuIcon />
      </button>
    </header>
  );
}

export default Header;
