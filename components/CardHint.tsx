const CardHint = ({ judul }: { judul: string }) => {
  return (
    <div className="w-[250px] bg-component h-auto flex flex-col text-center justify-center items-center  p-4 mb-4 rounded-xl">
      <h6>{judul}</h6>
    </div>
  );
};

export default CardHint;
