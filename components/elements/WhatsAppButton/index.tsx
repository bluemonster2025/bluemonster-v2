import Icon from "@/components/elements/Icon";
import { ButtonPrimary } from "../Button";

interface Props {
  title?: string; // título opcional
  variant?: "primary" | "icon";
  iconName?: string; // ícone opcional
  iconSize?: number; // tamanho do ícone opcional
  iconColor?: string; // cor opcional do ícone
}

export const WhatsAppButton = ({
  title,
  variant = "primary",
  iconName,
  iconSize = 20,
  iconColor = "#fff",
}: Props) => {
  const whatsappNumber = "5511915260039";
  const message = "Olá! Quero mais informações sobre a BlueMonster!";

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  // Botão Primary
  if (variant === "primary") {
    // Se houver ícone ou título, renderiza o conteúdo
    const content =
      title || iconName ? (
        <div className="flex gap-2 items-center">
          {iconName && (
            <Icon name={iconName} size={iconSize} color={iconColor} />
          )}
          {title && title}
        </div>
      ) : (
        // vazio para satisfazer children do ButtonPrimary
        <></>
      );

    return (
      <ButtonPrimary type="button" onClick={handleClick}>
        {content}
      </ButtonPrimary>
    );
  }

  // Botão só ícone
  return (
    <button type="button" onClick={handleClick} className="">
      {iconName && <Icon name={iconName} color="#75E3A4" size={iconSize} />}
    </button>
  );
};
