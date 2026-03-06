import { GenericComponent } from "@/lib/cl";

export default function Page() {
  return (
    <>
      <GenericComponent
        title={"Asking Questions"}
        endpoint={"AskTwoQuestions"}
        type={"text"}
        inputs={[
          { name: "name", hint: "What's your name?" },
          { name: "time", hint: "What time did you wake up?" },
        ]}
      />
    </>
  );
}
