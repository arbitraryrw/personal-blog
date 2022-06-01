export default {
  title: `Automating Templated JSON Fuzzing / Unit Testing`,
  tags: ['Development', 'Web', 'Fuzzing'],
  spoiler: "JSON (JavaScript Object Notation) is a widely used lightweight data-interchange format. It is commonly used to share data between decoupled components / systems, store data persistently, and import / export data in / out of sytems. Manually testing JSON structures can be combersome and prone to human error, especially in complex nested structures. This post presents a JSON parsing algorithm that generates permutations of JSON structures automatically that can be used to automate unit testing / fuzzing activities.",
  getContent: () => import('./document.mdx'),
}



