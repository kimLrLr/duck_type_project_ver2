import { Helmet, HelmetProvider } from "react-helmet-async";

export const PageTitle = ({ titleName }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>DuckType | {titleName}</title>
      </Helmet>
    </HelmetProvider>
  );
};
