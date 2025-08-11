import Link from "next/link";

const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyles, href }) => {
  if (!href) {
       return (
      <button
        disabled={btnType === "disabled"}
        type={btnType || "button"}
        className={`${containerStyles}`}
        onClick={handleClick}
      >
        <span className={`${textStyles}`}>{title}</span>
      </button>
    );
  }

  return (
    <Link href={href}>
      <button
        disabled={btnType === "disabled"}
        type={btnType || "button"}
        className={`${containerStyles}`}
        onClick={handleClick}
      >
        <span className={`${textStyles}`}>{title}</span>
      </button>
    </Link>
  );
};

export default CustomButton;
