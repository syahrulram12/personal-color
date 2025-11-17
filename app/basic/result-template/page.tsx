const Page = () => {
  return (
    <>
      <div className="bg-main min-h-screen flex items-start justify-center">
        <div className="relative w-full flex justify-center">
          <div className="absolute top-0 left-0 shadow-md w-[40vw] h-[20vh] flex justify-center items-center rounded-lg">
            <h1 className="text-white font-bold">PERSONAL COLOR</h1>
          </div>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 shadow-md w-[20vw] h-[20vh] flex justify-center items-center rounded-lg">
            <h1 className="text-white font-bold">produk</h1>
          </div>

          <div className="absolute top-0 right-0 shadow-md w-[40vw] h-[20vh] flex justify-center items-center rounded-lg">
            <h1 className="text-white font-bold">color palette</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
