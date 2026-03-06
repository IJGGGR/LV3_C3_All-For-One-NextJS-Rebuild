import { GenericComponent } from "@/lib/cl";

export default function Page() {
  return (
    <>
      <GenericComponent
        title={"Say Hello"}
        endpoint={"SayHello"}
        type={"text"}
        inputs={[
          { name: "name", hint: "What's your name?" },
        ]}
      />
    </>
  );
}
