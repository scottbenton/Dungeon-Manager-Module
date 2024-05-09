import { Container } from "../../components/Container";

export function ImagePage() {
  return (
    <Container>
      <h1 className={"text-xl font-title text-gray-800"}>Images</h1>
      <p className={"max-w-prose text-gray-700"}>
        Upload character and scene art on this page, then open the viewer to
        share the active image with your players. Click an image to set it as
        active.
      </p>
    </Container>
  );
}
