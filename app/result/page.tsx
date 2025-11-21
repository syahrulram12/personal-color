import ContactForm from "@/components/result/left/ContactForm";
import Heading from "@/components/ui/Heading";

const Page = () => {
  return (
    <div className="bg-main min-h-screen w-screen flex flex-col justify-center items-center">
      <Heading size="md"/>

      <div className="md:w-[20vw] w-[80%]">
        <ContactForm />
      </div>
    </div>
  );
};

export default Page;
