import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Button,
  Img,
  Tailwind,
  Hr,
} from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  message: string;
}

export function EmailTemplate({ name, message }: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="bg-white p-6 rounded-lg shadow-md max-w-xl mt-10">
            <Section className="text-center">
              <Img
                src="https://your-logo-url.png"
                width="80"
                alt="Logo"
                className="mx-auto mb-4"
              />
              <Heading className="text-2xl font-bold text-gray-800">
                Hallo, {name}! ✨
              </Heading>
              <Text className="text-gray-600 mt-2">{message}</Text>
            </Section>

            <Section className="mt-6 text-center">
              <Button
                href="https://your-website.com"
                className="bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Kunjungi Website
              </Button>
            </Section>

            <Hr className="my-6 border-gray-300" />

            <Text className="text-xs text-gray-500 text-center">
              BERL BEAUTY • Citayam, Depok • © 2025 All Rights Reserved
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
