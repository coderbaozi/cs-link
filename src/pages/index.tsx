import React, { ReactNode, useEffect } from 'react'
import { GetServerSidePropsContext } from 'next'
import { getTags } from '@/fetch/api'
import store from '@/store'
import { setTags } from '@/store/features/nav/navSlice'
import { useRouter } from 'next/router'
import { Cache, CacheType } from '@/utils/Cache'
interface IProps {
  children?: ReactNode
}
const Home: React.FC<IProps> = () => {
  const router = useRouter()

  useEffect(() => {
    const fetchTagsData = async () => {
      const tags = await getTags()
      store.dispatch(setTags(tags))
      const sessionCache = new Cache(CacheType.Session)
      sessionCache.setCatch('tags', tags)
    }
    fetchTagsData()
  }, [store])
  return (
    <>
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
              scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum
              tincidunt duis.
            </p>

            <div className="mt-4 md:mt-8">
              <div
                onClick={() => {
                  router.push({ pathname: '/article/1' })
                }}
                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400">
                Get Started
              </div>
            </div>
          </div>
        </div>

        <img
          alt="Violin"
          src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </section>
    </>
  )
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
  // TODO subscribe store.
  return {
    props: {},
  }
}
export default Home
