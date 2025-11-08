import { SeccionGaleriaDestacada } from "@/components/sections/SeccionGaleriaDestacada";
import { SeccionHero } from "@/components/sections/SeccionHero";
import { SeccionServicios } from "@/components/sections/SeccionServicios";
import { SeccionSobreMi } from "@/components/sections/SeccionSobreMi";

export default function PaginaInicio() {
  return (
    <>
      <SeccionHero />
      <SeccionSobreMi />
      <SeccionServicios />
      <SeccionGaleriaDestacada />
    </>
  );
}
