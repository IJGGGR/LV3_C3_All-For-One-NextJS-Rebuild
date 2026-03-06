import { GenericComponent } from "@/lib/cl";

export default function Page() {
  return (
    <>
      <GenericComponent
        title={"Mad Lib"}
        endpoint={"MadLib"}
        type={"text"}
        inputs={[
          { name: "creature_adjective", hint: "Adjective..." },
          { name: "creature", hint: "Living creature..." },
          { name: "place", hint: "Place..." },
          { name: "things", hint: "Plural living things..." },
          { name: "adverb_1", hint: "Adverb..." },
          { name: "adverb_2", hint: "Adverb..." },
          { name: "base_verb", hint: "Base verb..." },
          { name: "adverb_3", hint: "Adverb..." },
          { name: "adverb_4", hint: "Adverb..." },
          { name: "past_verb", hint: "Past verb..." },
        ]}
      />
    </>
  );
}
