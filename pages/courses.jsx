import { Modal } from '@components/common'
import {
  CoursesHero,
  CoursesKeypoints,
  CoursesLectures,
} from '@components/courses'
import { BaseLayout } from '@components/layout'

export default function Courses() {
  return (
    <BaseLayout>
      <CoursesHero />

      <CoursesKeypoints />

      <CoursesLectures />

      <Modal />
    </BaseLayout>
  )
}
