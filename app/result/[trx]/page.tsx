import ResultComponent from "@/components/result/ResultComponent";

interface PageProps {
  params: Promise<{
    trx: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const { trx } = await params;

  return (
    <div>
      <ResultComponent trx={trx} />
    </div>
  );
};

export default Page;
