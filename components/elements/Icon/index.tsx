import * as Fa from "react-icons/fa";
import * as Bs from "react-icons/bs";

export const AllIcons = {
  ...Fa,
  ...Bs,
};

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  fill?: string;
  stroke?: string;
  hoverColor?: string;
}

export const Icon = ({ name, size, color = "", ...rest }: IconProps) => {
  const RIcon =
    AllIcons[name as keyof typeof AllIcons] || AllIcons.FaRegWindowClose;

  return <RIcon size={size} color={color} {...rest} />;
};

export const getAllIcons = (searchName = "") => {
  const icons: string[] = [];

  if (searchName.length <= 2) return [];

  for (const key in AllIcons) {
    if (searchName) {
      const { name = "" } = AllIcons[key as keyof typeof AllIcons];
      if (name.toLowerCase().includes(searchName.toLowerCase())) {
        icons.push(AllIcons[key as keyof typeof AllIcons].name);
      }
    } else {
      icons.push(AllIcons[key as keyof typeof AllIcons].name);
    }
  }

  return icons;
};

export default Icon;
