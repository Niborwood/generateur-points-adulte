import { useEffect, useState } from "react";
import { PostgrestError } from "@supabase/supabase-js";
import supabase from '../../lib/supabase';
import { AnswersGiven, QuizState, Stats } from "../../definitions/definitions";

const useStats = (answers: AnswersGiven, name: string) => {
  const [error,setError] = useState<PostgrestError | null>(null)
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    (
      async () => {
        setLoading(true)
          const { data, error } = await supabase
          .from<Stats>('stats')
          .insert({
            createdAt: new Date(),
            completedAt: new Date(),
            name,
            answers
          }, {returning: "minimal"})
          console.log("🚀 ~ file: useStats.ts ~ line 22 ~ data", data)
          setError(error)
        setLoading(false)
      }
    )()
  }, [answers])

  return {error,loading}
}

export default useStats;
