import { GenericComponent } from "@/lib/cl";

export default function Page() {
  return (
    <>
      <GenericComponent
        title={"Odd or Even"}
        endpoint={"OddOrEven"}
        type={"number"}
        inputs={[
          { name: "num", hint: "A number..." },
        ]}
      />
    </>
  );
}
