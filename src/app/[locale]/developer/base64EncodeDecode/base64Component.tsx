"use client";

import { useState } from "react";

const encoder = new TextEncoder();
const decoder = new TextDecoder();

export default function Base64Component(): React.JSX.Element {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const encoding = () => {
    try {
      const utf8Bytes = encoder.encode(input);
      setOutput(btoa(String.fromCharCode(...Array.from(utf8Bytes))));
    } catch (error) {
      setOutput("Invalid input");
    }
  };

  const decoding = () => {
    try {
      const binaryString = atob(input);
      const binaryBytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        binaryBytes[i] = binaryString.charCodeAt(i);
      }
      setOutput(decoder.decode(binaryBytes));
    } catch (error) {
      setOutput("Invalid Base64 string");
    }
  };

  return (
    <div>
      <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter text to encode or decode" rows={5} cols={50} />
      <br />
      <button onClick={encoding}>Encode to Base64</button>
      <button onClick={decoding}>Decode from Base64</button>
      <h2>Output</h2>
      <textarea value={output} readOnly rows={5} cols={50} />
    </div>
  );
}
