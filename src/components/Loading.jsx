import { useLogin } from "../context/LoginContext"

export default function Loading() {

    const { loading } = useLogin();

    if (loading) {
        return (
            <div className={`top-0 left-0 fixed h-screen w-full flex justify-center items-center z-100`}>
              <img src='/public/loading.webp' className='w-[50px] animate-spin'/>
            </div>
        )
    }
    return null
}