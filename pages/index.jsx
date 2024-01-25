import { Hero } from '@components/common'
import { CoursesList } from '@components/courses'
import { BaseLayout } from '@components/layout'
import { getCourses } from '@content/courses/fetcher'

export default function Home({ courses }) {
  return (
    <BaseLayout>
      <Hero />
      <CoursesList courses={courses} />
    </BaseLayout>
  )
}

export function getStaticProps() {
  const { data } = getCourses()
  return {
    props: {
      courses: data,
    },
  }
}

Home.Layout = BaseLayout
