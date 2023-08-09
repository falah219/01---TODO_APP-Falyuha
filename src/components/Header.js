import { useEffect, useState } from "react"
import Logo from "../assets/logo.png"

export const Header = () => {

  const [theme, SetTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "light");

  useEffect(()=>{
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme])

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="" />
        <span>TODO APP</span>
      </div>
      <div className="themeSelector">
        <span onClick={() => SetTheme("light")}  className={theme === "light" ? "light activeTheme" : "light"}></span>
        <span onClick={() => SetTheme("medium")} className={theme === "medium" ? "medium activeTheme" : "medium"}></span>
        <span onClick={() => SetTheme("dark")} className={theme === "dark" ? "dark activeTheme" : "dark"}></span>
        <span onClick={() => SetTheme("gradientOne")} className={theme === "gradientOne" ? "gradientOne activeTheme" : "gradietOne"}></span>
        <span onClick={() => SetTheme("gradientTwo")} className={theme === "gradientTwo" ? "gradientTwo activeTheme" : "gradientTwo"}></span>
        <span onClick={() => SetTheme("gradientThree")} className={theme === "gradientThree" ? "gradientThree activeTheme" : "gradientThree"}></span>
      </div>
    </header>
  )
}
