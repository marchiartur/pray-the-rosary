import { useRouter } from 'next/router'
import { useEffect } from 'react'

function Page404(): void {
  const router = useRouter()

  async function execute(): Promise<void> {
    await router.replace('/')
  }

  useEffect(() => {
    execute().catch(() => null)
  }, [])
}

export default Page404
