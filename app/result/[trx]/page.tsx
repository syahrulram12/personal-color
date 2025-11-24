import ResultComponent from "@/components/result/ResultComponent";

interface PageProps {
  params: {
    id: string;
  };
}

const Page = ({ params }: PageProps) => {
  return <ResultComponent trx={params.id} />;
};

export default Page;
