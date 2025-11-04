// lib/code-samples.ts
export const CODE_SAMPLES: Record<string, string> = {
  c: `#include <stdio.h>
  
  int main() {
      printf("Hello, Noterious!\\n");
      return 0;
  }`,
  cpp: `#include <iostream>
  using namespace std;
  
  int main() {
      cout << "Hello, Noterious!" << endl;
      return 0;
  }`,
  python: `print("Hello, Noterious!")`,
  java: `public class Main {
      public static void main(String[] args) {
          System.out.println("Hello, Noterious!");
      }
  }`,
  javascript: `console.log("Hello, Noterious!");`,
};
