import { GenericComponent } from "@/lib/cl";

export default function Page() {
  return (
    <>
      <GenericComponent
        title={"Reverse It - Alphanumeric"}
        endpoint={"ReverseItAlphanumeric"}
        type={"text"}
        inputs={[
          { name: "str", hint: "Alphanumeric string..." },
        ]}
      />
    </>
  );
}
