import Link from 'next/link'
import { Course } from "@/types/course";

interface CourseProps {
    courses: Course[]
}
export default function Courses({courses}: CourseProps){
    return(
        <div className="grid-1">
            {courses.map((course: Course) => (
                <div key={course.id} className='bg-blue-200 p-4 m-4 rounded-lg'>
                    <h2 className="text-lg">{course.title}</h2>
                    <small>Level: {course.level}</small>
                    <p className="mb-4">{course.description}</p>
                    <Link href={course.link} target="_blank" className="py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-lg mb-4">
                        Go to Course
                    </Link>
                </div>
         ))}
        </div>
    )
}