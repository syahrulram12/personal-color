import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message, url } = body;

    const { data, error } = await resend.emails.send({
      from: "BERL Beauty <insan@bustech.site>",
      to: [email],
      subject: "BERL BEAUTY - Rekomendasi Produk Untuk Kamu",
      react: EmailTemplate({ name: name, message: message, url: url }),
      text: `Halo ${name}, ini rekomendasi produk untuk kamu...`,
    });

    if (error) {
      console.log("RESEND ERROR:", error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.log("SERVER ERROR:", error);
    return Response.json({ error }, { status: 500 });
  }
}
