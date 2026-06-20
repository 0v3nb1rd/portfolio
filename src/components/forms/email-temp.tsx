import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Tailwind, Text } from "react-email";

interface ContactFormProps {
  name?: string;
  email?: string;
  message?: string;
  geoLocation?: string;
}

export default function ContactForm({ name, email, message, geoLocation }: ContactFormProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {name || "portfolio"}</Preview>
      <Tailwind>
        <Body className="bg-gray-50 font-sans">
          <Container className="mx-auto bg-white p-8">
            <Section className="mb-4">
              <Heading className="mb-6 text-2xl font-bold text-gray-900">Contact Details</Heading>

              <Section className="mb-4 rounded-lg bg-gray-50 p-4">
                <Text className="mb-1 text-sm font-bold text-gray-700">Name</Text>
                <Text className="m-0 text-base text-gray-900">{name || "Not provided"}</Text>
              </Section>

              <Section className="mb-4 rounded-lg bg-gray-50 p-4">
                <Text className="mb-1 text-sm font-bold text-gray-700">Email</Text>
                <Text className="m-0 text-base text-gray-900">{email || "Not provided"}</Text>
              </Section>

              <Section className="mb-4 rounded-lg bg-gray-50 p-4">
                <Text className="mb-1 text-sm font-bold text-gray-700">Message</Text>
                <Text className="m-0 text-base leading-relaxed whitespace-pre-wrap text-gray-900">
                  {message || "No message provided"}
                </Text>
              </Section>
            </Section>
            <Hr className="my-4 border-gray-200" />
            <Text className="m-0 text-sm text-gray-600">{geoLocation || "Not provided"}</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

ContactForm.PreviewProps = {
  name: "John Doe",
  email: "john.doe@example.com",
  message: "Hello, it's testing email template for contact form submission",
  geoLocation: "New York, USA",
} satisfies ContactFormProps;
