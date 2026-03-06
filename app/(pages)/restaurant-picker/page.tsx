import { GenericComponent } from "@/lib/cl";

export default function Page() {
  return (
    <>
      <GenericComponent
        title={"Restaurant Picker"}
        endpoint={"RestaurantPicker"}
        type={"text"}
        inputs={[
          { name: "category", hint: "A food category..." },
        ]}
      />
    </>
  );
}
