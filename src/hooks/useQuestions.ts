import { useEffect, useState } from 'react';
import { PostgrestError } from '@supabase/supabase-js'
import { Question } from '../../definitions/definitions';
import supabase from '../../lib/supabase';

export const useQuestions = () => {
  const [data,setData] = useState<Question[] | null>(null);
  const [error,setError] = useState<PostgrestError | null>(null)
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    (
      async () => {
        setLoading(true)
          const { data, error } = await supabase
          .from<Question>('questions')
          .select(`*, answers (*)`)
          .order('_id')
          setData(data)
          setError(error)
        setLoading(false)
      }
    )()
  }, [])

  return {data,error,loading}
}
