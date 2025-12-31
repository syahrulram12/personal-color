import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  message: string;
  url?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const EmailTemplate = ({ name, message, url }: EmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>Rekomendasi Produk BERL Cosmetics Khusus Untuk Kamu</Preview>

    <Tailwind>
      <Body className="bg-[#f3f3f5] font-sans">
        <Container className="w-[680px] max-w-full mx-auto bg-white shadow-lg rounded-md overflow-hidden">
          {/* HEADER */}
          <Section className="bg-[#ffffff] border-b border-[#e4e4e7] p-5 px-8">
            {/* <Img
              width={150}
              src={`${baseUrl}/result/logo.jpeg`}
              alt="BERL Cosmetics"
            /> */}
          </Section>

          {/* HERO */}
          <Section className="bg-[#2b2d6e] text-white p-8 pb-6">
            <Heading className="text-[26px] font-bold leading-tight">
              Rekomendasi Produk TERBAIK Untuk Kamu
            </Heading>
            <Text className="text-[16px] opacity-90 leading-relaxed mt-2">
              Temukan rangkaian skincare & makeup yang paling cocok untuk
              kebutuhan kulitmu.
            </Text>

            <Row className="mt-6">
              <Column>
                {/* <Img
                  width={240}
                  className="rounded-md"
                  src={`${baseUrl}/result/logo.jpeg`}
                  alt="BERL Beauty Banner"
                /> */}
              </Column>
            </Row>
          </Section>

          {/* CONTENT */}
          <Section className="px-8 py-10">
            <Heading className="text-[22px] font-semibold text-[#111] mb-3">
              Hai {name.split(" ")[0]}, ini rekomendasi khusus untuk kamu!
            </Heading>

            <Text className="text-[15px] text-[#444] leading-[23px] mb-5">
              Berdasarkan preferensi kamu, berikut beberapa produk unggulan BERL
              Cosmetics yang dapat membantu kamu tampil lebih cerah, sehat, dan
              percaya diri setiap hari.
            </Text>

            <Hr className="my-7 border-[#e5e7eb]" />

            {/* PRODUK LIST */}
            <Heading className="text-[20px] font-semibold text-[#111] mb-4">
              Produk Unggulan BERL Cosmetics
            </Heading>

            <ul className="space-y-3">
              <li>
                <Text className="text-[15px] text-[#3c3f44] leading-[22px]">
                  ⭐ <strong>Lightening Series</strong> – Membantu mencerahkan
                  dan meratakan warna kulit.
                </Text>
              </li>

              <li>
                <Text className="text-[15px] text-[#3c3f44] leading-[22px]">
                  ⭐ <strong>SPF50 Sun Protection</strong> – Melindungi kulit
                  dari sinar UV secara optimal.
                </Text>
              </li>

              <li>
                <Text className="text-[15px] text-[#3c3f44] leading-[22px]">
                  ⭐ <strong>Lip Matte</strong> – Warna cantik, tahan lama, dan
                  tidak membuat bibir kering.
                </Text>
              </li>

              <li>
                <Text className="text-[15px] text-[#3c3f44] leading-[22px]">
                  ⭐ <strong>Glam Matte Foundation</strong> – Coverage ringan
                  dengan hasil flawless.
                </Text>
              </li>
            </ul>

            <Hr className="my-7 border-[#e5e7eb]" />

            <Heading className="text-[21px] font-semibold text-[#111]">
              Siap tampil lebih glowing & percaya diri?
            </Heading>

            <Section className="mt-6">
              <Link
                href="https://berlcosmetics.com"
                className="bg-[#0095ff] hover:bg-[#007ad1] transition-colors border border-[#0077cc] text-white py-[14px] px-[20px] rounded text-[17px] font-medium inline-block"
              >
                Lihat Semua Produk →
              </Link>
            </Section>
          </Section>

          {/* FOOTER */}
          <Section className="bg-[#fafafa] border-t border-[#e4e4e7] px-8 py-6">
            <Text className="text-[12px] text-[#7a7a7a] leading-[18px]">
              Kamu menerima email ini karena telah melakukan pengecekan
              rekomendasi di BERL Beauty.
            </Text>

            <Hr className="my-6 border-[#ddd]" />

            {/* <Img
              width={110}
              src={`${baseUrl}/result/logo.jpeg`}
              alt="BERL Cosmetics"
            /> */}

            <Text className="text-[12px] text-[#7a7a7a] mt-2">
              <strong>BERL Cosmetics</strong>, Indonesia
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default EmailTemplate;
