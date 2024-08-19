import { Metadata } from "next";

export const pagesMetadataList: Array<Metadata & { route: string }> = [
  {
    route: "/about",
    title: "Acerca de",
    description: "Acerca de nosotros, contactanos",
  },
  {
    route: "/profile",
    title: "Perfil",
    description: "Aqui se encontraras todo lo relacionado con el usuraio.",
  },
];

export const defaultMetadata: Metadata = {
  title: "Bienvenidos a nuestra aplicacion",
  description: "Gracias por ser parte de este mundo.",
  keywords: ["Bienvenidos", "Mundo", "App", "Youtube"],
};
