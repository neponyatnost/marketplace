import courses from './courses.json'

export function getCourses() {
  return {
    data: courses,
    courseMap: courses.reduce((a, c, i) => {
      a[c.id] = c
      a[c.id].index = i
      return a
    }, {}),
  }
}
