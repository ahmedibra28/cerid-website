import { useQuery } from '@tanstack/react-query'
import api from './api'

interface Props {
  key: string[]
  url: string
  id?: string
}

export default function useApi({ key, url }: Props) {
  const get = useQuery(key, () => api('GET', url), {
    retry: 3,
  })

  return { get }
}

export const useApiSingle = ({ key, url, id }: Props) => {
  const getById = useQuery(key, () => api('GET', url), {
    enabled: !!id,
    retry: 3,
  })

  return { getById }
}
