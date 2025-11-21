import ContactForm from "@/components/result/left/ContactForm";
import Heading from "@/components/ui/Heading";

const Page = () => {
  return (
    <div className="bg-main min-h-screen flex flex-col justify-center items-center">
      <Heading size="md"/>

      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Page;
