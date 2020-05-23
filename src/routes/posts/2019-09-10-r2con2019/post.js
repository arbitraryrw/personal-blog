export default {
  title: `R2Con CTF - Land of Ecodelia`,
  tags: ['Reverse-Engineering', 'CTF'],
  spoiler: "A walk through on reversing a CTF challenge from R2con 2019. This breaks down the process of tackling an unknown binary written in Golang and show cases some of the capabilities of the Radare2 framework.",
  getContent: () => import('./document.mdx'),
}