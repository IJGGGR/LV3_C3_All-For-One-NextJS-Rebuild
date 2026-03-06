import { GenericComponent } from "@/lib/cl";

export default function Page() {
  return (
    <>
      <GenericComponent
        title={"Adding Numbers"}
        endpoint={"AddTwoNumbers"}
        type={"number"}
        inputs={[
          { name: "0", hint: "First number..." },
          { name: "1", hint: "Second number..." },
        ]}
      />
    </>
  );
}
