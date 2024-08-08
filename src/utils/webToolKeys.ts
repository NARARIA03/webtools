export const categoryKeys = ["developer", "text", "daily", "image", "file", "test", "math", "lottery"];

// 수정 시 /messages/(en|ko).json 파일도 반드시 수정해줘야 함
export const toolKeys: { name: string; category: "developer" | "text" | "daily" | "image" | "file" | "test" | "math" | "lottery" }[] = [
  { name: "base64EncodeDecode", category: "developer" },
  { name: "countLetters", category: "text" },
];
