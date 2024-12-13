import { HeaderLg } from "./header-lg";
import { HeaderSm } from "./header-sm";

export function Header() {
  return (
    <>
      {/* small screen */}
      <div className="lg:hidden">
        <HeaderSm />
      </div>
      {/* big screen  */}
      <div className="hidden lg:block">
        <HeaderLg />
      </div>
    </>
  )
}