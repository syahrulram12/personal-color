const CardHint = ({ judul, subJudul }: { judul: string; subJudul: string }) => {
  return (
    <div className="w-[250px] h-auto flex flex-col text-center justify-center items-center border-white border-2 p-4 mb-4 rounded-xl">
      <h6>{judul}</h6>
      <h3>{subJudul}</h3>
    </div>
  );
};

export default CardHint;
