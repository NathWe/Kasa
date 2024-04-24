import React from "react";
import { ErrorPageContainer, ErrorTitle, ErrorMessage, ReturnLink } from "./Page404.style";

const Page404: React.FC = () => {
  return (
    <ErrorPageContainer>
      <ErrorTitle>404</ErrorTitle>
      <ErrorMessage>Oups! La page que vous demandez n'existe pas.</ErrorMessage>
      <ReturnLink href="/">Retourner sur la page d’accueil</ReturnLink>
    </ErrorPageContainer>
  );
}

export default Page404;
