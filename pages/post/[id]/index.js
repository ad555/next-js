import { useRouter } from 'next/router'
import { Button } from 'antd'
export default function DetailPost() {
    const router = useRouter()
    console.log(router)
    const { id, age } = router.query
    return (
        <>
            <h1>Chi tiết bài viết có id là: {id} - age: {age}</h1>
            <Button type="primary">Button</Button>
        </>
    )
}