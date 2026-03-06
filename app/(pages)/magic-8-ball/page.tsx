import { GenericComponent } from "@/lib/cl";

export default function Page() {
  return (
    <>
      <GenericComponent
        title={"Magic 8 Ball"}
        endpoint={"Magic8Ball"}
        type={"text"}
        inputs={[
          { name: "question", hint: "Your question..." },
        ]}
      />
    </>
  );
}
