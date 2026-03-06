"use client";

import { Dispatch, Fragment, ReactNode, SetStateAction, useState } from "react";

export const API_URL = "https://csa-2526-ig-afo-api-b7ccczbnakheg9e9.westus3-01.azurewebsites.net/api";

type TFormInputType = "" | "number" | "text";

interface IComponentProperties {
  title: string,
  endpoint: string,
  type: TFormInputType,
  inputs: IFormInputProperties[],
  children?: ReactNode,
}

interface IFormInputProperties {
  type?: TFormInputType,
  name: string,
  hint: string,
}

interface IServerState { msg?: string };

export function GenericComponent(obj: IComponentProperties) {
  const [ SV, setSV ] = useState<IServerState>({});

  async function cbSend(fd: FormData, cb: Dispatch<SetStateAction<IServerState>>, ep: string) {
    switch (obj.type) {
      case "number":
        {
          for (const [ k , v ] of fd) {
            if (!v.toString().trim() || Number.isNaN(+v.toString())) {
              cb({ msg: "Invalid input." });
              return;
            }
          }
          const res = await fetch(`${API_URL}/${ep}/${[...fd].map(([k,v]) => +v.toString()).join("/")}`);
          cb({ msg: await res.text() || `ERROR: ${res.status} ${res.statusText}` });
        }
        break;
      case "text":
        {
          for (const [ k , v ] of fd) {
            if (!v.toString().trim()) {
              cb({ msg: "Invalid input." });
              return;
            }
          }
          const res = await fetch(`${API_URL}/${ep}/${[...fd].map(([k,v]) => v.toString().trim()).join("/")}`);
          cb({ msg: await res.text() || `ERROR: ${res.status} ${res.statusText}` });
        }
        break;
      default: console.error("default"); return;
    }
  }

  return (
    <>
      <main className="flex flex-col gap-2">
        <h1 className="text-6xl">{obj.title}</h1>
        <h2 className="text-3xl">Input</h2>
        <form
          className="flex flex-col gap-2"
          action={(v) => cbSend(v, setSV, obj.endpoint)}
        >
          {obj.inputs.map((v, i) => {
            return (
              <Fragment key={i}>
                <input
                  className="p-2 rounded-xl border-2 border-(--zs-one) focus:outline-none focus:ring-4 focus:ring-(--zs-thr)"
                  name={v.name}
                  type={v.type || obj.type}
                  placeholder={v.hint}
                />
              </Fragment>
            );
          })}
          <button
            className="p-2 rounded-xl font-medium bg-(--zs-one) hover:bg-(--zs-two) hover:cursor-pointer focus:outline-none focus:ring-4 focus:ring-(--zs-thr)"
          >
            Submit
          </button>
        </form>
        <h2 className="text-3xl">Output</h2>
        <p className="text-lg">{SV.msg ?? "..."}</p>
      </main>
    </>
  );
}
