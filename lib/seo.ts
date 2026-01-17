export const generateMetadata = (title: string, description: string) => {
  return {
    title: `${title} | Law Firm`,
    description,
    openGraph: {
      title: `${title} | Law Firm`,
      description,
      type: "website",
    },
  };
};
