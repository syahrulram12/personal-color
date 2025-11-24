import ResultComponent from "@/components/result/ResultComponent";

interface PageProps {
  params: Promise<{
    trx: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const { trx } = await params;

  return <ResultComponent trx={trx} />;
};

export default Page;
