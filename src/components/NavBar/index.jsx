import { Tooltip } from "@mui/material";
import { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineContentCopy } from "react-icons/md";
import logo from "../../assets/logo_rilly.png";
const StyledTooltip = ({ title, color, children, ...props }) => (
  <Tooltip
    {...props}
    title={title}
    placement="left"
    componentsProps={{
      tooltip: {
        sx: {
          backgroundColor: color,
        },
      },
    }}>
    {children}
  </Tooltip>
);
const NavBar = () => {
  const [isCopied, setIsCopied] = useState([false, false]);
  const handleCopyClick = (text, index) => {
    // Select the text to copy
    navigator.clipboard.writeText(text);

    // Update isCopied state to show check circle icon
    setIsCopied((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });

    // Reset isCopied state after 1 second
    setTimeout(() => {
      setIsCopied((prevState) => {
        const newState = [...prevState];
        newState[index] = false;
        return newState;
      });
    }, 1000);
  };
  return (
    <nav className="h-20 z-10 absolute w-full">
      <div className="mx-auto flex h-full max-w-screen-xl flex-wrap items-center sm:justify-between p-8 gap-3 ">
        <div className=" text-l flex items-center justify-center">
          <a
            href="/#top"
            className="flex items-center justify-center gap-3 pr-0 text-xl font-bold lg:pr-24">
            <img src={logo} alt="logo" className="w-32" />
          </a>
          <div className=" items-center gap-8 text-primaryText hidden lg:flex">
            {[
              { label: "Home", value: "/#top" },
              { label: "About", value: "/#about" },
              { label: "Anfrage", value: "/#contact" },
            ].map((navItem) => (
              <a
                key={navItem.label}
                href={navItem.value}
                className=" cursor-pointer">
                {navItem.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex gap-6">
          <StyledTooltip
            title={`${isCopied[0] ? "Erfolgreich kopiert" : "Kopieren"}`}
            color={`${isCopied[0] ? "green" : "#636363"}`}>
            <button
              className="bg-primary-100 hover:bg-primary-200 rounded px-2 py-1 md:px-6 md:py-3 font-bold text-white flex items-center gap-3"
              onClick={() => {
                handleCopyClick("+49 176 80582352", 0);
              }}>
              {isCopied[0] ? (
                <FaCircleCheck sx={{ width: 15, color: "black" }} />
              ) : (
                <MdOutlineContentCopy sx={{ width: 15, color: "black" }} />
              )}
              +49 176 80582352
            </button>
          </StyledTooltip>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
