import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import React from "react";

export class ToggleThemeButton extends React.Component {
  render() {
    const darkMode = this.props.theme;
    const toggleTheme = this.props.onClick;
    return (
      <>
        {darkMode ? (
          <button
            className="group w-10 h-10 mb-2 rounded-full static border-none bg-white text-black capitalize transition-all duration-300 ease-in hover:bg-black hover:text-white hover:transition-all hover:duration-300 hover:ease-out active:scale-90 active:transition-all active:duration-100 active:ease-in-out z-50 text-xl leading-none"
            onClick={toggleTheme}
          >
            <SunIcon className="w-[1em] h-[1em] mx-auto" />
          </button>
        ) : (
          <button
            className="group w-10 h-10 mb-2 rounded-full static border-none bg-black text-white capitalize transition-all duration-300 ease-in hover:bg-white hover:text-black hover:transition-all hover:duration-300 hover:ease-out active:scale-90 active:transition-all active:duration-100 active:ease-in-out z-50 text-xl leading-none"
            onClick={toggleTheme}
          >
            <MoonIcon className="w-[1em] h-[1em] mx-auto" />
          </button>
        )}
      </>
    );
  }
}

export default ToggleThemeButton;
