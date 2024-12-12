import { HeaderLg } from "./header-lg";
import { HeaderSm } from "./header-sm";

export function Header() {
  return (
    <>
      <div className="lg:hidden">
        <HeaderSm />
      </div>
      <div className="hidden lg:block">
        <HeaderLg />
      </div>
    </>
  )
}