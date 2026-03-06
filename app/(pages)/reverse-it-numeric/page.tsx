import { GenericComponent } from "@/lib/cl";

export default function Page() {
  return (
    <>
      <GenericComponent
        title={"Reverse It - Numeric"}
        endpoint={"ReverseItNumeric"}
        type={"text"}
        inputs={[
          { name: "str", hint: "Numeric string..." },
        ]}
      />
    </>
  );
}
