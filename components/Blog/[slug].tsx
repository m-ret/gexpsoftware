
export default function blogPost() {
  return (
    <div>[blogPost]</div>
  )
}

export async function getServerSideProps({ query: { url } }) {
  const respuesta = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blogs?filters[url]=${url}&populate=imagen`
  )
  const { data: post } = await respuesta.json()
  return {
    props: { post },
  }
}
