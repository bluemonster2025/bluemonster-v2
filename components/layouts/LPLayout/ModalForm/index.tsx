"use client";

import { Title, Text } from "@/components/elements/Texts";

type ModalFormProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export default function ModalForm({ isOpen, setIsOpen }: ModalFormProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#000000b0] bg-opacity-40 flex items-center justify-center z-50 px-4">
      <div className="bg-white w-full max-w-[653px] rounded-lg p-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-5 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <Title
          as="h2"
          className="text-grayscale-500 text-2xl/[40px] font-semibold mb-2"
        >
          Solicite um orçamento
        </Title>
        <Text className="text-sm/[24px] text-[#4E4E4E] mb-6">
          Preencha o formulário abaixo e entraremos em contato com você.
        </Text>

        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-[0.5rem]">
              <label className="text-grayscale-400 text-sm">Nome</label>
              <input
                type="text"
                placeholder="Laura Freitas"
                className="placeholder-[#B8B8B8] border border-grayscale-100 rounded-md px-3 py-4 text-sm focus:ring-2 focus:ring-purplescale-50 outline-none col-span-1 md:col-span-1"
              />
            </div>
            <div className="flex flex-col gap-[0.5rem]">
              <label className="text-grayscale-400 text-sm">E-mail</label>
              <input
                type="email"
                placeholder="laura@mail.com.br"
                className="placeholder-[#B8B8B8] border border-grayscale-100 rounded-md px-3 py-4 text-sm focus:ring-2 focus:ring-purplescale-50 outline-none col-span-1 md:col-span-1"
              />
            </div>

            <div className="flex flex-col gap-[0.5rem]">
              <label className="text-grayscale-400 text-sm">Contato</label>
              <input
                type="tel"
                placeholder="(00) 00000-0000"
                className="placeholder-[#B8B8B8] border border-grayscale-100 rounded-md px-3 py-4 text-sm focus:ring-2 focus:ring-purplescale-50 outline-none col-span-1 md:col-span-1"
              />
            </div>
          </div>

          <div>
            <Text className="text-sm/[24px] text-[#4E4E4E] mb-3">
              Por onde prefere ser contactado?
            </Text>
            <div className="flex gap-4">
              {/* Whatsapp */}
              <label className="flex items-center gap-2 text-sm/[24px] text-grayscale-400 cursor-pointer relative">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border border-grayscale-100 bg-white checked:bg-transparent appearance-none peer"
                />
                <div className="absolute left-0 w-5 h-5 flex items-center justify-center cursor-pointer opacity-0 peer-checked:opacity-100">
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 7.78002L1.22 5.00002L0.273331 5.94002L4 9.66669L12 1.66668L11.06 0.726685L4 7.78002Z"
                      fill="#687AF6"
                    />
                  </svg>
                </div>
                Whatsapp
              </label>

              {/* E-mail */}
              <label className="flex items-center gap-2 text-sm/[24px] text-grayscale-400 cursor-pointer relative">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border border-grayscale-100 bg-white checked:bg-transparent appearance-none peer"
                />
                <div className="absolute left-0 w-5 h-5 flex items-center justify-center cursor-pointer opacity-0 peer-checked:opacity-100">
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 7.78002L1.22 5.00002L0.273331 5.94002L4 9.66669L12 1.66668L11.06 0.726685L4 7.78002Z"
                      fill="#687AF6"
                    />
                  </svg>
                </div>
                E-mail
              </label>

              {/* Telefone */}
              <label className="flex items-center gap-2 text-sm/[24px] text-grayscale-400 cursor-pointer relative">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border border-grayscale-100 bg-white checked:bg-transparent appearance-none peer"
                />
                <div className="absolute left-0 w-5 h-5 flex items-center justify-center cursor-pointer opacity-0 peer-checked:opacity-100">
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 7.78002L1.22 5.00002L0.273331 5.94002L4 9.66669L12 1.66668L11.06 0.726685L4 7.78002Z"
                      fill="#687AF6"
                    />
                  </svg>
                </div>
                Telefone
              </label>
            </div>
          </div>

          <div>
            <Text className="text-sm/[24px] text-[#4E4E4E] mb-2">
              Escreva uma breve descrição sobre sua necessidade.
            </Text>
            <textarea
              rows={4}
              placeholder="Msg..."
              className="placeholder-[#B8B8B8] w-full border border-grayscale-100 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purplescale-50 outline-none"
            ></textarea>
          </div>

          <div className="bg-[#F7F7F7] rounded-md px-4 py-5 text-xs font-semibold text-grayscale-400 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM13.5 16.5C13.5 16.6989 13.421 16.8897 13.2803 17.0303C13.1397 17.171 12.9489 17.25 12.75 17.25C12.3522 17.25 11.9706 17.092 11.6893 16.8107C11.408 16.5294 11.25 16.1478 11.25 15.75V12C11.0511 12 10.8603 11.921 10.7197 11.7803C10.579 11.6397 10.5 11.4489 10.5 11.25C10.5 11.0511 10.579 10.8603 10.7197 10.7197C10.8603 10.579 11.0511 10.5 11.25 10.5C11.6478 10.5 12.0294 10.658 12.3107 10.9393C12.592 11.2206 12.75 11.6022 12.75 12V15.75C12.9489 15.75 13.1397 15.829 13.2803 15.9697C13.421 16.1103 13.5 16.3011 13.5 16.5ZM10.5 7.875C10.5 7.6525 10.566 7.43499 10.6896 7.24998C10.8132 7.06498 10.9889 6.92078 11.1945 6.83564C11.4001 6.75049 11.6263 6.72821 11.8445 6.77162C12.0627 6.81502 12.2632 6.92217 12.4205 7.0795C12.5778 7.23684 12.685 7.43729 12.7284 7.65552C12.7718 7.87375 12.7495 8.09995 12.6644 8.30552C12.5792 8.51109 12.435 8.68679 12.25 8.8104C12.065 8.93402 11.8475 9 11.625 9C11.3266 9 11.0405 8.88147 10.8295 8.6705C10.6185 8.45952 10.5 8.17337 10.5 7.875Z"
                fill="#272934"
              />
            </svg>
            Não cobramos nenhum valor pelo orçamento
          </div>

          <button
            type="submit"
            className="lg:max-w-[77px] w-full bg-purplescale-50 text-white py-3 font-bold"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
