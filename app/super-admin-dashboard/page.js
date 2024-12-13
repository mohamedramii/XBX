export default function Page() {
  return null
}

export async function generateMetadata() {
  return {
    title: 'XBX Super Admin Dashboard'
  }
}

// Server-side redirect
export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function generateStaticParams() {
  return []
}
