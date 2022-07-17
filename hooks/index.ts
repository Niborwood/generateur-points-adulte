import { useEffect, useState } from 'react';
import { createClient, PostgrestError } from '@supabase/supabase-js'
import { Question } from '../definitions/definitions';

// Supabse
 const supabase = createClient("https://mdjurizfmrcgvpuwwhlq.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kanVyaXpmbXJjZ3ZwdXd3aGxxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTc5NzkxODksImV4cCI6MTk3MzU1NTE4OX0.ldt50DYMq99kf8D6IESZ_LhMll0EHXHk2DDMBjYjPh4")

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
