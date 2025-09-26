import { Text } from "@/components/elements/Texts";
import { WhatsAppButton } from "@/components/elements/WhatsAppButton";
import ParallaxSection from "../ParallaxSection";
import ParallaxItem from "../ParallaxItem";

export default function FeaturedFrame() {
  return (
    <ParallaxSection className=" bg-purplescale-50 flex flex-col gap-5 mb-18 py-24">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <ParallaxItem speed={0.4}>
        {/* Conteúdo em cima do grid */}
        <div className="relative flex flex-col gap-6">
          <Text className="text-white text-center normal-case text-[40px]/[54px] font-bold">
            A concorrência já está online!
          </Text>
          <Text className="text-lg/[32px] text-white text-center">
            Sua presença online pode abrir portas todos os dias, não perca mais
            tempo.
          </Text>
          <div className="w-full md:w-[291px] mx-auto">
            <WhatsAppButton
              title="Começe seu projeto agora mesmo"
              variant="primary"
            />
          </div>
        </div>
      </ParallaxItem>
    </ParallaxSection>
  );
}
