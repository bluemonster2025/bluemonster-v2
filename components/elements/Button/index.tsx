import { ButtonBase, IButtonBase } from "./ButtonBase";

export const ButtonPrimary = ({
  children,
  onClick,
  href,
  type,
  id,
  target,
}: Omit<IButtonBase, "className">) => {
  return (
    <ButtonBase
      className="bg-white text-grayscale-300 h-[52px] flex justify-center w-full items-center text-sm font-semibold rounded"
      onClick={onClick}
      href={href}
      type={type}
      id={id}
      target={target}
    >
      {children}
    </ButtonBase>
  );
};
