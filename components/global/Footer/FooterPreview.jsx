'use client'
import {useSettings} from '@/sanity/loader/useQuery'
import FooterLayout from './FooterLayout'

export default function FooterPreview(props) {
  const {data} = useSettings(props.initial)

  return <FooterLayout data={data} />
}
