import { Modal } from '@components/common'
import {
  CoursesHero,
  CoursesKeypoints,
  CoursesLectures,
} from '@components/courses'
import { BaseLayout } from '@components/layout'
import { getCourses } from '@content/courses/fetcher'

export default function Courses({ course }) {
  console.log(course)
  return (
    <BaseLayout>
      <CoursesHero course={course} />

      <CoursesKeypoints keypoints={course.wsl} />

      <CoursesLectures isLocked={true} />

      <Modal />
    </BaseLayout>
  )
}

export function getStaticPaths() {
  const { data } = getCourses()

  return {
    paths: data.map((c) => ({
      params: {
        slug: c.slug,
      },
    })),
    fallback: false,
  }
}

export function getStaticProps({ params }) {
  const { data } = getCourses()
  const course = data.filter((c) => c.slug === params.slug)[0]

  return {
    props: {
      course,
    },
  }
}

Courses.Layout = BaseLayout
